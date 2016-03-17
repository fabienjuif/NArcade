let ioConnection = io.connect("192.168.1.29:4000"); // FIXME : Utiliser un reverse proxy

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
        human = "tout rabaisser :("
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

  blame(){
    ioConnection.emit("blame",{
      slackName:messagesManager.getSlackName()
    });
  }
  
  awake() {
    this.message = this.actor.getChild("Message");
    this.player = Sup.getActor("Player");
    
    ioConnection.on("action", (data) => {
      // Print message
      this.message.textRenderer.setText("@" + data.user + " a demandé de l'aide à @" + data.helpFrom + "\n pour " + this.mapActionHuman(data.action));
      
      // Do the action
      switch(data.action) {
        case "destroy":
          this.actionDestroy();
          break;
        case "fix":
          this.actionFix();
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
