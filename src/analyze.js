export function analyzeArray(array) {
  function average() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

  function min() {
    let minimum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minimum) {
        minimum = array[i];
      }
    }
    return minimum;
  }

  function max() {
    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maximum) {
        maximum = array[i];
      }
    }
    return maximum;
  }

  function lengthArray() {
    return array.length;
  }

  return {
    average: average(),
    min: min(),
    max: max(),
    length: lengthArray()
  };
}

/*object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};*/