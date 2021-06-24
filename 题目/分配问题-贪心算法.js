// 小孩们吃饼干(分配问题)  每个小孩最多吃一个
// 使用 贪心算法
// 局部最优解

function devide(children, cookies) {
  children.sort((a,b)=>a-b)
  cookies.sort((a,b)=>a-b)

  let child = 0 // 能吃饱的小孩数
  let cookie = 0 // 饼干索引

  while(child < children.length && cookie < cookies.length) {
    // 如果小孩吃某一块饼干能吃饱
    if (children[child] <= cookies[cookie++]) {
      child++
    }
  }

  return child
}

const children = [2, 1, 3, 5, 4] // 饥饿度
const cookies = [5, 2, 3, 4] // 饼干

console.log(devide(children, cookies))