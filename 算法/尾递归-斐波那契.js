function fib(n, a=1, b=1) {
	if (n <= 1) return b
	return fib(n-1, b, a+b)
}

console.log(fib(5))