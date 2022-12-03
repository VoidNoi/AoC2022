const fs = require('fs');

const guideList = fs
  .readFileSync('input.txt', { encoding: 'UTF-8' })
  .trim()
  .split('\n');

const gameRules = (opponent, me) => {
  if (
    (opponent === 'scissors' && me === 'rock') ||
    (opponent === 'rock' && me === 'paper') ||
    (opponent === 'paper' && me === 'scissors')
  ) {
    return 6;
  } else if (
    (opponent === 'rock' && me === 'rock') ||
    (opponent === 'paper' && me === 'paper') ||
    (opponent === 'scissors' && me === 'scissors')
  ) {
    return 3;
  } else {
    return 0;
  }
};

const shapeSum = (shape) => {
  switch (shape) {
    case 'rock':
      return 1;

    case 'paper':
      return 2;

    case 'scissors':
      return 3;
  }
};

const getShape = (letter) => {
  if (letter === 'A' || letter === 'X') {
    return 'rock';
  } else if (letter === 'B' || letter === 'Y') {
    return 'paper';
  } else if (letter === 'C' || letter === 'Z') {
    return 'scissors';
  }
};

const part1 = () => {
  let totalScore = 0;

  guideList.map((shape) => {
    const round = shape.split(' ');
    totalScore += shapeSum(getShape(round[1]));

    const opponent = getShape(round[0]);
    const me = getShape(round[1]);

    totalScore += gameRules(opponent, me);
  });
  return totalScore;
};

const part2 = () => {
  const rock = 'A';
  const paper = 'B';
  const scissors = 'C';
  let totalScore = 0;

  guideList.map((shape) => {
    const round = shape.split(' ');

    if (round[1] === 'X') {
      switch (getShape(round[0])) {
        case 'rock':
          totalScore += gameRules('rock', 'scissors');
          totalScore += 3;
          break;
        case 'paper':
          totalScore += gameRules('paper', 'rock');
          totalScore += 1;
          break;
        case 'scissors':
          totalScore += gameRules('scissors', 'paper');
          totalScore += 2;
          break;
      }
    } else if (round[1] === 'Y') {
      switch (getShape(round[0])) {
        case 'rock':
          totalScore += gameRules('rock', 'rock');
          totalScore += 1;
          break;
        case 'paper':
          totalScore += gameRules('paper', 'paper');
          totalScore += 2;
          break;
        case 'scissors':
          totalScore += gameRules('scissors', 'scissors');
          totalScore += 3;
          break;
      }
    } else if (round[1] === 'Z') {
      switch (getShape(round[0])) {
        case 'rock':
          totalScore += gameRules('rock', 'paper');
          totalScore += 2;
          break;
        case 'paper':
          totalScore += gameRules('paper', 'scissors');
          totalScore += 3;
          break;
        case 'scissors':
          totalScore += gameRules('scissors', 'rock');
          totalScore += 1;
          break;
      }
    }
  });
  return totalScore;
};

console.log(part1());
console.log(part2());
