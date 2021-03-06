let p, canvas, blocks, part, img, img2;

//function preload(){
  //img = loadImage("/assets/man.png");
  //img2 = loadImage("/assets/man2.png");
//}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  p = new Player(50, img, img2);
  b = new Block(100, 850, 650, 50);
  b2 = new Block(1100, 850, 650, 50);
  b3 = new Block(550, 650, 750, 50);
  b4 = new Block(100, 450, 650, 50);
  b5 = new Block(1100, 450, 650, 50);
  b6 = new Block(550, 250, 750, 50);
  blocks = [b, b2, b3, b4, b5, b6];
}

function draw(){
  background(50);
  for(let i = 0; i < blocks.length; i++){
    blocks[i].draw(p);
    p.checkCollisionBlock(blocks[i]);
  }
  p.draw();
}

function mousePressed(){
  p.setAttack(true);
}
