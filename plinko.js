class Plinko{
    constructor(x, y, r) {
        var options = {
            'restitution':1.0,
            isStatic:true,
            
            
        }
        this.r=r;
        this.body = Bodies.circle(x, y, r,options);
    
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}