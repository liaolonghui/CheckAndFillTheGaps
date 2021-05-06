// 对于A=[1,2,3,4,5] 二进制数10011代表[1,4,5]
// 0表示没选，1表示选了

function sumByBinaryCode(A, code) {
	const max = 1 << A.length
	const p = []
	let sum = 0
	for (let i = 0; i < A.length; i++) {
		if (code & (1 << i)) {
			sum += A[i]
			p.push(A[i])
		}
	}
	return {sum, p}
}

function sumN(A, n, m) {
	const max = 1 << A.length
	for (let i = 0; i < max; i++) {
		const {sum, p} = sumByBinaryCode(A, i)
		if (sum === m) {
			return p
		}
	}
	return null
}



// console.log(sumByBinaryCode([1,2,3,4], 0b1111))


const arr = [1, 3, 8, 5, 2, 7, 4]
console.log(sumN(arr, 2, 11))
console.log(sumN(arr, 4, 3))