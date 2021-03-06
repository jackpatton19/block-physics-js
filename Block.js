class Block{

  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    rect(x, y, width, height);
  }

  draw(player){
      fill(150);
      rect(this.x, this.y, this.width, this.height);
  }

  // https://epallet.com/product-list?page=1&ordering=per_oz_delivered_price,delivered_case_price&clickedProductNumber=0&brand=maruchan

  // GETTERS AND SETTERS
  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }

  getWidth(){
    return this.width;
  }

  getHeight(){
    return this.height;
  }

}
