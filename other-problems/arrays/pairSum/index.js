/**
 *
 * @param {number[]} numbers
 * @param {number} targetSum
 * @returns {[number, number]}
 */
const pairSum = (numbers, targetSum) => {
  let hash = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const complement = targetSum - currentNumber;
    if (hash.has(complement)) return [hash.get(complement), i];
    if (!hash.has(currentNumber)) hash.set(currentNumber, i);
  }
};
console.log(pairSum([3, 2, 5, 4, 1], 8));
