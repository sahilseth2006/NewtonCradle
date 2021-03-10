class Chain {
    constructor(a,b){
        var options={
            bodyA:a,
            bodyB:b,
            length:50,
          //  stiffness:0.5
            
        }

        this.chain=Constraint.create(options);
        World.add(world,this.chain);


    
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position
        line(pointA.x,pointA.y,pointA.x,pointB.y);
        
    }
    
}