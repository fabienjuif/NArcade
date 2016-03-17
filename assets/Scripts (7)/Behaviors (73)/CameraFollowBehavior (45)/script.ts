class CameraFollowBehavior extends Sup.Behavior {
  
  private player:Sup.Actor;
  
  awake() {
    this.player = Sup.getActor("Player");
  }

  update() {
      this.actor.setPosition({x:this.player.getPosition().x,y:this.player.getPosition().y,z:this.actor.getPosition().z});
  }
}
Sup.registerBehavior(CameraFollowBehavior);
