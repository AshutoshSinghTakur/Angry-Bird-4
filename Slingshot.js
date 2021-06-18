class Slingshot{
    constructor(firstBody,secondBody){
        var options ={
            bodyA: firstBody,
            bodyB: secondBody,
            stiffness: 0.4,
            length: 100
        }
        this.sling = Constraint.create(options)

        World.add(world, this.sling)
    }

    display(){
        strokeWeight(5)
        stroke("brown");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
    }
}