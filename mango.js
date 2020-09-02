class Mango{
    constructor(x, y, width){
       var options = {
           isStatic: true,
           restitution: 0,
           friction: 1
       } 
       this.body = Bodies.circle(x,y,width,options);
       this.x = x;
       this.y = y;
       this.width = width;
       this.r=40;
       this.image = loadImage('Images/mango.png');
       World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, 100);
        pop();
    }
}