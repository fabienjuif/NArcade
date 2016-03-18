class FormationBehavior extends Sup.Behavior {
  awake() {
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).min = -28;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).max = -8;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).speed = 0.09;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).direction = false;
    
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).min = -20;
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).max = -7;
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).speed = 0.09;
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).direction = true;
    
    Sup.getActor("MovingPlatform3").getBehavior(MovingPlatformBehavior).min = -28;
    Sup.getActor("MovingPlatform3").getBehavior(MovingPlatformBehavior).max = -22;
    Sup.getActor("MovingPlatform3").getBehavior(MovingPlatformBehavior).speed = 0.09;
    Sup.getActor("MovingPlatform3").getBehavior(MovingPlatformBehavior).direction = false;
    
    Sup.getActor("MovingPlatform4").getBehavior(MovingPlatformBehavior).min = -27;
    Sup.getActor("MovingPlatform4").getBehavior(MovingPlatformBehavior).max = -18;
    Sup.getActor("MovingPlatform4").getBehavior(MovingPlatformBehavior).speed = 0.09;
    Sup.getActor("MovingPlatform4").getBehavior(MovingPlatformBehavior).direction = false;
  }

  update() {
    Sup.log(Sup.getActor("MovingPlatform1").getPosition());
  }
}
Sup.registerBehavior(FormationBehavior);
