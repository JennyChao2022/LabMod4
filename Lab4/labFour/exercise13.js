/*
    This is exercise 13 for lab 4.
    The slide for this exercise is slide 86 in the Module 4 slides.

    Using the moment.js library, given two dates, display whether the first
    date is before or after the second date

    To run your code, in your terminal type "node exercise13.js" without the quotation marks
*/

const moment = require('moment');

// Replace with your two dates
const date1 = moment("2023-04-20");
const date2 = moment("2023-07-10");

if (date1.isBefore(date2)) {
    console.log(`${date1.format('MMMM Do YYYY')} is before ${date2.format('MMMM Do YYYY')}`);
} else if (date1.isSame(date2)) {
    console.log(`${date1.format('MMMM Do YYYY')} is same as ${date2.format('MMMM Do YYYY')}`);
} else {
    console.log(`${date1.format('MMMM Do YYYY')} is after ${date2.format('MMMM Do YYYY')}`);
}