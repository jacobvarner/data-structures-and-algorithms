/**
 * A Stack data structure that implements a LIFO list of items.
 */
function Stack() {
	this.height = 0;
	this.stack = [];

	/**
	 * Adds an item to the stack.
	 *
	 * @params {} value the value added to the top of the stack
	 */
	this.push = (val) => {
		this.stack.push(val);
		this.height++;
	};

	/**
	 * Removes the top item from the stack.
	 *
	 * @returns {}  the item at the top of the stack.
	 */
	this.pop = () => {
		if (this.height === 0) return null;
		this.height--;
		return this.stack.pop();
	};

	/**
	 * Returns the top item from the stack but does not remove it.
	 *
	 * @returns {}  the item at the top of the stack.
	 */
	this.peek = () => {
		if (this.height === 0) return null;
		return this.stack[this.height - 1];
	};
}

module.exports = Stack;
