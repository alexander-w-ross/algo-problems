class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  const newNode = new Node(value);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }
  let counter = 1;
  let curr = head.next;
  let prev = head;
  let dummy = prev;

  while (curr) {
    if (counter === index) {
      newNode.next = curr;
      prev.next = newNode;
      return dummy;
    }
    prev = prev.next;
    curr = curr.next;
    counter += 1;
  }
  prev.next = newNode;
  return dummy;
};
