// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

const jump = (n) => {
  if (n <= 2) {
    return n
  }
  return jump(n-1) + jump(n-2)
}