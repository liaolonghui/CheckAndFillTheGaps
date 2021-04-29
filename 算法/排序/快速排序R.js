const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]

function quickSort (arr) {

  if (arr.length <= 1) return arr

  let pivotIndex = Math.floor(arr.length/2)
  let pivot = arr.splice(pivotIndex, 1)[0]

  let right = []
  let left = []
  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(arr))