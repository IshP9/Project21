class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic :true
        }
        this.width = w;
        this.height = h;

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld,this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }

}