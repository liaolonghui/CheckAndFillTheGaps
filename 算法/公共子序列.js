function lcs(s1, s2) {
	if (s1.length === 0 || s2.length === 0) {
		return 0
	}
	// s1与s2尾部字母相等时
	if (s1[s1.length-1] === s2[s2.length-1]) {
		return lcs(s1.slice(0, s1.length-1), s2.slice(0, s2.length-1)) + 1
	} else {
		// 尾部字母不相等时
		return Math.max(lcs(s1.slice(0, s1.length-1), s2), lcs(s1, s2.slice(0, s2.length-1)))
	}
}

console.log(lcs('alabdvbghcdfjkd', 'aasbsdc'))
