class DeathBehavior extends Sup.Behavior {
  private player:Sup.Actor;

  awake() {
    this.player = Sup.getActor("Player");
    this.actor.arcadeBody2D.setEnabled(false);
  }

  update() {
    // The coin is catched
    if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D, this.player.arcadeBody2D)){
      Sup.getActor("Bot").getBehavior(BotBehaviour).blame();
      levelManager.reload();
    }
  }
}
Sup.registerBehavior(DeathBehavior);
