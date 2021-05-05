function factorial(n, f=1) {
	if (n === 0) return f
	return factorial(n-1, f*n)
}

console.log(factorial(5))