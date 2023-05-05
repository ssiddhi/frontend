// Add your code here
//reference--https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

let interval;
let toggle = document.querySelector(".btn");

toggle.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  let input = document.querySelector("#userInput");

  setToggleStyle();

  function setToggleStyle() {
    if (toggle.value === "Start") {
      toggle.value = "Stop";
      toggle.classList = "btn btn-danger mb-2";
      interval = setInterval(() => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        let bgColor = `rgba(${r}, ${g}, ${b})`;
        document.body.style.background = bgColor;
      }, input.value * 1000);
      input.disabled = true;
      return;
    } else {
      toggle.value = "Start";
      toggle.classList = "btn btn-primary mb-2";
      clearInterval(interval);
      interval = null;
      document.body.style.background = "white";
      input.disabled = false;
    }
  }
}
