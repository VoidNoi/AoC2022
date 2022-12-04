const fs = require('fs');
// Code needs improvement
const rucksacks = fs
  .readFileSync('input.txt', { encoding: 'UTF-8' })
  .trim()
  .split('\n');

const part1 = () => {
  const dividedCompartments = rucksacks.map((rucksack) => {
    const rucksackMiddle = rucksack.length / 2;
    const compartments = [
      rucksack.slice(0, rucksackMiddle),
      rucksack.slice(rucksackMiddle),
    ];
    return compartments;
  });
  const sameLetters = dividedCompartments.map((rucksack) => {
    for (let i = 0; i < rucksack.length; i++) {
      for (let x = 0; x < rucksack[0].length; x++) {
        for (let y = 0; y < rucksack[1].length; y++) {
          if (rucksack[0][x] === rucksack[1][y]) {
            return rucksack[0][x];
          }
        }
      }
    }
  });
  let prioritySum = 0;
  const joinedLetters = sameLetters.join('');
  for (let i = 0; i < sameLetters.length; i++) {
    if (joinedLetters.charCodeAt(i) <= 90) {
      prioritySum += joinedLetters.charCodeAt(i) - 38;
    } else {
      prioritySum += joinedLetters.charCodeAt(i) - 96;
    }
  }
  return prioritySum;
};

const part2 = () => {
  const rucksacksCopy = rucksacks;
  const groups = [];

  const chunkSize = 3;
  for (let i = 0; i < rucksacksCopy.length; i += chunkSize) {
    const chunk = rucksacksCopy.slice(i, i + chunkSize);
    groups.push(chunk);
  }
  const badges = groups.map((group) => {
    for (let i = 0; i < group[0].length; i++) {
      for (let x = 0; x < group[1].length; x++) {
        for (let y = 0; y < group[2].length; y++) {
          if (group[0][i] === group[1][x] && group[0][i] === group[2][y]) {
            return group[0][i];
          }
        }
      }
    }
  });
  let prioritySum = 0;
  const joinedBadges = badges.join('');
  for (let i = 0; i < badges.length; i++) {
    if (joinedBadges.charCodeAt(i) <= 90) {
      prioritySum += joinedBadges.charCodeAt(i) - 38;
    } else {
      prioritySum += joinedBadges.charCodeAt(i) - 96;
    }
  }
  return prioritySum;
};
console.log(part1());
console.log(part2());
