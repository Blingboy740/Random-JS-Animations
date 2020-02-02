class Ball{
    constructor(){
        this.pos = createVector(random(50,width-50),random(50,height-50))
        this.vel = createVector(random(-5,5),random(-5,5))
        this.rgb = createVector(50,150,255)
        this.attach = true



    }
    update(){
        this.pos.add(this.vel);
        this.bounce();

    }
    draw(){
        noStroke()
        fill(this.rgb.x,this.rgb.y,this.rgb.z,150)
        ellipse(this.pos.x,this.pos.y,10);
        

    }
    bounce(){
        if(this.pos.x > width || this.pos.x < 0){
            this.vel.x *= -1;


        }
        if(this.pos.y > height || this.pos.y < 0){
            this.vel.y *=-1;

        }
    }
    prox(other){
        let close = 100;
        let distance = dist(this.pos.x,this.pos.y,other.pos.x,other.pos.y)
        if (distance < close && this.attach == true && other.attach == true){  
            stroke(255,255,255,30);
            strokeWeight(3);
            line(this.pos.x,this.pos.y,other.pos.x,other.pos.y);

        }

        

    }
    checkMouse(){
        let mouseDist = dist(this.pos.x,this.pos.y,mouseX,mouseY)
        if(mouseDist < 100  ){
            this.attach = false
            this.rgb = createVector(50,150,255)

        }else{
            this.attach = true
            //this.rgb = createVector(255,255,255)
        }

    }
}