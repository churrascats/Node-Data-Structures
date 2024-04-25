export default function main() {
	const arraySize = 10;

	let array = makeArray(arraySize);
	console.log(`Unordered array ${array}\n`);

	let orderedArray = bubbleSort(array);
	console.log(`\nOrdered array ${orderedArray}`);
}

function makeArray(arraySize: number) {
	let array: number[] = [];
	for (let i = 0; i < arraySize; i++) {
		array[i] = Math.round(Math.random() * 20);
	}

	return array;
}

function bubbleSort(input: number[]): number[] {
	let array = [...input];
	let isArraySorted = false;
	let numberOfIterations = array.length - 1;

	while (!isArraySorted) {
		let hasSwap = false;
		for (let currentIndex = 0; currentIndex <= numberOfIterations; currentIndex++) {
			let nextIndex = currentIndex + 1;
			if (array[currentIndex] > array[nextIndex]) {
				let aux = array[currentIndex];
				array[currentIndex] = array[nextIndex];
				array[nextIndex] = aux;
				hasSwap = true;

				console.log(
					`Swapping ${array[nextIndex]} by ${
						array[currentIndex]
					}, new array = ${JSON.stringify(array)}`
				);
			}
		}

		numberOfIterations -= 1;
		isArraySorted = !hasSwap;
	}

	return array;
}

// [3,5,2,1,4]
