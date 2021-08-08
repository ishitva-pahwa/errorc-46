class Monster{

    constructor(x,y,width,height){

        var option ={
     restitution:0,
     density:10.0,
     friction:1.0,
       

        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}