/**
 *
 * @param {string} s
 * @return {string}
 */

const uncompress = (s) => {
  let output = [];
  let numbers = "0123456789";
  let [i, j] = [0, 0];
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const currentNumber = Number(s.slice(i, j));
      for (let count = 0; count < currentNumber; count++) {
        // output += s[j] - use push instead because its constant time
        // javascript makes a copy of string when concantenating, so its O(n)
        output.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return output.join(""); // is O(1) time because its happening at then end of each loop in while loop
};

console.log(uncompress("3n12e2z"));
