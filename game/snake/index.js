import { getInputDirection } from "./input.js";
import { gameboard } from "../board/index.js";

export const snake_speed = 5;

const snakeBody = [
    {x: 11, y: 11},
]

export function update(){
    const inputDirection = getInputDirection();

    //make head move
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
};

export function draw(){
    snakeBody.forEach(segment => {
        //create element
        const snakeElement = document.createElement('div');

        //config css
        snakeElement.classList.add('snake')

        //position
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;

        //append on DOM
        gameboard.appendChild(snakeElement)
    });
};

export function collision(position){
    return snakeBody.some(segment => {
        return position.x === segment.x && position.y === segment.y;
    });
}