var images = [];

const imageRoot = 'imgs';

var minimumAngularVelocity = 0.1;

var xRadius;
var yRadius;
var delay = 0.05;
var timer = 0;
const shrinkPerSecond = 64; 

function setup() {
    createCanvas(1920, 1080);
    background('rgba(0,0,0,0.0)');
    angleMode(DEGREES);
    imageMode(CENTER);

    xRadius = width / 2 + 200;
    yRadius = width / 2 + 200;

    images = [
        loadImage(`${imageRoot}/Aliens.png`),
        loadImage(`${imageRoot}/Coexistence.png`),
        loadImage(`${imageRoot}/CoolBears.png`),
        loadImage(`${imageRoot}/Horses.png`),
        loadImage(`${imageRoot}/Kittens.png`),
        loadImage(`${imageRoot}/Puppies.png`),
        loadImage(`${imageRoot}/Sundae.png`),
        loadImage(`${imageRoot}/TeddyBear.png`),
        loadImage(`${imageRoot}/Turtle.png`),
        loadImage(`${imageRoot}/Unicorn.png`),
        loadImage(`${imageRoot}/Wolf.png`),
    ];
}



function draw() {
    if(timer > delay && xRadius > 32) {
        const angle = Math.random() * 2 * Math.PI;
        const x =  xRadius * Math.sin(angle) + width / 2;
        const y = yRadius * Math.cos(angle) + height / 2;
        const index = Math.round(Math.random() * (images.length - 1));
        const img = images[index];
        console.log(index, images.length, img);
        image(img, x, y);
        timer = 0;
        xRadius -= (1 * delay) * shrinkPerSecond;
        yRadius -= (1 * delay) * shrinkPerSecond;
    } else {
        timer += deltaTime;
    }   
}
