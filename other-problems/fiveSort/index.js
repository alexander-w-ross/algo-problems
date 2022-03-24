/**
 *
 * @param {number[]} nums
 * @returns number[]
 */

const fiveSort = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[end] === 5) end--;
    else if (nums[start] === 5) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
    } else start++;
  }
  return nums;
};

fiveSort([12, 5, 1, 5, 12, 7]);
