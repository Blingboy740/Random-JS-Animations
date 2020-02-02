class Ball{
    constructor(pos){
        this.pos = createVector(pos.x,pos.y)
        this.vel = random(-12,12)
        this.rgb = createVector(random(0,255),random(0,255),random(0,255))
        this.l = 10
        if (abs(this.vel) < 2){
            this.vel *= 2.5
        }
        this.history = []


    }
    update(){
        this.pos.x += this.vel
        this.bounce();
        this.history.push(this.pos.x)
        if(this.history.length > 100){
            this.history.splice(0,1)
        }

    }
    show(){
        noStroke()
        fill(this.rgb.x,this.rgb.y,this.rgb.z)
        ellipse(this.pos.x,this.pos.y,this.l);
        for(let i = 0; i < this.history.length; i++){
            fill(this.rgb.x,this.rgb.y,this.rgb.z,5);
            ellipse(this.history[i],this.pos.y,this.l)

        }
        

    }
    bounce(){
        if(this.pos.x > width || this.pos.x < 0){
            this.vel *= (-1 + random(-0.2, 0.2));
        }
    }
}


