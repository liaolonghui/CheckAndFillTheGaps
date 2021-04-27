function hanoi (num, from, use, to) {
  if (num === 1) {
    console.log(`把${num}号圆盘从${from}移动到${to}`)
  } else {
    hanoi(num-1, from, to, use)
    console.log(`把${num}号圆盘从${from}移动到${to}`)
    hanoi(num-1, use, from, to)
  }
}

hanoi(3, 'A', 'B', 'C')