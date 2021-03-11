

const maxLevel = 1;
const RADIUS = 8;
const scorePerBrick = 10;


let currentLevel = 1;
let GAMEOVER = false;
let goLeft = false,goRight=false;
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
    width : 75,
    height : 25,
    row : 2,
    offSetLeft : 15,
    offSetTop : 15,
    marginTop : 30,   //Üstte bırakılacak boşluk
    fillColor : "#7FFFD4",
    strokeColor : "#FFF",
    column : 11
}

let bricks = [];

function createBricks(){
    for(let r = 0; r < brick.row; r++){
        bricks[r] = [];
        for(let c = 0; c < brick.column; c++){
			
            bricks[r][c] = {
                x : c * ( brick.offSetLeft + brick.width ) + brick.offSetLeft,
                y : r * ( brick.offSetTop + brick.height ) + brick.offSetTop + brick.marginTop,
                status : true
            }
        }
		
    }
}

createBricks();

function drawBricks(){
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            let b = bricks[r][c];
            if(b.status){
                //if(r==0){
					ctx.fillStyle = brick.fillColor;
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
	
	let passed=true;
    
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            passed = passed && ! bricks[r][c].status;
        }
    }
    
    if(passed){
        if(currentLevel >= maxLevel){
            won();
            GAMEOVER = true;
            return;
        }
        resetBall();
    }
}

function update(){
	
	//Movements
    moveTable();
    moveBall();
    
	//Hits
    ballHitToBorders();
    ballHitToTable();
    ballHitToBrick();
	
	//Deciders
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


//END



















