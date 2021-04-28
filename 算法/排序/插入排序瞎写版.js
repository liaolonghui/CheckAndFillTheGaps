const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]

function insertSort (arr) {
  for (let i = 1; i < arr.length; i++) { // 先认为第一个是有序的，从下标1开始一个一个 插入这个有序组
    for (let j = i; j >= 0; j--) {
      if (arr[j-1] > arr[j]) {
        const temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      } else {
        break
      }
    }
  }
}

insertSort(arr)
console.log(arr)