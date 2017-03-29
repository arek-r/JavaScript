// Variables
var newGameBtn = document.getElementById('js-newGameButton');
var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

var gameState = 'notStarted';	//started, ended
var player = {
	name: '',
	score: 0
};
var computer = {
	score: 0
};

// Events
newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function() { playerPick('kamień') });
pickPaper.addEventListener('click', function() { playerPick('papier') });
pickScissors.addEventListener('click', function() { playerPick('nożyce') });

// Initializaction
setGameElements();

// Functions
function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
		break;
		case 'ended':
			newGameBtn.innerText = 'Jeszcze raz';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}

function newGame() {
	player.name = prompt('Graczu, podaj swoje imię', 'Twoje imię');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();

		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}
}

function getComputerPick() {
	var possiblePicks = ['kamień', 'papier', 'nożyce'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

	if (playerPick == computerPick) {
		winner = 'noone';
	} else if (
			(computerPick == 'kamień' && playerPick == 'nożyce') ||
			(computerPick == 'nożyce' && playerPick == 'papier') ||
			(computerPick == 'papier' && playerPick == 'kamień')) {
		addPoint('computer');
	} else {
		addPoint('player');
	}
}

function addPoint(winner) {
	if (winner == 'player') {
		playerResultElem.innerHTML = 'Wygrana!';
		player.score++;
		playerPointsElem.innerHTML = player.score;
	} else if (winner == 'computer') {
		computerResultElem.innerHTML = 'Wygrana!';
		computer.score++;
		computerPointsElem.innerHTML = computer.score;
	}
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}

function endGame() {
	if (player.score === 10) {
		alert(player.name + ', zdobyłeś ' + player.score + ' punktów. Wygrałeś.');
		gameState = 'ended';
	} else if (computer.score === 10) {
		alert(player.name + ', przykro mi, ale tym razem Ci się nie udało. Może następnym razem.');
		gameState = 'ended';
	}
}

function playerPick(playerPick) {
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
	endGame();
	setGameElements();
}