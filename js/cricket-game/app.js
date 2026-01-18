const tossSides = ["hd", "tl"];
const choices = ["bat", "bowl"];
const playItems = ["score", "wicket", "extras"];

const playItemDetails = {
  score: [0, 1, 2, 3, 4, 6],
  wicket: ["bowled", "caught", "run out", "lbw", "stumped"],
  extras: ["wide", "no ball", "bye", "leg bye"],
};

playItemDetails[playItems[0]];

let playerName = null;
let teamId = null;
let isTossWon = null;
let userPlaying = null;

const nameWrapper = document.getElementById("name-wrapper");
const teamWrapper = document.getElementById("teams-wrapper");
const tossWrapper = document.getElementById("toss-wrapper");
const electedWrapper = document.getElementById("elected-wrapper");
const playWrapper = document.getElementById("play-wrapper");
// Get player name

const nameNextButton = nameWrapper?.querySelector("#next");
const teamNextButton = teamWrapper?.querySelector("#next");
const tossNextButton = tossWrapper?.querySelector("#next");
const electedNextButton = electedWrapper?.querySelector("#next");
const playClickButton = playWrapper?.querySelector("#play");

function getPlayerName() {
  const nameInput = nameWrapper.querySelector("#name");
  playerName = nameInput.value;
}

function nameNextClickHanlder() {
  getPlayerName();
  nameWrapper.remove();
  alert(`Hello, ${playerName}! Let's play cricket!`);
  teamWrapper.classList.replace("hide", "show");
}
nameNextButton?.addEventListener("click", nameNextClickHanlder);

// Select teams
function teamClickHandler(event) {
  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.classList.remove("selected");
  }
  event.target.classList.add("selected");
  teamId = event.target.id;
}

const teams = teamWrapper.getElementsByClassName("team");
for (let i = 0; i < teams.length; i++) {
  const team = teams[i];
  team.addEventListener("click", teamClickHandler);
}

function teamNextClickHanlder() {
  teamWrapper.remove();
  alert(`Hello, ${playerName}! You've selected ${teamId}!`);
  tossWrapper.classList.replace("hide", "show");
}
teamNextButton?.addEventListener("click", teamNextClickHanlder);

// Toss
function tossClickHandler(event) {
  const toss = event.target;
  const tossId = toss.id;
  const tossNumber = Math.round(Math.random());
  const winToss = tossSides[tossNumber];

  if (tossId === winToss) {
    isTossWon = true;
    alert("You won the toss");
  } else {
    isTossWon = false;
    alert("You loss the toss");
  }
}
const tosses = tossWrapper.getElementsByClassName("toss");
for (let i = 0; i < tosses.length; i++) {
  const toss = tosses[i];
  toss.addEventListener("click", tossClickHandler);
}

function electComputerChoice() {
  const choiceNumber = Math.round(Math.random());
  return choices[choiceNumber];
}

function tossNextClickHanlder() {
  tossWrapper.remove();
  if (isTossWon) {
    electedWrapper.classList.replace("hide", "show");
  } else {
    const computerChoice = electComputerChoice();
    if (computerChoice === "bat") {
      userPlaying = "bowl";
    } else {
      userPlaying = "bat";
    }
    alert(
      `Computer has elected to ${computerChoice} first. You will ${userPlaying} first.`,
    );
    playWrapper.classList.replace("hide", "show");
  }
}

tossNextButton?.addEventListener("click", tossNextClickHanlder);

// Elected (if toss is won)
function electedClickHandler(event) {
  const choice = event.target;
  const choiceId = choice.id;
  userPlaying = choiceId;
}
const electingChoices = electedWrapper.getElementsByClassName("side");
for (let i = 0; i < electingChoices.length; i++) {
  const choice = electingChoices[i];
  choice.addEventListener("click", electedClickHandler);
}

function electedNextClickHanlder() {
  electedWrapper.remove();
  alert(`You have elected to ${userPlaying} first.`);
  playWrapper.classList.replace("hide", "show");
}
electedNextButton?.addEventListener("click", electedNextClickHanlder);

// Play
function playClickHandler(event) {
  const isSpaceClicked = event.code === "Space";
  if (!isSpaceClicked) return;

  const playItemType = Math.floor(Math.random() * 3);
  const playItem = playItems[playItemType];
  console.log(playItem, "===playItem");

  const playItemDetail = playItemDetails[playItem];
}

playClickButton.addEventListener("click", function () {
  document.addEventListener("keydown", playClickHandler);
  alert("Press Spacebar to play the balls");
  playClickButton.remove();
});
