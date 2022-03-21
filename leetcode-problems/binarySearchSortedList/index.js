/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let firstIndex = 0;
  let lastIndex = nums.length - 1;
  if (target < nums[0] || target > nums[lastIndex]) return -1;
  while (firstIndex <= lastIndex) {
    let midpoint = parseInt((firstIndex + lastIndex) / 2);
    if (target !== nums[midpoint] && firstIndex === lastIndex) return -1;
    else if (target === nums[midpoint]) return midpoint;
    else if (target < nums[midpoint]) {
      lastIndex = midpoint - 1;
    } else {
      firstIndex = midpoint + 1;
    }
  }
};
