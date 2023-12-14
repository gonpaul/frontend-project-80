import readlineSync from 'readline-sync';
import { random100 } from '../helpers/helpers.js';
import brainGames from '../cli.js';
import DescribeGame from '../components/DescribeGame.js';

const findGcd = (firstNum, secondNum) => {
  const smallest = Math.min(firstNum, secondNum);
  const biggest = Math.max(firstNum, secondNum);

  for (let i = smallest; i > 0; i -= 1) {
    if (biggest % i === 0 && smallest % i === 0) {
      return i;
    }
  }
  return 0;
};

const brainGcdRound = () => {
  const randomNumber1 = random100() + 1;
  const randomNumber2 = random100() + 1;
  const answer = findGcd(randomNumber1, randomNumber2); // answer's class is int
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const userAnswer = readlineSync.question('Your answer: ').toLocaleLowerCase(); // class string
  return { userAnswer: parseInt(userAnswer, 10), answer };
};

const brainGcd = () => {
  const name = brainGames();
  console.log('Find the greatest common divisor of given numbers.');
  DescribeGame(
    name, // user's name
    3, // rounds
    brainGcdRound, // runs the game process
  );
};

export default brainGcd;
