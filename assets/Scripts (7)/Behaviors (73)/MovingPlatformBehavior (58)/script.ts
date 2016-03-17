class MovingPlatformBehavior extends Sup.Behavior {
  
  public min:number;
  public max:number;
  public direction:boolean = true; // Horizontal
  private orientation:boolean = true; // true vers la droite/vers le haut
  public speed:number = 0.03;
  
  awake() {
    
  }

  update() {
    var velocity = this.actor.arcadeBody2D.getVelocity();
    
    // On compense la gravité pour que la plateforme flotte
    velocity.y = gravityForce;
    
    if(this.direction == true){
      if(this.orientation){
        velocity.x = this.speed;
      }else{
        velocity.x = -this.speed;
      }
      
      if((this.orientation && this.actor.getPosition().x > this.max) || (!this.orientation && this.actor.getPosition().x < this.min)){
        this.orientation = !this.orientation;
      }
    }else{
      if(this.orientation){
        velocity.y += this.speed;
      }else{
        velocity.y += -this.speed;
      }
      
      if((this.orientation && this.actor.getPosition().y > this.max) || (!this.orientation && this.actor.getPosition().y < this.min)){
        this.orientation = !this.orientation;
      }
    }
    
    
    this.actor.arcadeBody2D.setVelocity(velocity);
  }
}
Sup.registerBehavior(MovingPlatformBehavior);
