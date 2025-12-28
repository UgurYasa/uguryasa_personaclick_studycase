/**
 * QUESTION 1.1: How can you select this button using JavaScript?
 * We can select elements in different ways in the DOM.
 * 'getElementById' is fast and good for unique elements.
 * Other methods are useful in different situations.
 */

// 1. getElementById: Selects one element by its ID.
const buttonById = document.getElementById('clickMe');

// 2. querySelector: Selects an element using a CSS selector (#id, .class, tag).
// Returns the first element that matches.
const buttonByQuery = document.querySelector('#clickMe');

// 3. getElementsByClassName: Selects all elements with a class name.
// Returns a collection, so we use [0] to get the first one.
const buttonsByClass = document.getElementsByClassName('myButton');
const firstButtonClass = buttonsByClass[0]; 

// 4. getElementsByTagName: Selects all elements with a tag name (like 'button').
// Good for getting many elements of the same type.
const buttonsByTag = document.getElementsByTagName('button');
const firstButtonTag = buttonsByTag[0]; 

// 5. querySelectorAll: Selects all elements that match a CSS selector.
// Returns a list of elements.
const allButtons = document.querySelectorAll('button');

/**
 * Preferred way:
 * Here, we use 'getElementById' because it is simple and fast.
 */
const button = document.getElementById('clickMe');
