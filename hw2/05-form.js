// Add your code here
// reference---https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox

let formInput = document.getElementById("form");

formInput.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let user = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let rstatus = document.getElementById("options").value;

  let course = document.querySelectorAll('input[name="courselist"]:checked');
  //   let message = formData.get("textArea");
  let message = document.getElementById("textArea").value;

  //printing user input data to console
  //name
  if (user === null || user === "") {
    console.log("Full Name: No submission");
  } else {
    console.log("Full Name: " + user);
  }

  //email
  if (email === null || email === "") {
    console.log("Email: No submission");
  } else {
    console.log("Email: " + email);
  }

  //registration status
  if (rstatus === null || rstatus === "") {
    console.log("Registration Status: No submission");
  } else {
    console.log("Registration Status: " + rstatus);
  }

  //checklist
  let checkboxesChecked = [];

  // loop over them all
  course.forEach((checkbox) => {
    // And stick the checked ones onto an array...
    checkboxesChecked.push(checkbox.value);
  });

  console.log("Courses: ", checkboxesChecked);

  //message
  if (message === null || message === "") {
    console.log("Message: No submission");
  } else {
    console.log("Message: " + message);
  }
}
