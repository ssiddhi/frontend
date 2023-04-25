// Add your code here

//reference---- https://www.codespeedy.com/how-to-change-background-color-every-seconds-in-javascript/
//reference---- https://codepen.io/jagadeshanh/pen/YGJmmv
//reference---- https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//reference---- https://stackoverflow.com/questions/74280613/how-to-change-background-color-randomly-in-a-javascript-function

let target = document.querySelector("body");
let toggle = document.querySelector(".btn");
let userInput = document.querySelector("input");
toggle.addEventListener("click", changeBgColor);

setInterval(changeBgColor, 3000);

//set the background color to a randomly generated color for a given time interval.
function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b})`;
}

function changeBgColor() {
  let newColor = getRandomColor();
  target.style.backgroundColor = newColor;
  setToggleStyle();
}

// button that allows the user to “stop” and “start” the background color change.
function setToggleStyle() {
  if (toggle.value === "Start") {
    toggle.value = "Stop";
    toggle.classList = "btn btn-danger mb-2";
  } else {
    toggle.value === "Stop";
    changeInterval();
  }
}

// specify a new interval for changing the background color
function changeInterval() {
  setInterval(changeBgColor, 1000);
}
