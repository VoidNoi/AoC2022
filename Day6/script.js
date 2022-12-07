const fs = require('fs');

const buffer = fs.readFileSync('input.txt', { encoding: 'UTF-8' });

const hasRepeats = (str) => {
  return /(.).*\1/.test(str);
};

const part1 = () => {
  for (let i = 0; i < buffer.length; i++) {
    const chunk = buffer.slice(i, i + 4);
    if (chunk.length === 4 && !hasRepeats(chunk)) {
      return i + 4;
    }
  }
};
const part2 = () => {
  for (let i = 0; i < buffer.length; i++) {
    const chunk = buffer.slice(i, i + 14);
    if (chunk.length === 14 && !hasRepeats(chunk)) {
      return i + 14;
    }
  }
};

console.log(part1());
console.log(part2());
