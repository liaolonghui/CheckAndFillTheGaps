function parse(str) {
	return str.split('&').reduce((obj, item) => {
		const [key, value] = item.split('=')
		if (!value) {
			return obj
		}
		// obj[key] = value
		deep_set(obj, key.split(/[\[\]]/g).filter(i=>i), value) // 先用[]把key分开（如a[name]分为a和name）传给deep_set
		return obj
	},{})
}

function deep_set(obj, path, value) {
	let i = 0
	for (; i < path.length-1; i++) { // 确保a.name的这个a存在......      a.b.c.name这些更长的也是一样的道理(先确保a存在，再确保b存在......)
		if (obj[path[i]] === undefined) {
			// 看他的下一项是不是数字，是数字说明应该解析成数组
			if (path[i+1].match(/^\d+$/)) {
				obj[path[i]] = []
			} else {
				obj[path[i]] = {}
			}
		}
		obj = obj[path[i]]
	}
	obj[path[i]] = decodeURIComponent(value)
}



console.log(parse('a=555&b="我是谁555"'))
console.log(parse('a=&b=a莫得值'))

// a[name] a[age] 其实要解析为：a{ name: 'xxx', age: 'xxxx' } 对象
console.log(parse('a[name]="llh"&a[age]="18岁"'))
// 空格 %20
console.log(parse('color=Deep%20Blue'))
// a[0]。。。这样的应该解析成数组
console.log(parse('a[0]=1&a[1]=2'))