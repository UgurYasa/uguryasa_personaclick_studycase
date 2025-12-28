/* QUESTION 5.1: Which browser storage would you use?
 * I would use localStorage because the user’s name should still be available
 * after refreshing the page.
 *
 * In addition, sessionStorage could also be used if the data only needs to persist
 * during the current browser session and would be cleared when the tab is closed.
 */

// localStorage: persists after refresh and browser restart
// sessionStorage: persists after refresh but is cleared when the tab is closed

/* QUESTION 5.2: How would you save and read this value?
 */

// Select elements
const userNameInput = document.getElementById("userName");
const saveBtn = document.getElementById("saveBtn");
const readBtn = document.getElementById("readBtn");
const readUserName = document.getElementById("readUserName");

// Save user's name
saveBtn.addEventListener("click", () => {
  const userName = userNameInput.value;
  localStorage.setItem("name", userName);
  userNameInput.value = ""; // Clear input after saving
});

// Read user's name
readBtn.addEventListener("click", () => {
  const storedName = localStorage.getItem("name");

  if (storedName) {
    readUserName.innerText = storedName;
  } else {
    readUserName.innerText = "No name found in storage.";
  }
});