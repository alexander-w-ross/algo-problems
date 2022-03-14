/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let maxSoFar = nums[0];
  let negMax = nums[0];
  let maxAtThisPoint = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxAtThisPoint + nums[i] >= 0) {
      maxAtThisPoint += nums[i];
      if (maxSoFar < maxAtThisPoint) {
        maxSoFar = maxAtThisPoint;
      }
    } else {
      maxAtThisPoint = 0;
      if (nums[i] < 0 && negMax < nums[i]) {
        negMax = nums[i];
      }
    }
  }
  return maxSoFar > negMax ? maxSoFar : negMax;
};
