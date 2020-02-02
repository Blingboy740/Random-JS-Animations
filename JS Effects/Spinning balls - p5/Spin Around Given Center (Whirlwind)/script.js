let fade = 10;
let y;
let numballs = 50
let followers;
let starter = 100
let step = 15
let maxrad = starter + (numballs * step)
let center //Center that the balls spin around
function setup(){
    createCanvas(windowWidth,windowHeight)
    fill(255)
    followers = [];
    for(let i = 0; i<numballs ; i++){
        followers[i] = (new Ball(starter + (i* step)))

    }
    center = createVector(width/2,height/2)
}

function draw() { 
    background(0);
    for(let i = 0; i < followers.length ; i++){
        followers[i].update()
        followers[i].show()
        followers[i].showTrail()

    }

  }

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
    followers = []
    center = createVector(width/2,height/2)
    for(let i = 0; i<numballs ; i++){
        followers[i] = (new Ball(starter + (i* step)))

    }


}
