var fixedrect , movingrect;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 400, 100, 50);
  movingrect.shapeColor = 'green';

  fixedrect = createSprite(400,400,50,100);
  fixedrect.shapeColor = 'green';

  fixedrect.debug = true;
  movingrect.debug = true;
}

function draw() {
  background(255,255,255);  
  //console.log(movingrect.x-fixedrect.x);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
     fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
      movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
       fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) {

    movingrect.shapeColor = 'red';
    fixedrect.shapeColor = 'red';
    
  } 
  else {
    movingrect.shapeColor = 'green';
    fixedrect.shapeColor = 'green';
  }

  drawSprites();
}