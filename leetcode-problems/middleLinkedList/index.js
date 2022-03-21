/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let slowptr = head;
  let fastptr = head;
  if (head) {
    while (fastptr && fastptr.next) {
      slowptr = slowptr.next;
      fastptr = fastptr.next.next;
    }
  }
  return slowptr;
}
