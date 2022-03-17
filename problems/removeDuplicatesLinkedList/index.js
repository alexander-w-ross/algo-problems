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
var deleteDuplicates = function (head) {
  if (!head) return head;

  let curr = head;
  while (curr && curr.next) {
    let next = curr.next;
    if (curr.val === next.val) curr.next = next.next;
    else curr = next;
  }
  return head;
};
