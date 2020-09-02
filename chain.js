class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.10,
            length: 70
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA !== null ){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly() {
        this.chain.bodyA =  null;
    }

}