/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let lastIndex = letters.length - 1;
  if (target < letters[0] || target >= letters[lastIndex] || target === "z")
    return letters[0];
  for (let i = 0; i <= lastIndex; i++) {
    let curr = letters[i];
    let next = letters[i + 1];
    if (target >= curr && target < next) return next;
  }
};

var nextGreatestLetter = function (letters, target) {
  if (letters.length === 1) {
    return letters[0];
  }

  let left = 0;
  let right = letters.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (left === letters.length) {
    return letters[0];
  } else {
    return letters[left];
  }
};
