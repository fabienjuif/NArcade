class ScoreBehavior extends Sup.Behavior {
  private player:Sup.Actor;

  awake() {
    this.player = Sup.getActor("Player");
  }

  update() {
    this.actor.setPosition({
      x: this.player.getPosition().x - 8,
      y: this.player.getPosition().y + 7.5,
      z: this.actor.getPosition().z
    });
  }
}
Sup.registerBehavior(ScoreBehavior);
