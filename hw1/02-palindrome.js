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

paragraph.className = "para";

//reference --- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
//reference ---https://www.geeksforgeeks.org/how-to-check-whether-a-passed-string-is-palindrome-or-not-in-javascript/

function handleInput(e) {
  const inp = e.target.value;

  function check_palindrome(inp) {
    //checking if input number is positive
    if (e.target.value > 0) {
      let j = inp.length - 1;

      for (let i = 0; i < j / 2; i++) {
        let x = str[i];
        let y = str[j - i];
        if (x != y) {
          return false;
        }
        return true;
      }
    }
  }

  function is_palindrome(e) {
    let res = check_palindrome(inp);
    if (res === true) {
      paragraph.innerHTML = "Yes. This is a palindrome!";
    } else {
      paragraph.innerHTML = "No. Try again.";
    }
  }

  let test = 123;
  is_palindrome(test);

  //   document.getElementsByClassName("para").innerHTML =
  //     "Yes. This is a palindrome!";
}
