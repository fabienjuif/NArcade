class LevelManager {
  
  private currentLevel = 0;
  private levels:string[] = [
    "Scenes/PlayerChoice",
    "Scenes/SlackName",
    "Scenes/TestScene",
    "Scenes/TestScene2",
    "Scenes/TestScene3"
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
    Sup.log("currentLevel : ",this.getLevel(this.currentLevel));
    Sup.loadScene(this.getLevel(this.currentLevel));
  }
}
