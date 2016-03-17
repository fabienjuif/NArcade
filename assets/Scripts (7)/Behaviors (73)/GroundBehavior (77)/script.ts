class GroundBehavior extends Sup.Behavior {
  awake() {
    groupManager.addInstance("grounds",this.actor);
  }

  update() {
    
  }
  
  onDestroy(){
    groupManager.removeInstance(this.actor);
  }
}
Sup.registerBehavior(GroundBehavior);
