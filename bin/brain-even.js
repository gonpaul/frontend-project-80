#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { brainGames } from '../src/cli.js';


const random = () => Math.floor(Math.random() * 100);

const brainEven = () => {
  // Although I can copy paste brain-games code here, I won't do this for the sake of
  // readability
  const name = brainGames();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const thisRandomNumber = random();
    console.log(`Question: ${thisRandomNumber}`);
    const answer = readlineSync.question('Your answer: ').toLocaleLowerCase();
    const shouldContinue = (thisRandomNumber % 2 === 0 && answer === 'yes')
    || (thisRandomNumber % 2 === 1 && answer === 'no');
    if (shouldContinue) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${(answer === 'yes') ? 'no' : 'yes'}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

brainEven();
