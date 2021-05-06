function walk(x, y) {
	if (x>0 && y>0) {
		return walk(x-1, y) + walk(x, y-1)
	} else if (x>0) {
		return walk(x-1, y)
	} else if (y>0) {
		return walk(x, y-1)
	} else {
		return 1
	}
}

console.log(walk(4,3))