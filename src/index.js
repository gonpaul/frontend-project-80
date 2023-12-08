import readlineSync from 'readline-sync';
import { brainGames } from './cli.js';


const setRandom = (n) => () => Math.floor(Math.random() * n);
const random100 = setRandom(100);
const random3 = setRandom(3);

// MAIN MAIN MAIN //
export const game = (name, rounds, gameRound) => {
  for (let i = 0; i < rounds; i += 1){
    const condition = gameRound() // it returns the predicate to be either true or false
    if (condition) {
      console.log('Correct!');
      if (i == rounds - 1) {
        console.log(`Congratulations, ${name}`);
      }
    } else {
      console.log(`${data.userAnswer} is a wrong answer ;(. The correct answer was ${data.answer}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
}
// BRAIN-EVEN //
const random = () => Math.floor(Math.random() * 100);

const brainEvenRound = () => {
  const thisRandomNumber = random();
  console.log(`Question: ${thisRandomNumber}`);
  const answer = readlineSync.question('Your answer: ').toLocaleLowerCase();
  const shouldContinue = (thisRandomNumber % 2 === 0 && answer === 'yes')
  || (thisRandomNumber % 2 === 1 && answer === 'no');
  return shouldContinue;
};

export const brainEven = () => {
  const name = brainGames();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  game(name, 3, brainEvenRound)
}

// BRAIN-CALC //
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

const brainCalcRound = () => {
  const randomNumber1 = random100();
  const randomNumber2 = random100();
  const [problem, answer] = createProblem(randomNumber1, randomNumber2);
  console.log(`Question: ${problem}`);
  const userAnswer = readlineSync.question('Your answer: ').toLocaleLowerCase();
  const gameCondition = (userAnswer === String(answer))
  return gameCondition;
};

export const brainCalc = () => {
  const name = brainGames();
  console.log('What is the result of the expression?');
  game(
    name, // user's name
    3, //rounds
    brainCalcRound, // runs the game process
  )
};

