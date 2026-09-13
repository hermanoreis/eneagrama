import type { CenterCopy, EnneaType, TypeId } from "../schema";

export type { EnneaType, TypeId };

export const centers: Record<"instinto" | "sentimento" | "pensamento", CenterCopy> = {
  instinto: {
    label: "Centre de l’instinct",
    types: [8, 9, 1],
    text: "Corps, action, et la façon dont l’énergie se tient. La question de fond, c’est la colère : comment elle sort, se contient, ou s’endort.",
  },
  sentimento: {
    label: "Centre de l’émotion",
    types: [2, 3, 4],
    text: "Image, affection, et valeur. La question de fond, c’est la honte : comment on construit un soi qui pourrait mériter d’être aimé.",
  },
  pensamento: {
    label: "Centre du mental",
    types: [5, 6, 7],
    text: "Esprit, sécurité, et possibles. La question de fond, c’est la peur : comment on anticipe le danger, on l’évite, ou on le dissout.",
  },
};

export const types: EnneaType[] = [
  {
    id: 1,
    name: "Perfectionniste",
    alias: "Le Réformateur",
    center: "instinto",
    color: "#c45c3e",
    ink: "#5c2418",
    fear: "Être mauvais, corrompu, ou en faute.",
    desire: "Être bon, équilibré, et entier.",
    innerMessage: "Tu es sur un bon chemin si tu fais ce qui est juste.",
    essence: "La perfection",
    healing: "T’accepter, et accepter les autres tels qu’ils sont.",
    summary:
      "Idéaliste, exigeant, méthodique. Mène par l’exemple et par la qualité, et peut devenir un critique intérieur (et extérieur) quand le monde rate la cible.",
    personality:
      "Des gens menés par le principe. Discernants, mesurés, réalistes, avec le sens d’une mission. Ils mettent les idées en pratique avec patience, méthode, persistance, et soin du détail. Organisés et méticuleux, ils peuvent glisser vers la critique et le perfectionnisme. Le critique intérieur touche la valeur de soi, crée de la tension et de la solitude. Ils se dirigent par le jugement et la conviction. Ils ont un don pour l’équipe, la collaboration, et la persuasion.",
    focus:
      "Fait les choses comme il faut pour échapper à l’accusation et à la culpabilité. Suit le critique intérieur et la critique du dehors. Se compare aux autres pour occuper le terrain moralement plus haut.",
    motivators: ["Règles et repères clairs", "De l’ordre dans l’environnement", "Des processus longs sans horloge dans le dos", "Du travail d’appui avec une orientation"],
    strengths: ["Mener par l’exemple", "Le regard sur la qualité", "La recherche de l’excellence", "L’organisation", "La cohérence et l’honnêteté", "Le sens pratique"],
    develop: ["Réactivité et trop de critique", "Se défendre quand on le critique", "Peu de conscience de la colère plus profonde", "Contrôle et entêtement", "Impatience avec les détails des autres"],
    alert:
      "À force de toujours bien faire, prend tous les problèmes. Croit que les autres n’arriveront jamais à un aussi bon résultat. S’obsède de correction et de contrôle : sérieux, tendu, le poids du monde sur les épaules.",
    vocations: ["Éducation et formation", "Travail avec les gens et la qualité", "Organisation, méthode, comptabilité", "Droit, ingénierie, administration"],
    practices: [
      "Remarque le critique intérieur pendant 30 secondes chaque heure et laisse-le passer.",
      "Décale l’attention du « mal faire » vers la simple différence.",
      "Mets des plaisirs dans l’agenda et tiens-les comme non négociables.",
      "Demande-toi si une erreur est vraiment grave.",
      "Fais exprès de petites erreurs sans gravité et regarde ce qui se passe.",
    ],
    wings: [
      { id: 9, name: "L’Idéaliste", text: "Plus mesuré, sage, et civil. Préfère travailler seul." },
      { id: 2, name: "L’Avocat", text: "Mélange idéaux et empathie. Plus persuasif, actif, et sociable, et plus chaud quand il est frustré." },
    ],
    leadership: "Le travail d’un leader, c’est de poser des buts clairs et d’aider les gens à atteindre la plus haute qualité dont ils sont capables.",
    excelBlurb: "Critique, questionneur, perfectionniste, méthodique. Exige beaucoup de soi et des autres. Certains moralisent et dictent les règles. Quand ils échouent, la frustration peut devenir agressive.",
  },
  {
    id: 2,
    name: "Altruiste",
    alias: "L’Auxiliaire",
    center: "sentimento",
    color: "#d36b7a",
    ink: "#6a2430",
    fear: "N’être pas aimé ni nécessaire.",
    desire: "Se sentir aimé et voulu.",
    innerMessage: "Tu es sur un bon chemin si tu es aimé et indispensable.",
    essence: "L’amour",
    healing: "Reconnaître tes propres besoins et recevoir, pas seulement donner.",
    summary:
      "Empathique, serviable, généreux. Voit le besoin des autres avant le sien, et peut perdre sa liberté à force de vouloir être irremplaçable.",
    personality:
      "Attirés par le travail qui passe par la relation et la conversation. Ils se donnent à être utiles, avec une générosité qui n’a pas de limite évidente. Ils donnent du temps aux amis et ont du mal à dire non. À force de trop faire pour les autres, ils se dépassent et négligent santé et besoins propres. Expressifs, bavards, sociables, parfois trop. Le souhait de fond, c’est de se sentir aimé.",
    focus:
      "L’attention sur les besoins et les envies des autres, surtout les importantes. Agit selon ce que l’autre pourrait sentir ou faire. La vanité demande à être dépassée pour laisser plus de place à une attention à soi.",
    motivators: ["Travailler parmi les gens", "Une reconnaissance sincère", "Un rôle d’appui ou d’accompagnement", "Des lieux chauds, relationnels"],
    strengths: ["Des relations solides", "L’empathie", "La générosité et l’entraide", "L’optimisme", "Voit les besoins des autres", "Sait motiver les autres"],
    develop: ["Du mal à dire non", "De la colère quand on ne le reconnaît pas", "Ne connaît pas ses propres besoins", "Trop d’accent sur les relations", "En fait trop et attend un retour sans l’admettre"],
    alert:
      "L’identité se fond avec ce qu’il fait pour les autres. La fatigue, le compte silencieux, et le sentiment d’être utilisé apparaissent quand la reconnaissance ne vient pas.",
    vocations: ["Psychologie, accompagnement, soin", "Éducation et développement des gens", "Hospitalité et vente relationnelle", "Philanthropie et travail de communauté"],
    practices: [
      "Pratique le non sans longue justification.",
      "Sépare l’amour de l’approbation et de l’attention.",
      "Garde un temps qui n’est qu’à toi, sans utilité.",
      "Demande-toi : c’est pour l’autre, ou pour rester nécessaire ?",
      "Nomme un but personnel avant de faire quelque chose pour quelqu’un d’autre.",
    ],
    wings: [
      { id: 1, name: "Le Serviteur", text: "Un fort souhait de soulager la souffrance. Plus sobre et sévère avec soi : peut être autocritique et négliger la santé." },
      { id: 3, name: "L’Hôte", text: "Charmant, bavard, adaptable. Aime recevoir. Moins sérieux, plus tourné vers ce qu’il peut offrir." },
    ],
    leadership: "Le travail d’un leader, c’est de voir les forces et les manques de l’équipe, de motiver les gens, et de rendre le but plus facile à atteindre.",
    excelBlurb: "Serviable, aimant, avec un besoin de plaire. Croit qu’il a beaucoup à donner et aime que ça se voie. Certains perdent leur liberté à vouloir satisfaire tout le monde.",
  },
  {
    id: 3,
    name: "Battant",
    alias: "Le Performer",
    center: "sentimento",
    color: "#d4a017",
    ink: "#5a4308",
    fear: "N’être pas valu pour ce qu’il accomplit.",
    desire: "Se sentir valu, voulu, et accepté.",
    innerMessage: "Tu es sur un bon chemin si tu réussis et que les autres te respectent.",
    essence: "L’espoir / la vraie valeur",
    healing: "Séparer l’image du soi réel, et ralentir.",
    summary:
      "Tourné vers le résultat, adaptable, charismatique. Fait de la vie un projet de succès, et peut confondre l’image avec qui il est.",
    personality:
      "Menés par le succès. Confiants, attirants, charmants, ils peuvent s’orienter autour du statut et de l’avancée. Ambitieux, compétents, prêts à agir, ils s’inquiètent de l’image et de ce que les autres pensent. La confiance en soi, l’élan, et la persuasion tirent une équipe. Le risque, c’est le trop de travail, la compétition, et l’épuisement. Ils rivalisent au travail, à la maison, dans les relations. Ils craignent l’intimité qui montrerait la fragilité.",
    focus:
      "L’attention sur la performance, le but, et l’image que les autres vont lire. Multiplie les canaux de travail et accélère quand l’insécurité apparaît.",
    motivators: ["Des buts visibles, mesurables", "La reconnaissance des résultats", "Un milieu compétitif, rapide", "La liberté d’ajuster le comportement jusqu’à gagner"],
    strengths: ["L’orientation vers le succès", "Beaucoup d’énergie", "Lit ce que les gens veulent", "Passe à travers les problèmes", "L’entreprise et la confiance", "Obtient des résultats"],
    develop: ["Une compétitivité extrême", "Peu d’accès au sentiment", "Impatience avec l’émotion des autres", "Croire que l’image est le soi", "Peu de temps pour les relations personnelles"],
    alert:
      "Accélère, empile les tâches, et disparaît de l’intimité. La fatigue est ignorée. « Qu’est-ce qui compte vraiment ? » se cache derrière le prochain résultat.",
    vocations: ["Leadership commercial et politique", "Entrepreneuriat et publicité", "Travail de projet et vente", "Communication et marques"],
    practices: [
      "Ralentis le rythme et décroche de la performance.",
      "Remarque les sentiments et la fatigue du corps.",
      "Demande-toi : le repère, c’est l’image, ou le soi réel ?",
      "Valorise l’empathie autant que le statut.",
      "Fais de la place pour un regard vers l’intérieur.",
    ],
    wings: [
      { id: 2, name: "Le Promoteur", text: "Plus relationnel et charmant. Se sert du magnétisme personnel pour obtenir coopération et visibilité." },
      { id: 4, name: "Le Professionnel", text: "Plus conscient de l’image raffinée et du style. Peut osciller entre le brillant public et le vide privé." },
    ],
    leadership: "Le travail d’un leader, c’est de créer un lieu où les résultats peuvent arriver, avec des buts clairs et une structure.",
    excelBlurb: "Lié au succès, il priorise l’image. Compétitif, il aime gagner. Attention à la vanité. Il tend à mener.",
  },
  {
    id: 4,
    name: "Individualiste",
    alias: "Le Romantique",
    center: "sentimento",
    color: "#7a5ea7",
    ink: "#2f2150",
    fear: "N’avoir ni identité ni sens à soi.",
    desire: "Se trouver et rester fidèle aux besoins émotionnels.",
    innerMessage: "Tu es sur un bon chemin si tu es authentique et singulier.",
    essence: "L’origine / l’identité essentielle",
    healing: "Habiter le présent sans te définir par ce qui manque.",
    summary:
      "Intuitif, expressif, en quête de sens. Sent la vie en haute définition, et peut se perdre dans l’intensité, la comparaison, et le manque.",
    personality:
      "Mal à l’aise avec le présent, lié au passé ou en train de rêver le futur. Sensible, créatif, tourné vers l’intérieur. Cherche du sens dans les relations et dans l’expression. Peut devenir dramatique, ombrageux, et critique, de soi et des autres. Le sentiment que les autres sont plus heureux et que tout est plus dur pour lui nourrit le mythe du manque. L’authenticité est le trésor et le piège.",
    focus:
      "L’attention sur ce qui est absent, sur ce qui serait plus vrai, plus beau, ou plus profond. Compare la vie intérieure à l’apparence des autres.",
    motivators: ["Un travail avec du sens et de l’esthétique", "Le contrôle créatif", "Des relations profondes, pas superficielles", "De la place pour l’expression émotionnelle"],
    strengths: ["L’inspiration et la créativité", "L’introspection", "L’expressivité et l’intuition", "La compassion", "La recherche de l’excellence", "Le sens par les relations"],
    develop: ["Intensité et drame", "L’humeur", "L’ennui vient facilement", "La culpabilité et du mal avec la critique", "La réserve et une critique extrême des autres"],
    alert:
      "Quand on le critique ou qu’on le comprend mal, il se retire et boude. L’identité s’appuie sur ce qui manque. La vie ordinaire a l’air trop mince.",
    vocations: ["Arts, écriture, design", "Musique et direction créative", "Thérapie et travail social", "Marques à forte identité"],
    practices: [
      "Ramène l’attention de ce qui manque vers ce qui est là.",
      "Termine l’ordinaire avant de courir après l’extraordinaire.",
      "Sépare le sentiment de l’identité.",
      "Accepte le commun sans perdre la profondeur.",
      "Sers-toi de la créativité pour quelque chose hors de toi.",
    ],
    wings: [
      { id: 3, name: "L’Aristocrate", text: "Plus tourné vers faire et être vu. Joint esthétique et ambition." },
      { id: 5, name: "Le Bohème", text: "Plus réservé et analytique. Approfondit l’intériorité et peut s’isoler dans la singularité." },
    ],
    leadership: "Le travail d’un leader, c’est de construire des organisations qui donnent du sens et un but, pour que les gens veuillent faire un travail excellent.",
    excelBlurb: "Voit la souffrance comme une position face au monde. Mal à l’aise avec le présent. Certains deviennent tragiques parce qu’ils pensent toujours que les autres sont plus heureux.",
  },
  {
    id: 5,
    name: "Observateur",
    alias: "L’Investigateur",
    center: "pensamento",
    color: "#5b7c6e",
    ink: "#1d332c",
    fear: "Être envahi, vidé, ou incompétent.",
    desire: "Être capable, comprendre, et garder de l’énergie.",
    innerMessage: "Tu es sur un bon chemin si tu comprends et que tu peux tenir tout seul.",
    essence: "L’omniscience / la clarté",
    healing: "Entrer dans le monde et partager ce que tu sais.",
    summary:
      "Analytique, discernant, indépendant. Comprend en profondeur, et peut se retirer si loin que la vie se passe derrière une vitre.",
    personality:
      "Prudents ; ils n’agissent pas sans penser. Ils regardent de loin pour connaître le terrain. Réservés, méfiants des demandes des autres, ils peuvent mettre le sentiment de côté et vivre une vie solitaire. Excellents en crise parce qu’ils planifient et se spécialisent. L’esprit veut la carte complète avant le pas. L’autonomie devient un mur.",
    focus:
      "L’attention sur les données, les systèmes, et la réserve d’énergie. Minimise l’implication pour ne pas être drainé.",
    motivators: ["Du temps seul pour penser", "Des problèmes complexes et de l’expertise", "Peu d’invasion émotionnelle", "Le contrôle de son propre rythme"],
    strengths: ["L’analyse et l’objectivité", "La mise en système", "La planification détaillée", "L’excellence en crise", "La persistance", "La spécialisation"],
    develop: ["La distance", "Trop d’indépendance", "Ne pas dire ce qu’il pense", "Sous-estimer les relations", "Ne pas échanger l’information", "Entêtement et critique"],
    alert:
      "Quand il est en insécurité, il devient distant et froid. La vie devient un dossier. Les gens sentent qu’il faut un rendez-vous pour exister.",
    vocations: ["Recherche, science, technologie", "Stratégie et analyse", "Architecture de systèmes", "Écriture technique et conseil de spécialiste"],
    practices: [
      "Partage une pensée avant qu’elle soit « prête ».",
      "Reste dans le corps et dans la conversation un peu au-delà du confort.",
      "Traite l’énergie comme renouvelable, pas seulement rare.",
      "Nomme les sentiments avec la même précision que les concepts.",
      "Demande et offre de l’aide en petite dose, concrète.",
    ],
    wings: [
      { id: 4, name: "L’Iconoclaste", text: "Plus esthétique et émotionnellement intense. Joint analyse et singularité." },
      { id: 6, name: "Le Résolveur", text: "Plus loyal aux systèmes et aux groupes de compétence. Se sert du savoir pour anticiper le risque." },
    ],
    leadership: "Le travail d’un leader, c’est de développer l’organisation par la recherche, la délibération, et la planification, pour que les parties tiennent dans une mission partagée.",
    excelBlurb: "Ne fait rien sans y avoir pensé. Observe de loin, craint le risque, est réservé, et peut vivre une vie solitaire. Brille comme chercheur et spécialiste.",
  },
  {
    id: 6,
    name: "Loyaliste",
    alias: "Le Sceptique",
    center: "pensamento",
    color: "#6b7d3a",
    ink: "#2c3414",
    fear: "N’avoir ni soutien ni orientation.",
    desire: "Trouver un appui et de la sécurité.",
    innerMessage: "Tu es sur un bon chemin si tu fais ce qu’on attend de toi.",
    essence: "Le courage",
    healing: "Te détendre et vivre le présent.",
    summary:
      "Responsable, loyal, stratégique. Anticipe ce qui peut mal tourner, et oscille entre une prudence extrême et le courage contre-phobique.",
    personality:
      "Ils cherchent un sol ferme dans un monde qu’ils lisent comme dangereux et peu fiable. Ils se tournent vers les gens et les systèmes pour s’orienter et, en même temps, se méfient de l’autorité. Ils n’aiment pas trop d’options. Ils se sentent plus en sécurité avec des règles et des routines. Forts en procédures, analyse, et investigation. L’esprit jacasse avec des scénarios. Ils peuvent être les plus fidèles, ou tester le lien jusqu’à le lasser.",
    focus:
      "L’attention sur les menaces, l’ambiguïté, et la loyauté du groupe. Projette des pensées sur les autres et répète le pire pour se préparer.",
    motivators: ["Des rôles et des règles clairs", "Une équipe fiable", "Anticiper les problèmes", "Une autorité qui a mérité la confiance"],
    strengths: ["La responsabilité et la coopération", "La pensée stratégique", "Un esprit vif", "La persévérance", "Anticiper les problèmes", "La loyauté à l’équipe"],
    develop: ["L’inquiétude chronique", "L’aversion pour l’ambiguïté", "La paralysie d’analyse", "Trop de prudence ou trop de risque", "La soumission ou une méfiance extrême"],
    alert:
      "L’anxiété devient un nom de famille. Soit il se soumet trop, soit il défie trop. La décision gèle pendant que l’esprit joue les désastres.",
    vocations: ["Droit, audit, risque", "Sécurité et opérations", "Recherche sociale et critique", "Travail de crise et conformité"],
    practices: [
      "Distingue l’intuition de la projection.",
      "Agis un jour comme une personne de foi agirait.",
      "Remarque le pouvoir donné aux autres et reprends l’autorité.",
      "Goûte les succès au lieu de seulement chasser le prochain trou.",
      "Vérifie tes peurs avec des gens réels.",
    ],
    wings: [
      { id: 5, name: "Le Défenseur", text: "Cherche la sécurité dans les systèmes de croyance et de savoir. Plus solitaire, sceptique, et réactif quand il se sent menacé." },
      { id: 7, name: "Le Camarade", text: "Plus sociable et aventureux. Se sert de l’humour et du mouvement pour calmer l’anxiété." },
    ],
    leadership: "Le travail d’un leader, c’est de résoudre les problèmes en créant un lieu où chacun se sent partie de la solution.",
    excelBlurb: "Imagine le résultat des actions et voit parfois d’abord le mauvais côté. Cherche la sécurité. En crise, veut résoudre maintenant. Fort en droit, en critique, et en sciences sociales.",
  },
  {
    id: 7,
    name: "Épicurien",
    alias: "L’Enthusiast",
    center: "pensamento",
    color: "#e08a2a",
    ink: "#5a3208",
    fear: "La douleur et la privation.",
    desire: "Être heureux, satisfait, accompli.",
    innerMessage: "Tu es sur un bon chemin si tu obtiens ce dont tu as besoin.",
    essence: "La sobriété",
    healing: "Explorer l’intérieur et rester.",
    summary:
      "Curieux, rapide, contagieux. Transforme la vie en une suite de possibles, et quitte la douleur en sautant à la suite.",
    personality:
      "Audacieux, vifs, avec une détermination gaie. Productifs, pratiques, joueurs. La chasse aux sensations nouvelles les empêche de finir ce qu’ils ont commencé. Ils communiquent avec vigueur, improvisent, délèguent l’opérationnel pour rester avec le panorama. Portés vers l’analyse générale, pas le détail. L’optimisme est réel et aussi une stratégie contre l’ennui et la douleur.",
    focus:
      "L’attention sur ce qui stimule, le futur, et le multiple. L’esprit saute. Les limites ont l’air d’une prison.",
    motivators: ["La variété et la nouveauté", "Des projets avec un début excitant", "La liberté d’agenda", "Des gens intéressants et des idées neuves"],
    strengths: ["L’imagination et la créativité", "L’enthousiasme et la curiosité", "Une présence qui capte", "Le multitâche et un esprit vif", "Tenir des données déconnectées"],
    develop: ["L’impulsivité et la dispersion", "Éviter les situations douloureuses", "Une empathie inégale", "Réactivité à la critique", "Le mépris de la routine", "Rationaliser le négatif"],
    alert:
      "L’agenda se remplit pour que l’herbe ne pousse pas. Les engagements s’amincissent. La douleur est recadrée en blague ou en plan B.",
    vocations: ["Innovation, produit, contenu", "Arts, scène, production", "Voyage, hospitalité, éducation par l’expérience", "Stratégie d’occasions"],
    practices: [
      "Médite sur un seul point jusqu’à ce que l’esprit ralentisse.",
      "Mène une chose jusqu’au bout.",
      "Pose des options : moins peut être plus.",
      "Reste avec l’ennui, la limite, et le conflit au lieu de partir.",
      "Revois la faim d’excitation à la fin de la journée.",
    ],
    wings: [
      { id: 6, name: "L’Animateur", text: "Plus relationnel et productif. Oscille entre l’envie de risquer et la peur de perdre ce qui est déjà là." },
      { id: 8, name: "Le Réaliste", text: "Joint vitesse et élan. Plus stratégique, pratique, tourné vers le pouvoir et le résultat matériel." },
    ],
    leadership: "Le travail d’un leader, c’est d’enthousiasmer les gens et de les faire créer, pour que l’organisation saisisse de vraies occasions.",
    excelBlurb: "Aime jouir de la vie. Le travail peut avoir l’air d’un mal nécessaire pour le plaisir et la liberté. Charmant ; mène de façon amicale, un peu déguisée.",
  },
  {
    id: 8,
    name: "Protecteur",
    alias: "Le Challenger",
    center: "instinto",
    color: "#2b2b2b",
    ink: "#111111",
    fear: "Être blessé, contrôlé, ou envahi.",
    desire: "Se protéger et fixer le cours de sa propre vie.",
    innerMessage: "Tu es sur un bon chemin si tu es fort et que tu peux maîtriser la situation.",
    essence: "La miséricorde",
    healing: "Travailler le pardon et la vulnérabilité.",
    summary:
      "Direct, protecteur, avec un grand appétit de vie. Déplace le monde par la force, et peut ne pas voir l’impact de cette force sur les autres.",
    personality:
      "Fermes, qui s’affirment, sûrs d’eux. Forts et dominants, aussi fiers, protecteurs, et décidés. Ils contrôlent l’environnement et peuvent intimider. L’intimité est dure. Dans la maîtrise de soi, ils se servent de la force pour améliorer la vie des autres : héroïques, magnanimes. Ils ne fuient ni le risque ni la responsabilité. La communication est directe, rapide, sans détour. Ils ne supportent pas d’être contrôlés.",
    focus:
      "L’attention sur le pouvoir, la justice, et qui commande. Détecte la faiblesse, dans le lieu et en soi, et bouge pour ne pas être pris.",
    motivators: ["L’autonomie et le commandement", "De grands défis", "Des gens compétents à côté", "Un résultat visible, immédiat"],
    strengths: ["La droiture et la stratégie", "Passer les obstacles", "L’élan et la protection", "Pousser les projets", "Soutenir le succès des autres", "La confiance en soi"],
    develop: ["Contrôle et exigence", "Impatience avec les plus lents", "Mépris de la faiblesse", "Attendre trop de soi et des autres", "Se sentir utilisé quand l’autre ne livre pas"],
    alert:
      "Des colères monumentales. L’excès, la domination, et la thèse que la faiblesse invite le problème. L’autre disparaît ou obéit, et l’intimité disparaît avec lui.",
    vocations: ["Construire et négocier", "Leadership opérationnel", "Défense d’une cause", "Invention et redressement"],
    practices: [
      "Une fois par heure, vérifie l’impulsion d’agir et respire.",
      "Demande aux autres si tu en fais trop.",
      "Défends l’ordinaire, le doux, le modéré.",
      "Retarde la gratification et autorise la vulnérabilité.",
      "Cherche que les deux s’en sortent, au lieu de seulement gagner.",
    ],
    wings: [
      { id: 7, name: "L’Indépendant", text: "Charismatique, compétitif, veut laisser une marque. Peu de patience avec l’inefficacité. Plus ouvertement provocateur." },
      { id: 9, name: "L’Ours", text: "Joint la force et un calme apparent. Plus protecteur, moins explosif : l’entêtement remplace l’attaque." },
    ],
    leadership: "Le travail d’un leader, c’est de faire bouger l’organisation avec décision, de mettre des gens capables aux bons rôles, et de donner de l’autonomie à ceux qui sont compétents.",
    excelBlurb: "Vit intensément, aime le pouvoir, et se bat pour ce qu’il voit comme juste. Ne supporte pas de dépendre ni d’avoir l’air faible. Fait ses propres règles.",
  },
  {
    id: 9,
    name: "Médiateur",
    alias: "Le Pacificateur",
    center: "instinto",
    color: "#8a9a4a",
    ink: "#2f3616",
    fear: "La perte, la séparation, l’anéantissement.",
    desire: "Garder l’équilibre intérieur et la paix de l’esprit.",
    innerMessage: "Tu iras bien si les gens autour de toi vont bien aussi.",
    essence: "L’action",
    healing: "Te réveiller et prendre l’initiative.",
    summary:
      "Diplomatique, stable, inclusif. Tient l’harmonie du groupe, et peut endormir ses propres priorités pour que le bateau ne tangue pas.",
    personality:
      "Pacificateurs, faciles à vivre, constants, réceptifs. Ils cèdent trop loin pour garder la paix. Ils minimisent les frottements ; les problèmes grandissent par la passivité et l’entêtement. Infatigables à rapprocher les gens et à éclaircir les malentendus. En haut de l’Ennéagramme, ils font écho aux traits des autres types. S’affirmer fait peur. Ils compensent un instinct endormi par l’imagination. Ils arrangent beaucoup de tâches et oublient l’essentiel. Ils peuvent être actifs dehors et endormis dedans.",
    focus:
      "L’attention sur l’environnement et les agendas des autres. Leur propre priorité passe en second. Des substituts (nourriture, écrans, routine) prennent la place de la volonté.",
    motivators: ["Un lieu harmonieux, structuré", "Des relations qui durent", "Un rythme sans hâte agressive", "Appartenir sans être le centre du conflit"],
    strengths: ["La diplomatie et la chaleur", "L’inclusion et la coopération", "Des relations qui durent", "La patience", "L’appui aux autres", "Une vue large depuis l’opérationnel"],
    develop: ["Éviter le conflit", "Ne pas dire ce qu’il pense", "Oublier les priorités", "Procrastination et indécision", "Peu d’énergie apparente", "Passif-agressif sous la pression"],
    alert:
      "Accepte pour ne pas discuter. La colère devient un entêtement silencieux. La journée finit et ce qui lui importait n’a pas été fait.",
    vocations: ["Médiation, diplomatie, travail avec les gens", "Facilitation et accompagnement d’équipe", "Opérations et intégration", "Soin et communauté"],
    practices: [
      "Chaque jour, nomme ce qui compte pour toi et vérifie si tu l’as fait.",
      "Sers-toi de la résistance et de l’entêtement comme boussole de ce qui a été laissé.",
      "Fais des plans avec une échéance et une limite.",
      "Prends position sur des sujets réels.",
      "Remarque l’attrait des substituts et reste avec le but.",
    ],
    wings: [
      { id: 8, name: "Le Conseiller", text: "Plus franc et corporel. La paix vient avec une dose de force et une limite." },
      { id: 1, name: "Le Rêveur", text: "Plus attaché aux principes, plus ordonné. Cherche l’harmonie par ce qui est juste, pas seulement par le confort." },
    ],
    leadership: "Le travail d’un leader, c’est d’aider à accomplir une mission partagée en créant un lieu de travail structuré et harmonieux.",
    excelBlurb: "A l’air accommodant, n’aime pas être dérangé. Satisfait les autres pour garder la paix. Accepte pour ne pas discuter. Sait écouter et négocier.",
  },
];

export const typeById = Object.fromEntries(types.map((t) => [t.id, t])) as Record<TypeId, EnneaType>;

export const concepts = [
  "Il y a neuf types. Chaque personne s’identifie à un.",
  "Aucun type n’est meilleur qu’un autre.",
  "Le type ne change pas : c’est nous qui changeons.",
  "Nous avons des traits de tous, mais la vision du monde de notre type mène la danse.",
  "La passion et la fixation comptent plus que le comportement typique.",
  "Le type est une défense et un état de conscience rétréci.",
  "On n’est pas un type : on est dans un type.",
  "Observer les autres mène à la compréhension, sans stéréotyper, juger, ni justifier.",
];

export const folderUrl =
  "https://drive.google.com/drive/folders/1Ngk8ATY1oZ06MNPf3Myiy6_2da4vZoGj";
