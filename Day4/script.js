const fs = require('fs');

const sectionAssignments = fs
  .readFileSync('input.txt', { encoding: 'UTF-8' })
  .trim()
  .split('\n');

const overlapChecker = (contains) => {
  let sumOverlap = 0;
  sectionAssignments.map((assignment) => {
    const splitSections = assignment.split(',');
    const firstGroup = splitSections[0].split('-');
    const secondGroup = splitSections[1].split('-');
    if (contains === 'fullyContains') {
      if (
        (parseInt(firstGroup[0]) <= parseInt(secondGroup[0]) &&
          parseInt(firstGroup[1]) >= parseInt(secondGroup[1])) ||
        (parseInt(secondGroup[0]) <= parseInt(firstGroup[0]) &&
          parseInt(secondGroup[1]) >= parseInt(firstGroup[1]))
      ) {
        sumOverlap += 1;
      }
    } else if (contains === 'overlaps') {
      if (
        (parseInt(secondGroup[0]) <= parseInt(firstGroup[1]) &&
          parseInt(firstGroup[1]) <= parseInt(secondGroup[1])) ||
        (parseInt(firstGroup[0]) <= parseInt(secondGroup[1]) &&
          parseInt(secondGroup[1]) <= parseInt(firstGroup[1]))
      ) {
        sumOverlap += 1;
      }
    }
  });
  return sumOverlap;
};

const part1 = () => {
  return overlapChecker('fullyContains');
};
const part2 = () => {
  return overlapChecker('overlaps');
};

console.log(part1());
console.log(part2());
