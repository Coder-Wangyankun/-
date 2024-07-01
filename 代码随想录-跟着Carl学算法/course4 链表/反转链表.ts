namespace reverseList {
	class ListNode {
		val: number;
		next: ListNode | null;
		constructor(val?: number, next?: ListNode | null) {
			this.val = val === undefined ? 0 : val;
			this.next = next === undefined ? null : next;
		}
	}
  // 双指针
	// function reverseList(head: ListNode | null): ListNode | null {
  //   // 初始化pre、cur指针
	// 	let pre: ListNode | null = null
  //   let cur = head
  //   while (cur) {
  //     // 先记录原有的next结点
  //     let next = cur.next
  //     // 往后移动遍历
  //     cur.next = pre
  //     pre = cur
  //     cur = next
  //   }
  //   // 最后 pre就到了原有链表的末尾，它成为了头结点
  //   return pre
	// }
  // 递归
  function reverse(pre: ListNode | null, cur: ListNode | null): ListNode | null {
    if (cur === null) return pre
    let temp = cur.next
    cur.next = pre
    return reverse(cur, temp)
  }
  function reverseList(head: ListNode | null): ListNode | null {
    return reverse(null, head)
	}
}
