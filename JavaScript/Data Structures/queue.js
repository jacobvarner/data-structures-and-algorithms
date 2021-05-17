function Queue(array = []) {
	this.length = Array.isArray(array) ? array.length : 1;
	this.array = Array.isArray(array) ? array : [array];

	this.enqueue = (value) => {
		this.array.push(value);
		this.length++;
	};

	this.dequeue = () => {
		if (!this.length) return null;
		let output = this.array.shift();
		this.length--;
		return output;
	};

	this.first = () => {
		if (!this.length) return null;
		return this.array[0];
	};

	this.last = () => {
		if (!this.length) return null;
		return this.array[this.length - 1];
	};

	this.isSameType = () => {
		if (!this.length) return true;
		let type = typeof this.array[0];
		return this.array.every((e) => {
			return typeof e === type;
		});
	};
}

module.exports = Queue;
