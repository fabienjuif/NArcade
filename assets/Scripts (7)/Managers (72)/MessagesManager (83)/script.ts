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
        "pres_1": "TODO",
        "pres_2": "TODO",
        "pres_3": "TODO",
        "pres_4": "TODO",
        "form_1": "TODO",
        "form_2": "TODO",
        "form_3": "TODO",
        "form_4": "TODO",
        "expe_1": "TODO",
        "expe_2": "TODO",
        "expe_3": "TODO",
        "expe_4": "TODO",
        "hobb_1": "TODO",
        "hobb_2": "TODO",
        "hobb_3": "TODO",
        "hobb_4": "TODO",
      },
      "fabien.juif": {
        "pres_1": "Je suis Fabien ! 27 ans, j'aime les pizzas.\nJe joue à LoL.",
        "pres_2": "J'ai longtemps travaillé chez CGI. Et oui !",
        "pres_3": "TODO",
        "pres_4": "TODO",
        "form_1": "TODO",
        "form_2": "TODO",
        "form_3": "TODO",
        "form_4": "TODO",
        "expe_1": "TODO",
        "expe_2": "TODO",
        "expe_3": "TODO",
        "expe_4": "TODO",
        "hobb_1": "TODO",
        "hobb_2": "TODO",
        "hobb_3": "TODO",
        "hobb_4": "TODO",
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
