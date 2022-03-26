/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeLists = (head1, head2) => {
  if (!head1 && !head2) return null;
  if (!head1 && head2) return head2;
  if (!head2 && head1) return head1;
  let curr1 = head1;
  let curr2 = head2;
  let tail = new Node(0);
  let head = tail;

  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      tail.next = curr1;
      curr1 = curr1.next;
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next;
  }
  tail.next = curr1 || curr2;

  return head.next;
};
// iterative
// var mergeTwoLists = function (list1, list2) {
//   let dummy = new ListNode(0, null);
//   let tail = dummy;

//   while (list1 && list2) {
//     if (list1.val < list2.val) {
//       tail.next = l1;
//       list1 = list1.next;
//     } else {
//       tail.next = l2;
//       list2 = list2.next;
//     }
//     tail = tail.next;
//   }
//   tail.next = list1 || list2;
//   return dummy.next;
// };

// recursive
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
