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

const reStack = (crateMover) => {
  const stacksCopy = stacks.map(function (arr) {
    return arr.slice();
  });
  let topCrates = '';
  groups.forEach((move) => {
    let i = parseInt(move[0]);
    let moveAmount = 0;
    while (i > 0) {
      if (crateMover === 'crateMover9000') {
        moveAmount = 1;
      } else if (crateMover === 'crateMover9001') {
        moveAmount = i;
      }
      stacksCopy[move[2] - 1].push(
        stacksCopy[parseInt(move[1]) - 1][
          stacksCopy[parseInt(move[1]) - 1].length - moveAmount
        ]
      );
      if (crateMover === 'crateMover9000') {
        stacksCopy[parseInt(move[1]) - 1].pop();
      } else if (crateMover === 'crateMover9001') {
        stacksCopy[parseInt(move[1]) - 1].splice(
          stacksCopy[parseInt(move[1]) - 1].length - i,
          1
        );
      }

      i--;
    }
  });
  stacksCopy.forEach((crates) => {
    topCrates += crates[crates.length - 1].toString();
  });

  return topCrates;
};

const part1 = () => {
  return reStack('crateMover9000');
};
const part2 = () => {
  return reStack('crateMover9001');
};
console.log(part1());
console.log(part2());
