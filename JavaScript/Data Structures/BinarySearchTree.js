/**
 * A binary search tree data structure.
 * @class
 * @typedef {object} BinarySearchTree
 * @property {number} size - The total number of values in the BST.
 * @property {number} numNodes - The number of unique values in the BST.
 * @property {Node} root - The root node of the BST.
 */
class BinarySearchTree {
	/**
	 * The total number of values in the tree, including duplicate values, in the BST.
	 * @type {number}
	 * @private
	 */
	#size;

	/**
	 * The total number of nodes, representing the number of unique values in the BST.
	 * @type {number}
	 * @private
	 */
	#numNodes;

	/**
	 * The root node in the BST.
	 * @type {Node}
	 * @private
	 */
	#root;

	/**
	 * Initializes the BST based on the initial input value(s).
	 * @param {*|*[]} init - The initial values to insert into the BST.
	 */
	constructor(init) {
		this.#size = 0;
		this.#numNodes = 0;
		this.#root = null;

		if (Array.isArray(init)) {
			init.forEach((value) => this.insert(value));
		} else if (typeof init !== 'undefined' && init !== null) {
			this.insert(init);
		}
	}

	/**
	 * Returns the total number of values in the BST.
	 * @return {number} - The total number of values in the BST.
	 */
	get size() {
		return this.#size;
	}

	/**
	 * Returns the number of unique nodes in the BST.
	 * @return {number} - The number of unique nodes in the BST.
	 */
	get numNodes() {
		return this.#numNodes;
	}

	/**
	 * Adds a value to the BST.
	 * @param {*} value - The value to be added to the BST.
	 */
	insert(value) {
		if (value === null || typeof value === 'undefined') return;

		const node = new Node(value);

		if (this.#root === null) {
			this.#root = node;
			this.#size++;
			this.#numNodes++;
		} else {
			let current = this.#root;
			let inserted = false;
			while (!inserted) {
				if (value < current.value) {
					if (current.left === null) {
						node.parent = current.left;
						current.left = node;
						this.#size++;
						this.#numNodes++;
						inserted = true;
					} else {
						current = current.left;
					}
				} else if (value > current.value) {
					if (current.right === null) {
						node.parent = current.right;
						current.right = node;
						this.#size++;
						this.#numNodes++;
						inserted = true;
					} else {
						current = current.right;
					}
				} else {
					current.count++;
					this.#size++;
					inserted = true;
				}
			}
		}
	}

