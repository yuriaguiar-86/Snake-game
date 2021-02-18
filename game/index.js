import { gameboard } from './board/index.js';
import{ snake_speed, draw as snakeDraw, update as snakeUpdate } from './snake/index.js';

let lastTimeRender = 0;

//current time >> miliseconds
function main(currentTime){

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastTimeRender) / 1000;

    if(secondsSinceLastRender < 1 / snake_speed) return;

    lastTimeRender = currentTime;

    update();
    draw();
}

function update(){
    gameboard.innerHTML = '';
    snakeUpdate();
};

function draw(){
    snakeDraw();
};

window.requestAnimationFrame(main)