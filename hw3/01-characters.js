// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

//reference --https://www.javascripttutorial.net/javascript-fetch-api/

let section = document.querySelector("section");

function show(character) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  let name = document.createElement("h2");
  let title = document.createElement("p");

  div.className = "image-card";

  image.className = "image-style";
  image.src = character.imageUrl;
  image.alt = character.image;

  name.textContent = character.fullName;
  name.classList.add("fs-5", "fw-bold");

  title.textContent = character.title;
  title.classList.add("fs-6", "fw-bold");

  div.appendChild(image);
  div.appendChild(name);
  div.appendChild(title);
  section.appendChild(div);

  return div;
}

//get request
fetch(url)
  .then((response) => response.json())
  .then((item) => {
    const row = document.createElement("div");
    row.classList.add("row");

    item.forEach((character) => {
      const card = show(character);

      const col = document.createElement("div");
      col.classList.add("col-md-6", "col-lg-3");

      col.appendChild(card);
      row.appendChild(col);
    });
    section.appendChild(row);
  })

  .catch((error) => {
    console.error("Request failed", error);
  });
