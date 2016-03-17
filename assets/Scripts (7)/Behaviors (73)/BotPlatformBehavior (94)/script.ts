class BotPlatformBehavior extends Sup.Behavior {
  
  public direction:boolean = true; // Horizontal
  private orientation:boolean = true; // true vers la droite/vers le haut
  public speed:number = 0.03;
  
  public getOrientation():boolean{
    return this.orientation;
  }
  
  public xStart:number;
  public xEnd:number;
  public yStart:number;
  public yEnd:number;
  
  private up:boolean = false;
  private down:boolean = false;
  private left:boolean = false;
  private right:boolean = false;

  public upAble:boolean = false;
  public downAble:boolean = false;
  public leftAble:boolean = false;
  public rightAble:boolean = false;
  
  awake() {
    groupManager.addInstance("movings",this.actor);
    if(this.upAble){
      groupManager.addInstance("up",this.actor);
    }
    if(this.downAble){
      groupManager.addInstance("down",this.actor);
    }
    if(this.leftAble){
      groupManager.addInstance("left",this.actor);
    }
    if(this.rightAble){
      groupManager.addInstance("right",this.actor);
    }
  }

  update() {
    var velocity = this.actor.arcadeBody2D.getVelocity();
    
    // Compensate gravity force
    velocity.y = gravityForce;
    
    if(this.upAble && this.up){
      if(this.actor.getPosition().y < this.yEnd){
        velocity.y += this.speed;
      }else{
        this.up = false;
      }
    }
    
    if(this.downAble && this.down){
      if(this.actor.getPosition().y > this.yStart){
        velocity.y += -this.speed;
      }else{
        this.down = false;
      }
    }
    
    if(this.leftAble && this.left){
      if(this.actor.getPosition().x > this.xStart){
        velocity.x = -this.speed;
      }else{
        this.left = false;
        velocity.x = 0;
      }
    }
    
    if(this.rightAble && this.right){
      if(this.actor.getPosition().x < this.xEnd){
        velocity.x = this.speed;
      }else{
        this.right = false;
        velocity.x = 0;
      }
    }
    
    this.actor.arcadeBody2D.setVelocity(velocity);
  }
  
  actionUp(){
    this.up = true;
    this.direction = false;
    this.orientation = false;
  }

  actionDown(){
    this.down = true;
    this.direction = false;
    this.orientation = true;
  }

  actionLeft(){
    this.left = true;
    this.direction = true;
    this.orientation = false;
  }

  actionRight(){
    this.right = true;
    this.direction = true;
    this.orientation = true;
  }
}
Sup.registerBehavior(BotPlatformBehavior);
