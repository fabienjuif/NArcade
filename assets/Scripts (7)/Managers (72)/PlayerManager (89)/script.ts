class PlayerManager {
  private playerName;
  
  constructor() {
    this.setPlayerName("Player");
  }
  
  setPlayerName(playerName:string) {
    this.playerName = playerName;
    
    messagesManager.setPlayerName(playerName);
  }
  
  update() {
    let player = Sup.getActor("Player");
    
    player.spriteRenderer.setSprite("Sprites/Players/" + this.playerName);
    
    if ("Player" !== this.playerName) {
      player.getChild("Name").textRenderer.setText(this.playerName);  
    }
  }
}
