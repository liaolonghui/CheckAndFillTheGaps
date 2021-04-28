const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]


function Insertion(arr) {
  let len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && current < arr[preIndex]) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

Insertion(arr)
console.log(arr)