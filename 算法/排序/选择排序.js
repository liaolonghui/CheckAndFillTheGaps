const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]

function selectSort (arr) {
	for (let i = 0; i < arr.length-1; i++) {
		let min = i // 默认i是最小值
		for (let j = i+1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j
			}
		}
		if (min !== i) {
			const temp = arr[i]
			arr[i] = arr[min]
			arr[min] = temp
		}
	}
}

selectSort(arr)
console.log(arr)