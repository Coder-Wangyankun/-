function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head, fast = head
    while (fast && fast.next) {
      // slow指针每次移动一步
      slow = slow && slow.next
      // fast指针每次移动两步
      fast = fast.next.next
      // slow、fast指针相遇
      // 从相遇点、头节点同时出发，每次都只走一步，会在环的入口相遇
      if (slow === fast) {
        while (slow !== head) {
          slow = slow && slow.next
          head = head && head.next
        }
        return head
      }
    }
    return null
};