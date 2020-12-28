class Box extends BaseClass {
  constructor(x, y, width, height) {
    super(x,y,width,height)
    this.ia = loadImage("sprites/wood1.png")
  }
  display(){
    super.display();
  }
}