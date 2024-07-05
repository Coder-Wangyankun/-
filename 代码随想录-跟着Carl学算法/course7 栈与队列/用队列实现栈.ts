class MyStack {
	queue1: number[];
	queue2: number[]; // 用于备份
	constructor() {
		this.queue1 = [];
		this.queue2 = [];
	}

	push(x: number): void {
		this.queue1.push(x);
	}

	// 弹出栈顶元素
	pop(): number {
		let len = this.queue1.length;
		len--;
		while (len--) {
			this.queue2.push(this.queue1.shift()!);
		}
		let result = this.queue1.shift()!;
		this.queue1 = [...this.queue2]; // 将queue2赋值给queue1
		// 清空queue2
		while (this.queue2.length) {
			this.queue2.shift();
		}
		return result;
	}

	// 获取栈顶元素
	top(): number {
		let num = this.pop();
		this.queue1.push(num);
		return num;
	}

	// 栈是否为空
	empty(): boolean {
		return !this.queue1.length;
	}
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
