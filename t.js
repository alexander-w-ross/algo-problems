function highestPop(births, deaths) {
  let currEnd = deaths[0];
  let count = 1;
  let year = births[0];

  for (let i = 1; i < births.length; i++) {
    if (births[i] > currEnd) {
      currEnd = deaths[i];
      count = 1;
      year = births[i];
    } else {
      count += 1;
      year = births[i];
    }
  }
  console.log(count, year);
  return year;
}
highestPop(
  [1750, 1803, 1840, 1860, 1894, 1975, 1980, 2000],
  [1809, 1869, 1921, 1921, 1935, 2003, 2005, 2010]
);
