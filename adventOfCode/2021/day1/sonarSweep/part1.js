import { measurements } from "../data.js";

function partOne(measurements) {
  let count = 0;
  for (let i = 1; i < measurements.length; i++) {
    if (measurements[i] > measurements[i - 1]) count++;
  }
  return count;
}
console.log(partOne(measurements));
