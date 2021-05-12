/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-tabs */
/* eslint-disable indent */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line no-unused-vars
var lb = require('stringlb');
var moment = require('moment');
var data = require('./data.json');
var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
function printStuff() {
    // Saved code for later
    // new = new e.D(data.purchased)
    // const purchase: string = `Purchased: ${new.month()} ${new.getDate()}, ${new.year()}`;
    // Helper variables
    var date = new Date(data.purchased);
    var newerDate = new Date(data.lastpayment);
    // Variables for each line
    var name = data.first_name.cap() + " " + data.last_name.cap();
    var purchase = "Purchased: " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    var lastpay = "Last Payment: " + moment([
        newerDate.getFullYear(),
        newerDate.getMonth(),
        newerDate.getDate(),
    ]).fromNow();
    // console logging and Combining
    var all = [name, purchase, lastpay];
    for (var i = 0; i < all.length; i += 1) {
        // eslint-disable-next-line no-console
        console.log(all[i]);
    }
    return all;
}
// eslint-disable-next-line no-console
console.log(printStuff());
