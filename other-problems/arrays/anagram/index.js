/**
 *
 * @param {string} s1
 * @param {string} s2
 * @returns boolean
 */

const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const listOfPrimes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ]; // 26 letters in alphabet
  let s1Value = 1;
  let s2Value = 1;
  let hash = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (!hash.has(s1[i])) hash.set(s1[i], listOfPrimes[i]);
    s1Value *= hash.get(s1[i]);
  }
  for (let i = 0; i < s2.length; i++) {
    if (hash.has(s2[i])) s2Value *= hash.get(s2[i]);
    else return false;
  }
  return s1Value === s2Value ? true : false;
};

console.log(anagrams("taa", "ubnyn"));
