const { test, expect } = require('@jest/globals');
const BinarySearchTree = require('./BinarySearchTree');

test('BinarySearchTree data structure exists', () => {
	expect(typeof new BinarySearchTree()).toBe('object');
});

test('Default initialization creates a BST with zero nodes and has a size of 0', () => {
	const bst = new BinarySearchTree();
	expect(bst.size).toBe(0);
});

test('Initializing a BST with a first value creates a tree with a size of 1', () => {
	const bst = new BinarySearchTree(3);
	expect(bst.size).toBe(1);
});

test('Initializing a BST with an array of values creates a tree with the appropriate size', () => {
	const bst = new BinarySearchTree([1, 6, 8, 4, 5, 3, 2]);
	expect(bst.size).toBe(7);
});

test('Inserting a value into the BST increases the size by 1', () => {
	const bst = new BinarySearchTree();
	expect(bst.size).toBe(0);
	bst.insert(1);
	expect(bst.size).toBe(1);
});

test('Inserting a duplicate value increases the size, but does not increase the number of nodes', () => {
	const bst = new BinarySearchTree([1, 2, 3]);
	expect(bst.size).toBe(3);
	expect(bst.numNodes).toBe(3);
	bst.insert(2);
	expect(bst.size).toBe(4);
	expect(bst.numNodes).toBe(3);
});

test('Removing a value that exists in the BST and is unique decreases the size and number of nodes by 1', () => {
	const bst = new BinarySearchTree([1, 2, 3]);
	expect(bst.size).toBe(3);
	expect(bst.numNodes).toBe(3);
	bst.remove(2);
	expect(bst.size).toBe(2);
	expect(bst.numNodes).toBe(2);
});

test('Removing a value that does not exist in the BST does not decrease the size or number or nodes', () => {
	const bst = new BinarySearchTree([1, 2, 3]);
	expect(bst.size).toBe(3);
	expect(bst.numNodes).toBe(3);
	bst.remove(5);
	expect(bst.size).toBe(3);
	expect(bst.numNodes).toBe(3);
});

test('Removing a value that exists in the BST but is not unique decreases the size but not the number or nodes', () => {
	const bst = new BinarySearchTree([1, 2, 3, 2]);
	expect(bst.size).toBe(4);
	expect(bst.numNodes).toBe(3);
	bst.remove(2);
	expect(bst.size).toBe(3);
	expect(bst.numNodes).toBe(3);
});

test('Determines if the tree has duplicate values or all values are unique', () => {
	const bst = new BinarySearchTree([1, 2, 3]);
	expect(bst.isUnique()).toBe(true);
	bst.insert(1);
	bst.insert(2);
	expect(bst.isUnique()).toBe(false);
});

test('Determines if the BinarySearchTree is empty or not', () => {
	const bst = new BinarySearchTree();
	expect(bst.isEmpty()).toBe(true);
});

test('Determines the minimum height of the BST', () => {
	const bst1 = new BinarySearchTree([10, 8, 6, 2, 15, 20, 24, 19, 1]);
	const bst2 = new BinarySearchTree([2, 3, 4, 5, 1]);
	const bst3 = new BinarySearchTree();
	const bst4 = new BinarySearchTree(1);
	expect(bst1.minHeight()).toBe(3);
	expect(bst2.minHeight()).toBe(1);
	expect(bst3.minHeight()).toBe(0);
	expect(bst4.minHeight()).toBe(0);
});

test('Determines the maximum height of the BST', () => {
	const bst1 = new BinarySearchTree([10, 8, 6, 2, 15, 20, 24, 19, 1]);
	const bst2 = new BinarySearchTree([2, 3, 4, 5, 1]);
	const bst3 = new BinarySearchTree();
	const bst4 = new BinarySearchTree(1);
	expect(bst1.maxHeight()).toBe(4);
	expect(bst2.maxHeight()).toBe(3);
	expect(bst3.maxHeight()).toBe(0);
	expect(bst4.maxHeight()).toBe(0);
});

test('Determines if the BST is balanced', () => {
	const bst1 = new BinarySearchTree([10, 8, 6, 2, 15, 20, 24, 19, 1]);
	const bst2 = new BinarySearchTree([2, 3, 4, 5, 1]);
	const bst3 = new BinarySearchTree();
	const bst4 = new BinarySearchTree(1);
	expect(bst1.isBalanced()).toBe(true);
	expect(bst2.isBalanced()).toBe(false);
	expect(bst3.isBalanced()).toBe(true);
	expect(bst4.isBalanced()).toBe(true);
});

test('Returns an array of values using pre-order traversal', () => {
	const bst1 = new BinarySearchTree([10, 8, 6, 2, 15, 20, 24, 19, 1]);
	const bst2 = new BinarySearchTree([2, 3, 4, 5, 1]);
	const bst3 = new BinarySearchTree();
	const bst4 = new BinarySearchTree(1);
	expect(bst1.preorder()).toEqual([10, 8, 6, 2, 1, 15, 20, 19, 24]);
	expect(bst2.preorder()).toEqual([2, 1, 3, 4, 5]);
	expect(bst3.preorder()).toEqual([]);
	expect(bst4.preorder()).toEqual([1]);
});

test('Returns an array of values using in-order traversal', () => {
	const bst1 = new BinarySearchTree([10, 8, 6, 2, 15, 20, 24, 19, 1]);
	const bst2 = new BinarySearchTree([2, 3, 4, 5, 1]);
	const bst3 = new BinarySearchTree();
	const bst4 = new BinarySearchTree(1);
	expect(bst1.inorder()).toEqual([1, 2, 6, 8, 10, 15, 19, 20, 24]);
	expect(bst2.inorder()).toEqual([1, 2, 3, 4, 5]);
	expect(bst3.inorder()).toEqual([]);
	expect(bst4.inorder()).toEqual([1]);
});

test('Returns an array of values using post-order traversal', () => {
	const bst1 = new BinarySearchTree([10, 8, 6, 2, 15, 20, 24, 19, 1]);
	const bst2 = new BinarySearchTree([2, 3, 4, 5, 1]);
	const bst3 = new BinarySearchTree();
	const bst4 = new BinarySearchTree(1);
	expect(bst1.postorder()).toEqual([1, 2, 6, 8, 19, 24, 20, 15, 10]);
	expect(bst2.postorder()).toEqual([1, 5, 4, 3, 2]);
	expect(bst3.postorder()).toEqual([]);
	expect(bst4.postorder()).toEqual([1]);
});
