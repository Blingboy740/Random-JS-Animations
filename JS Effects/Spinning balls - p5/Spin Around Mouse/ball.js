class Ball{
    constructor(r){
        this.pos = createVector(mouseX,mouseY)
        this.ang = 0.1
        this.rgb = createVector(random(0,100),0,random(100,255))
        this.r = r;
        this.x = -this.r//random(this.r,-this.r)
        this.adder = 1.5
        this.multi = 1
        this.y = null
        this.trail = []
        this.historyx = []
        this.historyy = []
        this.l = 4


    }
    update(){
        this.pos = createVector(mouseX,mouseY)
        if (this.historyx.length > 5){
            this.historyx.splice(0,1)
            this.historyy.splice(0,1)

        }

    }
    show(){
        this.helper = abs((this.r*this.r)-(this.x*this.x))
        this.y = sqrt(this.helper) * this.multi
        push()
        translate(this.x,this.y)
        noStroke()
        fill(this.rgb.x,this.rgb.y,this.rgb.z)
        ellipse(this.pos.x,this.pos.y,this.l)
        this.historyx.push(this.pos.x+this.x)
        this.historyy.push(this.pos.y+this.y)
        pop()
        this.x+= this.adder
        if(this.x >= this.r || this.x <= -this.r){
            this.adder *= -1
            this.multi *=-1
        }


    }
    showTrail(){
       for(let i = 0; i < this.historyx.length; i++){
           let pos = createVector(this.historyx[i],this.historyy[i])
           noStroke()
           fill(this.rgb.x,this.rgb.y,this.rgb.z,10) // Play with the Alpha value
           ellipse(pos.x,pos.y,this.l)


       } 

    }
}