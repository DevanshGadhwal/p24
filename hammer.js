class Hammer{
    constructor(x,y) {
      var options = {
          isStatic:false,
          restitution:0.4,
          density:6
      }
      this.body = Bodies.rectangle(x,y,100,50,options);
      this.width = 100;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle=this.body.angle;
      push();
      rotate(angle);
      rectMode(CENTER);
      stroke("black");
      strokeWeight(2);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
