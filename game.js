var stage;

var imgTank1 = new Image();
var imgBarrel1 = new Image();
var imgBullet1 = new Image();

var imgTank2 = new Image();
var imgBarrel2 = new Image();
var imgBullet2 = new Image();

var tanks = [];
var bullets = [];

function startGame()
{
	stage = new createjs.Stage(document.getElementById("gameCanvas"));

    imgBullet2.src = "res/bulletBlue.png";
    imgBarrel2.src = "res/barrelBlue.png";
    imgTank2.src = "res/tankBlue.png";
    
    imgBullet1.src = "res/bulletRed.png";
    imgBarrel1.src = "res/barrelRed.png";
    imgTank1.src = "res/tankRed.png";
    imgTank1.onload = launchGame;
}

function launchGame()
{
    initGamepad();

    tanks.push(new Tank(imgTank1, imgBarrel1, imgBullet1, 100, 100, 0));
    tanks.push(new Tank(imgTank2, imgBarrel2, imgBullet2, 1100, 700, 1));

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", update);
}

function update(event)
{
    for(var t = 0; t < tanks.length; t++) {
        tanks[t].update(event.delta);
    }

    var bspeed = 0.4*event.delta;
    for(var b = 0; b < bullets.length; b++){
        var bullet = bullets[b];
        bullet.x += bullet.dir.x * bspeed;
        bullet.y += bullet.dir.y * bspeed;
    }

    checkCollisions();

	stage.update(event);
}

function checkCollisions(){
    function sqdist(tank, bullet) {
        var x1 = tank.body.x;
        var y1 = tank.body.y;
        var x2 = bullet.x;
        var y2 = bullet.y;
        return (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
    }

    for (var t = 0; t < tanks.length; t++) {
        var tank = tanks[t];
        for (var b = 0; b < bullets.length; b++) {
            var bullet = bullets[b];
            if(bullet.owner != tank.id && sqdist(tank, bullet) < 60*60)
            {
                bullets.splice(b, 1);
                stage.removeChild(bullet);
                tanks.splice(t, 1);
                t--;
                stage.removeChild(tank.body);
                stage.removeChild(tank.barrel);
            }
        }
    }
}
