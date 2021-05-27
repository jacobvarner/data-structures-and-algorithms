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
			for (let j = 0; j < array.length - i - 1; j++) {
				// On each pass, if the current index is greater than the next index, swap the values.
				if (array[j] > array[j + 1]) {
					let temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
				}
			}
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

		// Starting at the second element, move it backwards until it is less than a previous element, then move to the next spot.
		for (let i = 1; i < array.length; i++) {
			let check = array[i];
			let compareIndex = i - 1;
			while (compareIndex >= 0 && array[compareIndex] > check) {
				array[compareIndex + 1] = array[compareIndex];
				compareIndex--;
			}
			array[compareIndex + 1] = check;
		}

		return array;
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

		/* 
      Starts by searching the entire array for the minimum value, moves it to the front,
      then repeats the process for each position by searching the remaining portion of the array.
    */
		for (let i = 0; i < array.length; i++) {
			let min = Infinity;
			let minIndex = i;
			for (let j = i; j < array.length; j++) {
				if (array[j] < min) {
					min = array[j];
					minIndex = j;
				}
			}
			if (minIndex !== i) {
				let temp = array[i];
				array[i] = array[minIndex];
				array[minIndex] = temp;
			}
		}

		return array;
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

		// Gets the partition index and then recursively calls sort again on the elements before and after the partition index.
		const sort = (array, start, end) => {
			if (start < end) {
				let partitionIndex = partition(array, start, end);
				sort(array, start, partitionIndex);
				sort(array, partitionIndex + 1, end);
			}

			return array;
		};

		const partition = (array, start, end) => {
			/*
        Uses the 'median-of-three' to pick the pivot point, which picks the middle value out
        of the first index, middle index, and last index as the pivot point.
      */
			let mid = Math.floor((start + end) / 2);
			if (array[mid] < array[start]) {
				let temp = array[start];
				array[start] = array[mid];
				array[mid] = temp;
			}
			if (array[end] < array[start]) {
				let temp = array[start];
				array[start] = array[end];
				array[end] = temp;
			}
			if (array[mid] < array[end]) {
				let temp = array[end];
				array[end] = array[mid];
				array[mid] = temp;
			}
			let pivot = array[end];

			/*
        Moves all elements less than the pivot to the left of the pivot and
        everything greater than the pivot to the right of the pivot.
      */
			let i = start;
			for (let j = start; j <= end; j++) {
				if (array[j] < pivot) {
					let temp = array[i];
					array[i] = array[j];
					array[j] = temp;
					i++;
				}
			}
			let temp = array[i];
			array[i] = array[end];
			array[end] = temp;
			return i;
		};

		return sort(array, 0, array.length - 1);
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

		// Split the array in half, sort both sides recursively, then merge them together for a sorted final array
		const sort = (array) => {
			const mid = array.length / 2;
			// Return if length is down to just one element
			if (array.length < 2) return array;
			// Uses splice to remove first half as left array and right array will be what is left
			const left = array.splice(0, mid);
			return merge(sort(left), sort(array));
		};

		// Merges the two sorted arrays to make a single sorted array
		const merge = (leftArray, rightArray) => {
			let sortedArray = [];
			while (leftArray.length && rightArray.length) {
				if (leftArray[0] < rightArray[0]) {
					sortedArray.push(leftArray.shift());
				} else {
					sortedArray.push(rightArray.shift());
				}
			}

			return [...sortedArray, ...leftArray, ...rightArray];
		};

		return sort(array);
	};
}

module.exports = Sort;
