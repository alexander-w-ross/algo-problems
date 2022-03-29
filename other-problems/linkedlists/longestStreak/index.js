const longestStreak = (head) => {
  if (!head) return 0;
  let curr = head;
  let counter = 0;
  let max = 0;
  let currVal = head.val;
  while (curr) {
    if (currVal === curr.val) counter++;
    else {
      if (max < counter) max = counter;
      counter = 1;
      currVal = curr.val;
    }
    curr = curr.next;
  }
  return max < counter ? counter : max;
};
