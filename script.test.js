/* eslint-disable no-tabs */
/* eslint-disable no-undef */
/* eslint-disable indent */
const stuff = require('./script.js');

test('Test printName', () => {
	expect(stuff.printName('neel', 'mclarty')).toBe('Neel Mclarty');
});

test('Test printPurchase', () => {
	expect(stuff.printPurchase('2018-04-03T18:13:55Z')).toBe(
		'Purchased: April 3, 2018'
	);
});

test('Test printName', () => {
	expect(stuff.printLastPay('2020-08-22T11:10:41Z')).toBe(
		'Last Payment: 9 months ago'
	);
});

test('Test printPhone', () => {
	expect(stuff.printPhone('1531589353')).toBe('(153) 158-9353');
});
