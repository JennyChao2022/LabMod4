/*
    This is exercise 14 for lab 4.
    The slide for this exercise is slide 86 in the Module 4 slides.

    Using the moment.js library, display the current time in London

    To run your code, in your terminal type "node exercise14.js" without the quotation marks
*/

const moment = require('moment-timezone');

// Get the current time in London
const londonTime = moment().tz("Europe/London").format('HH:mm:ss');
console.log(`The current time in London is ${londonTime}`);