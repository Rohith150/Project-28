class Stone{
    constructor(x,y,width,height){
        var options = {
            restitution: 0,
            friction: 1,
            denstiy: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.r=100;
        this.image = loadImage('Images/stone.png')
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}