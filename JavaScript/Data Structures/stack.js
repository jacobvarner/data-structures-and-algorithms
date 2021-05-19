function Stack() {
	this.height = 0;
	this.stack = [];

	this.push = (val) => {
		this.stack.push(val);
		this.height++;
	};

	this.pop = () => {
		if (this.height === 0) return null;
		this.height--;
		return this.stack.pop();
	};

	this.peek = () => {
		if (this.height === 0) return null;
		return this.stack[this.height - 1];
	};
}

module.exports = Stack;
