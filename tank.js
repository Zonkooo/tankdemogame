function Tank(imgTank){

    this.body = new createjs.Bitmap(imgTank);
    var bounds = this.body.getBounds();
    this.body.regX = bounds.width/2;
    this.body.regY = bounds.height/2;
    this.body.x = 100;
    this.body.y = 100;
    stage.addChild(this.body);

    this.update = function(delta){
        this.body.rotation += 0.5;
    }
}