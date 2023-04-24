// Add your code here

// reference-----https://tomekdev.com/posts/highlight-text-in-javascript

let paragraphID = document.getElementById("paragraph");
let inputID = document.getElementById("inputLabel");

inputID.addEventListener("input", (event) => {
  const searchText = event.target.value;
  const regex = new RegExp(searchText, "gi");
  let text = paragraphID.innerHTML;
  text = text.replace(/(<mark>|<\/mark>)/gim, "");

  const newText = text.replace(regex, "<mark>$&</mark>");
  paragraphID.innerHTML = newText;
});

// input.addEventListener("keydown", handleKeyDown);
