var stage;

var imgTank = new Image();

var tank;

function startGame()
{
	stage = new createjs.Stage(document.getElementById("gameCanvas"));

    imgTank.src = "res/tankRed.png";
    imgTank.onload = launchGame;
}

function launchGame()
{
    initGamepad();

    tank = new Tank(imgTank);

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", update);
}

function update(event)
{
    tank.update(event.delta);

	stage.update(event);
}
