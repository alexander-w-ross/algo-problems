function getAvg(array) {
  let sum = 0;
  for (let val of array) {
    sum += val;
  }
  return sum / array.length;
}

const levelAverages = (root) => {
  if (!root) return [];

  const stack = [{ node: root, level: 0, avg: root.val }];

  const levels = [];
  const avgs = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (levels[curr.level]) levels[curr.level].push(curr.node.val);
    else levels[curr.level] = [curr.node.val];

    if (curr.node.left)
      stack.push({ node: curr.node.left, level: curr.level + 1 });
    if (curr.node.right)
      stack.push({ node: curr.node.right, level: curr.level + 1 });
  }
  for (let level of levels) {
    avgs.push(getAvg(level));
  }

  return avgs;
};
