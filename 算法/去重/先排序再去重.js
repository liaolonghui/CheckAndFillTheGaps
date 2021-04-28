let ary = [12, 23, 42, 21, 100, 12, 11, 11, 42, 100, 23, 21, 28, 28]

ary.sort((a, b) => a-b)
ary = ary.join('@')+'@'

const reg = /(\d+@)\1*/g

const newArr = []
ary.replace(reg, (val, group1) => {
  newArr.push(Number(group1.slice(0, group1.length-1))) // newArr.push(parseFloat(group1))
})


console.log(ary)
console.log(newArr)



// 去重还有很多方式，如利用对象键值对的方式，双层循环的方式.........