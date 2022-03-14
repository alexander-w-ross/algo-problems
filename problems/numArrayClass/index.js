/**
 * @param {number[]} nums
 */

class NumArray {
  constructor(nums) {
    this.nums = nums;
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (this.nums.length === 0) return 0;
  else if (left > right) throw new Error("left must be less than right");
  else if (left < 0 || right < 0)
    throw new Error("left and right must be positive");
  else if (right > this.nums.length)
    throw new Error("right must be less than length");
  else if (left === right) return this.nums[left];
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += this.nums[i];
  }
  return sum;
};

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
