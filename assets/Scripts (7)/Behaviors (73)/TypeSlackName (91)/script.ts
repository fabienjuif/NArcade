class TypeSlackNameBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    if(Sup.Input.getTextEntered() != ""){
      this.actor.textRenderer.setText(this.actor.textRenderer.getText()+Sup.Input.getTextEntered());
    }
    
    if(Sup.Input.wasKeyJustPressed("BACK_SPACE")){
      this.actor.textRenderer.setText(this.actor.textRenderer.getText().substr(0,this.actor.textRenderer.getText().length - 1));
    }
    
    if(Sup.Input.wasKeyJustPressed("RETURN")){
      messagesManager.setSlackName(this.actor.textRenderer.getText());
      Sup.log("SlackName",messagesManager.getSlackName());
      levelManager.next();
    }
  }
}
Sup.registerBehavior(TypeSlackNameBehavior);
