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

const topCalories = [];

for (let i = 0; i < 3; i++) {
  const maxCalories = Math.max(...totalCalories);
  const index = totalCalories.indexOf(maxCalories);
  topCalories.push(maxCalories);
  if (index > -1) {
    totalCalories.splice(index, 1);
  }
}
const topCaloriesSum = topCalories.reduce((partialSum, a) => partialSum + a, 0);
console.log(topCaloriesSum);
