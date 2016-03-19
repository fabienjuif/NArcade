class FormationBehavior extends Sup.Behavior {
  awake() {
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).min = 12;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).max = 18;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("MovingPlatform1").getBehavior(MovingPlatformBehavior).direction = true;
    
    Sup.getActor("MovingPlatform4").getBehavior(MovingPlatformBehavior).min = -9;
    Sup.getActor("MovingPlatform4").getBehavior(MovingPlatformBehavior).max = -1;
    Sup.getActor("MovingPlatform4").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("MovingPlatform4").getBehavior(MovingPlatformBehavior).direction = false;
    
    Sup.getActor("MovingPlatform5").getBehavior(MovingPlatformBehavior).min = -9;
    Sup.getActor("MovingPlatform5").getBehavior(MovingPlatformBehavior).max = -2;
    Sup.getActor("MovingPlatform5").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("MovingPlatform5").getBehavior(MovingPlatformBehavior).direction = false;
    
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).min = -9;
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).max = 4;
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("MovingPlatform2").getBehavior(MovingPlatformBehavior).direction = false;
    
    Sup.getActor("MovingPlatform3").getBehavior(MovingPlatformBehavior).min = 15;
    Sup.getActor("MovingPlatform3").getBehavior(MovingPlatformBehavior).max = 22;
    Sup.getActor("MovingPlatform3").getBehavior(MovingPlatformBehavior).speed = 0.06;
    Sup.getActor("MovingPlatform3").getBehavior(MovingPlatformBehavior).direction = true;
    
  }
  
}
Sup.registerBehavior(FormationBehavior);
