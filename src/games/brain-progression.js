import readlineSync from 'readline-sync';
import { setRandom, random100, randomMinMax } from '../helpers/helpers.js';
import brainGames from '../cli.js';
import DescribeGame from '../components/DescribeGame.js';


const brainProgRound = () => {
  const progressionLength = randomMinMax(5, 10);
  const position = setRandom(progressionLength)();
  const dif = randomMinMax(2, 10);
  const array = [];
  for (let num = random100(); array.length < progressionLength; num += dif) {
    array.push(num);
  }
  const answer = array[position];
  array[position] = '..';
  console.log(`Question: ${array.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer: Number(userAnswer), answer };
};

const brainProgression = () => {
  const name = brainGames();
  console.log('What number is missing in the progression?');
  DescribeGame(name, 3, brainProgRound);
};

export default brainProgression;
