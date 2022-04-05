const treeLevels = (root) => {
  if (!root) return [];

  const stack = [{ node: root, level: 0 }];
  const levels = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (levels[curr.level]) levels[curr.level].push(curr.node.val);
    else levels[curr.level] = [curr.node.val];

    if (curr.node.right)
      stack.push({ node: curr.node.right, level: curr.level + 1 });
    if (curr.node.left)
      stack.push({ node: curr.node.left, level: curr.level + 1 });
  }
  return levels;
};
