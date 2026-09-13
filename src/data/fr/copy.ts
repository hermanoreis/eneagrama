import type { TypeId } from "../schema";

export const typeIntroductions: Record<TypeId, string> = {
  1: "Cherche à faire ce qu’il juge juste. Tu peux reconnaître ce soin dans l’attention aux détails et dans l’exigence envers soi.",
  2: "Repère ce dont les autres ont besoin et aime aider. Parfois ses propres besoins attendent.",
  3: "Se met en mouvement pour faire et pour obtenir des résultats. Se reposer sans sentir qu’il devrait produire, ça peut être dur.",
  4: "Tient à l’expression personnelle et cherche du sens dans ce qu’il vit. Il peut se comparer et sentir qu’il manque quelque chose en lui.",
  5: "Aime comprendre avant d’agir et tient à son espace. Il peut se retirer quand il sent qu’on lui en demande trop.",
  6: "Cherche la confiance et anticipe souvent ce qui peut mal tourner. Parfois il continue à chercher des garanties avant de décider.",
  7: "S’enflamme pour les possibles et les expériences nouvelles. Il peut vouloir changer de sujet ou de plan quand ça devient dur.",
  8: "Tient à l’autonomie et affronte ce qu’il juge injuste. Montrer qu’il a besoin d’aide peut être difficile.",
  9: "Cherche l’accord et tient compte de plusieurs points de vue. Il peut remettre à plus tard ce qu’il veut, pour éviter un conflit.",
};

export const homeFaq = [
  { question: "Le test ennéagramme est-il gratuit ?", answer: "Oui. Tu peux faire le test et lire ton résultat sans payer." },
  { question: "Faut-il un e-mail pour faire le test ennéagramme ?", answer: "Oui, pour faire le test et ouvrir ton compte. Tu reçois un code d’accès, sans mot de passe à créer. Les profils des types et les pages d’étude se lisent sans te connecter." },
  { question: "Peut-on arrêter le test ennéagramme et continuer plus tard ?", answer: "Oui, dans ce même navigateur. Les réponses en cours y restent. Si tu effaces les données du navigateur ou changes d’appareil, ce progrès peut ne plus être là." },
  { question: "Le test ennéagramme dit-il qui je suis ?", answer: "Le résultat montre quels types ont le plus de points sur tes réponses. Il ne décrit pas tout de toi et ce n’est pas un diagnostic. Compare les profils avec des situations réelles de ta vie." },
  { question: "Et si je me reconnais dans plusieurs types de l’ennéagramme ?", answer: "Tu peux retrouver des traits dans plusieurs descriptions. Compare les motivations et regarde lesquelles reviennent dans les situations qui se répètent chez toi." },
  { question: "Le mentor de l’ennéagramme est-il une personne ?", answer: "Non. C’est une IA qui peut regarder ton dernier résultat et les textes de ce site pour parler avec toi. Elle peut se tromper et elle ne remplace pas un accompagnement professionnel." },
];

