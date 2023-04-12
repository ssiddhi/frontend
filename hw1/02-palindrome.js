const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

//creating a HTML paragraph element
const paragraph = document.createElement("p");

//appending paragraph as child element of div
document.getElementById("result").appendChild(paragraph);

paragraph.className = "para";

//reference ---https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
//reference ---https://www.geeksforgeeks.org/how-to-check-whether-a-passed-string-is-palindrome-or-not-in-javascript/
//reference ---https://foolishdeveloper.com/how-to-create-a-palindrome-checker-in-javascript/
//reference ---https://getbootstrap.com/docs/5.0/utilities/colors/

function handleInput(e) {
  const inp = e.target.value;

  //method2
  let halfLen = Math.floor(inp.length / 2);
  let checkPalindrome = true;

  //check if input is a positive number
  if (e.target.value > 0) {
    let j = inp.length - 1;
    for (let i = 0; i < halfLen; i++) {
      if (inp[i] !== inp[j - i]) {
        checkPalindrome = false;
      }
    }
  }

  if (checkPalindrome === true) {
    paragraph.innerHTML = "Yes. This is a palindrome!";
  } else {
    paragraph.innerHTML = "No. Try again.";
  }
}
