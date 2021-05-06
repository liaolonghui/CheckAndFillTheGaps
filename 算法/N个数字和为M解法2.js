// 相比较于解法一，少了decisions每次递归concat()时所需要的O(n)复杂度
// 只是一个微优化......

function sumN(arr, n, m) {
	// 最终结果
	let r = null
	// decisions
	const decisions = []
	
	function inner(i=0, n, m) {
		// 有结果r了
		if (r) return
		// 找到结果了，把结果赋值给r
		if (m === 0 && n === 0) {
			r = decisions.slice()
			return
		}
		// 没有找到
		if (i === arr.length || n === 0 || m < 0) {
			return
		}
		
		decisions.push(arr[i])
		inner(i+1, n-1, m-arr[i])
		decisions.pop()
		inner(i+1, n, m)
		
	}
	inner(0, n, m)
	return r
	
}




const arr = [1, 3, 8, 5, 2, 7, 4]
console.log(sumN(arr, 2, 11))
console.log(sumN(arr, 4, 3))