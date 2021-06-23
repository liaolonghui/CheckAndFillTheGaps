// 给定一个正整数n，拆分为至少两个正整数。使乘积最大。    (中等难度)

// 递归实现
let mome
function integerBreak (n) {
  mome = new Array(n+1).fill(-1)
  return getMax(n)
}
function getMax(n) {
  if (n === 1) {
    return 1
  }
  if (mome[n] !== -1) {
    return mome[n]
  }

  let res = -1
  for (let i = 1; i < n; i++) {
    res = Math.max(res, i*getMax((n-i)), i*(n-i))      // 可能还要拆分，也可能到此为止不再拆分。。。
  }

  mome[n] = res
  return mome[n]

}

console.log(integerBreak(10))



// DP实现
function integerBreak2 (n) {
  let dp = new Array(n).fill(-1)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j*dp[i-j], j*(i-j))
    }
  }
  return dp[n]
}
console.log(integerBreak(10))