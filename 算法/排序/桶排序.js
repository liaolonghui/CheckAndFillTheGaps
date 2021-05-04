const arr = [52, 2, 23, 32, 21, 105, 12, 11, 8, 42, 92, 23, 25, 28, 82]

function insertSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let p = i - 1
		const x = arr[i]
		while (p >= 0 && arr[p] > x) {
			arr[p+1] = arr[p] // 把arr[p]往后移
			p--
		}
		arr[p+1] = x 
	}
}

function bucket_sort(arr, K, S) { // K是桶的数量，S是桶的大小
	const buckets = Array.from({ length: K }, () => [])
	// 放入桶中
	for (let i = 0; i < arr.length; i++) {
		const index = ~~(arr[i] / S)
		buckets[index].push(arr[i])
	}
	// 对每个桶进行排序
	for (let i = 0; i < buckets.length; i++) {
		insertSort(buckets[i])
	}
	
	// 合并
	return [].concat(...buckets)
}

console.log(bucket_sort(arr, 11, 10))