const { test, expect } = require('@jest/globals');
const Queue = require('./queue');

test('Queue data structure exists', () => {
	expect(typeof new Queue()).toBe('object');
});

test('Queue has a length of 0 on initialization', () => {
	const queue = new Queue();
	expect(queue.length).toBe(0);
});

test('Adding to the queue increases the length', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue('test');
	expect(queue.length).toBe(2);
});

test('Removing an item returns the first item added to the queue', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	expect(queue.dequeue()).toBe(1);
});

test('Removing an item decreases the length by 1', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.dequeue();
	expect(queue.length).toBe(2);
});

test('The function .front() returns the first item in the queue', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	expect(queue.first()).toBe(1);
});

test('The function .front() does not decrease the length', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.first();
	expect(queue.length).toBe(3);
});

test('The function .last() returns the last item in the queue', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	expect(queue.last()).toBe(3);
});

test('The function .last() does not decrase the length', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.last();
	expect(queue.length()).toBe(3);
});

test('The function .isSameType() is true for queues that have items of the same type', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	expect(queue.isSameType()).toBe(true);
});

test('The function .isSameType() is false for queues that have items of different types', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue('test');
	queue.enqueue(3);
	expect(queue.isSameType()).toBe(false);
});

test('Removing an item from an empty queue should return null', () => {
	const queue = new Queue();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	queue.dequeue();
	queue.dequeue();
	queue.dequeue();
	expect(queue.dequeue()).toBeNull();
});

test('Initializing a queue with a value will have a length of 1', () => {
	const queue = new Queue(1);
	expect(queue.length).toBe(1);
});

test('Initializing a queue with a value will return that value first', () => {
	const queue = new Queue(1);
	queue.enqueue(2);
	expect(queue.dequeue()).toBe(1);
});

test('Intitializing a queue with a value will return the same value for .first() and .last()', () => {
	const queue = new Queue(1);
	expect(queue.first()).toBe(queue.last());
});

test('Initializing a queue with an array will have the same length as the array', () => {
	const queue = new Queue([1, 2, 3]);
	expect(queue.length).toBe(3);
});

test('Initializing a queue with an array will return the first value of the array first', () => {
	const queue = new Queue([1, 2, 3]);
	expect(queue.dequeue()).toBe(1);
});
