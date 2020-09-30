class Box{
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height);
    //this.image = loadImage("box.jpg");
    this.width = width;
    this.height = height;
    this.visibility=255;
    World.add(world, this.body);
  }
  display(){
   // if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("blue");
      rect(0,0,this.width,this.height);
     // imageMode(CENTER);
      //image(this.image,0,0,this.width,this.height);
      pop();
   // }else{
      //World.remove(world,this.body);
      //push();
      //this.visibilty=this.visibility-5;
      //tint(255,this.visibility);
      //pop();
    //}
  }
}
