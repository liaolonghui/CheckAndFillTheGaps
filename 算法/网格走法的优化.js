function walk(w, h) {
	const dp = []
	for (let i = 0; i <= h; i++) {
		dp[i] = []
		for (let j = 0; j <= w; j++) {
			if (i===0 && j===0) {
				dp[i][j] = 1
			} else if (i===0) {
				dp[i][j] = dp[i][j-1]
			} else if (j===0) {
				dp[i][j] = dp[i-1][j]
			} else {
				dp[i][j] = dp[i-1][j] + dp[i][j-1]
			}
		}
	}
	return dp[h][w]
}

console.log(walk(4, 3))