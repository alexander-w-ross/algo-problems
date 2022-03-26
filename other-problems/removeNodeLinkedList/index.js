const removeNode = (head, targetVal) => {
  if (!head.next) return null;
  if (head.val === targetVal) return head.next;

  let curr = head.next;
  let prev = head;
  let dummy = prev;

  while (curr) {
    if (curr.val === targetVal) {
      prev.next = curr.next;
      return dummy;
    }
    prev = prev.next;
    curr = curr.next;
  }
  return dummy;
};
