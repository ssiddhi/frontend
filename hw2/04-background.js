// Add your code here

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
        // function getRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        let bgColor = `rgba(${r}, ${g}, ${b})`;
        document.body.style.background = bgColor;
        // return;
      }, input.value * 1000);
      input.disabled = true;
      // input.disabled = true;
      // setInterval();
      return;
    } else {
      toggle.value = "Start";
      toggle.classList = "btn btn-primary mb-2";
      clearInterval(interval);
      interval = null;
      document.body.style.background = "white";
      input.disabled = false;
      // changeInterval();
    }
  }
}
