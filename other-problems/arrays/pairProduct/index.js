/**
 *
 * @param {number[]} numbers
 * @param {number} targetProduct
 * @returns [nubmer, number]
 */

const pairProduct = (numbers, targetProduct) => {
  let hash = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const division = targetProduct / currentNumber;
    if (hash.has(division)) return [hash.get(division), i];
    hash.set(currentNumber, i);
  }
};
pairProduct([3, 2, 5, 4, 1], 8); // --> [1, 3]
