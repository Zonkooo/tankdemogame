var stage;

var imgTank = new Image();
var imgBarrel = new Image();
var imgBullet = new Image();

var tank;
var bullets = [];

function startGame()
{
	stage = new createjs.Stage(document.getElementById("gameCanvas"));

    imgBullet.src = "res/bulletRed.png";
    imgBarrel.src = "res/barrelRed.png";
    imgTank.src = "res/tankRed.png";
    imgTank.onload = launchGame;
}

function launchGame()
{
    initGamepad();

    tank = new Tank(imgTank, imgBarrel, imgBullet);

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", update);
}

function update(event)
{
    tank.update(event.delta);

    var bspeed = 0.4*event.delta;
    for(var b = 0; b < bullets.length; b++){
        var bullet = bullets[b];
        bullet.x += bullet.dir.x * bspeed;
        bullet.y += bullet.dir.y * bspeed;
    }

	stage.update(event);
}
