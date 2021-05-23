const { test, expect } = require('@jest/globals');
const HashTable = require('./HashTable');

test('HashTable data structure exists', () => {
	expect(typeof new HashTable()).toBe('object');
});

test('HashTable has an initial size of 0', () => {
	const ht = new HashTable();
	expect(ht.size).toBe(0);
});

test('Passing a number to the HashTable constructor will give the HashTable that size table', () => {
	const ht = new HashTable(255);
	expect(ht.buckets.length).toBe(255);
});

test('Using a non-string key will result in an error', () => {
	const ht = new HashTable();
	expect(() => ht.set(1, 'test')).toThrow();
	expect(() => ht.get(1, 'test')).toThrow();
	expect(() => ht.remove(1, 'test')).toThrow();
});

test('Adding elements to the HashTable increases the size and returns true', () => {
	const ht = new HashTable();
	ht.set('test', 'test');
	ht.set('test2', 'test2');
	expect(ht.set('test3', 'test3')).toBe(true);
	expect(ht.size).toBe(3);
});

test('Removing an element that matches a key will decrease the size and return the value, otherwise, returns null and the size remains the same', () => {
	const ht = new HashTable();
	ht.set('test', 'test');
	ht.set('test2', 'test2');
	ht.set('test3', 'test3');
	expect(ht.size).toBe(3);
	expect(ht.remove('test2')).toBe('test2');
	expect(ht.size).toBe(2);
	expect(ht.remove('x')).toBeNull();
	expect(ht.size).toBe(2);
});

test('Getting an element by its key returns the element value or null if nothing is at that key but does not decrease the size', () => {
	const ht = new HashTable();
	ht.set('test', 'test');
	ht.set('test2', 'test2');
	ht.set('test3', 'test3');
	expect(ht.get('test2')).toBe('test2');
	expect(ht.get('test4')).toBeNull();
	expect(ht.size).toBe(3);
});

test('Adding multiple elements with the same key returns false and does not increase the size', () => {
	const ht = new HashTable();
	ht.set('test', 'test');
	ht.set('test2', 'test2');
	expect(ht.set('test', 'test2')).toBe(false);
	expect(ht.size).toBe(2);
});

test('Adding an element with the same hash but different keys increases the size by 1', () => {
	const ht = new HashTable();
	ht.set('test', 'test');
	ht.set('test2', 'test2');
	expect(ht.set('estt', 'test')).toBe(true);
	expect(ht.size).toBe(3);
});

test('Getting an element at the same index returns the correct value but the size remains the same', () => {
	const ht = new HashTable();
	ht.set('test', 'test');
	ht.set('test2', 'test2');
	ht.set('estt', 'test');
	expect(ht.get('test')).toBe('test');
	expect(ht.size).toBe(3);
});

test('Removing an element at the same index returns the correct value and decreases the size by 1', () => {
	const ht = new HashTable();
	ht.set('test', 'test');
	ht.set('test2', 'test2');
	ht.set('estt', 'test');
	expect(ht.remove('test')).toBe('test');
	expect(ht.size).toBe(2);
});
