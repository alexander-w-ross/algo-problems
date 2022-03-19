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
