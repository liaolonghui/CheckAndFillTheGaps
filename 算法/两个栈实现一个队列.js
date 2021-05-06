class Queue {
	constructor() {
		this.s1 = [],
		this.s2 = []
	}
	enqueue(num) {
		this.s1.push(num)
	}
	dequeue() {
		while (this.s1.length>0) {
			this.s2.push(this.s1.pop())
		}
		if (this.s2.length > 0) {
			return this.s2.pop()
		}
	}
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
console.log(q.dequeue())
console.log(q.dequeue())