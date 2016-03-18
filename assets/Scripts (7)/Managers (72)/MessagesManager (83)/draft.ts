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
        "pres_1": "Bonjour, je m'appelle Yvonnick. J'ai 24 ans.",
        "pres_2": "J'ai grandi en région parisienne, où je suis resté jusqu'à mes 18 ans.",
        "pres_3": "",
        "pres_4": "Passionné d'informatique depuis tout petit, j'ai décidé dans faire mon métier :).",
        "form_1": "J'ai passé un BAC STG gestion des systèmes d'information pour avoir déjà un pied dans les métiers de l'IT. J'ai ensuite décidé de poursuivre mes études en alternance.",
        "form_2": "J'ai ensuite passé un BTS informatique de gestion à Laval, qui n'est pas là meilleure des villes pour un étudiant ;).",
        "form_3": "J'ai fait un semestre à Rennes 1 en licence informatique mais le rythme ne me convenait pas.",
        "form_4": "Finalement, j'ai passé un titre de Concepteur Développeur à l'ENI de Nantes. Que j'ai obtenu en janvier dernier.",
        "expe_1": "J'ai passé l'ensemble des mes diplôme en alternance. Ce qui m'a permis de me faire de l'expérience malgré mon profil de junior.",
        "expe_2": "J'ai pu travailler sur un ensemble de sujets variés comme les mémoires de traductions, le calcul de pièces dans l'aeronautique mais aussi des applications de gestion plus classiques. J'aime découvrir de nouveaux domaines.",
        "expe_3": "Avec l'avènement des technologies du Web, j'ai naturellement pris le train en marche. J'ai longuement travaillé en PHP et depuis deux ans je me spécialise plus avec les technologies JS en rapport avec le front.",
        "expe_4": "Zenika est mon premier contrat post-études, je trouve que j'ai vraiment de la chance d'être parmi vous ;) !",
        "hobb_1": "De nature curieuses, je m'intérresse à beaucoup de choses. C'est pourquoi mes passions sont variées. Passionné de musique, je pratique la basse.",
        "hobb_2": "Créatif, j'ai beaucoup fait d'art plastique étant plus jeune. Mais j'ai eu depuis moins le temps de m'y consacré.",
        "hobb_3": "Pendant longtemps j'ai beaucoup pratiqué les jeux videos, mais depuis je suis devenu plus raisonnable.",
        "hobb_4": "Comme vous pouvez le constater, j'ai reporté",
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
