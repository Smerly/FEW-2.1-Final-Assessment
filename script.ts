/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-tabs */
/* eslint-disable indent */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line no-unused-vars
const lb: any = require('stringlb');
const moment: any = require('moment');
const data: any = require('./data.json');

const months: string[] = [
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

function printStuff(): string[] {
	// Saved code for later

	// new = new e.D(data.purchased)
	// const purchase: string = `Purchased: ${new.month()} ${new.getDate()}, ${new.year()}`;

	// Helper variables

	const date: Date = new Date(data.purchased);
	const newerDate: Date = new Date(data.lastpayment);

	// Variables for each line

	const name: string = `${data.first_name.cap()} ${data.last_name.cap()}`;
	const purchase: string = `Purchased: ${
		months[date.getMonth()]
	} ${date.getDate()}, ${date.getFullYear()}`;
	const lastpay: string = `Last Payment: ${moment([
		newerDate.getFullYear(),
		newerDate.getMonth(),
		newerDate.getDate(),
	]).fromNow()}`;

	// console logging and Combining

	const all: string[] = [name, purchase, lastpay];
	for (let i: number = 0; i < all.length; i += 1) {
		// eslint-disable-next-line no-console
		console.log(all[i]);
	}
	return all;
}

// eslint-disable-next-line no-console
console.log(printStuff());
