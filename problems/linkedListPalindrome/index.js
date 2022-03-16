/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  if (head) {
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    let [prev, curr, next] = [null, slow, null];
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    while (prev) {
      if (prev.val !== head.val) return false;
      prev = prev.next;
      head = head.next;
    }
    return true;
  }
  return head;
};
