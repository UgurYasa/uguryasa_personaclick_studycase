/**
 * QUESTION 2.1: How can you change the text of an HTML element using JavaScript?
 * We can change the text of an element using JavaScript.
 * Two common ways are using innerText and innerHTML.
 */

// Select the element by its ID
const textElement = document.getElementById("textElement");
const basicChangeButton = document.getElementById("basicChangeButton");

// Trigger the text change using a button
basicChangeButton.addEventListener("click", () => {
  // Change the text using innerText
  textElement.innerText = "This is the new text using innerText.";
});

/* QUESTION 2.2: What is the difference between innerText and innerHTML?
 * innerText changes only the text.
 * innerHTML can include HTML tags.
 */
// Select the element by its ID
const textElement1 = document.getElementById("textElement1");
const textElement2 = document.getElementById("textElement2");
const changeTextsButton = document.getElementById("changeTextsButton");

// Trigger the text change using a button
changeTextsButton.addEventListener("click", () => {
  // Using innerText
  // Changes only the text inside the element
  textElement1.innerText =
    "This text is changed using <strong>innerText</strong>.";
  // Using innerHTML
  // Changes the content and can include HTML tags
  textElement2.innerHTML =
    "<strong>This text is bold using innerHTML.</strong>";
});
