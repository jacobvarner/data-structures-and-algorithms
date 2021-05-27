const { test, expect } = require('@jest/globals');
const Sort = require('./Sort');

test('Bubble sort works with a small array', () => {
	let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.bubble(array)).toEqual(sortedArray);
});

test('Bubble sort works with a medium array', () => {
	let array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.bubble(array)).toEqual(sortedArray);
});

test('Bubble sort works with an empty array', () => {
	let array = [];
	expect(Sort.bubble(array)).toEqual([]);
});

test('Bubble sort throws an error if something other than an array is used as input', () => {
	let array = 'test';
	expect(() => Sort.bubble(array)).toThrow();
});

test('Insertion sort works with a small array', () => {
	let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.insertion(array)).toEqual(sortedArray);
});

test('Insertion sort works with a medium array', () => {
	let array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.insertion(array)).toEqual(sortedArray);
});

test('Insertion sort works with an empty array', () => {
	let array = [];
	expect(Sort.insertion(array)).toEqual([]);
});

test('Insertion sort throws an error if something other than an array is used as input', () => {
	let array = 'test';
	expect(() => Sort.insertion(array)).toThrow();
});

test('Selection sort works with a small array', () => {
	let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.selection(array)).toEqual(sortedArray);
});

test('Selection sort works with a medium array', () => {
	let array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.selection(array)).toEqual(sortedArray);
});

test('Selection sort works with an empty array', () => {
	let array = [];
	expect(Sort.selection(array)).toEqual([]);
});

test('Selection sort throws an error if something other than an array is used as input', () => {
	let array = 'test';
	expect(() => Sort.selection(array)).toThrow();
});

test('Quick sort works with a small array', () => {
	let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.quick(array)).toEqual(sortedArray);
});

test('Quick sort works with a medium array', () => {
	let array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.quick(array)).toEqual(sortedArray);
});

test('Quick sort works with an empty array', () => {
	let array = [];
	expect(Sort.quick(array)).toEqual([]);
});

test('Quick sort throws an error if something other than an array is used as input', () => {
	let array = 'test';
	expect(() => Sort.quick(array)).toThrow();
});

test('Merge sort works with a small array', () => {
	let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.merge(array)).toEqual(sortedArray);
});

test('Merge sort works with a medium array', () => {
	let array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
	let sortedArray = [...array].sort((a, b) => a - b);
	expect(Sort.merge(array)).toEqual(sortedArray);
});

test('Merge sort works with an empty array', () => {
	let array = [];
	expect(Sort.merge(array)).toEqual([]);
});

test('Merge sort throws an error if something other than an array is used as input', () => {
	let array = 'test';
	expect(() => Sort.merge(array)).toThrow();
});
