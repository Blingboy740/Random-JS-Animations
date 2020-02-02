let balls = [];

function setup(){
    createCanvas(windowWidth,windowHeight)
    for (let i =0; i< 1; i++){
        balls.push(new Ball(createVector(random(0,width),random(0,height))))

    }
}

function draw(){
    background(0)
    for (let i =0; i< balls.length; i++){
        balls[i].update()
        balls[i].show()

    }

}

function mousePressed(){
    balls.push(new Ball(createVector(mouseX,mouseY)))
    balls.push(new Ball(createVector(mouseX,mouseY)))
    balls.push(new Ball(createVector(mouseX,mouseY)))
}