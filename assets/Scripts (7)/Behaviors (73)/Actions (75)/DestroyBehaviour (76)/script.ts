class DestroyBehaviour extends Sup.Behavior {
  awake() {
    groupManager.addInstance("destroy", this.actor);
  }

  update() {
    
  }
  
  actionDestroy() {
    // Graphic : hide object
    OpacityHelper.setOpacity(this.actor, 0);
    
    // Physic : Collision
    if (this.actor.arcadeBody2D) {
      this.actor.arcadeBody2D.setEnabled(false);
    }
  }
  
  actionFix() {
    // Graphic : show object
    OpacityHelper.setOpacity(this.actor, 1);
    
    // Physic : Collision
    if (this.actor.arcadeBody2D) {
      this.actor.arcadeBody2D.setEnabled(true);
    }
  }
  
  onDestroy() {
    groupManager.removeInstance(this.actor);
  }
}

Sup.registerBehavior(DestroyBehaviour);
