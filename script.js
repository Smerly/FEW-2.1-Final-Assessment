'use strict';
exports.__esModule = true;
exports.printPhone = exports.printLastPay = exports.printPurchase = exports.printName = void 0;
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
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
// --------
function printName(firstName, lastName) {
	var name = firstName.cap() + ' ' + lastName.cap();
	return name;
}
exports.printName = printName;
function printPurchase(purchased) {
	var date = new Date(purchased);
	var purchase =
		'Purchased: ' +
		months[date.getMonth()] +
		' ' +
		date.getDate() +
		', ' +
		date.getFullYear();
	return purchase;
}
exports.printPurchase = printPurchase;
function printLastPay(lastPayment) {
	var newerDate = new Date(lastPayment);
	var lastpay =
		'Last Payment: ' +
		moment([
			newerDate.getFullYear(),
			newerDate.getMonth(),
			newerDate.getDate(),
		]).fromNow();
	return lastpay;
}
exports.printLastPay = printLastPay;
function printPhone(phone) {
	var p1 = phone.substring(0, 3);
	var p2 = phone.substring(3, 6);
	var p3 = phone.substring(6, 11);
	var p = '(' + p1 + ') ' + p2 + '-' + p3;
	return p;
}
exports.printPhone = printPhone;
