class Iron{
    constructor(x,y) {
      var options = {
          isStatic:false,
          restitution:0.4,
          density:30
      }
      this.body = Bodies.rectangle(x,y,80,50,options);
      this.width = 80;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      var angle=this.body.angle;
      push();
      rotate(angle);
      rectMode(CENTER);
      stroke("black");
      strokeWeight(2);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
