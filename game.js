var stage;

function startGame()
{
	stage = new createjs.Stage(document.getElementById("gameCanvas"));
}

function launchGame()
{
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", update);
}

function update(event)
{
	stage.update(event);
}
