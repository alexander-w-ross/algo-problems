/**
 * @param {number[]} nums
 * @return {number}
 */

function missingNumber(nums) {
  let a = 0;
  nums.map((val, i) => {
    a ^= i;
    a ^= val;
  });
  return (a ^= nums.length);
}
const arr = [2, 0, 1];
missingNumber(arr);
