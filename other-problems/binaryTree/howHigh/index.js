const howHigh = (node) => {
  if (!node) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};
