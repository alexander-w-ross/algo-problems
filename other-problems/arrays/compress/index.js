/**
 *
 * @param {string} s
 * @returns string
 */

const compress = (s) => {
  let output = [];
  let j = 0;
  let i = 0;
  while (j < s.length) {
    let counter = 0;
    const tmpChar = s[j];
    while (s[i] === tmpChar) {
      counter += 1;
      i++;
    }
    output.push(counter === 1 ? tmpChar : String(counter) + tmpChar);
    counter = 0;
    j = i;
  }
  return output.join("");
};

compress("ccaaatsss");
