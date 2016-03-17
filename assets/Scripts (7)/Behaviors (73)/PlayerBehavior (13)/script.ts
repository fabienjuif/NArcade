class PlayerBehavior extends Sup.Behavior {
  speed = 0.15;
  jumpSpeed = 0.45;

  awake(){
    
  }

  

  update() {
    // On vérifie d'abord si le joueur touche un élément de type Ground
    // Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, groupManager.getArcadePhysics("grounds"));
    let touchGrounds = this.checkGroundCollisions();
    
    let velocity = this.actor.arcadeBody2D.getVelocity();
    
    let touchStaticPlatforms = this.checkStaticPlatformCollisions(velocity);

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
    let touchBottom = touchGrounds || touchStaticPlatforms;
    if (touchBottom) {
      if (Sup.Input.wasKeyJustPressed("UP")) {
        velocity.y = this.jumpSpeed;
        this.actor.spriteRenderer.setAnimation("Jump");
      } else {
        // Here, we should play either "Idle" or "Run" depending on the horizontal speed
        if (velocity.x === 0) this.actor.spriteRenderer.setAnimation("Idle");
        else this.actor.spriteRenderer.setAnimation("Run");
      }
    } else {
      // Here, we should play either "Jump" or "Fall" depending on the vertical speed
      if (velocity.y >= 0) this.actor.spriteRenderer.setAnimation("Jump");
      else this.actor.spriteRenderer.setAnimation("Fall");
    }

    // Finally, we apply the velocity back to the ArcadePhysics body
    this.actor.arcadeBody2D.setVelocity(velocity);
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

  private checkGroundCollisions():boolean{
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, groupManager.getArcadePhysics("grounds"));
    return this.actor.arcadeBody2D.getTouches().bottom;
  } 
}
Sup.registerBehavior(PlayerBehavior);
