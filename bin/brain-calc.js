import readlineSync from 'readline-sync';
import { brainGames } from '../src/cli.js';
import { game } from '../src/index.js';


// closure should work fine, dont wanna repeat myself
const setRandom = (n) => () => Math.floor(Math.random() * n);
const random100 = setRandom(100);
const random3 = setRandom(3);

// DESIGNING A SOLUTION
// creating a reusable funciton with qustion,answer, and validation

// a new function that takes 2 parameters and outputs a list with the problem
// itself in a string class type and the right answer (class num)
const getTheOperationPair = (operation) => {
  switch (operation) {
    case 1:
      return {
        operation: 1,
        sign: '+',
      };
    case -1:
      return {
        operation: -1,
        sign: '-',
      };

    default:
      return {
        operation,
        sign: '*',
      };
  }
};

const createProblem = (num1, num2) => {
  const operation = [1, -1, num1][random3()]; // num1 here is used for representing multiplication
  const operationPair = getTheOperationPair(operation);
  const problem = `${num1} ${operationPair.sign} ${num2}`;
  const answer = (operation === num1) ? num1 * num2 : num1 + (num2 * operation);
  return [problem, answer];
};

const gameRound = () => {
  const randomNumber1 = random100();
  const randomNumber2 = random100();
  const [problem, answer] = createProblem(randomNumber1, randomNumber2);
  console.log(`Question: ${problem}`);
  const userAnswer = readlineSync.question('Your answer: ').toLocaleLowerCase();
  return { answer, userAnswer };
};

// MAIN MAIN MAIN //
const brainCalc = () => {
  const name = brainGames();
  console.log('What is the result of the expression?');
  game(
    name, // user's name
    3, //rounds
    gameRound // runs the game process
  )
};


brainCalc();
