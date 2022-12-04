const fs = require('fs');

const sectionAssignments = fs
  .readFileSync('input.txt', { encoding: 'UTF-8' })
  .trim()
  .split('\n');

const part1 = () => {
  let sumOverlap = 0;
  sectionAssignments.map((assignment) => {
    const splitSections = assignment.split(',');
    const firstGroup = splitSections[0].split('-');
    const secondGroup = splitSections[1].split('-');
    if (
      (parseInt(firstGroup[0]) <= parseInt(secondGroup[0]) &&
        parseInt(firstGroup[1]) >= parseInt(secondGroup[1])) ||
      (parseInt(secondGroup[0]) <= parseInt(firstGroup[0]) &&
        parseInt(secondGroup[1]) >= parseInt(firstGroup[1]))
    ) {
      sumOverlap += 1;
    }
  });

  return sumOverlap;
};
const part2 = () => {
  let sumOverlap = 0;
  sectionAssignments.map((assignment) => {
    const splitSections = assignment.split(',');
    const firstGroup = splitSections[0].split('-');
    const secondGroup = splitSections[1].split('-');

    if (
      (parseInt(secondGroup[0]) <= parseInt(firstGroup[1]) &&
        parseInt(firstGroup[1]) <= parseInt(secondGroup[1])) ||
      (parseInt(firstGroup[0]) <= parseInt(secondGroup[1]) &&
        parseInt(secondGroup[1]) <= parseInt(firstGroup[1]))
    ) {
      sumOverlap += 1;
    }
  });
  return sumOverlap;
};

console.log(part1());
console.log(part2());
