class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
class MyLinkedList {
  dummyNode: ListNode;
  head: ListNode | null;
  length: number;
  constructor() {
    this.dummyNode = new ListNode();
    this.length = 0;
  }

  get(index: number): number {
    if (index > -1 && index < this.length) {
      return this.getNode(index).val;
    } else {
      return -1;
    }
  }

  // 获取指定索引的节点
  getNode(index: number): ListNode {
    let cur: ListNode | null = this.dummyNode;
    while (index >= 0 && cur?.next) {
      cur = cur.next;
      index--;
    }
    return cur;
  }

  addAtHead(val: number): void {
    let newNode = new ListNode(val, this.dummyNode.next);
    this.dummyNode.next = newNode;
    this.length++;
  }

  addAtTail(val: number): void {
    // 获取尾部节点
    let tailNode = this.getNode(this.length - 1);
    tailNode.next = new ListNode(val);
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    // 如果 index 比长度更大，该节点将 不会插入 到链表中
    if (index > this.length) return;
    // 如果 index 等于链表的长度，那么该节点会被追加到链表的末尾
    if (index === this.length) {
      this.addAtTail(val);
      return;
    }
    // 将一个值为 val 的节点插入到链表中下标为 index 的节点之前
    // 特殊情况，index = 0，插入到头节点之前
    if (index === 0) {
      this.addAtHead(val);
      return;
    } else {
      // 获取index位置前一个节点
      let preNode = this.getNode(index - 1);
      let curNode = new ListNode(val);
      curNode.next = preNode.next;
      preNode.next = curNode;
      this.length++;
    }
  }

  deleteAtIndex(index: number): void {
    // 下标有效
    if (index >= 0 && index < this.length) {
      // 特殊情况，index = 0， 删除头节点
      if (index === 0 && this.dummyNode.next) {
        this.dummyNode.next = this.dummyNode.next = this.dummyNode.next.next;
        this.length--;
      } else {
        // 获取index位置前一个节点
        let preNode = this.getNode(index - 1);
        preNode.next = preNode.next?.next as ListNode | null;
        this.length--;
      }
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */