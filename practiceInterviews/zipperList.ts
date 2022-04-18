// Write a function, zipperLists, that takes in the head of two linked lists as arguments.
// The function should zipper the two lists together into single linked list by alternating nodes.
// If one of the linked lists is longer than the other,
// the resulting list should terminate with the remaining nodes.
// The function should return the head of the zippered linked list.

import { assert } from "./utils.ts";

function linkedListToArray<T>(headNode: ListNode<T> | null) {
  const output = [];
  while (headNode) {
    output.push(headNode.val);
    headNode = headNode.next;
  }

  return output;
}

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T, next: ListNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

// a -> b -> c -> d -> e -> f
// x -> y -> z
function zipperLists<T>(head1: ListNode<T> | null, head2: ListNode<T> | null) {
  let count = 0;
  let tail: ListNode<T> | null;
  const dummy = head1;
  while (head1 !== null && head2 !== null) {
    if (count % 2 === 0) {
      tail = head1.next;
      head1.next = head2;
      head1 = tail;
    } else {
      tail = head2.next;
      head2.next = head1;
      head2 = tail;
    }
  }
  return dummy;
}

function test00() {
  const a = new ListNode("a");
  const b = new ListNode("b");
  const c = new ListNode("c");
  a.next = b;
  b.next = c;
  //   a -> b -> c

  const x = new ListNode("x");
  const y = new ListNode("y");
  const z = new ListNode("z");
  x.next = y;
  y.next = z;
  //   x -> y -> z

  // zipperLists(a, x);
  // a -> x -> b -> y -> c -> z

  assert(
    linkedListToArray(zipperLists(a, x)),
    ["a", "x", "b", "y", "c", "z"],
    "test_00 failed"
  );
}
// test00();

function test01() {
  // test_01:
  const a = new ListNode("a");
  const b = new ListNode("b");
  const c = new ListNode("c");
  const d = new ListNode("d");
  const e = new ListNode("e");
  const f = new ListNode("f");
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  //   a -> b -> c -> d -> e -> f
  //   x -> y -> z

  const x = new ListNode("x");
  const y = new ListNode("y");
  const z = new ListNode("z");
  x.next = y;
  y.next = z;
  //   x -> y -> z

  // a -> x -> b -> y -> c -> z -> d -> e -> f

  assert(
    linkedListToArray(zipperLists(a, x)),
    ["a", "x", "b", "y", "c", "z", "d", "e", "f"],
    "test_00 failed"
  );
}
test01();

// test_01:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// a -> b -> c -> d -> e -> f
// x -> y -> z

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// x -> y -> z

// zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f

// test_02:
// const s = new Node("s");
// const t = new Node("t");
// s.next = t;
// s -> t

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// one.next = two;
// two.next = three;
// three.next = four;
// 1 -> 2 -> 3 -> 4

// zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4
// test_03:
// const w = new Node("w");

// w

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// one.next = two;
// two.next = three;
// 1 -> 2 -> 3

// zipperLists(w, one);
// w -> 1 -> 2 -> 3

// test_04:
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// one.next = two;
// two.next = three;
// 1 -> 2 -> 3

// const w = new Node("w");
// w

// zipperLists(one, w);
// 1 -> w -> 2 -> 3
