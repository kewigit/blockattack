var canvas = document.getElementById("backArea");
var ctx = canvas.getContext("2d"); //2D描画コンテキスト
var ballRadius = 10;    //衝突検知、描画される円の半径をもつ変数
var x = canvas.width/2; //ボールの開始位置を決める
var y = canvas.height-30; //ボールの開始位置を決める
var dx = 2; //ボールの位置更新
var dy = -2;    //ボールの位置更新
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

//円を描画するためのコード
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);    //円の中心のx、y座標、円の半径、開始角度と終了角度、描く方向 (時計回りはfalseで、デフォルト。半時計回りはtrue。)
    ctx.fillStyle = "#f44336";//"#0095DD";
    ctx.fill();
    ctx.closePath();
}

//長方形を描画
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#f44336";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   //Canvasの内容を消去す、更新する（左上端ｘ、左端ｙ、右下ｘ、右端ｙ）
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;   //ボールの位置更新
    }
     if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    // if(y + dy < ballRadius) {
    //     dy = -dy;   //ボールの位置更新
    // }
    // else if(y + dy > canvas.height-ballRadius) {
    //     if(x > paddleX && x < paddleX + paddleWidth) {
    //         dy = -dy;   //ボールの位置更新
    //     }
    //     else {
    //         //alert("GAME OVER");
    //         //document.location.reload();
    //     }
    // }
    // if(rightPressed && paddleX < canvas.width-paddleWidth) {
    //     paddleX += 7;
    // }
    // else if(leftPressed && paddleX > 0) {
    //     paddleX -= 7;
    // }
    
    x += dx;    //ボールの位置更新
    y += dy;
}

setInterval(draw, 10) //タイミング関数（drawを何度も読み込む、10ミリ秒おきに実行される）