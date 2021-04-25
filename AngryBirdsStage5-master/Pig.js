class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //to define full visibility 
    this.visibility=255
  }
display(){
  //to show the pigs speed
  console.log(this.body.speed)
  //to make it sow it only shows when speed is below 3
  if(this.body.speed < 3){
  super.display() 
}
else{
  //to remove the pig from the world
 World.remove(world, this.body)
 //to make it so only the pig dissappears
 push()
 //to reduce the full visibility
 this.visibility=this.visibility-5
 //to make the pig dissappear slowly
 tint(255,this.visibility)
 image(this.image,this.body.position.x,this.body.position.y,50,50)
  //to make it so only the pig dissappears
 pop()
}
}
}
