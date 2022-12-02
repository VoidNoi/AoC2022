const fs = require('fs');

let totalCalories = [];
let caloriesSum = 0;

const calorieList = fs.readFileSync('input.txt', { encoding: 'UTF-8' });

calorieList.split('\n').map((calories, index) => {
  if (isNaN(parseInt(calories))) {
    totalCalories.push(caloriesSum);
    caloriesSum = 0;
  } else {
    caloriesSum += parseInt(calories);
  }
});

const mostCalories = Math.max(...totalCalories);

console.log(mostCalories);
