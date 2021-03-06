class Bullet{

  constructor(x, y, size, slope){
    this.x = x;
    this.y = y;
    this.size = size;
    this.slope = slope;
  }

  draw(){
    fill(255);
    ellipse(this.x, this.y, this.size);
  }

  update(){
    this.x += this.slope;
    this.y += (this.slope / this.slope);
  }

}
