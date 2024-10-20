function arrSum(arr) {
  let currentMax = arr[0];
  let globalMax = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentMax + arr[i]) {
      currentMax = arr[i];
      tempStart = i;
    } else {
      currentMax += arr[i];
    }

    if (currentMax > globalMax) {
      globalMax = currentMax;
      start = tempStart;
      end = i;
    }
  }

  const maxSubarray = arr.slice(start, end + 1);
  return [maxSubarray, globalMax];
}

const a = arrSum([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log(a[0], a[1]);
