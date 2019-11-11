var Kahoot = require('kahoot.js-updated');
var client = new Kahoot;
var NameGenerator = require('nodejs-randomnames');
var randomName = NameGenerator.getRandomName();
//const cluster = require('cluster');
var game_pin = 0;
var cluster = require('cluster');
var name = 'VSCO-ODINZ';
var array_of_name = ["Shrek", "Joe", "مرحبا.","Random Communist", "Big Forehead", "AhYesName", "Vivek is daddy", name]
var random_name = array_of_name[Math.floor(Math.random() * array_of_name.length)]

if (cluster.isMaster) {
  console.log('Ah yes master.');
  cluster.fork();
  cluster.fork();
} else if (cluster.isWorker) {
  console.log('I am worker #' + cluster.worker.id);
}
var randomnumber = Math.round(Math.random() * 4);
process.on('message', function(msg) {
  console.log("msg: " + msg);
  game_pin = msg;
  console.log("Joining kahoot...  ");
  client.join(game_pin, random_name + cluster.worker.id);
  // client.join(game_pin, name + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9));
  
});
client.on("joined", () => {
    console.log("I joined the Kahoot!");
});
client.on("questionStart", question => {
    console.log("A new question has started, answering the first answer.");
    question.answer(randomnumber);
    randomnumber = Math.floor(Math.random() * 4);
});
client.on("quizEnd", () => {
    console.log("The quiz has ended. - bot" + cluster.worker.id);
});
