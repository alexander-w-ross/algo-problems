# Create linked list

# Problem

Write a function, *createLinkedList*, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

### test_00:

```
createLinkedList(["h", "e", "y"]);
// h -> e -> y

```

### test_01:

```
createLinkedList([1, 7, 1, 8]);
// 1 -> 7 -> 1 -> 8

```

### test_02:

```
createLinkedList(["a"]);
// a

```

### test_03:

```
createLinkedList([]);
// null

```

## Successful Code

```js
const createLinkedList = (values) => {
  if (values.length === 0) return null;
  let curr = values.shift();
  let head = new Node(curr);
  let dummy = head;
  head.next = createLinkedList(values);
  return dummy;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(n)`

## Steps

1. If `values` length is zero, return `null`.
2. Grab first element from array using `array.shift()`.
3. Make a `head` and `dummy` head variables.
4. Recurively call `createLinkedList` for each next value until length is zero, then return `dummy`.
