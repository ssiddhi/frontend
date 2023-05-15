//reference --https://www.youtube.com/watch?v=ZoayCCDHFiI
import React, { useEffect, useState } from "react";
function SearchChar(props) {
  const url = "https://thronesapi.com/api/v2/Characters";

  const [characters, searchName] = useState([]);

  // useEffect
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        searchName(data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <section className="container">
      <h1>{props.title}</h1>

      {characters.map((character, index) => {
        return (
          <div className="card book">
            <div className="card-header">{character.fullName}</div>
            <div className="card-body" key={index}></div>
          </div>
        );
      })}
    </section>
  );
}

export default SearchChar;
