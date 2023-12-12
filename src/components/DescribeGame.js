const DescribeGame = (name, rounds, gameRound) => {
  for (let i = 0; i < rounds; i += 1) {
    const data = gameRound(); // returns an object {userAnswer, answer}
    const condition = data.userAnswer === data.answer;
    if (condition) {
      console.log('Correct!');
      if (i === rounds - 1) {
        console.log(`Congratulations, ${name}`);
      }
    } else {
      console.log(`${data.userAnswer} is a wrong answer ;(. The correct answer was ${data.answer}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

export default DescribeGame;
