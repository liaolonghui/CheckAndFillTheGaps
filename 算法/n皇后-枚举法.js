
// 如 [0,1,2,3,4,5,6,7,8,9,10,12,13,14,15] 表示一个4*4棋盘
// x = Math.floor(p / n)
// y = p % n
// 例如当标识为p=9时，x=2 y=1 得到位置[2][1]

function queen(n, decisions=[], hset={}) {  // n表示皇后数量和棋盘大小       decisions决策（一维数组）
	if (decisions.length === n) {
		decisions.sort((a,b)=>a-b)
		const hash = decisions.join('-')
		if (hset[hash]) {
			return [] // 如果已经存在该解了则直接返回一个空数组
		}
		hset[hash] = 1
		return is_goal(n, decisions) ? [decisions] : []
	}
	let r = []
	for (let i = 0; i < n*n; i++) {
		if (decisions.indexOf(i) === -1) {
			r = r.concat(queen(n, decisions.concat(i), hset))
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

console.log(queen(6))

// 性能不行，解决6皇后都吃力