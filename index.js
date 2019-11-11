const chalk = require('chalk')
console.log(chalk.red("We are not liable to your usage of this console."))
console.log(chalk.italic("Produced By Cyber Unity Team using the kahoot.js-updated api."))
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    readline.question('Game ID: ', (answer) => {
      global.name = answer;
      resolve()
      console.log(chalk.red(chalk.italic("Please note sending < 50 bots is not reliable.")))
    })
  })
}
const question2 = () => {
  return new Promise((resolve, reject) => {
    readline.question('Amount of Bots:', (answer) => {
      global.amount = answer;
      resolve()
    })
  })
}
const main = async () => {
  await question1()
  await question2()
  readline.close()
  require('./cluster');
}

main()