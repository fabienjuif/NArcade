class ChoosePlayerBehavior extends Sup.Behavior {
  private player;
  
  awake() {
    this.player = Sup.getActor("Player");
    this.actor.arcadeBody2D.setEnabled(false);
  }

  update() {
    // The player is chosen
    if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, this.player.arcadeBody2D)) {
      playerManager.setPlayerName(this.actor.getName());
      
      levelManager.next();
    }
  }
}

Sup.registerBehavior(ChoosePlayerBehavior);
