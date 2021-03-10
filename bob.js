class Bob{
    constructor(x,y){
        var options={
        
            restitution:0.5,
            friction:1,
            density:7.6,
        }

        this.body= Bodies.circle(x,y,25,options);
        World.add(world,this.body);

    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
    }
}