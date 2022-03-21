/**
 * @param {number[]} nums
 * @return {boolean}
 */

const nums = [5, 6, 7, 2, 5];
// using set
var containsDuplicate = function (nums) {
  const t = new Set(nums);
  return t.size === nums.length ? false : true;
};

containsDuplicate(nums);

// using hash
// var containsDuplicate = function (nums) {
//   const hash = new Map();
//   for (let val of nums) {
//     if (hash.has(val)) return true;
//     hash.set(val, 1);
//   }
//   return false;
// };

// // using Object
// var containsDuplicate = function (nums) {
//   const hash = new Object();
//   for (const [i, val] of nums.entries()) {
//     if (!!hash[val]) return true;
//     else if (i === nums.length - 1) return false;
//     hash[val] = String(val);
//   }
// };

// // using Map
// var containsDuplicate = function (nums) {
//   const hash = new Map();
//   for (const [i, val] of nums.entries()) {
//     if (hash.get(val)) return true;
//     else if (i === nums.length - 1) return false;
//     hash.set(val, 1);
//   }
// };
