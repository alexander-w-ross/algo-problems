const zipperLists = (head1, head2) => {
  let head = head1;
  let curr1 = head1.next;
  let curr2 = head2;
  let tail = head1;
  let counter = 0;
  while (curr1 && curr2) {
    if (counter % 2 === 0) {
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    counter += 1;
    tail = tail.next;
  }
  tail.next = curr1 || curr2;
  return head;
};
