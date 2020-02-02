let balls = [];
let bgRGB;

function setup(){
    createCanvas(windowWidth,windowHeight)
    for(let i = 0; i < floor(width/8); i++){
        balls.push(new Ball())

    }
    bgRGB = createVector(50,150,255)
}

function draw(){
    background(bgRGB.x,bgRGB.y,bgRGB.z)
    fill(0)
    for(let i = 0; i < balls.length; i++){
        balls[i].update()
        balls[i].draw();
        balls[i].checkMouse();
        for (let j = 0; j < balls.length; j++){
            if(i != j){
                balls[i].prox(balls[j])
            }

        }

    }

}