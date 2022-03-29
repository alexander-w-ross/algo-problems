const isUnivalueList = (head) => {
  if (!head) return false;

  let curr = head;
  let unival = curr.val;
  while (curr) {
    if (curr.val !== unival) return false;
    curr = curr.next;
  }
  return true;
};
