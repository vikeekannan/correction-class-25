class Log extends BaseClass {
    constructor(x, y, height, angle) {
      super(x,y,20,height)
      this.height = height;
      this.ia = loadImage("sprites/wood2.png")
      Matter.Body.setAngle(this.body, angle);
    }
    display(){
      super.display();
    }
  };
  