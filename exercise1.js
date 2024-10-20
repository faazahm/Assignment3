function isArithmeticProgression(numbers) {
  const selisih = numbers[1] - numbers[0];

  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== selisih) {
      return false;
    }
  }

  return true;
}

//TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 6, 18, 54]));
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));
