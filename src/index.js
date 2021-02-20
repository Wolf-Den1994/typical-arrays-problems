
exports.min = function min(array) {
  if (typeof array === 'undefined' || array.length === 0) return 0;
  let minNumberInArr;
  for (let i = 0; i < array.length; i++) {
    if (minNumberInArr === undefined) {
      minNumberInArr = array[i];
    } else {
      if (minNumberInArr >= array[i]) {
        minNumberInArr = array[i];
      }
    }
  }
  return minNumberInArr;
}

exports.max = function max(array) {
  if (typeof array === 'undefined' || array.length === 0) return 0;
  let maxNumberInArr;
  for (let i = 0; i < array.length; i++) {
    if (maxNumberInArr === undefined) {
      maxNumberInArr = array[i];
    } else {
      if (maxNumberInArr <= array[i]) { // <= for max
        maxNumberInArr = array[i];
      }
    }
  }
  return maxNumberInArr;
}

exports.avg = function avg(array) {
  if (typeof array === 'undefined' || array.length === 0) return 0;
  let avgNumberInArr, count = 1;
  for (let i = 0; i < array.length; i++) {
    if (avgNumberInArr === undefined) {
      avgNumberInArr = array[i];
    } else {
      avgNumberInArr += array[i];
      count++;
    }
  }
  return avgNumberInArr / count;
}
