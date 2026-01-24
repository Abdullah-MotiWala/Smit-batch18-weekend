const tossSides = ["hd", "tl"];
const choices = ["bat", "bowl"];
const playItems = [
  "score",
  "extras",
  "score",
  "score",
  "score",
  "wicket",
  "score",
  "extras",
  "score",
  "score",
  "score",
];

const playItemDetails = {
  score: [0, 1, 2, 3, 4, 6],
  wicket: ["bowled", "caught", "run out", "lbw", "stumped"],
  extras: ["wide", "no ball", "bye", "leg bye"],
};

let playerName = null;
let teamId = null;
let isTossWon = null;
let userPlaying = null;
let wickets = 0;
let score = 0;
let target = 0;
let lastPlayerScore = 0;

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

const wicketSpan = playWrapper?.querySelector("#wickets");
const scoreSpan = playWrapper?.querySelector("#score");
const playTypeSpan = playWrapper?.querySelector("#play-type");
const targetSpan = playWrapper?.querySelector("#target");

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
    playTypeSpan.innerText = userPlaying;
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
  playTypeSpan.innerText = userPlaying;
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
  if (!checkIfSpaceClick(event)) return;

  const category = getCategory();
  const playItem = getSubCategory(category);

  switch (category) {
    case "score":
      updateScore(playItem, false);
      break;

    case "wicket":
      updateWickets(playItem);
      break;

    case "extras":
      updateScore(category, true);
      break;
  }

  if (wickets === 10) {
    stopInnings();
  }

  if (score >= target && target) {
    stopInnings();
  }
}

playClickButton.addEventListener("click", hanldePlayClickBtn);

function hanldePlayClickBtn() {
  document.addEventListener("keydown", playClickHandler);
  alert("Press Spacebar to play the balls");
  playClickButton.remove();
}

function updateWickets(wicketType) {
  alert(`Oooo, ${wicketType}`);
  wicketSpan.innerText = ++wickets;
  lastPlayerScore = 0;
}

function updateScore(currentScore, isExtra) {
  if (isExtra) {
    alert(`Yoyy, ${currentScore}`);
    score += 1;
  } else {
    alert(`Yoyy, ${currentScore}`);
    score += currentScore;
    lastPlayerScore += currentScore;
  }

  scoreSpan.innerText = score;
  if (lastPlayerScore >= 50) {
    alert("You've scored Fiftyyy");
  }
}

function checkIfSpaceClick(event) {
  const isSpaceClicked = event.code === "Space";
  return isSpaceClicked;
}

function getCategory() {
  const playItemType = Math.floor(Math.random() * playItems.length);
  const playItemCategory = playItems[playItemType];

  return playItemCategory;
}

function getSubCategory(category) {
  const playItemSubCategory = playItemDetails[category];
  const randomIndexOfSubCategory = Math.floor(
    Math.random() * playItemSubCategory.length,
  );
  const item = playItemSubCategory[randomIndexOfSubCategory];
  return item;
}

function stopInnings() {
  const isFirstInnings = !target;
  if (isFirstInnings) stopFirstInnings();
  else stopSecondInnings();
}

function stopFirstInnings() {
  alert("Innings End");
  target = score + 1;
  score = 0;
  wickets = 0;
  scoreSpan.innerText = score;
  wicketSpan.innerText = wickets;
  targetSpan.innerText = target;
  if (userPlaying === "bat") {
    userPlaying = "bowl";
  } else {
    userPlaying = "bat";
  }
  playTypeSpan.innerText = userPlaying;
}

function stopSecondInnings() {
  if (userPlaying === "bat") {
    alert("Inning Completed, You won");
  } else {
    alert("Inning Finished, You Lost");
  }
}
