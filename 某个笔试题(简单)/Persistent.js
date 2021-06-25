// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.
// 中文如下：
// 编写一个函数，任意一个整数，拆分成个位数然后相乘，得到的乘积再次相乘，直到乘积为单数为止，函数返回拆分次数。

function persistence(num, res=0) {
  if (num.toString().length <= 1) {
    return res
  }
  const numArr = num.toString().split('')
  const value = numArr.reduce((val, num) => {
    return val * num
  }, 1)
  res++
  return persistence(value, res)
}

console.log(persistence(399))
  