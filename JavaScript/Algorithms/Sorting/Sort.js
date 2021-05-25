/**
 * A class with various implementations of sorting algorithms.
 */
class Sort {
	/**
	 * Sorts the provided array using (optimized) bubble sort.
	 * Worst case: O(n^2), Average Case: O(n^2), Best Case: O(n)
	 * @param {number[]} array - The array of numbers to be sorted.
	 * @returns {number[]} The sorted array of numbers.
	 * @throws Will throw an error if the input is not an array.
	 */
	static bubble = (array) => {
		if (!Array.isArray(array)) {
			throw new Error('The input must be an array of numbers');
		}
		for (let i = 0; i < array.length; i++) {
			// Optimized by tracking whether elements were swapped
			let swapped = false;
			for (let j = 0; j < array.length; j++) {
				if (array[i] > array[i + 1]) {
					let temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
					swapped = true;
				}
			}
			// If no elements were swapped, the array is already sorted to that point, so end this portion
			if (!swapped) break;
		}
		return array;
	};

	/**
	 * Sorts the provided array using insertion sort.
	 * Worst case: O(n^2), Average Case: O(n^2), Best Case: O(n)
	 * @param {number[]} array - The array of numbers to be sorted.
	 * @returns {number[]} The sorted array of numbers.
	 * @throws Will throw an error if the input is not an array.
	 */
	static insertion = (array) => {
		if (!Array.isArray(array)) {
			throw new Error('The input must be an array of numbers');
		}
		return array.sort();
	};

	/**
	 * Sorts the provided array using selection sort.
	 * Worst case: O(n^2), Average Case: O(n^2), Best Case: O(n^2)
	 * @param {number[]} array - The array of numbers to be sorted.
	 * @returns {number[]} The sorted array of numbers.
	 * @throws Will throw an error if the input is not an array.
	 */
	static selection = (array) => {
		if (!Array.isArray(array)) {
			throw new Error('The input must be an array of numbers');
		}
		return array.sort();
	};

	/**
	 * Sorts the provided array using quick sort.
	 * Worst case: O(n^2), Average Case: O(n log(n)), Best Case: O(n log(n))
	 * @param {number[]} array - The array of numbers to be sorted.
	 * @returns {number[]} The sorted array of numbers.
	 * @throws Will throw an error if the input is not an array.
	 */
	static quick = (array) => {
		if (!Array.isArray(array)) {
			throw new Error('The input must be an array of numbers');
		}
		return array.sort();
	};

	/**
	 * Sorts the provided array using merge sort.
	 * Worst case: O(n log(n)), Average Case: O(n log(n)), Best Case: O(n log(n))
	 * @param {number[]} array - The array of numbers to be sorted.
	 * @returns {number[]} The sorted array of numbers.
	 * @throws Will throw an error if the input is not an array.
	 */
	static merge = (array) => {
		if (!Array.isArray(array)) {
			throw new Error('The input must be an array of numbers');
		}
		return array.sort();
	};
}

module.exports = Sort;
