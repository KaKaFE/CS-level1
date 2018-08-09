var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var canvas = document.getElementById('game');
var ctx = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;
//동그라미 그리기
var ball = { x: w / 2, y: h - 30, r: 10, dx: 2, dy: -2 };
var bricks = [];
for (var i = 0; i < 3; i++) {
    bricks[i] = [];
    for (var j = 0; j < 4; j++) {
        bricks[i][j] = { x: 0, y: 0 };
    }
}
var drawbricks = function(){
    for (var i =0; i < bricks.length; i++){
        for
    }
}
ctx.beginPath();
ctx.rect(brick.x, brick.y, brick.h, brick.w);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

var draw = function () {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    //충돌 체크
    if (ball.x < 0 + ball.r || ball.x > w - ball.r) {
        ball.dx = -ball.dx;
    }

    if (ball.y < 0 + ball.r || ball.y > h - ball.r) {
        ball.dy = -ball.dy;
    }

    // 위치 재계산
    ball.x += ball.dx;
    ball.y += ball.dy;
};

var id = setInterval(draw, 10);