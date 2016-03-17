class CoinBehavior extends Sup.Behavior {
  private player:Sup.Actor;

  awake() {
    this.player = Sup.getActor("Player");
    this.actor.arcadeBody2D.setEnabled(false);
  }

  update() {
      if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,this.player.arcadeBody2D)){
        this.actor.spriteRenderer.setOpacity(0);
      }
  }
}
Sup.registerBehavior(CoinBehavior);
