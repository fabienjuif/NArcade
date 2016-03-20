class HobbiesBehavior extends Sup.Behavior {
  awake() {
    let vertical:boolean = false;
    let horizontal:boolean = true;
    
    // Configure platforms
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).min = -2;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).max = 8;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).direction = horizontal;
    
    Sup.getActor("SlackMovingPlatform1").getBehavior(MovingPlatformBehavior).min = -14,5;
    Sup.getActor("SlackMovingPlatform1").getBehavior(MovingPlatformBehavior).max = -9;
    Sup.getActor("SlackMovingPlatform1").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("SlackMovingPlatform1").getBehavior(MovingPlatformBehavior).direction = horizontal;
    
    Sup.getActor("SlackMovingPlatform2").getBehavior(MovingPlatformBehavior).min = -11;
    Sup.getActor("SlackMovingPlatform2").getBehavior(MovingPlatformBehavior).max = -8;
    Sup.getActor("SlackMovingPlatform2").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("SlackMovingPlatform2").getBehavior(MovingPlatformBehavior).direction = vertical;
  }

  update() {
  }
}
Sup.registerBehavior(HobbiesBehavior);
