// Given an array of meeting time intervals consisting of start and end times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.

// For example,
// Given [ [0, 30], [5, 10], [15, 20] ],
// return false.
// Input:
//  [[7,10],[2,4], [15,18]]

// Output:
//  true

// !locked question

function meetingRooms(meetingTimes) {
  // sort by start time
  meetingTimes.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < meetingTimes.length - 1; i++) {
    let endTime = meetingTimes[i][1];
    if (endTime > meetingTimes[i + 1][0]) console.log(false);
  }
  console.log(true);
}
meetingRooms([
  [7, 10],
  [2, 4],
]);

console.log([].length);
