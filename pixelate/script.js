function submitHandler(event) {
  event.preventDefault();
  document.getElementById("formOverlay").style.display = "none";
  main(event.target[3].value, board);
}

function preview() {
  const imgURL = document.getElementById("URL").value;
  const resolution = document.getElementById("Resolution").value;
  const tolerance = 100 - document.getElementById("Tolerance").value;

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = imgURL;

  img.onload = () => {
    board = new Board(img, tolerance, resolution);
    const submitBtn =  document.getElementById("submit");
    submitBtn.disabled = false;
    submitBtn.style.color= "white";
    submitBtn.style.border= "1px solid white";
  };
}

document.getElementById("form").addEventListener("submit", submitHandler);
document.getElementById("preview").addEventListener("click", preview);

//----------------------------------------------------------------

const SIZE = 1000;
const FPS = 60;
let board = null;
const bgColor = { r: 255, g: 255, b: 255, a: 255 };

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  playHitSound()
  {
    const sound = document.createElement("audio");
    sound.src = "https://www.w3schools.com/graphics/bounce.mp3"
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.body.appendChild(sound);
    sound.play().catch(null);
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
    this.playHitSound();
    return this;
  }
  reverseY() {
    this.y = -this.y;
    this.playHitSound();
    return this;
  }
}
class Ball {
  constructor(speed) {
    this.pos = new Position(SIZE / 2, SIZE - 50);
    this.defPos = this.pos.clone();
    this.color = "red";
    this.speed = new Position(-3, -2).multiply(speed);
    this.radius = 10;
  }

  move() {
    this.pos.add(this.speed);
    if (this.pos.x < this.radius * 2) {
      this.speed.reverseX();
      this.pos.set(new Position(20, this.pos.y));
    }
    if (SIZE - this.radius * 2 < this.pos.x) {
      this.speed.reverseX();
      this.pos.set(new Position(SIZE - 20, this.pos.y));
    }
    if (this.pos.y < this.radius) {
      this.speed.reverseY();
      this.pos.set(new Position(this.pos.x, 20));
    }
    if (SIZE + this.radius < this.pos.y) {
      gameOver(this);
    }

    return this;
  }
}

class Paddle {
  constructor(speed) {
    this.width = 250;
    this.height = 25;
    this.speed = speed;
    this.color = "orange";
    this.pos = new Position(SIZE / 2 - this.width / 2, SIZE - 2 * this.height);

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft" || event.key === "a") this.goLeft();
      else if (event.key === "ArrowRight" || event.key === "d") this.goRight();
    });
  }

  ballHit(ball) {
    const leftX = this.pos.x - ball.radius * 1.5;
    const rightX = this.pos.x + this.width + ball.radius * 1.5;
    const upY = this.pos.y - ball.radius * 1.5;
    // const downY = this.pos.y + this.height + ball.radius;

    if (leftX < ball.pos.x && ball.pos.x < rightX && upY < ball.pos.y) {
      ball.speed.reverseY();
      ball.pos.y = upY;
    }
    return this;
  }

  goLeft() {
    if (0 < this.pos.x) this.pos.x -= this.speed;
  }
  goRight() {
    if (this.pos.x < SIZE - this.width) this.pos.x += this.speed;
  }
}
class Board {
  constructor(img, tolerance, resolution) {
    [this.pixelArr, this.boxCount] = getPixelArr(img, tolerance, resolution);
    this.boxSize = Math.round(
      SIZE / Math.max(this.pixelArr.length, this.pixelArr[0].length)
    );
  }

  _hitPoint(coordinates, ball) {
    const point = {
      x: Math.round(coordinates.x / this.boxSize - 0.5),
      y: Math.round(coordinates.y / this.boxSize - 0.5),
    };
    if (
      point.y < this.pixelArr.length &&
      point.x < this.pixelArr[0].length &&
      this.pixelArr[point.y][point.x].a !== 0
    ) {
      this.pixelArr[point.y][point.x].a = 0;
      this.boxCount--;
      if (this.boxCount <= 0) {
        gameOver(ball);
      }
      return true;
    }
    return false;
  }

  ballHit(ball) {
    const center = {
      x: ball.pos.x,
      y: ball.pos.y,
    };
    this._hitPoint(center, ball);
    const right = {
      x: ball.pos.x + ball.radius,
      y: ball.pos.y,
    };
    if (this._hitPoint(right, ball)) ball.speed.reverseX();

    const left = {
      x: ball.pos.x - ball.radius,
      y: ball.pos.y,
    };
    if (this._hitPoint(left, ball)) ball.speed.reverseX();

    const up = {
      x: ball.pos.x,
      y: ball.pos.y - ball.radius,
    };
    if (this._hitPoint(up, ball)) ball.speed.reverseY();

    const down = {
      x: ball.pos.x,
      y: ball.pos.y + ball.radius,
    };
    if (this._hitPoint(down, ball)) ball.speed.reverseY();
  }
}

