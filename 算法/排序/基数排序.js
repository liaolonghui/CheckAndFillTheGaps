function radix (arr) {
	const max = Math.max(...arr) // 得到最大的数
	const buckets = Array.from({ length: 10 }, () => [] )
	
	// 有效位（从个位开始，一直到数组中最大数的位数）
	let m = 1
	while (m <= max) {
		arr.forEach(number => {
			const digit = ~~((number % (m * 10)) / m) // 得到对应位的数字
			buckets[digit].push(number)
		})
		
		let j = 0
		buckets.forEach(bucket => {
			while (bucket.length > 0) {
				arr[j++] = bucket.shift()
			}
		})
		
		m *= 10
	}
}

const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]

radix(arr)
console.log(arr)