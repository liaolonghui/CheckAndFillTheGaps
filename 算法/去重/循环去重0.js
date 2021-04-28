const arr = [12, 23, 42, 21, 100, 12, 11, 11, 42, 100, 23, 21, 28, 28]

for (let i = 0; i < arr.length-1; i++) {
  let item = arr[i] // 要对比的那一项
  let other = arr.slice(i+1)
  if (other.indexOf(item) !== -1) {
    arr.splice(i, 1)  // 这样做有一些性能问题... (i--是因为数组塌陷。。。)
    i--
  }
}

console.log(arr)