export const setRandom = (n) => () => Math.floor(Math.random() * n);
export const random100 = setRandom(100);
const random3 = setRandom(3);

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

export const createProblem = (num1, num2) => {
  const operation = [1, -1, num1][random3()]; // num1 here is used for representing multiplication
  const operationPair = getTheOperationPair(operation);
  const problem = `${num1} ${operationPair.sign} ${num2}`;
  const answer = (operation === num1) ? num1 * num2 : num1 + (num2 * operation);
  return [problem, answer];
};
