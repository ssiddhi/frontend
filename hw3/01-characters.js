// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

// fetch(url);

//get the user data and render the data inside the <div> element with the class container
// let container = document.querySelector(".container");

//reference --https://www.javascripttutorial.net/javascript-fetch-api/

let content = document.querySelector("#content");

function show(user) {
  let character = document.createElement("div");
  let name = document.createElement("fullName");
  let image = document.createElement("img");
  let title = document.createElement("title");

  image.src = user.imageUrl;
  name.textContent = user.fullName;
  title.textContent = user.title;

  content.appendChild(character);

  character.appendChild(image);
  character.appendChild(name);
  character.appendChild(title);

  return character;
}

//get request
fetch(url)
  .then((response) => {
    // returns the response object
    // the data is in the body of the response
    console.log("Request successful", response);
    return response.json();
  })
  .then((data) => {
    // returns the data in json format
    data.forEach((user) => {
      show(user);
    });

    console.log("Data", data);
  })
  .catch((error) => {
    console.error("Request failed", error);
  });

//Loop through the response and create the appropriate DOM elements to show an image of every character along with the full name and the title
// function show(data) {
//   data.forEach((user) => {
//     console.log(user);
//   });
// }
