const allTreePaths = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];
  const paths = [];
  const leftSubPaths = allTreePaths(root.left);
  // consider what node "a" would receive from left
  // [
  //   [b,d]
  //   [b,e]
  // ]
  for (let subPath of leftSubPaths) {
    paths.push([root.val, ...subPath]);
  }
  const rightSubPaths = allTreePaths(root.right);
  // consider what node "a" would receive from right
  // [
  //   [c,f]
  // ]
  for (let subPath of rightSubPaths) {
    paths.push([root.val, ...subPath]);
  }
  return paths;
};
