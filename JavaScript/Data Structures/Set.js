/**
 * A set data structure that makes a unique list.
 * @class
 * @typedef {object}
 * @property {number} size - The number of elements in the set.
 * @property {*[]} elements - The array containing elements in the set.
 */
class Set {
	/**
	 * The size of the set.
	 * @type {number}
	 * @private
	 */
	#size;

	/**
	 * The array structure that stores the values in the set.
	 * @type {*[]}
	 * @private
	 */
	#elements;

	/**
	 * Creates a new set. The set can be initialized as empty, with a single value, or with an array of values.
	 * @param {*|*[]} init - The initial value(s) of the set, defaulted to an empty set.
	 */
	constructor(init = []) {
		if (!Array.isArray(init)) {
			this.#elements = [init];
			this.#size = 1;
		} else {
			if (init.length > 1) {
				// Remove duplicates, then initialize the set as the array of multiple values.
				this.#elements = init.filter((el, i) => {
					return init.indexOf(el) === i;
				});
				this.#size = this.#elements.length;
			} else {
				this.#elements = init;
				this.#size = init.length;
			}
		}
	}

	/**
	 * Gets the size of the set.
	 * @return {number} - The size of the set.
	 */
	get size() {
		return this.#size;
	}

	/**
	 * Checks if the set contains an element.
	 * @param {*} element - The element to check for in the set.
	 * @returns {boolean} - Whether or not the set contains the element.
	 */
	contains(element) {
		return this.#elements.includes(element);
	}

	/**
	 * Adds an element to the set if it is not already in the set.
	 * @param {*} element - The element to be added to the set.
	 */
	add(element) {
		if (!this.contains(element)) {
			this.#elements.push(element);
			this.#size++;
		}
	}

	/**
	 * Removes an element from the set if it exists in the set.
	 * @param {*} element - The element to remove from the set.
	 */
	remove(element) {
		if (this.contains(element)) {
			const i = this.#elements.indexOf(element);
			this.#elements.splice(i, 1);
			this.#size--;
		}
	}
}

module.exports = Set;
