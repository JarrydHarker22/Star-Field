function Bubble() {
    this.x = 490;
    this.y = 715;
    this.r = 30;
    this.vx = random(-1, 1);
    this.vy = random(5, 1);
    this.alpha = 255;
    
    this.update = function() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 7;
      this.r -= 1;
    }
    
    this.show = function() {
      noStroke();
      fill(244, 81+ this.r*4, 44+ this.r, this.alpha);
      ellipse(this.x, this.y, this.r)
    }
    
    this.finished = function() {
      return this.alpha < 0;
    }
  }