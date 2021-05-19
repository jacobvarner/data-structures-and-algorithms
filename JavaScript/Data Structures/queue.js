/**
 * A Queue data structure that creates a FIFO list of items.
 *
 * @param {Array} array the initial array or single item to intialize the queue with.
 */
function Queue(array = []) {
	this.length = Array.isArray(array) ? array.length : 1;
	this.array = Array.isArray(array) ? array : [array];

	/**
	 * Adds an item to the queue and increases the length by 1.
	 *
	 * @param {} value the value the add to the queue
	 */
	this.enqueue = (value) => {
		this.array.push(value);
		this.length++;
	};

	/**
	 * Removes the first item added to the queue from the queue.
	 *
	 * @returns {}  the first value added to the queue
	 */
	this.dequeue = () => {
		if (!this.length) return null;
		let output = this.array.shift();
		this.length--;
		return output;
	};

	/**
	 * Returns the first value in the queue, but does not remove it from the queue.
	 *
	 * @returns {}  the first value in the queue
	 */
	this.first = () => {
		if (!this.length) return null;
		return this.array[0];
	};

	/**
	 * Returns the last value in the queue, but does not remove it from the queue.
	 *
	 * @returns {}  the last item in the queue
	 */
	this.last = () => {
		if (!this.length) return null;
		return this.array[this.length - 1];
	};

	/**
	 * Determines whether the queue only contains items of the same type.
	 *
	 * @returns {Boolean}   whether or not all items in the queue are of the same type
	 */
	this.isSameType = () => {
		if (!this.length) return true;
		let type = typeof this.array[0];
		return this.array.every((e) => {
			return typeof e === type;
		});
	};
}

module.exports = Queue;
