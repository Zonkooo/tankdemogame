function Tank(imgTank, imgBarrel){

    this.body = new createjs.Bitmap(imgTank);
    var bounds = this.body.getBounds();
    this.body.regX = bounds.width/2;
    this.body.regY = bounds.height/2;
    this.body.x = 100;
    this.body.y = 100;
    stage.addChild(this.body);

    this.barrel = new createjs.Bitmap(imgBarrel);
    this.barrel.regX = this.barrel.getBounds().width/2;
    this.barrel.regY = 50;
    this.barrel.x = this.body.x;
    this.barrel.y = this.body.y;
    stage.addChild(this.barrel);

    this.update = function(delta){
        var speed = 0.2*delta;

        var gamepad = gamepads[0];
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
            }
        }
    }
}