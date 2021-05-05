// 爬n层楼有几种方法
// 求爬n层相当于求：爬n-1层的方法 + 爬n-2层的方法 + 。。。+ 爬2层的方法 + 爬1层的方法 + 爬0层的方法（爬0层可理解为直接跳到n层）

function steps(n) {
	if (n === 0) {
		return 1
	}
	return [...Array(n)].map((_, i) => i)  // 生成一个 0，1，2，...，n-1 的数组
		.reduce((s, i) => {
			return steps(i) + s
		},0)
}


console.log(steps(5))


// 这样的话有太多重复子结构，思考如何从底部向上构造递归程序？