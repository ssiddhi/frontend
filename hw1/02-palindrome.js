const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

//creating a HTML paragraph element
const paragraph = document.createElement("p");

//appending paragraph as child element of div
document.getElementById("result").appendChild(paragraph);

paragraph.id = "para";

//reference ---https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
//reference ---https://www.geeksforgeeks.org/how-to-check-whether-a-passed-string-is-palindrome-or-not-in-javascript/
//reference ---https://foolishdeveloper.com/how-to-create-a-palindrome-checker-in-javascript/
//reference ---https://www.tutorialspoint.com/How-to-change-the-font-color-of-a-text-using-JavaScript

function handleInput(e) {
  const inp = e.target.value;
  let checkPalindrome;

  //error message for negative number
  if (inp < 0 || isNaN(inp)) {
    paragraph.innerHTML = "Invalid input";
    document.getElementById("para").style.color = "red";
    return;
  }
  //input validation for a single digit number
  else if (inp >= 0 && inp < 10) {
    checkPalindrome = true;
  } else {
    let halfLen = Math.floor(inp.length / 2);

    //check if input is a palindrome number
    if (e.target.value >= 10) {
      let j = inp.length - 1;
      for (let i = 0; i < halfLen; i++) {
        if (inp[i] !== inp[j - i]) {
          checkPalindrome = false;
        } else {
          checkPalindrome = true;
        }
      }
    }
  }

  //display message to show result and style the text
  if (checkPalindrome === true) {
    paragraph.innerHTML = "Yes. This is a palindrome!";
    document.getElementById("para").style.color = "green";
  } else {
    paragraph.innerHTML = "No. Try again.";
    document.getElementById("para").style.color = "red";
  }
}
