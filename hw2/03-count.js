// Add your code here
//reference -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

let paragraph = document.getElementById("paragraph");
let input = document.getElementById("inputLabel");
let text = paragraph.textContent;

//https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
input.addEventListener("keyup", logKey);

let newPara = paragraph.innerHTML.replace(
  /(<mark style="background-color: yellow;">|<\/mark>)/g,
  ""
);

function logKey(e) {
  //fetch user input
  let text = e.target.value;

  const regex = new RegExp("\\b" + text + "\\b", "g");

  if (e.key !== "Delete" || e.key !== "Backspace") {
    paragraph.innerHTML = newPara.replace(
      regex,
      "<span style='background-color:yellow;'>" + text + "</span>"
    );
  }
}
