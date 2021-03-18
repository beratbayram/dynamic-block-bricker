const SIZE = 1000;
const FPS = 60;

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  playHitSound() {
    const sound = document.createElement("audio");
    sound.src = "https://www.w3schools.com/graphics/bounce.mp3";
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);
    //sound.play().catch(null);
  }

  add(position) {
    this.x += position.x;
    this.y += position.y;
    return this;
  }

  multiply(int) {
    this.x *= int;
    this.y *= int;

    return this;
  }

  clone() {
    return new Position(this.x, this.y);
  }

  zero() {
    this.x = 0;
    this.y = 0;
    return this;
  }

  set(position) {
    this.x = position.x;
    this.y = position.y;

    return this;
  }

  reverseX() {
    this.x = -this.x;
    this.y += 2*(Math.random());
    this.playHitSound();
    return this;
  }
  reverseY() {
    this.y = -this.y;
    this.x += 2*(Math.random());
    this.playHitSound();
    return this;
  }
}
class Ball {
  constructor(speed) {
    this.pos = new Position(SIZE / 2, SIZE - 50);
    this.defPos = this.pos.clone();
    this.color = "darkblue";
    this.speed = new Position(-3, -2).multiply(speed);
    this.radius = 10;
  }

  move() {
    this.pos.add(this.speed)
    if (this.pos.x < this.radius) {
      this.speed.reverseX();
      this.pos.set(new Position(20, this.pos.y));
    }
    if (SIZE - this.radius < this.pos.x) {
      this.speed.reverseX();
      this.pos.set(new Position(SIZE - 20, this.pos.y));
    }
    if (this.pos.y < this.radius) {
      this.speed.reverseY();
      this.pos.set(new Position(this.pos.x, 20));
    }
    if (SIZE - this.radius < this.pos.y) {
      this.speed.reverseY();
      this.pos.set(new Position(this.pos.x, SIZE - 20));
    }

    return this;
  }
}

window.onload = function main() {
  const canvas = document.getElementById("mainCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = SIZE;
  canvas.height = SIZE;

  const ball = new Ball(10);
  setInterval(drawScene, 1000 / FPS, ctx, ball);
};

function drawScene(ctx, ball) {
  ctx.clearRect(0, 0, SIZE, SIZE);

  drawBall(ctx, ball.move());
}

function drawBall(ctx, ball) {
  ctx.beginPath();
  ctx.fillStyle = ball.color;
  ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
}
