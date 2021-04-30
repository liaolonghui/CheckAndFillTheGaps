// 把长度为n的输入序列分成两个长度为n/2的子序列；
// 对这两个子序列分别采用归并排序；
// 将两个排序好的子序列合并成一个最终的排序序列。

const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]

//缺点：创建许多额外的内存空间
function mergeSort (arr) {
  const len = arr.length
  if (len < 2) {  // 将数组一分为二，直到每个数组最多只有一个元素时
    return arr
  }
  const middle = Math.floor(len/2) // 中间值
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) { // 按大小顺序合并数组
  const result = []

  while (left.length>0 && right.length>0) {
    if (left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  while (left.length > 0) {
    result.push(left.shift())
  }
  while (right.length > 0) {
    result.push(right.shift())
  }

  return result
}


console.log(mergeSort(arr))