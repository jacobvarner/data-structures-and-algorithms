/**
 * A stack data structure that implements a LIFO list of items.
 */
class Stack {
	/**
	 * Creates an empty stack.
	 */
	constructor() {
		this.height = 0;
		this.stack = [];
	}

	/**
	 * Adds an item to the top of the stack and increases the height by 1.
	 * @params {*} value - The value added to the top of the stack.
	 * @throws Will throw and error if a value is not provided.
	 */
	push = (value) => {
		if (typeof value === 'undefined') {
			throw 'A value must be provided.';
		}
		this.stack.push(val);
		this.height++;
	};

	/**
	 * Removes the top item from the stack and decreases the height by 1.
	 * @returns {*} The item at the top of the stack or null if the stack is empty.
	 */
	pop = () => {
		if (this.height === 0) return null;
		this.height--;
		return this.stack.pop();
	};

	/**
	 * Returns the top item from the stack but does not remove it.
	 * @returns {*} The item at the top of the stack or null if the stack is empty.
	 */
	peek = () => {
		if (this.height === 0) return null;
		return this.stack[this.height - 1];
	};

	/**
	 * Empties the stack.
	 */
	empty = () => {
		this.height = 0;
		this.stack = [];
	};
}

module.exports = Stack;