export const typeFaqs: Record<TypeId, { question: string; answer: string }[]> = {
  1: [
    { question: "Qu’est-ce que le type 1 de l’ennéagramme ?", answer: "Le type 1, le Perfectionniste, s’organise autour de faire ce qui est juste. Idéaliste et méthodique, il mène par la qualité et peut devenir un critique dur, de lui-même et des autres, quand le monde rate la cible." },
    { question: "De quoi a peur le type 1 de l’ennéagramme, que veut-il ?", answer: "La peur courante, c’est d’être mauvais, corrompu ou en faute. Le désir, c’est d’être bon, équilibré, entier. Dans cet enseignement, le chemin c’est de t’accepter, et d’accepter les autres tels qu’ils sont." },
    { question: "Qu’est-ce qu’une aile du type 1 de l’ennéagramme ?", answer: "Les voisins sur le cercle colorent le type 1. Un 1w9 (Idéaliste) est plus mesuré et préfère travailler seul. Un 1w2 (Avocat) mélange idéaux et empathie, plus sociable, et plus chaud quand il est frustré." },
  ],
  2: [
    { question: "Qu’est-ce que le type 2 de l’ennéagramme ?", answer: "Le type 2, l’Altruiste, s’organise autour d’être aimé et nécessaire. Empathique et généreux, il voit le besoin de l’autre en premier et peut perdre sa liberté à force de vouloir être irremplaçable." },
    { question: "De quoi a peur le type 2 de l’ennéagramme, que veut-il ?", answer: "La peur courante, c’est de n’être ni aimé ni nécessaire. Le désir, c’est de se sentir aimé et voulu. Le chemin, c’est aussi de recevoir, pas seulement de donner, et de voir tes propres besoins." },
    { question: "Qu’est-ce qu’une aile du type 2 de l’ennéagramme ?", answer: "Un 2w1 (Serviteur) est plus sobre et peut négliger sa santé en soulageant la souffrance. Un 2w3 (Hôte) est plus charmant, tourné vers ce qu’il peut offrir." },
  ],
  3: [
    { question: "Qu’est-ce que le type 3 de l’ennéagramme ?", answer: "Le type 3, le Battant, s’organise autour du succès et de l’image. Adaptable et tourné vers le résultat, il peut confondre la performance avec qui il est." },
    { question: "De quoi a peur le type 3 de l’ennéagramme, que veut-il ?", answer: "La peur courante, c’est de n’être pas valu pour ce qu’il accomplit. Le désir, c’est de se sentir valu, voulu, accepté. Le chemin, c’est de ralentir et de séparer l’image du soi réel." },
    { question: "Qu’est-ce qu’une aile du type 3 de l’ennéagramme ?", answer: "Un 3w2 (Promoteur) est plus relationnel. Un 3w4 (Professionnel) est plus attentif au style et peut osciller entre le brillant public et le vide privé." },
  ],
  4: [
    { question: "Qu’est-ce que le type 4 de l’ennéagramme ?", answer: "Le type 4, l’Individualiste, s’organise autour de l’identité et du sens. Expressif et intense, il peut se perdre dans la comparaison et dans ce qui manque." },
    { question: "De quoi a peur le type 4 de l’ennéagramme, que veut-il ?", answer: "La peur courante, c’est de n’avoir ni identité ni sens à soi. Le désir, c’est de se trouver et de rester fidèle aux besoins émotionnels. Le chemin, c’est d’habiter le présent sans te définir par le manque." },
    { question: "Quelle est la différence entre l’aile 5 et l’aile 3 du type 4 ?", answer: "Un 4w3 (Aristocrate) joint esthétique et ambition et veut être vu. Un 4w5 (Bohème) est plus réservé et analytique, et peut s’isoler dans sa singularité. Le test indique le voisin avec le plus de points ; il ne prouve pas comment ces influences vivent en toi." },
  ],
  5: [
    { question: "Qu’est-ce que le type 5 de l’ennéagramme ?", answer: "Le type 5, l’Observateur, s’organise autour de comprendre et de garder son énergie. Analytique et indépendant, il peut se retirer si loin que la vie se passe derrière une vitre." },
    { question: "De quoi a peur le type 5 de l’ennéagramme, que veut-il ?", answer: "La peur courante, c’est d’être envahi, vidé ou incompétent. Le désir, c’est d’être capable, de comprendre, de garder de l’énergie. Le chemin, c’est d’entrer dans le monde et de partager ce que tu sais." },
    { question: "Qu’est-ce qu’une aile du type 5 de l’ennéagramme ?", answer: "Un 5w4 (Iconoclaste) est plus esthétique et intense. Un 5w6 (Résolveur) est plus loyal aux systèmes de compétence et se sert du savoir pour anticiper le risque." },
  ],
  6: [
    { question: "Qu’est-ce que le type 6 de l’ennéagramme ?", answer: "Le type 6, le Loyaliste, s’organise autour du soutien et de la sécurité. Responsable et stratégique, il anticipe ce qui peut mal tourner et peut osciller entre la prudence et le courage contre-phobique." },
    { question: "De quoi a peur le type 6 de l’ennéagramme, que veut-il ?", answer: "La peur courante, c’est de n’avoir ni soutien ni orientation. Le désir, c’est de trouver un appui et de la sécurité. Dans cet enseignement, le chemin c’est de te détendre et de vivre le présent." },
    { question: "Qu’est-ce qu’une aile du type 6 de l’ennéagramme ?", answer: "Un 6w5 (Défenseur) cherche la sécurité dans les systèmes de savoir et peut être plus solitaire. Un 6w7 (Camarade) est plus sociable et se sert de l’humour et du mouvement pour calmer l’anxiété." },
  ],
  7: [
    { question: "Qu’est-ce que le type 7 de l’ennéagramme ?", answer: "Le type 7, l’Épicurien, s’organise autour du possible et de l’évitement de la douleur. Curieux et rapide, il peut quitter la difficulté en sautant au plan suivant." },
    { question: "De quoi a peur le type 7 de l’ennéagramme, que veut-il ?", answer: "La peur courante, c’est la douleur et la privation. Le désir, c’est d’être heureux, satisfait, accompli. Le chemin, c’est de rester à l’intérieur au lieu de collectionner les surfaces." },
    { question: "Qu’est-ce qu’une aile du type 7 de l’ennéagramme ?", answer: "Un 7w6 (Animateur) est plus relationnel. Un 7w8 (Réaliste) est plus stratégique, tourné vers le résultat matériel." },
  ],
  8: [
    { question: "Qu’est-ce que le type 8 de l’ennéagramme ?", answer: "Le type 8, le Protecteur, s’organise autour de se protéger et de ne pas être contrôlé. Direct et fort, il peut ne pas voir l’impact de cette force sur les autres." },
    { question: "De quoi a peur le type 8 de l’ennéagramme, que veut-il ?", answer: "La peur courante, c’est d’être blessé, contrôlé ou envahi. Le désir, c’est de se protéger et de fixer le cours de sa propre vie. Le chemin passe par la vulnérabilité et le pardon." },
    { question: "Qu’est-ce qu’une aile du type 8 de l’ennéagramme ?", answer: "Un 8w7 (Indépendant) est plus ouvertement provocateur. Un 8w9 (Ours) est plus protecteur, moins explosif ; l’entêtement peut remplacer l’attaque." },
  ],
  9: [
    { question: "Qu’est-ce que le type 9 de l’ennéagramme ?", answer: "Le type 9, le Médiateur, s’organise autour de la paix intérieure et de ne pas faire tanguer le bateau. Inclusif et stable, il peut remettre ses priorités pour garder l’harmonie." },
    { question: "De quoi a peur le type 9 de l’ennéagramme, que veut-il ?", answer: "La peur courante, c’est la perte, la séparation, l’anéantissement. Le désir, c’est l’équilibre intérieur et la paix de l’esprit. Le chemin, c’est de te réveiller et de prendre l’initiative." },
    { question: "Qu’est-ce qu’une aile du type 9 de l’ennéagramme ?", answer: "Un 9w8 (Conseiller) apporte plus de force et de limite. Un 9w1 (Rêveur) cherche l’harmonie par ce qui est juste, pas seulement par le confort." },
  ],
};

export const howToTest = {
  name: "Comment faire ce test d’ennéagramme gratuit",
  steps: [
    { name: "Entre avec ton e-mail", text: "Tu reçois un code à six chiffres. Il n’y a pas de mot de passe à créer." },
    { name: "Réponds à 135 phrases", text: "Quinze items touchent chaque type, mélangés dans le questionnaire. Utilise l’échelle de jamais à toujours, en pensant aux habitudes qui se répètent." },
    { name: "Lis le résultat comme un point de départ", text: "Un score plus haut veut dire plus d’accord avec ces phrases, pas une probabilité que tu « sois » un type. Les égalités restent visibles. Ce n’est pas un diagnostic." },
  ],
};
