const arr = [12, 23, 42, 21, 100, 12, 11, 11, 42, 100, 23, 21, 28, 28]

// const newArr = [...new Set(arr)]
const newArr = Array.from(new Set(arr))
console.log(newArr)