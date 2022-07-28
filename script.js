const canvas =  document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src ='./assets/shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523;
let playerState = "ko"
let gameFrame = 0;
const staggerFrame = 5; // higher stagger frame slower the animation
const spriteAnimations = [];
const animationStates = [
    { 
        name: "idle",
        frames: 7
    },    
    { 
        name: "jump",
        frames: 7
    },    
    { 
        name: "fall",
        frames: 7
    },    
    { 
        name: "run",
        frames: 9
    },    
    { 
        name: "dizzy",
        frames: 11
    },    
    { 
        name: "sit",
        frames: 5
    },    
    { 
        name: "roll",
        frames: 7
    },    
    { 
        name: "bite",
        frames: 7
    },    
    { 
        name: "ko",
        frames: 12
    }, 
    { 
        name: "getHit",
        frames: 4
    },

];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX =  j * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.name] = frames;
})
console.log(spriteAnimations)

const animate = () => {
let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations[playerState].loc.length;
let frameX = spriteWidth * position
let frameY = spriteAnimations[playerState].loc[position].y;
ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

gameFrame++;
requestAnimationFrame(animate);
}


animate()