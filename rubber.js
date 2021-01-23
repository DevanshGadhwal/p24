class Rubber {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.4,
          density:1,
          friction:5,
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  }