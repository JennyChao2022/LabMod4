/*
    This is exercise 12 for lab 4.
    The slide for this exercise is slide 86 in the Module 4 slides.

    Using the moment.js library, given two dates, display the date closest
    to the current date

    To run your code, in your terminal type "node exercise12.js" without the quotation marks
*/

const moment = require('moment');

// Replace with your two dates
const date1 = moment("2023-04-20");
const date2 = moment("2023-07-10");

// Get the current date
const currentDate = moment();

// Calculate the difference between the current date and each of the two dates
const diff1 = currentDate.diff(date1);
const diff2 = currentDate.diff(date2);

// Compare the absolute value of the differences to find the closest date
// The Math.abs() static method returns the absolute value of a number.
let closestDate;
if (Math.abs(diff1) < Math.abs(diff2)) {
    closestDate = date1;
} else {
    closestDate = date2;
}

// console.log the closest date
console.log(closestDate.format('MMMM Do YYYY'));