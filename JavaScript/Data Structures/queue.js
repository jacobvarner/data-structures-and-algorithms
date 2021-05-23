/**
 * Class for a queue data structure that creates a FIFO list of items.
 */
class Queue {
	/**
	 * Creates a queue data structure and can initialize it with a value or array of values.
	 * @param {Array} [initial] - The initial value or array of values to start the queue with.
	 */
	constructor(initial = []) {
		this.length = Array.isArray(initial) ? initial.length : 1;
		this.array = Array.isArray(initial) ? initial : [initial];
	}

	/**
	 * Adds an item to the queue and increases the length by 1.
	 * @param {*} value - The value the add to the queue.
	 * @throws Will throw an error if no value is provided.
	 */
	enqueue = (value) => {
		if (typeof value === 'undefined') {
			throw new Error('There must be a value to add to the queue.');
		}
		this.array.push(value);
		this.length++;
	};

	/**
	 * Removes the first item added to the queue and decreases the length by 1.
	 * @returns {*} The first value in the queue or null if the queue is empty.
	 */
	dequeue = () => {
		if (!this.length) return null;
		let output = this.array.shift();
		this.length--;
		return output;
	};

	/**
	 * Returns the first value in the queue, but does not remove it from the queue.
	 * @returns {*} The first value in the queue or null if the queue is empty.
	 */
	first = () => {
		if (!this.length) return null;
		return this.array[0];
	};

	/**
	 * Returns the last value in the queue, but does not remove it from the queue.
	 * @returns {*} The last value in the queue or null if the queue is empty.
	 */
	last = () => {
		if (!this.length) return null;
		return this.array[this.length - 1];
	};

	/**
	 * Determines whether the queue only contains items of the same type.
	 * @returns {boolean} Whether or not all items in the queue are of the same type.
	 */
	isSameType = () => {
		if (!this.length) return true;
		let type = typeof this.array[0];
		return this.array.every((e) => {
			return typeof e === type;
		});
	};
}

module.exports = Queue;
