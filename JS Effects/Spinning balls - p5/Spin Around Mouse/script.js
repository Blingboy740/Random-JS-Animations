let fade = 10;
let y;
let numballs = 3
let followers;
let starter = 30
let step = 8
let maxrad = starter + (numballs * step)

function setup(){
    createCanvas(800,800)
    fill(255)
    followers = [];
    for(let i = 0; i<numballs ; i++){
        followers[i] = (new Ball(starter))//starter + (i* step)))

    }
}

function draw() { 
    background(0);
    for(let i = 0; i < followers.length ; i++){
        followers[i].update()
        followers[i].show()
        followers[i].showTrail()

    }

  }
