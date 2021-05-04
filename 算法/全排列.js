// 全排列问题    abc的全排列         有 !3=6 个
// abc acb bac bca cab cba

function permutation(str) {   // str是全集

	if (str.length === 1) {
		return str
	}
	
	let set = []
	for (let i = 0; i < str.length; i++) {
		const index = str.indexOf(str[i]) // 从str中拿一项出来
		const otherStr = str.slice(0, index) + str.slice(index+1)
		const otherPerm = permutation(otherStr) // 用剩余的otherStr全排列 用于和str组合
		for (let j = 0; j < otherPerm.length; j++) {
			set.push(str[i] + otherPerm[j])
		}
	}
	
	return set
}


console.log(permutation('abc'))