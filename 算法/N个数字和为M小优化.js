function sumN(arr, n, m, i=0, decisions=[]) {
	if (m === 0 && n === 0) {
		return decisions
	}
	if (i === arr.length || n === 0 || m < 0) {  // 加上一个判断M<0。剪枝
		return null
	}
	return sumN(arr, n-1, m-arr[i], i+1, decisions.concat(arr[i])) || sumN(arr, n, m, i+1, decisions)
}



const arr = [1, 3, 8, 5, 2, 7, 4]
console.log(sumN(arr, 2, 11))
console.log(sumN(arr, 4, 3))