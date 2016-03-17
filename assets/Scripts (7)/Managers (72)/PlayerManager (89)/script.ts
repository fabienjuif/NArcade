class PlayerManager {
  private playerName;
  
  constructor() {
    this.playerName = "Player";
  }
  
  setPlayerName(playerName:string) {
    this.playerName = playerName;
    
    messagesManager.setPlayerName(playerName);
  }
  
  update() {
    let player = Sup.getActor("Player");
    
    player.spriteRenderer.setSprite("Sprites/" + this.playerName);
    
    if ("Player" !== this.playerName) {
      player.getChild("Name").textRenderer.setText(this.playerName);  
    }
  }
}
