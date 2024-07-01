function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummyNode = new ListNode()
    dummyNode.next = head
    let fast: ListNode | null = dummyNode, slow = dummyNode
    // fast指针先走n步
    while (n > 0) {
      fast = fast.next as ListNode
      n--
    }
    // 之后fast、slow指针同时走，fast指针走到链表末尾后，
    // slow指针的下一个节点就是要删除的节点
    while (fast?.next) {
      fast = fast.next as ListNode
      slow = slow.next  as ListNode
    }
    slow.next = slow.next?.next as ListNode
    return dummyNode.next
};