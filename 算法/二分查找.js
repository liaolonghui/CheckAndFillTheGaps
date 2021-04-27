let arr = [0, 22, 55, 56, 58, 66, 68, 72, 75, 78, 88, 99, 102, 120] // 有序

function searchNum (n, arr) {
  let l=0, r=arr.length-1
  while (l <= r) {
    let mid = Math.floor((l+r)/2) // 中间值
    if (arr[mid] === n){
      return mid
    }else if (arr[mid] > n) {
      r = mid-1
    } else {
      l = mid+1
    }
  }
  return -1
}

console.log(searchNum(120, arr))
