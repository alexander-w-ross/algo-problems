import { measurements } from "../data.js";

function partTwo(measurements) {
  let count = 0;

  for (let i = 3; i < measurements.length; i++) {
    let prevSum =
      measurements[i - 1] + measurements[i - 2] + measurements[i - 3];
    let currSum = measurements[i] + measurements[i - 1] + measurements[i - 2];
    if (currSum > prevSum) count++;
  }
  return count;
}
console.log(partTwo(measurements));
