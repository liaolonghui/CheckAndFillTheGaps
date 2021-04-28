const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 4, 32, 23, 25, 28, 82]

Sort = (arr) => {
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
}

Sort(arr)
console.log(arr)