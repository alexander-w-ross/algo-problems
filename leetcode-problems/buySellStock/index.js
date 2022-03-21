/**
 * @param {number[]} prices
 * @return {number} max profit
 */
const prices = [7, 1, 5, 3, 6, 4];
function buyAndSellStock(prices) {
  if (prices.length <= 1) return 0;
  let min = prices[0];
  let max = 0;
  let maxDiff = 0;
  let tmpMaxDiff = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      maxDiff = prices[i];
    } else if (prices[i] > max) {
      max = prices[i];
      tmpMaxDiff = max - min;
      if (tmpMaxDiff > maxDiff) {
        maxDiff = tmpMaxDiff;
      }
    }
  }
  return maxDiff;
}
console.log(buyAndSellStock(prices));
