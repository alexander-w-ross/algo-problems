/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let midpoint;
  while (left < right) {
    midpoint = Math.floor((left + right) / 2);
    if (arr[midpoint] > arr[midpoint - 1] && arr[midpoint] > arr[midpoint + 1])
      return midpoint;
    else if (arr[midpoint] > arr[midpoint - 1]) left = midpoint;
    else if (arr[midpoint] < arr[midpoint - 1]) right = midpoint;
  }
  return midpoint;
};
