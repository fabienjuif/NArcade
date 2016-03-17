class CoinBehavior extends Sup.Behavior {
  private player:Sup.Actor;

  awake() {
    this.player = Sup.getActor("Player");
    this.actor.arcadeBody2D.setEnabled(false);
  }

  update() {
    // The coin is catched
    if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, this.player.arcadeBody2D)){
      // The coin is masked
      this.actor.spriteRenderer.setOpacity(0);
      
      // The message is printed
      this.actor.textRenderer.setText(messagesManager.getMessage(this.actor.getName()));
    }
  }
}
Sup.registerBehavior(CoinBehavior);
