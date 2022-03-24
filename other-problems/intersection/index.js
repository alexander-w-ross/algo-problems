/**
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns number[]
 */
const intersection = (a, b) => {
  let hash = new Map();
  let output = [];
  for (let i = 0; i < a.length; i++) {
    hash.set(a[i], null);
  }
  for (let i = 0; i < b.length; i++) {
    if (hash.has(b[i])) output.push(b[i]);
  }
  console.log(output);
  return output;
};
intersection([2, 4, 6], [4, 2]);
