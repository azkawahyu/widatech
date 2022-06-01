// make function that returns the possible combinations
// the result is in array
// array filled with numbers from 1-9 no duplications
// we have an array from 1-9
// the numbers can only be used once
// l is the length of the array
// t is the total sum of the combination
section3 = (l, start, end, t, result) => {
  var output = [];
  result = result || [];
  if (l === 1) {
    if (start <= t && end >= t) {
      output.push(result.concat([t]));
    }
    return output;
  } else {
    while (end > start) {
      var newTotal = t - end;
      output = output.concat(
        section3(
          l - 1,
          start,
          Math.min(end - 1, newTotal),
          newTotal,
          result.concat([end])
        )
      );
      end--;
    }
    return output;
  }
};
console.log(section3(3, 1, 3, 6));
