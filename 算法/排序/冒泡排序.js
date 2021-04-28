const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]

const bubbleSort = (arr) => {
  const len = arr.length
  for (let i = 0; i < len-1; i++) {
    for (let j = 0; j < len-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}

bubbleSort(arr)
console.log(arr)