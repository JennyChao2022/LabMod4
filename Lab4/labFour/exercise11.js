/*
    This is exercise 11 for lab 4.
    The slide for this exercise is slide 86 in the Module 4 slides.

    Using the moment.js library, display the number of years, months, and days
    between your birthdate and current date, and then console.log it

    For example: 24 years, 8 months, and 26 days.

    To run your code, in your terminal type "node exercise11.js" without the quotation marks
*/
var moment = require('moment'); // require
moment().format(); 

// Replace with your birthdate
//If your birthday is 14th March 1996, the date string will be "1996-03-14"
//If your birthday is 2nd October 1996, the date string will be "1996-10-02"
const birthdate = moment("1996-03-09"); 

// Calculate difference between birthdate and current date
const duration = moment.duration(moment().diff(birthdate));

// Extract years, months, and days
const years = duration.years();
const months = duration.months();
const days = duration.days();

// Console.log the results
console.log(`${years} years, ${months} months, and ${days} days.`);