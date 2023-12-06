import readlineSync from 'readline-sync';

export const setRandom = (n) => () => Math.floor(Math.random() * n);

export const game = (name, rounds, gameRound) => {
  for (let i = 0; i < rounds; i += 1){
    const data = gameRound() // it returns the right answer and the user answer
    if (String(data.answer) === data.userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${data.userAnswer} is a wrong answer ;(. The correct answer was ${data.answer}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
}