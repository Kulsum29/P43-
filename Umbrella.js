class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        //this.image = loadImage("Walking Frame/walking_1.png")
        this.animation = loadAnimation("Walking Frame/walking_8.png","Walking Frame/walking_7.png","Walking Frame/walking_6.png","Walking Frame/walking_5.png","Walking Frame/walking_4.png","Walking Frame/walking_3.png","Walking Frame/walking_2.png","Walking Frame/walking_1.png")
        this.batmanimg=loadImage("Walking Frame/batman.png")
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        var pos = this.umbrella.position;
        this.person = createSprite(pos.x,pos.y+65,300,300);
        this.person.addAnimation("person",this.animation);
        this.person.scale=0.38
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
       if(frameCount>=200){
           this.person.destroy()
           image(this.batmanimg,pos.x,pos.y+70,300,300)
           pos.y--
           if(pos.y<-200){
               pos.y=500
           }
       }
       else{
        //image(this.image,pos.x,pos.y+70,300,300);
       

        
        
        
        
       }
        
    }

}
