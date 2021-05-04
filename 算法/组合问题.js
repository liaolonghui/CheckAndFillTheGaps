function combination(S, K) {
	if (K === 0 || S.length === K) {
		return [ S.slice(0, K) ]
	}
	const [first, ...others] = S
	let r = []
	r = r.concat(combination(others, K-1).map(c => [first, ...c]))
	r = r.concat(combination(others, K))
	return r
}

const S = ['A', 'B', 'C', 'D']
console.log(combination(S, 2))