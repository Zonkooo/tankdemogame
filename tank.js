function Tank(imgTank, imgBarrel, imgBullet, startx, starty, playerId){
    this.reload = 0;

    this.body = new createjs.Bitmap(imgTank);
    var bounds = this.body.getBounds();
    this.body.regX = bounds.width/2;
    this.body.regY = bounds.height/2;
    this.body.x = startx;
    this.body.y = starty;
    stage.addChild(this.body);

    this.barrel = new createjs.Bitmap(imgBarrel);
    this.barrel.regX = this.barrel.getBounds().width/2;
    this.barrel.regY = 50;
    this.barrel.x = this.body.x;
    this.barrel.y = this.body.y;
    stage.addChild(this.barrel);

    this.update = function(delta){
        this.reload -= delta;
        var speed = 0.2*delta;

        var gamepad = gamepads[playerId];
        if(gamepad){
            var lpadx = gamepad.axes[0];
            var lpady = gamepad.axes[1];
            if(Math.abs(lpadx) > 0.3 || Math.abs(lpady) > 0.3) {
                this.body.rotation = Math.atan2(lpadx, -lpady) * 360 / (2 * Math.PI);
                this.body.x += lpadx * speed;
                this.body.y += lpady * speed;
                this.barrel.x = this.body.x;
                this.barrel.y = this.body.y;
            }

            var rpadx = gamepad.axes[3];
            var rpady = gamepad.axes[4];
            if(Math.abs(rpadx) > 0.3 || Math.abs(rpady) > 0.3) {
                this.barrel.rotation = Math.atan2(rpadx, -rpady) * 360 / (2 * Math.PI);

                if(this.reload < 0) {
                    var bullet = new createjs.Bitmap(imgBullet);
                    bullet.regX = bullet.getBounds().width / 2;
                    bullet.regY = bullet.getBounds().height;
                    bullet.x = this.barrel.x;
                    bullet.y = this.barrel.y;
                    bullet.rotation = this.barrel.rotation;
                    bullet.dir = normalize({x: rpadx, y: rpady});
                    var barrelIdx = stage.getChildIndex(this.barrel);
                    stage.addChildAt(bullet, barrelIdx);
                    bullets.push(bullet);
                    this.reload = 300;
                }
            }
        }
    }

    function normalize(vec) {
        var norm = Math.sqrt(vec.x * vec.x + vec.y * vec.y);
        if (norm != 0) {
            vec.x = vec.x / norm;
            vec.y = vec.y / norm;
        }
        return vec;
    }
}