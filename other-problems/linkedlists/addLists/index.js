const addLists = (head1, head2) => {
  let num1 = [];
  let num2 = [];

  while (head1) {
    num1.unshift(head1.val);
    head1 = head1.next;
  }
  while (head2) {
    num2.unshift(head2.val);
    head2 = head2.next;
  }
  const total = String(parseInt(num1.join("")) + parseInt(num2.join(""))).split(
    ""
  );

  if (total.length === 1) return new Node(total[0]);
  let head = new Node(total[total.length - 1]);
  let dummy = head;
  for (let i = total.length - 2; i >= 0; i--) {
    head.next = new Node(total[i]);
    head = head.next;
  }
  return dummy;
};
