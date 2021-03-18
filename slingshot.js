class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(99,50,23);

            if(pointA.x<=220){
                strokeWeight(6);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y-3);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-5);
                
            }else{
                strokeWeight(3);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y-3);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y-5);
                

            }
            pop()
        }
    }
    
}