	/**
	 * Removes a value from the BST, if it exists, and decreases at least the size by 1.
	 * @param {*} value - The value to remove from the BST.
	 */
	remove(value) {
		if (value === null || typeof value === 'undefined' || this.#root === null) return;

		let current = this.#root;
		let removed = false;
		while (!removed) {
			if (value < current.value) {
				if (current.left === null) {
					// Value isn't in the tree, do nothing.
					return;
				} else {
					current = current.left;
				}
			} else if (value > current.value) {
				if (current.right === null) {
					// Value isn't in the tree, do nothing.
					return;
				} else {
					current = current.right;
				}
			} else {
				if (current.count > 1) {
					// If there are multiple entries of this value, simply decrease the count and size by 1 and stop looking.
					current.count--;
					this.#size--;
					removed = true;
				} else {
					if (current.left === null && current.right === null) {
						// If a leaf node is being removed, just remove it by having the parent's reference to the node be null now.
						const parent = current.parent;
						if (parent.left === current) {
							parent.left = null;
							this.#size--;
							this.#numNodes--;
							removed = true;
						} else if (parent.right === current) {
							parent.right = null;
							this.#size--;
							this.#numNodes--;
							removed = true;
						}
					} else if (current.left !== null && current.right !== null) {
						// If removing a node that has both children, find the smallest value on the right side, and swap it with the removed node
						let replacement = current.right;
						while (replacement.left !== null) {
							replacement = replacement.left;
						}
						const parent = current.parent;
						if (parent === null) {
							this.#root = replacement;
						} else {
							parent.right = replacement;
						}
						replacement.parent = parent;
						replacement.left = current.left;
						this.#size--;
						this.#numNodes--;
						removed = true;
					} else if (current.left !== null) {
						// If removing a node with just a left child, have it's parent point the left child
						const parent = current.parent;
						const newNode = current.left;
						if (parent === null) {
							this.#root = newNode;
						} else {
							parent.left = newNode;
						}
						newNode.parent = parent;
						this.#size--;
						this.#numNodes--;
						removed = true;
					} else if (current.right !== null) {
						// If removing a node with just a right child, have it's parent point the right child.
						const parent = current.parent;
						const newNode = current.right;
						if (parent === null) {
							this.#root = newNode;
						} else {
							parent.right = newNode;
						}
						newNode.parent = parent;
						this.#size--;
						this.#numNodes--;
						removed = true;
					}
				}
			}
		}
	}

	/**
	 * Determines whether or not the BST is empty.
	 * @return {boolean} - Whether or not the BST has any nodes.
	 */
	isEmpty() {
		return this.#size === 0;
	}

	/**
	 * Determines whether or not the BST has any duplicate values stored.
	 * @return {boolean} - Whether or not there are duplicate values in the BST.
	 */
	isUnique() {
		return this.#size === this.#numNodes;
	}

	/**
	 * Returns the minimum height to a leaf node.
	 * @return {number} - The minimum height of the BST.
	 */
	minHeight() {
		const getMinHeight = (root) => {
			if (root === null) return 0;
			if (root.left === null && root.right === null) return 0;
			if (root.left === null) return getMinHeight(root.right) + 1;
			if (root.right === null) return getMinHeight(root.left) + 1;
			const leftHeight = getMinHeight(root.left);
			const rightHeight = getMinHeight(root.right);
			return Math.min(leftHeight, rightHeight) + 1;
		};
		return getMinHeight(this.#root);
	}

	/**
	 * Returns the maximum height to a leaf node.
	 * @return {number} - The maximum height of the BST.
	 */
	maxHeight() {
		const getMaxHeight = (root) => {
			if (root === null) return 0;
			if (root.left === null && root.right === null) return 0;
			if (root.left === null) return getMaxHeight(root.right) + 1;
			if (root.right === null) return getMaxHeight(root.left) + 1;
			const leftHeight = getMaxHeight(root.left);
			const rightHeight = getMaxHeight(root.right);
			return Math.max(leftHeight, rightHeight) + 1;
		};
		return getMaxHeight(this.#root);
	}

	/**
	 * Determines if the BST is balanced by checking if minHeight and maxHeight differ by no more than 1.
	 * @return {boolean} - Whether or not the BST is balanced.
	 */
	isBalanced() {
		return this.maxHeight() - this.minHeight() <= 1;
	}

	/**
	 * Outputs an array of values from a preorder traversal of the BST.
	 * @return {*[]} - The array of values in the BST, based on preorder traversal.
	 */
	preorder() {
		const output = [];
		if (this.#root === null) return output;
		const traverse = (root) => {
			if (root === null) return;
			output.push(root.value);
			traverse(root.left);
			traverse(root.right);
		};
		traverse(this.#root);
		return output;
	}

	/**
	 * Outputs an array of values from an inorder traversal of the BST.
	 * @return {*[]} - The array of values in the BST, based on inorder traversal.
	 */
	inorder() {
		const output = [];
		if (this.#root === null) return output;
		const traverse = (root) => {
			if (root === null) return;
			traverse(root.left);
			output.push(root.value);
			traverse(root.right);
		};
		traverse(this.#root);
		return output;
	}

	/**
	 * Outputs an array of values from a postorder traversal of the BST.
	 * @return {*[]} - The array of values in the BST, based on postorder traversal.
	 */
	postorder() {
		const output = [];
		if (this.#root === null) return output;
		const traverse = (root) => {
			if (root === null) return;
			traverse(root.left);
			traverse(root.right);
			output.push(root.value);
		};
		traverse(this.#root);
		return output;
	}
}

/**
 * The node class that is used by the Binary Search Tree.
 * @typedef {object} Node
 * @property {*} value - The value stored in the node.
 * @property {Node} [parent] - The parent node.
 * @property {Node} [left] - The left child node.
 * @property {Node} [right] - The right child node.
 * @property {number} [count=1] - The number of times this value is stored in the tree.
 */
class Node {
	/**
	 * The value stored at the node.
	 * @type {*}
	 */
	value;

	/**
	 * The parent node of the node.
	 * @type {Node}
	 */
	parent;

	/**
	 * The left child node.
	 * @type {Node}
	 */
	left;

	/**
	 * The right child node.
	 * @type {Node}
	 */
	right;

	/**
	 * The number of times this value is stored in the tree.
	 * @type {number}
	 */
	count;
	/**
	 * Initializes a new node with the provided value and defaults each of the pointers to null.
	 * @param {*} value - The value to store in the node.
	 */
	constructor(value) {
		this.value = value;
		this.parent = null;
		this.left = null;
		this.right = null;
		this.count = 1;
	}
}

module.exports = BinarySearchTree;
