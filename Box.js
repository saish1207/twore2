class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':0.004
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<9){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect( 0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world,this.body)
         push ()
          this.visibility = this.visibility-90
          tint(255,this.visibility)
          pop ()
         }
         
        }
        score(){
          if (this.Visiblity < 0 && this.Visiblity > -1005){
            score++;
          }
        }
      
      
        
      }


