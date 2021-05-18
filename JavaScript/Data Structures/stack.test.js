const { test, expect } = require('@jest/globals');
const Stack = require('./stack');

test('Stack data structure exists', () => {
	expect(typeof new Stack()).toBe('object');
});

test('Stack keeps strack of height', () => {
	const stack = new Stack();
	stack.push(1);
	stack.push(2);
	stack.push(3);
	expect(stack.height).toBe(3);
});

test('A new stack has a height of zero', () => {
	const stack = new Stack();
	expect(stack.height).toBe(0);
});

test('Popping from an empty stack returns null', () => {
	const stack = new Stack();
	expect(stack.pop()).toBeNull();
});

test('Calling .top() on an empty stack returns null', () => {
	const stack = new Stack();
	expect(stack.top()).toBeNull();
});

test('.top() returns the top item on the stack', () => {
	const stack = new Stack();
	stack.push(1);
	stack.push(2);
	stack.push(3);
	expect(stack.top()).toBe(3);
});

test('.top() does not decrease the height', () => {
	const stack = new Stack();
	stack.push(1);
	stack.push(2);
	stack.push(3);
	stack.top();
	expect(stack.height).toBe(3);
});

test('Adding an element to the stack increases the height', () => {
	const stack = new Stack();
	stack.push(1);
	expect(stack.height).toBe(1);
});
