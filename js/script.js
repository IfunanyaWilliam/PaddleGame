import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//draw a square
// ctx.fillStyle = '#f00';
// ctx.fillRect(20, 20, 100, 100);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);


// Images


let lastTime = 0;

function gameLoop(timestamp){
    //Calculate amount of time that has passed
    let deltaTime = timestamp - lastTime;

    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(deltaTime)
    paddle.draw(ctx);

    ball.update(deltaTime);
    ball.draw(ctx);
    

    requestAnimationFrame(gameLoop);
}


requestAnimationFrame(gameLoop);