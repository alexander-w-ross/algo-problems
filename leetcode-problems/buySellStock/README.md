# Best time to buy and sell stock

[Best Time to Buy and Sell Stock - LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Problem

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

```

**Example 2:**

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

## Successful code

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let min = prices[0];
  let max = 0;
  let maxDiff = 0;
  let tmpMaxDiff = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      max = prices[i];
    } else if (prices[i] > max) {
      max = prices[i];
      tmpMaxDiff = max - min;
      if (tmpMaxDiff > maxDiff) {
        maxDiff = tmpMaxDiff;
      }
    }
  }
  return maxDiff;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. If the length of prices is less than one return 0 because you can't make a profit.
2. Initially set `min` to the first element.
3. Because you can only buy stocks in the “future”, if `prices[i]<min` reset `min` but then you also have to reset `max` because you cannot use a value that appeared before the index of the current `min`.
4. If `prices[i]>max` compute a temporary difference and see if it is bigger than your current `max` value and if it is then set the `max` to that.

## Comments

The `tmpMaxDiff` is needed because if you have an array like this `[3,2,6,5,0,3]`, your `max` will be set to `4` (`6-2`). Then you will reset everything once you hit zero and then the biggest difference will be `3` (`3-0`). So the `tmpMaxDiff` is used to make sure that if you do reset and find a new `max` value - that it will be bigger than the one you currently have.
