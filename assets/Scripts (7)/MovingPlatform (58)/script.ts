class MovingPlatformBehavior extends Sup.Behavior {
  
  public min:number;
  public max:number;
  public direction:boolean = true; // Horizontal
  public speed:number = 0.01;
  
  awake() {
    
  }

  update() {
    var velocity = this.actor.arcadeBody2D.getVelocity();
    
    // On compense la gravité pour que la plateforme flotte
    velocity.y = gravityForce;
    
    if(this.direction == true){
      velocity.x = this.speed;
    }else{
      velocity.y += this.speed;
    }
    
    this.actor.arcadeBody2D.setVelocity(velocity);
  }
}
Sup.registerBehavior(MovingPlatformBehavior);
