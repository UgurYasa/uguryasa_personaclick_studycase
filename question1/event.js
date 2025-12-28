/**
 * QUESTION 1.2: How can you show an alert when the button is clicked?
 * We can use an event listener to react to user actions.
 * In this example, we listen for a click on the button.
 */

// Select the button by its ID
const btn = document.getElementById('clickMe');

// Add a click event listener
btn.addEventListener('click', () => {
  // Show an alert message
  alert('Button was clicked!');
});
