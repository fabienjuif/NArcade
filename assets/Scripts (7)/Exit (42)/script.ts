class ExitBehavior extends Sup.Behavior {
  
  private player:Sup.Actor;

  public jumpSize:number;
  
  awake() {
    this.player = Sup.getActor("Player");
    this.actor.arcadeBody2D.setEnabled(false);
  }

  update() {
      if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,this.player.arcadeBody2D)){
        levelManager.next(this.jumpSize);
      }
  }
}
Sup.registerBehavior(ExitBehavior);
