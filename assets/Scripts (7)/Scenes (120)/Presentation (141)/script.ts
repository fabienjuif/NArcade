class PresentationBehavior extends Sup.Behavior {
  awake() {
    let vertical:boolean = false;
    let horizontal:boolean = true;
    
    // Configure platforms
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).min = -9;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).max = -4;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).direction = vertical;
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).min = -88;
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).max = -81;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).direction = horizontal;
    
    // Destroy the slack platform at the end
    Sup.getActor("ToFix").getBehavior(DestroyBehaviour).actionDestroy();
  }

  update() {
  }
}
Sup.registerBehavior(PresentationBehavior);
