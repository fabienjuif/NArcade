class ScoreManager {
  private score:number;
  
  constructor() {
    this.score = 0;
  }

  addScore(slackCoin:boolean = false) {
    this.score += (slackCoin ? 5 : 1);
    
    this.print();
  } // ! addScore

  death() {
    this.score -= 10;
    
    this.print();
  } // ! death

  getScore():number {
    return this.score;
  } // ! getScore

  print() {
    let score:Sup.Actor = Sup.getActor("Score");
    
    if (score) {
      score.getChild("score").textRenderer.setText(scoreManager.getScore());
      score.getChild("slackName").textRenderer.setText(messagesManager.getSlackName());    
    }
  } // ! print
}
