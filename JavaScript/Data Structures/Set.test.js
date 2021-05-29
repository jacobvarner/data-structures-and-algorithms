const { test, expect } = require('@jest/globals');
const Set = require('./Set');

test('Set data structure exists', () => {
	expect(typeof new Set()).toBe('object');
});

test('Intializing a set with no initial value creates a set with a size of 0', () => {
	const set = new Set();
	expect(typeof set).toBe('object');
	expect(set.size).toBe(0);
});

test('Intializing a set with a single initial value creates a set with a size of 1', () => {
	const set = new Set(1);
	expect(typeof set).toBe('object');
	expect(set.size).toBe(1);
});

test('Intitializing a set with an array of values creates a set with a size equal to the unique elements in the array', () => {
	const set = new Set([1, 2, 3, 4, 5, 5, 5]);
	expect(typeof set).toBe('object');
	expect(set.size).toBe(5);
});

test('Adding a new element to the set increases the size by 1', () => {
	const set = new Set();
	set.add(1);
	expect(set.size).toBe(1);
	set.add(2);
	expect(set.size).toBe(2);
});

test('Adding an element to the set does not increase the size if the element is already in the set', () => {
	const set = new Set();
	set.add(1);
	expect(set.size).toBe(1);
	set.add(1);
	expect(set.size).toBe(1);
});

test('Removing an element that exists in the set decreases the size by 1', () => {
	const set = new Set([1, 2, 3, 4, 5]);
	expect(set.size).toBe(5);
	set.remove(3);
	expect(set.size).toBe(4);
});

test('Removing an element that does not exist in the set does not decrease the size', () => {
	const set = new Set([1, 2, 3]);
	expect(set.size).toBe(3);
	set.remove(4);
	expect(set.size).toBe(3);
});

test('Checking for an element that exists in the set returns true and does not change the size;', () => {
	const set = new Set([1, 2, 3, 4, 5]);
	expect(set.size).toBe(5);
	expect(set.contains(2)).toBe(true);
	expect(set.size).toBe(5);
});

test('Checking for an element that does not exist in the set returns false and does not change the size', () => {
	const set = new Set([1, 2, 3, 4, 5]);
	expect(set.size).toBe(5);
	expect(set.contains(8)).toBe(false);
	expect(set.size).toBe(5);
});
