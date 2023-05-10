import React, { useEffect, useState } from "react";

function Books(props) {
  const url = `https://thronesapi.com/api/v2/Characters`;

  // state variables - useState()
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <section className="container">
      <h1>{props.title}</h1>

      {!isLoaded && <div>Loading...</div>}

      {books.map((book, index) => {
        return (
          <div className="card book">
            <div className="card-header">{book.name}</div>
            <div className="card-body" key={index}>
              <p className="card-text">{book.numberOfPages} pages</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Books;
