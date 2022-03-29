const createLinkedList = (values) => {
  if (values.length === 0) return null;
  let curr = values.shift();
  let head = new Node(curr);
  let dummy = head;
  head.next = createLinkedList(values);
  return dummy;
};
