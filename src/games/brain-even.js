import readlineSync from 'readline-sync';
import { random100 } from '../helpers/helpers.js';
import brainGames from '../cli.js';
import DescribeGame from '../components/DescribeGame.js';

const brainEvenRound = () => {
  const thisRandomNumber = random100();
  console.log(`Question: ${thisRandomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ').toLocaleLowerCase();
  const answer = (thisRandomNumber % 2 === 0) ? 'yes' : 'no';
  return { userAnswer, answer };
};

const brainEven = () => {
  const name = brainGames();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  DescribeGame(name, 3, brainEvenRound);
};

export default brainEven;
