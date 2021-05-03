// 非比较型排序
// 待排序集合 键为整数
// 键的最大值k 

// 0(n+k)
const arr = [52, 70, 17, 26, 15, 12, 21, 3, 4]

function counting_sort (arr) {
	const max = Math.max(...arr)
	// 累计数组
	const C = Array(max + 1).fill(0)
	// 结果数组
	const R = Array(arr.length)
	
	// 累计位递增
	arr.forEach((_, i) => C[arr[i]]++)
	// 累计求和
	for (var i = 1; i < C.length; i++) {
		C[i] = C[i-1] + C[i]
	}
	// 结果取出
	for (var i = 0; i < arr.length; i++) {
		const p = C[arr[i]] - 1 // 回写位置
		C[arr[i]]--  // 新回写位置
		R[p] = arr[i]  // 回写结果
	}
	
	return R
}

console.log(counting_sort(arr))