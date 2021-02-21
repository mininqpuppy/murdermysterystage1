var murderer,murdererImage;
var Citizen, citizenImage;
var Detective, detectiveImage;
var Gun,gunImage;
var Knife,knifeImage;
var House,houseImage;
var Button,buttonImage;
var Gunshot;
var Citizen2;
var Citizen3;
var Citizen4;

function preload(){
  murdererImage=loadImage("murder man.png");
  citizenImage=loadImage("citizen.png");
  detectiveImage=loadImage("detective.png");
  knifeImage=loadImage("knife.png");
  gunImage=loadImage("gun.png");
  houseImage=loadImage("house.jpg");
  buttonImage=loadImage("button.png");
  Gunshot=loadSound("shot.mp3");
}
function setup() {
  createCanvas(1700,900);
  Citizen=createSprite(900,500,20,10);
  Citizen.addImage(citizenImage);
  
  murderer=createSprite(500,700,20,10);
  murderer.addImage(murdererImage)
  murderer.scale=0.5;

  Detective=createSprite(1500,600,20,10);
  Detective.addImage(detectiveImage);

  Knife=createSprite(475,780,5,5);
  Knife.addImage(knifeImage);
  Knife.scale=0.4;

  Gun=createSprite(1550,600,5,5);
  Gun.addImage(gunImage);
  Gun.scale=0.4
  
  Button=createSprite(1630,500,10,10);
  Button.addImage(buttonImage);
  Button.scale=0.2

  Citizen2=createSprite(1450,150,10,10);
  Citizen2.addImage(citizenImage);

  Citizen3=createSprite(300,550,20,10);
  Citizen3.addImage(citizenImage);
  
  Citizen4=createSprite(700,500,20,10);
  Citizen4.addImage(citizenImage);
}

function draw() {
  background(houseImage);  
  if(mousePressedOver(Button)){
    Gunshot.play();
  }

  drawSprites();
  
}