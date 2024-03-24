function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.prevZ = this.z;
  
    this.update = function() {
      this.z = this.z - speed;
      if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.prevZ = this.z;
      }
    }
  
    this.show = function() {
      fill(255);
      noStroke();
  
      var currentX = map(this.x / this.z, 0, 1, 0, width);
      var currentY = map(this.y / this.z, 0, 1, 0, height);
  
      var r = map(this.z, 0, width, 10, 0);
      ellipse(currentX, currentY, r, r);
  
      var prevX = map(this.x / this.prevZ, 0, 1, 0, width);
      var prevY = map(this.y / this.prevZ, 0, 1, 0, height);
  
      this.prevZ = this.z;
  
      stroke(255);
      strokeWeight(5);
      line(prevX, prevY, currentX, currentY);
  
    }
  }