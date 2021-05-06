// 从arr中取n个数字和为m （arr是一个不重复的正整数集合）
// 解法1：决策树 递归

// i标识已经做了几次决策
function sumN(arr, n, m, i=0, decisions=[]) {
	if (m === 0 && n === 0) {
		return decisions
	}
	if (i === arr.length || n === 0) {
		return null
	}
	return sumN(arr, n-1, m-arr[i], i+1, decisions.concat(arr[i])) || sumN(arr, n, m, i+1, decisions)
}


const arr = [1, 3, 8, 5, 2, 7, 4]
console.log(sumN(arr, 2, 11))
console.log(sumN(arr, 4, 3))