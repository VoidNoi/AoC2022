const fs = require('fs');

const buffer = fs.readFileSync('input.txt', { encoding: 'UTF-8' });

const hasRepeats = (str) => {
  return /(.).*\1/.test(str);
};

const checkMarker = (size) => {
  for (let i = 0; i < buffer.length; i++) {
    const chunk = buffer.slice(i, i + size);
    if (chunk.length === size && !hasRepeats(chunk)) {
      return i + size;
    }
  }
};

const part1 = () => {
  return checkMarker(4);
};
const part2 = () => {
  return checkMarker(14);
};

console.log(part1());
console.log(part2());
