const { test, expect } = require('@jest/globals');
const SingleLinkedList = require('./SingleLinkedList');

test('SingleLinkedList data structure exists', () => {
	expect(typeof new SingleLinkedList()).toBe('object');
});

test('The length of the list is updated when items are added or removed', () => {
	const sll = new SingleLinkedList();
	sll.add(1);
	sll.add(2);
	expect(sll.length).toBe(2);
});

test('Default SingleLinkedList constructor gives a list with a 0 length and null head', () => {
	const sll = new SingleLinkedList();
	expect(sll.length).toBe(0);
	expect(sll.head).toBeNull();
});

test('SingleLinkedList constructor with a single value returns a linked list with that value as the head and a length of 1', () => {
	const sll = new SingleLinkedList(1);
	expect(sll.length).toBe(1);
	expect(sll.head.value).toBe(1);
});

test('SingleLinkedList constructure with an array returns a linked list with those values as the nodes and the correct length', () => {
	const sll = new SingleLinkedList([1, 2, 3]);
	expect(sll.length).toBe(3);
	expect(sll.head.value).toBe(1);
	expect(sll.head.next.value).toBe(2);
	expect(sll.head.next.next.value).toBe(3);
});

test('Adding an element with .add(val) appends a node with the correct value to the end of the linked list and increases the length by 1', () => {
	const sll = new SingleLinkedList(1);
	sll.add(2);
	expect(sll.length).toBe(2);
	expect(sll.head.value).toBe(1);
	expect(sll.head.next.value).toBe(2);
});

test('Adding an element with .add(val) does not add a null value and therefore does not increase the length', () => {
	const sll = new SingleLinkedList([1, 2, 3]);
	sll.add(null);
	expect(sll.length).toBe(3);
});

test('Inserting an element with .addAt(val, i) inserts a node with the given value at the given index, or the end of the list if the index is greater than the length or null', () => {
	const sll = new SingleLinkedList([1, 2, 3, 4, 5]);
	sll.addAt('test', 2);
	expect(sll.length).toBe(6);
	expect(sll.head.value).toBe(1);
	expect(sll.head.next.next.value).toBe('test');
	sll.addAt('test2', 99);
	expect(sll.length).toBe(7);
	expect(sll.head.next.next.next.next.next.next.value).toBe('test2');
});

test('Inserting an element with .addAt(val, i) does not add a null value and therefore does not increase the length', () => {
	const sll = new SingleLinkedList([1, 2, 3]);
	sll.add(null);
	expect(sll.length).toBe(3);
});

test('Removing an element with .remove(val) attempts to remove all of the elements with matching value and returns false if the value was not found', () => {
	const sll = new SingleLinkedList([1, 2, 3, 1, 4, 5]);
	expect(sll.remove('test')).toBeFalsy();
	expect(sll.remove(1)).toBeTruthy();
	expect(sll.length).toBe(4);
});

test('Removing an element with .removeAt(i) removes the value at the index provided, or returns null if the index is larger than the length', () => {
	const sll = new SingleLinkedList([1, 2, 3, 4, 5]);
	expect(sll.removeAt(10)).toBeNull();
	expect(sll.removeAt(2)).toBe(3);
	expect(sll.length).toBe(4);
});

test('Searching for a value with .find(val) returns the index of the value in the list or null if it cannot be found', () => {
	const sll = new SingleLinkedList([1, 2, 3, 4, 5]);
	expect(sll.find(3)).toBe(2);
	expect(sll.find(15)).toBeNull();
	expect(sll.length).toBe(5);
});

test('Searching for a value with .findAt(i) returns the value at the given index or null if the index is larger than the length', () => {
	const sll = new SingleLinkedList([1, 2, 3, 4, 5]);
	expect(sll.findAt(2)).toBe(3);
	expect(sll.findAt(15)).toBeNull();
	expect(sll.length).toBe(5);
});
