// Player class
class Player{

  constructor(size, image, image2){
    this.size = size;
    this.img = image;
    this.img2 = image2;
    this.x = 0;
    this.y = windowHeight - size;
    this.inc = 5;
    this.jumpStrength = 0;
    this.weight = 1;
    this.jumpable = false;
    this.attack = false;
    this.weapon = 1;
    this.bullets = [];
    fill(255, 0, 0)
  }

  // Does the drawing every frame
  draw(){
    //image(this.img, this.x, this.y, this.size, this.size);
    this.move();
    this.attackFunc();
    for(let i = 0; i < this.bullets.length; i++){
      this.bullets[i].draw();
      this.bullets[i].update();
    }
    fill(255, 0, 0);
    rect(this.x, this.y, this.size, this.size);
    line(mouseX, mouseY, this.x + (this.size / 2), this.y + (this.size / 2));
    //ellipse(this.x + (this.size / 2), this.y + (this.size / 2), 10, 10);
  }

  // Checks for collision
  checkCollision(){
    if(this.x <= 0){
      this.x = 0;
    }if(this.y >= windowHeight - this.size){
      this.y = windowHeight - this.size;
    }if(this.x >= windowWidth - this.size){
      this.x = windowWidth - this.size;
    }if(this.y <= 0){
      this.y = 0;
    }
  }

  // Moves the player based on the key
  move(){

    // Movement left and right
    this.checkCollision();
    if(keyIsDown(68)){
        this.x += this.inc;
    }else if(keyIsDown(65)){
      this.x -= this.inc;
    }

    // Jumping Stuff
    if(this.jumpStrength == 20){
      this.jumpable = false;
    }

    if(keyIsDown(32) && (this.y >= windowHeight - this.size || this.jumpable)){
      this.jumpStrength = 20;
    }

    this.y -= this.jumpStrength;
    this.jumpStrength -= this.weight;

    if(this.y >= windowHeight - this.size){
      this.jumpStrength = 0;
    }

    if(this.jumpStrength <= 0){
      this.jumpable = false;
    }
  }

  // Checks collisions with block
  checkCollisionBlock(b){

    // Check if player is touching bottom
    if(this.y <= b.getY() + b.getHeight() && this.y >= b.getY() + b.getHeight() - 5&&
        this.x >= b.getX() - this.size &&
        this.x <= b.getX() + b.getWidth()){
      this.y = (b.getY() + b.getHeight());
      this.jumpStrength = -1;
    }

    // Check if player is touching top
    if(this.y >= b.getY() - this.size && this.y <= b.getY() &&
        this.x >= b.getX() - this.size &&
        this.x <= b.getX() + b.getWidth()){
      this.y = (b.getY() - this.size);
      this.jumpStrength = 0;
      this.jumpable = true;
    }else if(this.y <= b.getY() - this.size &&
            this.x >= b.getX() - this.size &&
            this.x <= b.getX() + b.getWidth()){
          this.jumpable = false;
    }else{
      //this.jumpable = false;
    }

    // Checks if player is touching right side
    if(this.x <= b.getX() + b.getWidth() && this.x >= b.getX() + b.getWidth()&&
        this.y >= b.getY() && this.y <= b.getY() + b.getHeight()){
          this.x = (b.getX() + b.getWidth() + 5);
          this.jumpable = false;
    }

    // Checks if player is touching left side
    if(this.x + this.size >= b.getX() && this.x <= b.getX()&&
        this.y >= b.getY() && this.y <= b.getY() + b.getHeight()){
      this.x = (b.getX() - this.size - 5);
      this.jumpable = false;
    }
  }

  // Does all the attacking stuff
  attackFunc(){
    if(this.attack){
      if(this.weapon == 0){
        fill(0, 255, 0);
        if(mouseX > this.x + this.size){  // Right Side
          rect(this.x + this.size, this.y + (this.size / 2), this.size, 5);
        }else{  // Left side
          rect(this.x - this.size, this.y + (this.size / 2), this.size, 5);
        }
        this.attack = false;
      }else if(this.weapon == 1){
        let slope = ((mouseY - this.y) / (mouseX - this.x));
        console.log(slope);
        this.bullets.push(new Bullet(this.x + (this.size / 2), this.y + (this.size / 2), 5, slope));
      }
    }
  }


  // GETTERS AND SETTERS ----------------------------------------------------
  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }

  getScreenX(){
    return this.screenX;
  }

  getSize(){
    return this.size;
  }

  getJumpable(){
    return this.jumpable;
  }

  setX(val){
    this.x = val;
  }

  setY(val){
    this.y = val;
  }

  setJumpStrength(val){
    this.jumpStrength = val;
  }

  setJumpable(val){
    this.jumpable = val;
  }

  changeX(val){
    this.x += val;
  }

  changeY(val){
    this.y += val;
  }

  setAttack(val){
    this.attack = val;
  }


}
