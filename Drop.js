class Drop{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution: 0.2,
            friction: 0.05
        }
        this.x=x;
        this.redColor=random(0,200);
        this.blueColor=random(150,255);
        this.rain = Bodies.circle(x,y,5,options);
        World.add(world,this.rain)
    }
    display(){
        fill(this.redColor,0,this.blueColor,150);
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,10,10)
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:0})
        }
    }
}