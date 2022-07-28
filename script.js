const canvas =  document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src ='./assets/shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
// higher stagger frame slower the animation
const staggerFrame = 5;

const animate = () => {
let position = Math.floor(gameFrame/staggerFrame) % 6;
frameX = spriteWidth * position
ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

gameFrame++;
requestAnimationFrame(animate);
}


animate()