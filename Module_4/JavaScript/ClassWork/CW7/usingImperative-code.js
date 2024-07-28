let numbers = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

for (let i = 0; i < numbers.length; i++) {
  sumOfSquares += numbers[i] * numbers[i];
}

console.log('Sum of squares (Imperative):', sumOfSquares);


const sumOfSquaresFunctional = (arr) => arr.map(num => num * num).reduce((sum, num) => sum + num, 0);

const sumOfSquaresResult = sumOfSquaresFunctional(numbers);

console.log('Sum of squares (Functional):', sumOfSquaresResult);
