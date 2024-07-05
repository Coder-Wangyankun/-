class MyQueue {
  // 用两个栈实现队列
  inStack: number[]; // 输入栈
  outStack: number[]; // 输出栈
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    // 把数据放入输入栈
    this.inStack.push(x);
  }

  // 弹出队头元素
  pop(): number {
    // 1. 输出栈不为空，直接从输出栈弹出数据即可
    // 2. 输出栈为空，就把输入栈数据全部导出给输出栈，再执行步骤1
    if (!this.outStack.length) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack.pop()!;
  }

  // 获取队头元素
  peek(): number {
    // 使用pop获取队头元素
    // 因为pop弹出了元素，需要再添加回去
    let num = this.pop()
    this.outStack.push(num)
    return num
  }

  // 队列是否为空
  empty(): boolean {
    // 两个栈都为空的时候，队列为空
    return !this.inStack.length && !this.outStack.length
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
