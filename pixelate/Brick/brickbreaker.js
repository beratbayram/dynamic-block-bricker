

const RADIUS = 8;
const MAX_LEVEL = 1;
const scorePerBrick = 10;


const pixelArr = [
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 165,g: 165,b: 165,a: 255,
    },
    {r: 118,g: 118,b: 118,a: 255,
    },
    {r: 118,g: 118,b: 118,a: 255,
    },
    {r: 165,g: 165,b: 165,a: 255,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 53,g: 53,b: 53,a: 255,
    },
    {r: 55,g: 55,b: 55,a: 255,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 255,
    },
    {r: 53,g: 53,b: 53,a: 255,
    },
    {r: 53,g: 53,b: 53,a: 255,
    },
    {r: 0,g: 0,b: 0,a: 255,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 141,g: 141,b: 141,a: 255,
    },
    {r: 141,g: 141,b: 141,a: 255,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 180,g: 180,b: 180,a: 255,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 160,g: 160,b: 160,a: 255,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 189,g: 189,b: 189,a: 255,
    },
    {r: 99,g: 99,b: 99,a: 255,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
  [
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
    {r: 0,g: 0,b: 0,a: 0,
    },
  ],
];


let currentLevel = 1;
let GAMEOVER = false;
let goLeft = false;
let goRight = false;
let life = 1;
let totalScore = 0;
const cvs = document.getElementById("space");
const ctx = cvs.getContext("2d");

document.addEventListener("keydown", function(event){
   if(event.keyCode == 37)  goLeft = true;
   else if(event.keyCode == 39) goRight = true;
});

document.addEventListener("keyup", function(event){
   if(event.keyCode == 37) goLeft = false;
   else if(event.keyCode == 39) goRight = false;
});

const table = {
    width : 120,
    height : 25,
    x : cvs.width*0.5 - 50,
    y : cvs.height -45,
    dx :13
}

function drawTable(){
	ctx.fillStyle = "#FFA500";
    ctx.fillRect(table.x, table.y, table.width, table.height);
	
	ctx.strokeStyle = "#8B008B";
	ctx.strokeRect(table.x, table.y, table.width, table.height);
}

function moveTable(){
    if(goRight && table.x + table.width < cvs.width){
        table.x += table.dx;
    }else if(goLeft && table.x > 0){
        table.x -= table.dx;
    }
}

const ball = {
    x : cvs.width/2,
    y : table.y - RADIUS,
    radius : RADIUS,
    speed : 8,
    dx : 8 * (Math.random() * 2 - 1),
    dy : -8
}

function drawBall(){
    ctx.beginPath();
    
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "#DC143C";
    ctx.fill();
    
    ctx.closePath();
}

function moveBall(){
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function ballHitToBorders(){
    if(ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0){
        ball.dx = -ball.dx;
    }
    
    if(ball.y - ball.radius < 0){
        ball.dy = -ball.dy;
    }
    
    if(ball.y + ball.radius > cvs.height){
        life--; 
        resetBall();
    }
}

function resetBall(){
    ball.x = cvs.width/2;
    ball.y = table.y - RADIUS;
    ball.dx = 8 * (Math.random() * 2 - 1);
    ball.dy = -8;
}

function ballHitToTable(){
    if(ball.x < table.x + table.width && 
		ball.x > table.x && 
		table.y < (table.y + table.height) && 
		ball.y > table.y){
        
        let hitPoint = ball.x - (table.x + table.width/2);
        hitPoint = hitPoint / (table.width/2);
        
        let angle = hitPoint * Math.PI/3;
            
            
        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = - ball.speed * Math.cos(angle);
    }
}

let brick = {
    width : 67,
    height : 25,
    row : 10,
    offSetLeft : 15,
    offSetTop : 15,
    marginTop : 30,   //Üstte bırakılacak boşluk
    fillColor : "#7FFFD4",
    strokeColor : "#FFF",
    column : 10
}

let bricks = [];

let q=[[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,0],
	[1,0,1,1,1,0,0,1,0,0,0,0],
	[1,0,1,1,1,0,0,1,0,0,0,0],
	[1,0,1,1,1,0,0,1,0,0,0,0]
	];


function createBricks(){
    for(let r = 0; r < brick.row; r++){
        bricks[r] = [];
        for(let c = 0; c < brick.column; c++){
			let durum=false;
			if(pixelArr[r][c].a==255)
				durum=true;
			
            bricks[r][c] = {
                x : c * ( brick.offSetLeft + brick.width ) + brick.offSetLeft,
                y : r * ( brick.offSetTop + brick.height ) + brick.offSetTop + brick.marginTop,
                status : durum
            }
        }
		
    }
}

createBricks();

function drawBricks(){
	
	
	/*let q=[[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,0,1,0,0,0,0],
	[1,0,1,1,1,0,0,1,0,0,0,0],
	[1,0,1,1,1,0,0,1,0,0,0,0],
	[1,0,1,1,1,0,0,1,0,0,0,0]
	];*/
	
	
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            let b = bricks[r][c];
			//if(q[r][c]==1)
            if(b.status){
                //if(r==0){ 
				
					ctx.fillStyle = "rgba(" + pixelArr[r][c].r + ", " + pixelArr[r][c].g + ", "+ pixelArr[r][c].b + ", " +pixelArr[r][c].a+ ")";//brick.fillColor;
					ctx.fillRect(b.x, b.y, brick.width, brick.height);
                
					ctx.strokeStyle = brick.strokeColor;
					ctx.strokeRect(b.x, b.y, brick.width, brick.height);
				//}
				/*else if(r==1){
					ctx.fillStyle = "#D2691E";
					ctx.fillRect(b.x, b.y, brick.width, brick.height);
                
					ctx.strokeStyle = "#000000";
					ctx.strokeRect(b.x, b.y, brick.width, brick.height);
				}*/
            }
        }
    }
}

function ballHitToBrick(){
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            let b = bricks[r][c];
            if(b.status){
                if(ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height){
                     ball.dy = - ball.dy;
                    b.status = false; // the brick is broken
                    totalScore += scorePerBrick;
                }
            }
        }
    }
}


function draw(){
    drawTable();
    drawBall();
    drawBricks();
}

function gameOver(){
    if(life <= 0){
        lost();
        GAMEOVER = true;
    }
}

function levelUp(){
    let isLevelDone = true;
    
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            isLevelDone = isLevelDone && ! bricks[r][c].status;
        }
    }
    
    if(isLevelDone){
        if(currentLevel >= MAX_LEVEL){
            won();
            GAMEOVER = true;
            return;
        }
        resetBall();
    }
}

function update(){
    moveTable();
    
    moveBall();
    
    ballHitToBorders();
	
    ballHitToTable();
	
    ballHitToBrick();
	
    gameOver();
	
	levelUp();
}


function won(){
    gameover.style.display = "block";
    youwon.style.display = "block";
}

function lost(){
    gameover.style.display = "block";
    youlose.style.display = "block";
}

function loop(){
    ctx.drawImage(BG_IMG, 0, 0);
    draw();
    update();
    
    if(!GAMEOVER){ 
		requestAnimationFrame(loop);
	}
}
loop();

const playagain = document.getElementById("playagain");

playagain.addEventListener("click", function(){
    location.reload(); 
})




















