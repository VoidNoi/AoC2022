const fs = require('fs');

const calorieList = fs
  .readFileSync('input.txt', { encoding: 'UTF-8' })
  .split('\n');

let totalCalories = [];
let caloriesSum = 0;

const part1 = () => {
  calorieList.map((calories) => {
    if (isNaN(parseInt(calories))) {
      totalCalories.push(caloriesSum);
      caloriesSum = 0;
    } else {
      caloriesSum += parseInt(calories);
    }
  });
  return Math.max(...totalCalories);
};

const part2 = () => {
  const topCalories = [];

  for (let i = 0; i < 3; i++) {
    const maxCalories = Math.max(...totalCalories);
    const index = totalCalories.indexOf(maxCalories);
    topCalories.push(maxCalories);
    if (index > -1) {
      totalCalories.splice(index, 1);
    }
  }
  return topCalories.reduce((partialSum, a) => partialSum + a, 0);
};

console.log(part1());
console.log(part2());
