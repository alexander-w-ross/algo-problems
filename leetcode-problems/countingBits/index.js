function countingBits(n) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    isOdd = i & 1;
    half = i >> 1;
    console.log(isOdd, half, i);
    arr[i] = arr[half] + isOdd;
  }
  return arr;
}
console.log(countingBits(5));
