function lcs(s1, s2) {
	const dp = []
	for (let i = 0; i <= s2.length; i++) {
		dp[i] = []  // 根据s2长度建立一维数组（个数是 s2长度+1）
		
		for (let j = 0; j <= s1.length; j++) {
			if (i === 0 || j === 0) {
				// i===0或者j===0时
				dp[i][j] = 0
			} else if (s1[j-1] === s2[i-1]) {
				// s1[?] === s2[?] 时
				// 此时dp[i][j]的值等于dp[i-1][j-1]的值加一
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				// 不相等时
				// 此时dp[i][j]的值等于 dp[i-1][j]和dp[i][j-1] 两值中的最大值
				dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
			}
		}
		
	}
	
	return dp[s2.length][s1.length]
	
}

console.log(lcs('bss2516scmmnd', 'bnmgjcxvxvnd'))