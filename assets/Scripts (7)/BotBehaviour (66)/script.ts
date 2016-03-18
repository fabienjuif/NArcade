let ioConnection = io.connect("127.0.0.1:4000"); // FIXME : Utiliser un reverse proxy

ioConnection.on("error",function(data){
  Sup.log("ERROR : ",JSON.stringify(data));
})

class BotBehaviour extends Sup.Behavior {
  private message:Sup.Actor;
  private player:Sup.Actor;

  mapActionHuman(action) {
    var human = "";
    
    switch(action) {
      case "destroy":
        human = "tout détruire !!";
        break;
      case "fix":
        human = "réparer deux trois trucs."
        break;
      case "up":
        human = "soulever quelque chose...";
        break;
      case "down":
        human = "tout rabaisser :(";
        break;
      case "left":
        human = "aller à gauche toute ;)";
        break;
      case "right":
        human = "barrer à tribord mousaillon !";
        break;
      default:
        break;
    }

    return human;
  }

  actionDestroy() {
    let destroyables = groupManager.getActors("destroy");
    
    for (let destroyable of destroyables) {
      destroyable.getBehavior(DestroyBehaviour).actionDestroy();
    }
  }

  actionFix() {
    let destroyables = groupManager.getActors("destroy");
    
    for (let destroyable of destroyables) {
      destroyable.getBehavior(DestroyBehaviour).actionFix();
    }
  }

  actionUp(){
    let elements = groupManager.getActors("up");

    for (let element of elements) {
      element.getBehavior(BotPlatformBehavior).actionUp();
    }
  }

  actionDown(){
    let elements = groupManager.getActors("down");
    
    for (let element of elements) {
      element.getBehavior(BotPlatformBehavior).actionDown();
    }
  }

  actionLeft(){
    let elements = groupManager.getActors("left");
    
    for (let element of elements) {
      element.getBehavior(BotPlatformBehavior).actionLeft();
    }
  }

  actionRight(){
    let elements = groupManager.getActors("right");
    
    for (let element of elements) {
      element.getBehavior(BotPlatformBehavior).actionRight();
    }
  }


  blame(){
    ioConnection.emit("blame",{
      slackName:messagesManager.getSlackName()
    });
  }
  
  awake() {
    this.message = this.actor.getChild("Message");
    this.player = Sup.getActor("Player");
    
    let message = this.message;
    let mapActionHuman = this.mapActionHuman;
    
    ioConnection.on("action", (data) => {
      // Print message
      message.textRenderer.setText("@" + data.user + " a demandé de l'aide à @" + data.helpFrom + "\n pour " + mapActionHuman(data.action));
      
      // Do the action
      switch(data.action) {
        case "destroy":
          this.actionDestroy();
          break;
        case "fix":
          this.actionFix();
          break;
        case "up":
          this.actionUp();
          break;
        case "down":
          this.actionDown();
          break;
        case "left":
          this.actionLeft();
          break;
        case "right":
          this.actionRight();
          break;
      }
    });
  }

  update() {
    this.actor.setPosition({
      x: this.player.getPosition().x,
      y: this.player.getPosition().y + 2,
      z: this.actor.getPosition().z
    });
  }
}
Sup.registerBehavior(BotBehaviour);
