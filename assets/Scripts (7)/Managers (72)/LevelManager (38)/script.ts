class LevelManager {
  
  private currentLevel = 0;
  private levels:string[] = [
    "Scenes/PlayerChoice",
    "Scenes/SlackName",
    //"Scenes/TestScene",
    //"Scenes/Tutorial",
    "Scenes/Presentation",
    "Scenes/Presentation2",
    "Scenes/Formation",
    //"Scenes/Experience",
    //"Scenes/Hobbies",
    //"Scenes/Score",
  ]
  
  public getCurrentLevel(){
    return this.currentLevel;
  }

  public getCurrentScene(){
    var split = this.levels[this.currentLevel].split('/');
    return split[split.length];
  }
  
  public getLevels(){
    return this.levels;
  }

  public getLevel(index:number){
    return this.levels[index];
  }

  public start(){
    this.loadCurrentScene();
  }

  public next(jumpSize = 1){
    this.currentLevel += jumpSize;
    this.loadCurrentScene();
  }

  public previous(){
    this.currentLevel--;
    this.loadCurrentScene();
  }

  public reload(){
    this.loadCurrentScene();
  }

  private loadCurrentScene(){
    Sup.loadScene(this.getLevel(this.currentLevel));
    scoreManager.print();
  }
}
