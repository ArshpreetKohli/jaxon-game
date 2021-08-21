var runner1,runner1_running,path,path_image,edges,invisiblepath

function preload(){
  //pre-load images
  runner1_running=loadAnimation("Runner-1.png","Runner-2.png")
  path_image=loadImage("path.png")
}

function setup(){
  createCanvas(600,600);
  //create path here
  path=createSprite(200,200,10,10)
  path.addImage(path_image)
 
  //create runner1 here
  runner1=createSprite(200,500,15,20)
  runner1.scale=0.15
  runner1.addAnimation("running",runner1_running)

}

function draw() {
  //background colour
  background(0);
path.velocityY=4
if(path.y>600){
  path.y=300
}
  console.log(runner1.y)
  //jump when space key is pressed
  if(keyDown("space")){
    runner1.y=runner1.y-2
  }
  
 // runner1.velocityY = runner1.velocityY + 0.5;
  if(path.x<0){
path.x=300
  }
  //stop runner1 from falling down
  invisiblepath=createSprite(350,200,10,10)
  invisiblepath.visible=false
  runner1.collide(invisiblepath)
  drawSprites()
}


