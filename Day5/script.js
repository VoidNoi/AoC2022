const fs = require('fs');

const rearrangement = fs
  .readFileSync('input.txt', { encoding: 'UTF-8' })
  .trim()
  .match(/[0-9]+/g);

const stacks = [
  ['N', 'B', 'D', 'T', 'V', 'G', 'Z', 'J'],
  ['S', 'R', 'M', 'D', 'W', 'P', 'F'],
  ['V', 'C', 'R', 'S', 'Z'],
  ['R', 'T', 'J', 'Z', 'P', 'H', 'G'],
  ['T', 'C', 'J', 'N', 'D', 'Z', 'Q', 'F'],
  ['N', 'V', 'P', 'W', 'G', 'S', 'F', 'M'],
  ['G', 'C', 'V', 'B', 'P', 'Q'],
  ['Z', 'B', 'P', 'N'],
  ['W', 'P', 'J'],
];

const groups = [];

const chunkSize = 3;
for (let i = 0; i < rearrangement.length; i += chunkSize) {
  const chunk = rearrangement.slice(i, i + chunkSize);
  groups.push(chunk);
}

const part1 = () => {
  const stacksCopy = stacks.map(function (arr) {
    return arr.slice();
  });
  let topCrates = '';
  groups.forEach((move) => {
    let i = move[0];

    while (i > 0) {
      stacksCopy[move[2] - 1].push(
        stacksCopy[parseInt(move[1]) - 1][
          stacksCopy[parseInt(move[1]) - 1].length - 1
        ]
      );

      stacksCopy[parseInt(move[1]) - 1].pop();
      i--;
    }
  });
  stacksCopy.forEach((crates) => {
    topCrates += crates[crates.length - 1].toString();
  });

  return topCrates;
};
const part2 = () => {
  let topCrates = '';
  const stacksCopy = stacks.map(function (arr) {
    return arr.slice();
  });
  groups.forEach((move) => {
    let i = parseInt(move[0]);

    while (i > 0) {
      stacksCopy[move[2] - 1].push(
        stacksCopy[parseInt(move[1]) - 1][
          stacksCopy[parseInt(move[1]) - 1].length - i
        ]
      );

      stacksCopy[parseInt(move[1]) - 1].splice(
        stacksCopy[parseInt(move[1]) - 1].length - i,
        1
      );
      i--;
    }
  });

  stacksCopy.forEach((crates) => {
    topCrates += crates[crates.length - 1].toString();
  });

  return topCrates;
};
console.log(part1());
console.log(part2());
