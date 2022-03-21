/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time complexity O(n)
// Space complexity O(1)

function singleNonRepeatingNumber(nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
}
console.log(singleNonRepeatingNumber([5, 7, 7, 2, 5]));
