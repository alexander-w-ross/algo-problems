/**
 *
 * @param {string} s
 * @returns string
 */

const mostFrequentChar = (s) => {
  let hash = new Map();
  let letter;
  let maxSeen = -Infinity;
  for (let i = 0; i < s.length; i++) {
    let val = hash.get(s[i]);
    if (!!val) {
      hash.set(s[i], { num: val.num + 1, index: val.index });
    } else hash.set(s[i], { num: 1, index: i });
    if (!!val && val.num > maxSeen) {
      maxSeen = val.num;
      letter = s[i];
    } else if (
      !!val &&
      val.num === maxSeen &&
      val.index < hash.get(letter).index
    )
      letter = s[i];
  }
  if (hash.get(letter).num === 1) return s[0];
  return letter;
};
mostFrequentChar("mississippi");
