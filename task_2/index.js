const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const questionNumber = 42;

const checkinfo = (num, questionNumber) => {
  const answerNum = Number(num)
  if (questionNumber === answerNum) {
    console.log(`Отгадано число ${questionNumber}`)
    rl.close()
  } else {
    const info = (answerNum > questionNumber) ? 'Больше' : "Меньше"
    console.log(`${info}`);
  }
}


rl.question('Загадано число в диапазоне от 0 до 100 \n', (answer) => {
  checkinfo(answer, questionNumber)
  rl.on('line', (input) => {
    checkinfo(input, questionNumber)
  });
});


