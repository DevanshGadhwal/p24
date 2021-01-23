class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
          restitution:0.4,
          density:10
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };