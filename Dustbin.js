class Dustbin {
    constructor(x, y,width,height) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
  
      fill(255);

      rect(this.body.position.x, this.body.position.x, this.width, this.height);

    }
  };
  