const arr = [12, 23, 42, 21, 100, 12, 11, 11, 42, 100, 23, 21, 28, 28]

const newArr = []
for (let i = 0; i < arr.length; i++) {
  let item = arr[i] // 要对比的那一项
  let other = arr.slice(i+1)
  if (other.indexOf(item) === -1) { // 也可以使用es6的includes
    newArr.push(item)
  }
}

console.log(newArr)