/* QUESTION 4.1: How would you write a simple if statement for this?
 */

// Create a variable to track login status
let isLoggedIn = false;

// Select elements
const loginBtn = document.getElementById("loginBtn");
const statusText = document.getElementById("status");

// Add click event listener to the button
loginBtn.addEventListener("click", () => {
  // Change login status
  isLoggedIn = !isLoggedIn;

  // Simple if statement to check login status
  if (isLoggedIn) {
    statusText.innerText = "User is logged in";
    loginBtn.innerText = "Logout";
  } else {
    statusText.innerText = "User is not logged in";
    loginBtn.innerText = "Login";
  }
});

/* QUESTION 4.2: What values are treated as false in JavaScript conditions?
*false
*0
*""
*null
*undefined
*NaN
 */

