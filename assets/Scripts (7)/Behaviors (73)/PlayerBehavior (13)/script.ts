class PlayerBehavior extends Sup.Behavior {
  speed = 0.15;
  jumpSpeed = 0.45;

  awake(){
     playerManager.update();
  }

  update() {
    //Sup.log("Animation : ",this.actor.spriteRenderer.getAnimation());
    let velocity = this.actor.arcadeBody2D.getVelocity();
    
    // On vérifie d'abord si le joueur touche un élément de type Ground
    let touchGrounds = this.checkGroundCollisions();
    // Plateforme static
    let touchStaticPlatforms = this.checkStaticPlatformCollisions(velocity);
    // Moving platforme
    let touchedMovingPlatforms = this.checkMovingPlatformCollisions(velocity);

    // We override the `.x` component based on the player's input
    if (Sup.Input.isKeyDown("LEFT")) {
      velocity.x = -this.speed;
      // When going left, we flip the sprite
      this.actor.spriteRenderer.setHorizontalFlip(true);
    } else if (Sup.Input.isKeyDown("RIGHT")) {
      velocity.x = this.speed;
      // When going right, we clear the flip
      this.actor.spriteRenderer.setHorizontalFlip(false);
    } else velocity.x = 0;
    // If the player is on the ground and wants to jump,
    // we update the `.y` component accordingly
    let touchBottom = touchGrounds || touchStaticPlatforms || (touchedMovingPlatforms != null);
    //Sup.log("touchBottom",touchBottom);
    if (touchBottom) {
      velocity.y = 0
      if (Sup.Input.wasKeyJustPressed("UP")) {
        velocity.y = this.jumpSpeed;
        this.actor.spriteRenderer.setAnimation("Jump");
      } else {
        // Here, we should play either "Idle" or "Run" depending on the horizontal speed
        if (!Sup.Input.isKeyDown("RIGHT") && !Sup.Input.isKeyDown("LEFT")) this.actor.spriteRenderer.setAnimation("Idle");
        else this.actor.spriteRenderer.setAnimation("Run");
      }
    } else {
      // Here, we should play either "Jump" or "Fall" depending on the vertical speed
      if (velocity.y > 0) this.actor.spriteRenderer.setAnimation("Jump");
      else this.actor.spriteRenderer.setAnimation("Fall");
    }
    // Finally, we apply the velocity back to the ArcadePhysics body
    this.actor.arcadeBody2D.setVelocity(velocity);
    if(touchedMovingPlatforms != null){
      let behavior = (touchedMovingPlatforms.actor.getBehavior(MovingPlatformBehavior)) ? touchedMovingPlatforms.actor.getBehavior(MovingPlatformBehavior) : touchedMovingPlatforms.actor.getBehavior(BotPlatformBehavior) ;
      if(behavior.direction)
        this.actor.arcadeBody2D.addVelocityX(touchedMovingPlatforms.getVelocity().x);
      else if(!behavior.direction && !behavior.getOrientation()){
        this.actor.arcadeBody2D.warpPosition({
          x:this.actor.getPosition().x,
          y:touchedMovingPlatforms.getSize().height+1.178+touchedMovingPlatforms.actor.getPosition().y
        })
      }
    }
    
    //Sup.log("Player velocity : ",this.actor.arcadeBody2D.getVelocity());
    
  }

  private checkStaticPlatformCollisions(velocity):boolean{
    // Then we'll check for collision with one-way platforms,
    // ... but only when falling! That's the trick.
    let touchStaticPlatforms = false;
    if (velocity.y < 0) {
      let position = this.actor.getLocalPosition();
      // Then we override the body position using the current actor position
      this.actor.arcadeBody2D.warpPosition(position);

      // Now, check against every platform
      for (let platformBody of groupManager.getArcadePhysics("statics")) {
        Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, platformBody);
        if (this.actor.arcadeBody2D.getTouches().bottom) {
          touchStaticPlatforms = true;
          velocity.y = 0;
          break;
        }
      }

      // Once done, reset the body to its full size
      position = this.actor.getLocalPosition();
      this.actor.arcadeBody2D.warpPosition(position);
    }
    return touchStaticPlatforms;
  }

  private checkMovingPlatformCollisions(velocity):Sup.ArcadePhysics2D.Body{
    // Then we'll check for collision with one-way platforms,
    // ... but only when falling! That's the trick.
    let touchMovingPlatform = null;
    if (velocity.y <= 0) {
      //let position = this.actor.getLocalPosition();
      // Then we override the body position using the current actor position
      //this.actor.arcadeBody2D.warpPosition(position);

      // Now, check against every platform
      for (let platformBody of groupManager.getArcadePhysics("movings")) {
        Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, platformBody);
        if (this.actor.arcadeBody2D.getTouches().bottom) {
          touchMovingPlatform = platformBody;
          //velocity.y = 0;
          break;
        }
      }

      // Once done, reset the body to its full size
      //position = this.actor.getLocalPosition();
      //this.actor.arcadeBody2D.warpPosition(position);
    }
    return touchMovingPlatform;
  }

  private checkGroundCollisions():boolean{
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, groupManager.getArcadePhysics("grounds"));
    return this.actor.arcadeBody2D.getTouches().bottom;
  } 
}
Sup.registerBehavior(PlayerBehavior);
