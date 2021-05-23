/**
 * Class representing a hash table data structure that efficiently stores and retrieves values based on their key.
 */
class HashTable {
	/**
	 * Creates a new hash table.
	 * @param {number} [numBuckets=255] - The number of available buckets to store keys in.
	 * @throws Will throw an error if numBuckets is not a positive integer.
	 */
	constructor(numBuckets = 255) {
		if (!Number.isInteger(numBuckets) || numBuckets <= 0) {
			throw new Error('Initial number of buckets for the hash table should be a positive number.');
		}
		this.buckets = new Array(numBuckets);
		this.size = 0;
	}

	/**
	 * Hashes the key so that it can be stored in the correct bucket. Uses a simple sum of characters hash.
	 * @param {string} key - The key that needs to be hashed.
	 * @throws Will throw an error if the key is not a string.
	 * @private
	 */
	#hash = (key) => {
		if (typeof key !== 'string') {
			throw new Error('Key to be hashed must be a string.');
		}
		let charSum = 0;
		for (let i = 0; i < key.length; i++) {
			charSum += key.charCodeAt(i);
		}
		return charSum % this.buckets.length;
	};

	/**
	 * Adds a value to the hash table based on its key.
	 * @param {string} key - The key that determines where the value is stored in the hash table.
	 * @param {*} value - The value to be stored in the hash table.
	 * @return {boolean} result - Whether the key/value pair was added to the hash table or not.
	 * @throws Will throw an error if the key is not a string.
	 */
	set = (key, value) => {
		if (typeof key !== 'string') {
			throw new Error('Key must be a string.');
		}
		let hash = this.#hash(key);
		let pair = [key, value];
		if (this.buckets[hash] === undefined) {
			this.buckets[hash] = [pair];
			this.size++;
			return true;
		} else {
			if (!this.buckets[hash].every((el) => el[0] !== key)) {
				return false;
			} else {
				this.buckets[hash].push(pair);
				this.size++;
				return true;
			}
		}
	};

	/**
	 * Returns the value for a given key but does not remove it from the hash table.
	 * @param {string} key - The key to locate in the hash table.
	 * @return {*} result - The value found at the given key, or null if no such key exists in the hash table.
	 * @throws Will throw an error if the key is not a string.
	 */
	get = (key) => {
		if (typeof key !== 'string') {
			throw new Error('Key must be a string.');
		}
		let hash = this.#hash(key);
		if (this.buckets[hash] === undefined) return null;
		let value = null;
		this.buckets[hash].some((el) => {
			if (el[0] === key) {
				value = el[1];
				return true;
			}
		});
		return value;
	};

	/**
	 * Removes the value for a given key and decreases the size by 1, or returns null if the key is not found.
	 * @param {string} key - The key to locate in the hash table.
	 * @return {*} result - The value found at the given key, or null if no such key exists in the hash table.
	 * @throws Will throw an error if the key is not a string.
	 */
	remove = (key) => {
		if (typeof key !== 'string') {
			throw new Error('Key must be a string.');
		}
		let hash = this.#hash(key);
		if (this.buckets[hash] === undefined) return null;
		let value = null;
		let index;
		this.buckets[hash].some((el, i) => {
			if (el[0] === key) {
				value = el[1];
				index = i;
				return true;
			}
		});
		if (index !== undefined) {
			this.buckets[hash] = [...this.buckets[hash].slice(0, index), ...this.buckets[hash].slice(index + 1)];
			this.size--;
		}
		return value;
	};
}

module.exports = HashTable;
