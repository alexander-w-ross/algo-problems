/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time complexity O(n)
// Space complexity O(n)

function missingNumbers(nums) {
  const set = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (set.has(i)) set.delete(i);
    else {
      set.add(i);
    }
  }
  return [...set];
}
missingNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
