class OpacityHelper {
  static setOpacity(actor:Sup.Actor, opacity:number) {
    if (actor.spriteRenderer) {
      actor.spriteRenderer.setOpacity(opacity);
    }
    
    if (actor.tileMapRenderer) {
      actor.tileMapRenderer.setLayerOpacity(0, opacity);
    }
    
    let children = actor.getChildren();
    if (children) {
      for (let child of children) {
        this.setOpacity(child, opacity);
      }
    }
  }
}

