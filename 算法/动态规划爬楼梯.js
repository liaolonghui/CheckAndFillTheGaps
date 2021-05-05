// 自下而上构造

function steps(n) {
	const s = [1, 1] // 爬0层有一种走法，爬1层有一种走法
	for (let i = 2; i <= n; i++) {
		s.push(s.reduce((a, b) => a+b))  // 从2开始往后，每一项等于前面所有项的和
	}
	return s.pop()
}

console.log(steps(10))