"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  console.log(randNum);
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function (health) {
  return (health -= randomDamage());
};

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => (health <= 0 ? true : false);

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

const printSqaure = (width) => {
  let log = "";
  for (let i = 0; i < width; i++) {
    log += "#";
  }
  return log;
};

console.log(printSqaure(6));

const printTriangle = (width) => {
  let log = "";
  for (let i = 0; i < width; i++) {
    log += "#".repeat(i + 1);
    log += "\n";
  }
  return log;
};

console.log(printTriangle(5));

const getGrade = (grade) =>
  grade >= 90
    ? "A"
    : grade >= 80
    ? "B"
    : grade >= 70
    ? "C"
    : grade >= 60
    ? "D"
    : "F";

console.log(getGrade(94));

const prioritize = (urgent, important) =>
  urgent && important
    ? 1
    : !urgent && important
    ? 2
    : urgent && !important
    ? 3
    : 4;

const urgentBool = false;
const importantBool = false;

console.log(prioritize(urgentBool, importantBool));
