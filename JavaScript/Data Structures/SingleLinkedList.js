/**
 * The single linked list is a list of nodes that each reference the next node in the list.
 */
class SingleLinkedList {
	/**
	 * Constructor initializes the SingleLinkedList whether it has no initial value, has a single initial value,
	 * or has a list of initial values in an array.
	 * @param {array} init - The initial value(s) to initialize the linked list.
	 */
	constructor(init = null) {
		if (init === null) {
			this.head = null;
			this.length = 0;
		} else if (!Array.isArray(init)) {
			this.head = { value: init, next: null };
			this.length = 1;
		} else {
			this.head = { value: init[0], next: null };
			this.length = 1;
			let current = this.head;
			for (let i = 1; i < init.length; i++) {
				const node = { value: init[i], next: null };
				current.next = node;
				this.length++;
				current = node;
			}
		}
	}

	/**
	 * Adds a value at the end of the linked list.
	 * @param {*} val - The value to be added to the linked list.
	 */
	add = (val) => {
		if (val !== null) {
			const node = { value: val, next: null };
			if (!this.head) {
				this.head = node;
			} else {
				let current = this.head;
				while (current.next !== null) {
					current = current.next;
				}
				current.next = node;
			}
			this.length++;
		}
	};

	/**
	 * Adds a value at the given index, or adds it at the end of the list if the given index is larger than the length.
	 * @param {*} val - The value to be added to the linked list.
	 * @param {number} i - The index where the value should be added.
	 */
	addAt = (val, i) => {
		if (val !== null) {
			const node = { value: val, next: null };
			if (i >= this.length) {
				this.add(val);
			} else if (i === 0) {
				node.next = this.head;
				this.head = node;
				this.length++;
			} else {
				let current = this.head;
				for (let c = 0; c < i - 1; c++) {
					current = current.next;
				}
				node.next = current.next;
				current.next = node;
				this.length++;
			}
		}
	};

	/**
	 * Removes all instances of the value.
	 * @param {} val - The value to be removed from the linked list.
	 * @returns {boolean} result - Whether the value(s) was found and removed or not.
	 */
	remove = (val) => {
		if (this.head === null) return false;
		let result = false;
		let current = this.head;
		let prev = null;
		while (current.next !== null) {
			if (current.value === val) {
				if (prev !== null) {
					prev.next = current.next;
					this.length--;
				} else {
					this.head = current.next;
					this.length--;
				}
				result = true;
			}
			current = current.next;
		}
		return result;
	};

	/**
	 * Removes a value at the given index.
	 * @param {number} i - The index at which to remove the element.
	 * @returns {*} The value removed or null if the index is larger than the length.
	 */
	removeAt = (i) => {
		if (i >= this.length) return null;
		let current = this.head;
		for (let c = 0; c < i - 1; c++) {
			current = current.next;
		}
		let result = current.next.value;
		current.next = current.next.next;
		this.length--;
		return result;
	};

	/**
	 * Returns the first index of the value if the value is in the linked list.
	 * @param {*} val - The value to search for in the linked list.
	 */
	find = (val) => {
		if (this.head === null) return null;
		let current = this.head;
		for (let i = 0; i < this.length; i++) {
			if (current.value === val) return i;
			current = current.next;
		}
		return null;
	};

	/**
	 * Gets the value at a given index in the linked list.
	 * @param {number} i - The index to get the value at.
	 * @returns {*} The value at the given index, or null if the index is larger than the length.
	 */
	findAt = (i) => {
		if (i >= this.length) return null;
		let current = this.head;
		for (let c = 0; c < i; c++) {
			current = current.next;
		}
		return current.value;
	};
}

module.exports = SingleLinkedList;
