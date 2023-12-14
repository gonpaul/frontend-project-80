import readlineSync from 'readline-sync';
import { random100 } from '../helpers/helpers.js';
import brainGames from '../cli.js';
import DescribeGame from '../components/DescribeGame.js';

const isPrime = (num) => {
  for (let i = 2; i < (num ** 0.5 + 1); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrimeRound = () => {
  const thisRandomNumber = random100();
  console.log(`Question: ${thisRandomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ').toLocaleLowerCase();
  const answer = (isPrime(thisRandomNumber)) ? 'yes' : 'no';
  return { userAnswer, answer };
};

const brainPrime = () => {
  const name = brainGames();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  DescribeGame(name, 3, brainPrimeRound);
};

export default brainPrime;
