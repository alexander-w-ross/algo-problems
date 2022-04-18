const { assert } = require("./utils");

// Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function leafList(root) {
  if (!root) return [];

  const stack = [root];
  const output = [];

  while (stack.length > 0) {
    const curr = stack.pop();

    if (!curr.left && !curr.right) output.push(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return output;
}
// function leafList(root) {
//   if (!root) return [];

//   if (!root.left && !root.right) return [root.val];
//   return [...leafList(root.left), ...leafList(root.right)];
// }

function test00() {
  // test_00:
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f

  assert(leafList(a), ["d", "e", "f"], "test_00 failed");
}

function test01() {
  // test_01:
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");
  const h = new Node("h");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /       \
  //   g         h

  assert(leafList(a), ["d", "g", "h"], "test_01 failed");
}

function test02() {
  const a = new Node(5);
  const b = new Node(11);
  const c = new Node(54);
  const d = new Node(20);
  const e = new Node(15);
  const f = new Node(1);
  const g = new Node(3);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  e.left = f;
  e.right = g;

  //          5
  //       /    \
  //      11    54
  //    /   \
  //   20   15
  //        / \
  //       1  3

  assert(leafList(a), [20, 1, 3, 54], "test_02 failed");
}
function test03() {
  const x = new Node("x");

  assert(leafList(x), ["x"], "test_03 failed");
}

function test04() {
  assert(leafList(null), [], "test_04 failed");
}

test00();
test01();
test02();
test03();
test04();
