/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
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

// --------

function printName(firstName, lastName): string {
	const name: string = `${firstName.cap()} ${lastName.cap()}`;
	return name;
}

function printPurchase(purchased): string {
	const date: Date = new Date(purchased);
	const purchase: string = `Purchased: ${
		months[date.getMonth()]
	} ${date.getDate()}, ${date.getFullYear()}`;
	return purchase;
}

function printLastPay(lastPayment): string {
	const newerDate: Date = new Date(lastPayment);
	const lastpay: string = `Last Payment: ${moment([
		newerDate.getFullYear(),
		newerDate.getMonth(),
		newerDate.getDate(),
	]).fromNow()}`;
	return lastpay;
}

function printPhone(phone): string {
	const p1: string = phone.substring(0, 3);
	const p2: string = phone.substring(3, 6);
	const p3: string = phone.substring(6, 11);
	const p: string = `(${p1}) ${p2}-${p3}`;
	return p;
}

// console.log(printName(data.first_name, data.last_name));
// console.log(printPurchase(data.purchased));
// console.log(printLastPay(data.lastpayment));
// console.log(printPhone(data.phone));

// -----

// Extra code for you to see my process below if you want

// -----

// function printStuff(): string[] {
// 	// Saved code for later

// 	// new = new e.D(data.purchased)
// 	// const purchase: string = `Purchased: ${new.month()} ${new.getDate()}, ${new.year()}`;

// 	// Helper variables

// 	// "153 158 9353"
// 	const date: Date = new Date(data.purchased);
// 	const newerDate: Date = new Date(data.lastpayment);
// 	const p1: string = data.phone.substring(0, 3);
// 	const p2: string = data.phone.substring(3, 6);
// 	const p3: string = data.phone.substring(6, 11);

// 	// Variables for each line

// 	const name: string = `${data.first_name.cap()} ${data.last_name.cap()}`;
// 	const purchase: string = `Purchased: ${
// 		months[date.getMonth()]
// 	} ${date.getDate()}, ${date.getFullYear()}`;
// 	const lastpay: string = `Last Payment: ${moment([
// 		newerDate.getFullYear(),
// 		newerDate.getMonth(),
// 		newerDate.getDate(),
// 	]).fromNow()}`;
// 	const p: string = `(${p1}) ${p2}-${p3}`;

// 	// console logging and Combining

// 	const all: string[] = [name, purchase, lastpay, p];
// 	for (let i: number = 0; i < all.length; i += 1) {
// 		// eslint-disable-next-line no-console
// 		console.log(all[i]);
// 	}
// 	return all;
// }

// // eslint-disable-next-line no-console
// console.log(printStuff());

export { printName, printPurchase, printLastPay, printPhone };
