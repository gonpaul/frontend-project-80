import readlineSync from 'readline-sync';
import { random100, createProblem } from '../helpers/helpers.js';
import brainGames from '../cli.js';
import DescribeGame from '../components/DescribeGame.js';

const brainCalcRound = () => {
  const randomNumber1 = random100();
  const randomNumber2 = random100();
  const [problem, answer] = createProblem(randomNumber1, randomNumber2); // answer's class is int
  console.log(`Question: ${problem}`);
  const userAnswer = readlineSync.question('Your answer: ').toLocaleLowerCase(); // class string
  return { userAnswer: parseInt(userAnswer, 10), answer };
};

const brainCalc = () => {
  const name = brainGames();
  console.log('What is the result of the expression?');
  DescribeGame(
    name, // user's name
    3, // rounds
    brainCalcRound, // runs the game process
  );
};

export default brainCalc;

brainCalc();
