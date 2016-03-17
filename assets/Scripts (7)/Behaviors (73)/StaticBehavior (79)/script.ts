class StaticBehavior extends Sup.Behavior {
  awake() {
    groupManager.addInstance("statics",this.actor);
  }

  update() {
    
  }
  
  onDestroy(){
    groupManager.removeInstance(this.actor);
  }
}
Sup.registerBehavior(StaticBehavior);