function main(speed, board) {
  const canvas = document.getElementById("mainCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = SIZE;
  canvas.height = SIZE;

  const ball = new Ball(speed);
  const paddle = new Paddle(speed * 10);
  setInterval(drawScene, 1000 / FPS, ctx, board, ball, paddle);
}

function drawScene(ctx, board, ball, paddle) {
  board.ballHit(ball, ctx);
  const pixelArr = board.pixelArr;
  const boxSize = board.boxSize;

  ctx.save();
  ctx.clearRect(0, 0, SIZE, SIZE);

  pixelArr.forEach((row, y) => {
    row.forEach((color, x) => {
      drawBox(ctx, x, y, boxSize, color);
    });
  });

  drawPaddle(ctx, paddle.ballHit(ball));
  drawBall(ctx, ball.move());

  ctx.restore();
}

function drawPaddle(ctx, paddle) {
  ctx.fillStyle = paddle.color;
  ctx.fillRect(paddle.pos.x, paddle.pos.y, paddle.width, paddle.height);
}

function drawBall(ctx, ball) {
  ctx.beginPath();
  ctx.fillStyle = ball.color;
  ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
}

function drawBox(ctx, x, y, boxSize, color) {
  ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},${color.a})`;
  ctx.fillRect(x * boxSize, y * boxSize, boxSize, boxSize);
}

function getPixelArr(img, tolerance, resolution) {
  let boxCount = 0;
  const canvas = document.getElementById("bufferCanvas");
  const ctx = canvas.getContext("2d");
  canvas.onclick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const location = [
      Math.floor(
        (canvas.width * (event.clientX - rect.left)) / (rect.right - rect.left)
      ),
      Math.floor(
        (canvas.height * (event.clientY - rect.top)) / (rect.bottom - rect.top)
      ),
    ];
    console.log(location);
    var data = ctx.getImageData(location[0], location[1], 1, 1);
    bgColor.r = data.data[0];
    bgColor.g = data.data[1];
    bgColor.b = data.data[2];
    preview();
  };
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  canvas.height = img.height / 10;
  canvas.width = img.width / 10;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  canvas.height = img.height;
  canvas.width = img.width;

  switch (parseInt(resolution)) {
    case 10:
      resolution = 1;
      break;
    case 9:
      resolution = 0.5;
      break;
    case 8:
      resolution = 0.25;
      break;
    case 7:
      resolution = 0.2;
      break;
    case 6:
      resolution = 0.1;
      break;
    case 5:
      resolution = 0.05;
      break;
    case 4:
      resolution = 0.04;
      break;
    case 3:
      resolution = 0.02;
      break;
    case 2:
      resolution = 0.01;
      break;
    case 1:
      resolution = 0.005;
      break;
    default:
      alert(resolution);
      break;
  }

  const w = canvas.width * resolution;
  const h = canvas.height * resolution;

  ctx.drawImage(img, 0, 0, w, h);
  ctx.mozImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const pixel = getPixelValue(data, canvas.width, x, y);

      if (
        x > canvas.width - 1 / resolution || // prevent alignment issues
        y > canvas.height - 1 / resolution ||
        (bgColor.r + tolerance >= pixel.red &&
          pixel.red >= bgColor.r - tolerance &&
          bgColor.g + tolerance >= pixel.blue &&
          pixel.blue >= bgColor.g - tolerance &&
          bgColor.b + tolerance >= pixel.green &&
          pixel.green >= bgColor.b - tolerance)
      ) {
        // remove pixel
        data[(y * canvas.width + x) * 4 + 0] = 0;
        data[(y * canvas.width + x) * 4 + 1] = 0;
        data[(y * canvas.width + x) * 4 + 2] = 0;
        data[(y * canvas.width + x) * 4 + 3] = 0;
      } else {
        data[(y * canvas.width + x) * 4 + 3] = 255;
      }
    }
  }
  ctx.putImageData(imgData, 0, 0);

  const result = [];

  for (let y = 0; y < canvas.height; y += 1 / resolution) {
    const element = [];
    for (let x = 0; x < canvas.width; x += 1 / resolution) {
      const pixel = getPixelValue(data, canvas.width, x, y);
      element.push({
        r: pixel.red,
        g: pixel.green,
        b: pixel.blue,
        a: pixel.alpha,
      });
    }
    result.push(element);
  }
  const boxSize = Math.round(SIZE / Math.max(result.length, result[0].length));
  const maxY = Math.round(600 / boxSize);

  // avoid overflowing
  if (maxY < result.length) while (maxY !== result.length) result.pop();

  result.forEach((row) => {
    boxCount += row.filter((box) => box.a === 255).length;
  });
  return [result, boxCount];
}

function getPixelValue(data, width, x, y) {
  return {
    red: data[(y * width + x) * 4 + 0],
    green: data[(y * width + x) * 4 + 1],
    blue: data[(y * width + x) * 4 + 2],
    alpha: data[(y * width + x) * 4 + 3],
  };
}

function gameOver(ball) {
  ball.pos.set({ x: 500, y: 500 });
  ball.speed.zero();
  ball.color = "transparent";
  document.getElementById("gameover").style.display = "flex";
}
