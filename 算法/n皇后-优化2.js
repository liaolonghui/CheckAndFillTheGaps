
// 如 [0,1,2,3,4,5,6,7,8,9,10,12,13,14,15] 表示一个4*4棋盘
// x = Math.floor(p / n)
// y = p % n
// 例如当标识为p=9时，x=2 y=1 得到位置[2][1]

function queen(n, decisions=[]) {  // n表示皇后数量和棋盘大小       decisions决策（一维数组）
	if (decisions.length === n) {
		return [decisions]  // 此时就不用再对比皇后是否有冲突了
	}
	let r = []
	const start = decisions[decisions.length-1] || -1   // 保证后面的一定比前面的大
	for (let i = start+1; i < n*n; i++) {
		if (decisions.indexOf(i) === -1) {
			if (decisions.every(j => compatible(i, j, n))) { // 先看i加入进去会不会与之前的皇后冲突（优化点）
				r = r.concat(queen(n, decisions.concat(i)))
			}
		}
	}
	return r
}

// 判断两个皇后是否互相攻击 (不能在同一行，同一列，同一对角线)
function compatible(p, q, n) {
	const [x1, y1] = [~~(p/n), p%n]
	const [x2, y2] = [~~(q/n), q%n]
	return x1 !== x2
		&& y1 !== y2
		&& Math.abs(x1-x2) !== Math.abs(y1-y2)
}

// 判断一组决策是不是最终答案
function is_goal(n, decisions) {
	for (let i = 0; i < n; i++) {
		for (let j = i+1; j < n; j++) {
			if (i === j) { continue }
			if (!compatible(decisions[i], decisions[j], n)) {
				return false
			}
		}
	}
	return true
}

console.log(queen(10))

// 解决11皇后就很吃力了
