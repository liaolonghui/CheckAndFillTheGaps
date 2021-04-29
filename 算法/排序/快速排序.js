const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]


var devide_Xin = function (array, start, end) {
  if(start >= end) return array;
  var baseIndex = Math.floor((start + end) / 2), // 基数索引
       i = start,
       j = end;

  while (i <= j) {
      while (array[i] < array[baseIndex]) {
          i++;
      }
      while (array[j] > array[baseIndex])  {
          j--;
      }

      if(i <= j) {
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          i++;
          j--;
      }
  }
  return i;
}

var quickSort_Xin = function (array, start, end) {
  if(array.length < 1) {
      return array;
  }
  var index = devide_Xin(array, start, end);
  if(start < index -1) {
      quickSort_Xin(array, start, index - 1);
  }
  if(end > index) {
      quickSort_Xin(array, index, end);
  }

  return array;
}

console.log(quickSort_Xin(arr, 0, 14)) // 使用时把起始位置，结束位置的索引传入