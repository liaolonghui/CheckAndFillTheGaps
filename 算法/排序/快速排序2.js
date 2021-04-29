const arr = [52, 2, 23, 32, 21, 100, 12, 11, 8, 42, 302, 23, 25, 28, 82]


var quickSort_New = function(ary, left, right) {
  if(left >= right) {
      return ary;
  }

  var i = left,
       j = right;
       base = ary[left];

  while (i < j) {
      // 从右边起，寻找比基数小的数
      while (i<j && ary[j] >= base) {
          j--;
      }

      // 从左边起，寻找比基数大的数
      while (i<j && ary[i] <= base) {
          i++
      } 

      if (i<j) {
          var temp = ary[i];
          ary[i] = ary[j];
          ary[j] = temp;
      }
  }

  ary[left] = ary[i];
  ary[i] = base;

  quickSort_New(ary, left, i-1);
  quickSort_New(ary, i+1, right);

  return ary;
}


console.log(quickSort_New(arr, 0, 14))