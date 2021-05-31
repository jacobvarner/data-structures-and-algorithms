/**
 * The single linked list is a list of nodes that each reference the next node in the list.
 * @class
 * @typedef {object}
 * @property {Node} head - The first node in the linked list.
 * @property {number} length - The length of the linked list.
 */
class SingleLinkedList {
	/**
	 * The first node in the linked list.
	 * @type {Node}
	 * @private
	 */
	#head;

	/**
	 * The length of the linked list.
	 * @type {number}
	 * @private
	 */
	#length;

	/**
	 * Constructor initializes the SingleLinkedList whether it has no initial value, has a single initial value,
	 * or has a list of initial values in an array.
	 * @param {array} init - The initial value(s) to initialize the linked list.
	 */
	constructor(init = null) {
		if (init === null) {
			this.#head = null;
			this.#length = 0;
		} else if (!Array.isArray(init)) {
			this.#head = new Node(init);
			this.#length = 1;
		} else {
			this.#head = new Node(init[0]);
			this.#length = 1;
			let current = this.#head;
			for (let i = 1; i < init.length; i++) {
				const node = new Node(init[i]);
				current.next = node;
				this.#length++;
				current = node;
			}
		}
	}

	/**
	 * Gets the current length of the linked list.
	 * @return {number} - The length of the list.
	 */
	get length() {
		return this.#length;
	}

	/**
	 * Gets the head of the linked list.
	 * @return {Node} - The node at the head of the linked list.
	 */
	get head() {
		return this.#head;
	}

	/**
	 * Adds a value at the end of the linked list.
	 * @param {*} val - The value to be added to the linked list.
	 */
	add(val) {
		if (val !== null) {
			const node = new Node(val);
			if (!this.#head) {
				this.#head = node;
			} else {
				let current = this.#head;
				while (current.next !== null) {
					current = current.next;
				}
				current.next = node;
			}
			this.#length++;
		}
	}

	/**
	 * Adds a value at the given index, or adds it at the end of the list if the given index is larger than the length.
	 * @param {*} val - The value to be added to the linked list.
	 * @param {number} i - The index where the value should be added.
	 */
	addAt(val, i) {
		if (val !== null) {
			const node = new Node(val);
			if (i >= this.#length) {
				this.add(val);
			} else if (i === 0) {
				node.next = this.#head;
				this.#head = node;
				this.#length++;
			} else {
				let current = this.#head;
				for (let c = 0; c < i - 1; c++) {
					current = current.next;
				}
				node.next = current.next;
				current.next = node;
				this.#length++;
			}
		}
	}

	/**
	 * Removes all instances of the value.
	 * @param {} val - The value to be removed from the linked list.
	 * @returns {boolean} result - Whether the value(s) was found and removed or not.
	 */
	remove(val) {
		if (this.#head === null) return false;
		let result = false;
		let current = this.#head;
		let prev = null;
		while (current.next !== null) {
			if (current.value === val) {
				if (prev !== null) {
					prev.next = current.next;
					this.#length--;
				} else {
					this.#head = current.next;
					this.#length--;
				}
				result = true;
			}
			current = current.next;
		}
		return result;
	}

	/**
	 * Removes a value at the given index.
	 * @param {number} i - The index at which to remove the element.
	 * @returns {*} The value removed or null if the index is larger than the length.
	 */
	removeAt(i) {
		if (i >= this.#length) return null;
		let current = this.#head;
		for (let c = 0; c < i - 1; c++) {
			current = current.next;
		}
		let result = current.next.value;
		current.next = current.next.next;
		this.#length--;
		return result;
	}

	/**
	 * Returns the first index of the value if the value is in the linked list.
	 * @param {*} val - The value to search for in the linked list.
	 */
	find(val) {
		if (this.#head === null) return null;
		let current = this.#head;
		for (let i = 0; i < this.#length; i++) {
			if (current.value === val) return i;
			current = current.next;
		}
		return null;
	}

	/**
	 * Gets the value at a given index in the linked list.
	 * @param {number} i - The index to get the value at.
	 * @returns {*} The value at the given index, or null if the index is larger than the length.
	 */
	findAt(i) {
		if (i >= this.#length) return null;
		let current = this.#head;
		for (let c = 0; c < i; c++) {
			current = current.next;
		}
		return current.value;
	}
}

/**
 * The nodes used in the linked list.
 * @class
 * @typedef {object} Node
 * @property {*} value - The value stored in the node.
 * @property {Node} next - The next node that the node points to.
 */
class Node {
	/**
	 * The value stored in the node.
	 */
	value;

	/**
	 * The next node that the node points to.
	 */
	next;

	/**
	 * Initializes a node with the given value and makes it point to nothing.
	 * @param {*} value - The value to store in the node.
	 */
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

module.exports = SingleLinkedList;
