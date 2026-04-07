let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePoints = document.querySelector("#user-score");
const compScorePoints = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = "You Win! " + userChoice + " beats " + compChoice;
    user_score++;
    msg.style.backgroundColor = "green";
    userScorePoints.innerText = user_score;
  } else if (userWin === false) {
    msg.innerText = "Computer Wins! " + compChoice + " beats " + userChoice;
    comp_score++;
    msg.style.backgroundColor = "red";
    compScorePoints.innerText = comp_score;
  } else {
    msg.innerText = "Game was Drawn!";
    msg.style.backgroundColor = "gray";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    showWinner(null);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", () => {
  user_score = 0;
  comp_score = 0;
  userScorePoints.innerText = user_score;
  compScorePoints.innerText = comp_score;
  msg.innerText = "Game Reset! Start Playing!";
  msg.style.backgroundColor = "white";
});
