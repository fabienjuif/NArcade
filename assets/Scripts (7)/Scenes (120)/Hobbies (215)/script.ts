class HobbiesBehavior extends Sup.Behavior {
  awake() {
    let vertical:boolean = false;
    let horizontal:boolean = true;
    
    // Configure platforms
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).min = -2;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).max = 8;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).direction = horizontal;
  }

  update() {
  }
}
Sup.registerBehavior(HobbiesBehavior);
