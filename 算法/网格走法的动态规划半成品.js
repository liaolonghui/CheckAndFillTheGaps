// f(x,y)
// (x=0,y=0时) f(x,y) = 1
// (x=0,y>0时) f(x,y) = f(x-1, y)
// (x>0,y=0时) f(x,y) = f(x, y-1)
// (x>0,y>0时) f(x,y) = f(x-1, y) + f(x, y-1)


// 从(0,0)到(x,y)有几种走法
function walk(x, y, dp=[]) {
	if (!dp[y]) {
		dp[y] = []
	}
	if (dp[y][x] !== undefined) {
		return dp[y][x]
	}
	
	if (x > 0 && y > 0) {
		dp[y][x] = walk(x-1, y, dp) + walk(x, y-1, dp)
	} else if (x > 0) {
		dp[y][x] = walk(x-1, y, dp)
	} else if (y > 0) {
		dp[y][x] = walk(x, y-1, dp)
	} else {
		dp[y][x] = 1
	}
	
	return dp[y][x]
	
}

console.log(walk(3, 4))