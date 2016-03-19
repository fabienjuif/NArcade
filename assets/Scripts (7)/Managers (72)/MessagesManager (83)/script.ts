/**
 * Message manager can handle message of coins, by players.
 * It also handle tutorial messages.
 */
class MessagesManager {
  private messages;
  private playerName;
  private slackName;
  
  constructor() {
    let tuto = [
      "Vous avez ramassé une pièce.",
      "Chaque pièce raconte une \nhistoire sur l'un de mes créateurs.",
      "Certaines pièces sont marquées\ndu logo Slack, elles rapportent plus (!) mais ...",
      "... il va falloir essayer de parler\navec mon frangin sur slack...",
      "... il vous aidera à déverouiller\ncertains passages ...",
      "... je m'appelle NArcade, il doit\nsavoir répondre si vous criez mon nom !"
    ];
    
    let players = [
      "yvonnick",
      "fabien.juif"
    ]
    
    this.messages = {
      "yvonnick": {
        "pres_1": "Bonjour, je m'appelle Yvonnick. \nJ'ai 24 ans.",
        "pres_2": "J'ai grandi en région parisienne, \noù je suis resté jusqu'à mes 18 ans.",
        "pres_3": "D'origine bretonne, \nj'ai décidé de revenir dans l'ouest \ndès la fin de mon BAC",
        "pres_4": "Passionné d'informatique depuis tout petit, \nj'ai décidé dans faire mon métier :).",
        "form_1": "J'ai passé un BAC STG gestion des systèmes d'information \npour avoir déjà un pied dans les métiers de l'IT. \nJ'ai ensuite décidé de poursuivre mes études en alternance.",
        "form_2": "J'ai ensuite passé un BTS informatique de gestion à Laval\n, qui n'est pas là meilleure des villes pour un étudiant ;).",
        "form_3": "J'ai fait un semestre à Rennes 1 \nen licence informatique \nmais le rythme ne me convenait pas.",
        "form_4": "Finalement, j'ai passé un titre de Concepteur Développeur\n à l'ENI de Nantes. \nQue j'ai obtenu en janvier dernier.",
        "expe_1": "J'ai passé l'ensemble des mes diplôme en alternance.\n Ce qui m'a permis de me faire de l'expérience\n malgré mon profil de junior.",
        "expe_2": "J'ai pu travailler sur un ensemble de sujets variés\n comme les mémoires de traductions, \nle calcul de pièces dans l'aeronautique \nmais aussi des applications de gestion plus classiques. \nJ'aime découvrir de nouveaux domaines.",
        "expe_3": "Avec l'avènement des technologies du Web, \nj'ai naturellement pris le train en marche. \nJ'ai longuement travaillé en PHP et depuis deux ans\n je me spécialise plus avec les technologies JS\n en rapport avec le front.",
        "expe_4": "Zenika est mon premier contrat post-études, \nje trouve que j'ai vraiment de la chance\n d'être parmi vous ;) !",
        "hobb_1": "De nature curieuses, je m'intérresse à beaucoup de choses.\n C'est pourquoi mes passions sont variées.\n Passionné de musique, je pratique la basse.",
        "hobb_2": "Créatif, j'ai beaucoup fait d'art plastique étant plus jeune.\n Mais j'ai eu depuis moins le temps de m'y consacré.",
        "hobb_3": "Pendant longtemps j'ai beaucoup pratiqué les jeux videos,\n mais depuis je suis devenu plus raisonnable.",
        "hobb_4": "Comme vous pouvez le constater, j'ai reporté mon côté créatif\n sur d'autres supports plus numérique. \nMais je jardine aussi à mes heures perdus \n( sur mon balcon :( )).",
      },
      "fabien.juif": {
        "pres_1": "Salut toi, je suis Fabien !\n27 ans, j'aime les pizzas.",
        "pres_2": "Je suis né en région parisienne\nmais j'ai vécu dans la région du perche (go go google !)",
        "pres_3": "J'ai deux frères et une soeur,\nmais ils aiment pas trop le développement :(",
        "pres_4": "Quand on était petit\nje développais des petits jeux en C++/SDL\npour nous amuser ensemble :D",
        "form_1": "Je déteste la biologie,\nen SVT je tombais très régulierement dans les pommes...\nC'est pourquoi j'ai fais un bac SI (Science de l'Ingénieur)",
        "form_2": "Ensuite, et bien, j'ai essayé une prépa math,\npression de mon papa puisque j'avais des bonnes notes.\nJe n'ai fais qu'un an, c'était le pire moment de ma vie d'étudiant.",
        "form_3": "J'ai ensuite fait ce que je voulais faire depuis le début,\nun IUT informatique, à Nantes !\nEnchainé sur une licence pro.",
        "form_4": "Durant ma formation, en plus des potes, j'ai croisé des supers professeurs,\nj'ai même travaillé avec un d'eux sur un OS temps réel pour les voitures(C/Python)\nC'était super fun :)",
        "expe_1": "J'ai fais quelques stages,\ndont le stage sur l'OS temps réel (voir pièce slack précédente).",
        "expe_2": "Ensuite, dans l'IUT informatique de Nantes,\non s'est fait démarcher par Logica (CGI maintenant)\nJ'étais pas vraiment bien à cette époque,\ndonc j'ai fait au plus simple et j'ai accepté leur proposition.",
        "expe_3": "J'ai donc travaillé pour CGI jusqu'à arrivé ici, 5 ans environs,\nj'ai fais beaucoup de choses : développement, pseudo-architecte,\n concepteur fonctionnel, chargé de projet.\nCa s'est plutot bien passé pour moi labas.",
        "expe_4": "Et puis j'ai eu le déclic : \"J'attend quoi de mon travail ?!\"\nJe voulais me rapprocher de la technique, arrêter le management.\nJ'ai recherché s'il existait des boites sympas sur Nantes.\nEt voilà : Zenika, une des rares que j'avais sélectionnée m'a accepté.\nJe ne vous raconte pas ma joie :D",
        "hobb_1": "J'adore les jeux compétitifs, et spécialement League of Legends.",
        "hobb_2": "J'ai une équipe sur LoL,\non va même à une LAN en avril à Nantes ensemble,\non a pas un super niveau, mais on s'amuse bien.",
        "hobb_3": "J'aime les séries aussi,\ncelle que j'attends le plus chaque semaine, en ce moment,\n c'est Shameless. Super fun.",
        "hobb_4": "Bon, comme vous le voyez, pas trop d'activité sportive,\nj'ai essayé une fois ! Promis ! Du handball.\nMais ça ne s'est pas bien passé...\nJe vous raconte peut être un jour, si on boit assez pour ça !",
      }
    };
    
    // All the players have tuto messages
    for (let player of players) {
      for (let i = 0; i < tuto.length; ++i) {
        this.messages[player]["tuto_" + (i + 1)] = tuto[i];
      }
    }
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
