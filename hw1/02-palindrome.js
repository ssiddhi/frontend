const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

//to display message, create a new div element to include result.
//reference - CSS diner game
// const div = document.querySelector("div :nth-child(3)");

//giving class name to newly created div to append it as last child
// div.className = "result";

//creating a HTML paragraph element
const paragraph = document.createElement("p");

//appending paragraph as child element of div
// div.appendChild(paragraph);
document.getElementsByClassName("result").appendChild(paragraph);

function handleInput(e) {
  //reference --- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
  const inp = e.target.value;
  //   paragraph.innerHTML = "Yes. This is a palindrome!";
  // const len = e.length;
  // const sum = 0;
  //   let rem, temp;
  //   const reverse = 0;
  //   temp = e;
  //   //performing reverse logic to check input number
  //   while (e > 0) {
  //     rem = e % 10;
  //     e = parseInt(e / 10);
  //     reverse = reverse * 10 + rem;
  //   }
  //   //to check if number is palindrome
  //   if (reverse === temp) {
  //     paragraph.innerHTML = "Yes. This is a palindrome!";
  //   } else {
  //     paragraph.innerHTML = "No. Try again.";
  //   }
}
