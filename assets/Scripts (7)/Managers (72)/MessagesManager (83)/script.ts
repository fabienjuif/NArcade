/**
 * Message manager can handle message of coins, by players.
 */
class MessagesManager {
  private messages;
  private playerName;
  private slackName;
  
  constructor() {
    this.messages = {
      "yvonnick": {
        "cv_1": "TODO",
        "cv_4": "TODO"
      },
      "fabien.juif": {
        "cv_1": "Je suis Fabien ! 27 ans, j'aime les pizzas.\nJe joue à LoL.",
        "cv_4": "J'ai longtemps travaillé chez CGI. Et oui !"
      }
    };
  }
  
  getMessage(key:string):string {
    return this.messages[this.playerName][key];
  }

  setPlayerName(name:string) {
    this.playerName = name;
  }

  getSlackName():string {
    return this.slackName;
  }

  setSlackName(slackName:string) {
    this.slackName = slackName;
  }
}
