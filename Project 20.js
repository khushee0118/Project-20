var tom, jerry
function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(800,600,20,20);
    tom.addAnimation("tomImg1", tomImg1);
    tom.addAnimation("tomLastImage", tomImg3);
    tom.scale=0.1;
    jerry=createSprite(300,600,20,20);
    jerry.addAnimation("jerry", jerryImg1);

    jerry.scale=0.1;
   
    //create tom and jerry sprites here

}

function draw() {

    background(bg);
   
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.changeAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  
    drawSprites();
}


function keyPressed(){

    if(keyCode===LEFT_ARROW){
        tom.velocityX=-5;
        tom.addAnimation("tomImg2", tomImg2);
        tom.changeAnimation("tomIg2");
        
        jerry.addAnimation("jerryTeasing", jerryImg2); 
        jerry.frameDelay = 25;
     jerry.changeAnimation("jerryTeasing");
    }

    


  //For moving and changing animation write code here


}
