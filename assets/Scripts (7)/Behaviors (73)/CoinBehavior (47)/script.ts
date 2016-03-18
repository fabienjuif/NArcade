class CoinBehavior extends Sup.Behavior {
  private player:Sup.Actor;
  private catched:boolean;
  public slack:boolean;

  awake() {
    this.player = Sup.getActor("Player");
    this.actor.arcadeBody2D.setEnabled(false);
    this.catched = false;
  }

  catchIt() {
    // The coin is catched
    this.catched = true;
    
    // The coin is masked
    if (this.actor.spriteRenderer.getOpacity() != 0) {
      this.actor.spriteRenderer.setOpacity(0);
    }
      
    // The message is printed
    this.actor.textRenderer.setText(messagesManager.getMessage(this.actor.getName()));
    
    // The score is added
    scoreManager.addScore(this.slack);
  }

  update() {
    if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, this.player.arcadeBody2D)) {
      if (!this.catched) {
        this.catchIt();
      }
    }
  }
}
Sup.registerBehavior(CoinBehavior);
