// 队列
// [1,2,3,4,5] 经过一个环状铁轨进行位置变换，是否能变成需要的顺序

function isTrans(now, need) {
	const queue = []
	for (let t of need) {
		// 如果队列中有则出队
		if (queue[queue.length-1] === t) {
			queue.pop()
			break
		}
		// 如果原车厢和t不对应，则把该车厢移入队列
		let y = null
		while (now.length > 0 && (y = now.shift()) !== t) {
			queue.unshift(y)
		}
	}
	return queue.length === 0 // 队列长度等于0说明全部车厢都移出了，所以可以变换
}

console.log(isTrans([1,2,3,4,5], [1,5,4,2,3]))
console.log(isTrans([1,2,3,4,5], [1,3,4,2,5]))



// 使用数组的shift，unshift有性能问题，最好自己实现queue......