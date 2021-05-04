// 求出{a, b, c}的所有子集       有 3²=9 个
// {a,b,c} {a,b} {a,c} {b,c} {a} {b} {c} {}

// 决策树问题？


function find_subsets(S, decisions=[]) {     // S是全集    decitions是布尔型数组
	
	// 所有决策都做了
	if (S.length === decisions.length) {
		const sub = S.filter((item, index) => {
			return decisions[index]
		})
		console.log(sub)
	} else {
		find_subsets(S, decisions.concat(true))
		find_subsets(S, decisions.concat(false))
	}
	
}

const SSS = ['a', 'b', 'c']
find_subsets(SSS)

