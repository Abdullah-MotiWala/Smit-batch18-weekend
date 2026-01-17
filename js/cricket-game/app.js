const tossSides = ["hd", "tl"];

let playerName = null;
let teamId = null;

const nameWrapper = document.getElementById("name-wrapper");
const teamWrapper = document.getElementById("teams-wrapper");
const tossWrapper = document.getElementById("toss-wrapper");
// Get player name

const nameNextButton = nameWrapper?.querySelector("#next");
const teamNextButton = teamWrapper?.querySelector("#next");
const tossNextButton = tossWrapper?.querySelector("#next");

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

function tossClickHandler(event) {
  const toss = event.target;
  const tossId = toss.id;
  const tossNumber = Math.round(Math.random());
  const winToss = tossSides[tossNumber];

  if (tossId === winToss) {
    alert("You won the toss");
  } else {
    alert("You loss the toss");
  }
}
const tosses = tossWrapper.getElementsByClassName("toss");
for (let i = 0; i < tosses.length; i++) {
  const toss = tosses[i];
  toss.addEventListener("click", tossClickHandler);
}

function tossNextClickHanlder() {
  tossWrapper.remove();
}

tossNextButton?.addEventListener("click", tossNextClickHanlder);
