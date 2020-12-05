class Slingshot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 5
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.point = point
    }
    attach(body){
        this.sling.bodyA = body
    }
fly(){
    this.sling.bodyA = null
}
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.point
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}