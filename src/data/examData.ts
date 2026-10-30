// Données officielles de l'application OBJECTIF CEE1
export interface ExamModule {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  pages: string;
  icon: string;
  color: string;
  badgeClass: string;
}

export interface Rank {
  minPct: number;
  minStreak: number;
  title: string;
  appellation: string;
  corps: string;
  svgType: string;
}

export interface Question {
  id: number;
  module: string;
  ref: string;
  q: string;
  options: string[];
  correct: number;
  exp: string;
}

export const MODULES: ExamModule[] = [
  {
    "id": "m1",
    "code": "MOD 1",
    "title": "Institution, Organisation de la PN & Galonnage",
    "shortTitle": "Organisation & Galons",
    "pages": "Fiches p. 1 à 8 & 39",
    "icon": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    "color": "from-blue-600 to-indigo-700",
    "badgeClass": "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30"
  },
  {
    "id": "m2",
    "code": "MOD 2",
    "title": "Droit Pénal Général : Infraction, Tentative & Complicité",
    "shortTitle": "Infraction, Tentative, Complicité",
    "pages": "Fiches p. 18 à 23",
    "icon": "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    "color": "from-purple-600 to-indigo-700",
    "badgeClass": "bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30"
  },
  {
    "id": "m3",
    "code": "MOD 3",
    "title": "Responsabilité Pénale, Irresponsabilité & Faits Justificatifs",
    "shortTitle": "Irresponsabilité & Faits Justificatifs",
    "pages": "Fiches p. 35 à 38",
    "icon": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    "color": "from-amber-600 to-orange-700",
    "badgeClass": "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30"
  },
  {
    "id": "m4",
    "code": "MOD 4",
    "title": "Légitime Défense & Cadre Légal d'Usage des Armes (L. 435-1 CSI)",
    "shortTitle": "Légitime Défense & Armes",
    "pages": "Fiches p. 24 à 29",
    "icon": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    "color": "from-rose-600 to-red-700",
    "badgeClass": "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30"
  },
  {
    "id": "m5",
    "code": "MOD 5",
    "title": "Libertés Publiques, Contrôles & Vérifications d'Identité",
    "shortTitle": "Contrôles & Vérif. d'Identité",
    "pages": "Fiches p. 30 à 34 & 43 à 51",
    "icon": "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
    "color": "from-emerald-600 to-teal-700",
    "badgeClass": "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
  },
  {
    "id": "m6",
    "code": "MOD 6",
    "title": "Les Cadres d'Enquête : Flagrance, Préliminaire, CR & Art. 74",
    "shortTitle": "Cadres d'Enquête (FD, EP, CR)",
    "pages": "Fiches p. 56 à 63",
    "icon": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    "color": "from-cyan-600 to-blue-700",
    "badgeClass": "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30"
  },
  {
    "id": "m7",
    "code": "MOD 7",
    "title": "Code de Déontologie Police & Gendarmerie (Art. R. 434-1 à 24 CSI)",
    "shortTitle": "Code de Déontologie (CSI)",
    "pages": "Art. R. 434-1 à R. 434-24 CSI",
    "icon": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "color": "from-indigo-600 to-slate-800",
    "badgeClass": "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30"
  }
];

export const RANKS: Rank[] = [
  {
    "minPct": 0,
    "minStreak": 0,
    "title": "Élève Gardien de la Paix",
    "appellation": "« Gardien »",
    "corps": "CEA",
    "svgType": "egpx"
  },
  {
    "minPct": 12,
    "minStreak": 5,
    "title": "Gardien de la Paix",
    "appellation": "« Gardien » (2 chevrons blancs)",
    "corps": "CEA",
    "svgType": "gpx"
  },
  {
    "minPct": 25,
    "minStreak": 10,
    "title": "Gardien de la Paix (6e échelon)",
    "appellation": "« Sous-Brigadier » (3 chevrons)",
    "corps": "CEA",
    "svgType": "sbrig"
  },
  {
    "minPct": 40,
    "minStreak": 15,
    "title": "Brigadier-Chef de Police",
    "appellation": "« Brigadier-Chef »",
    "corps": "CEA",
    "svgType": "bchef"
  },
  {
    "minPct": 55,
    "minStreak": 20,
    "title": "Major de Police RULP",
    "appellation": "« Major » (Losange contour blanc)",
    "corps": "CEA",
    "svgType": "major_rulp"
  },
  {
    "minPct": 70,
    "minStreak": 30,
    "title": "Capitaine de Police",
    "appellation": "« Capitaine » (3 galons blancs)",
    "corps": "Commandement",
    "svgType": "capitaine"
  },
  {
    "minPct": 85,
    "minStreak": 40,
    "title": "Commissaire de Police",
    "appellation": "« M. le Commissaire » (5 feuilles, 1 gland)",
    "corps": "Conception & Direction",
    "svgType": "commissaire"
  },
  {
    "minPct": 95,
    "minStreak": 50,
    "title": "Commissaire Général — Major CEE1",
    "appellation": "« M. le Commissaire général » (2 diamants or)",
    "corps": "Conception & Direction",
    "svgType": "commissaire_gen"
  },
  {
    "minPct": 100,
    "minStreak": 60,
    "title": "Chef Délégué Suprême",
    "appellation": "« Chef Délégué Suprême » (Palmes Impériales & 5 Étoiles Diamant Or)",
    "corps": "Haut Commandement Suprême • Légende Absolue CEE1",
    "svgType": "chef_supreme"
  }
];

export const QUESTIONS: Question[] = [
  {
    "id": 1,
    "module": "m1",
    "ref": "Fiche Organisation PN (I - DGPN)",
    "q": "Au sein de la Direction Générale de la Police Nationale (DGPN), lesquelles de ces entités sont dirigées conjointement avec le directeur général de la gendarmerie nationale (DGGN) ?",
    "options": [
      "La D.C.I.S., le S.N.P.S. et l'A.N.F.S.I.",
      "La D.C.I.S., l'A.N.F.S.I. et le S.S.M.S.I.",
      "Le S.N.E.A.S., le S.N.E.A.V. et le S.S.M.S.I.",
      "La D.C.I.S., la D.N.R.T. et l'A.N.F.S.I."
    ],
    "correct": 1,
    "exp": "Seuls la Direction de la coopération internationale de sécurité (D.C.I.S., qui est une direction active de police), l'Agence du numérique des forces de sécurité intérieure (A.N.F.S.I.) et le Service statistique ministériel de la sécurité intérieure (S.S.M.S.I.) sont dirigés conjointement avec le DGGN. Le S.N.P.S. est un service actif de la seule DGPN."
  },
  {
    "id": 2,
    "module": "m1",
    "ref": "Fiche Organigramme DGPN",
    "q": "Dans l'organigramme de la DGPN, auquel de ces pôles est directement rattaché le Service national des enquêtes d'autorisation de voyage (S.N.E.A.V.) ?",
    "options": [
      "À l'État-major de la DGPN.",
      "Au Cabinet du Directeur général de la Police nationale.",
      "À la Direction nationale de la police aux frontières (D.N.P.A.F.).",
      "À la Direction nationale du renseignement territorial (D.N.R.T.)."
    ],
    "correct": 1,
    "exp": "Sur l'organigramme officiel de l'Académie de Police, le S.N.E.A.V. (tout comme la Mission outre-mer, le S.T.N., l'E.N.S.P., l'A.N.D.V. et l'A.N.F.S.I.) dépend du Cabinet, tandis que le S.N.E.A.S. (enquêtes administratives de sécurité) dépend de l'État-major."
  },
  {
    "id": 3,
    "module": "m1",
    "ref": "Fiche Galonnage — Corps de Conception et de Direction",
    "q": "Vous croisez un haut fonctionnaire portant sur ses pattes d'épaule une branche de chêne (9 feuilles et 3 glands) accompagnée de 2 pointes de diamant or. Quel est son grade ou emploi et quelle appellation devez-vous utiliser ?",
    "options": [
      "Contrôleur général — « Monsieur le contrôleur général ».",
      "Commissaire divisionnaire de police — « Monsieur le commissaire divisionnaire ».",
      "Commissaire général de police — « Monsieur le commissaire général ».",
      "Inspecteur général — « Monsieur l'inspecteur général »."
    ],
    "correct": 2,
    "exp": "Les 2 pointes de diamant OR désignent le grade de Commissaire général de police. Le Contrôleur général porte également 2 pointes de diamant, mais elles sont de couleur ARGENT (comme tous les emplois supérieurs de direction : de 2 à 5 diamants argent)."
  },
  {
    "id": 4,
    "module": "m1",
    "ref": "Fiche Galonnage — Corps de Commandement (p. 39)",
    "q": "Un officier du corps de commandement porte 4 galons blancs surmontés d'une pointe de diamant argent. À quoi correspond exactement ce galonnage ?",
    "options": [
      "Au grade de Commandant divisionnaire de police.",
      "À l'emploi de Commandant divisionnaire fonctionnel de police.",
      "Au grade de Commandant de police à l'échelon exceptionnel.",
      "Au grade de Capitaine de police investi des fonctions de chef de service."
    ],
    "correct": 1,
    "exp": "Les 4 galons blancs avec 1 pointe de diamant OR correspondent au grade de Commandant divisionnaire de police, tandis que la pointe de diamant ARGENT identifie l'emploi de Commandant divisionnaire fonctionnel de police (appellation : « Commandant » dans les deux cas)."
  },
  {
    "id": 5,
    "module": "m1",
    "ref": "Fiche Galonnage — Corps d'Encadrement et d'Application",
    "q": "Concernant le galonnage et les appellations du Corps d'Encadrement et d'Application (CEA) et des contractuels, laquelle de ces affirmations est strictement exacte ?",
    "options": [
      "L'appellation « Sous-Brigadier » est réservée aux Gardiens de la paix ayant atteint le 5e échelon et portant 3 chevrons blancs.",
      "Le grade de Major à l'échelon exceptionnel (losange contour or) est supprimé depuis le 1er janvier 2024, et ses anciens détenteurs ont l'obligation de retirer ce galonnage.",
      "Le Policier Adjoint porte une patte d'épaule fond bleu Loire sans galon (appellation « Adjoint »), tandis que le Policier Adjoint Réserviste porte un fond bleu clair sans galon (appellation « Réserviste »).",
      "Le Major de police RULP se distingue par 1 galon blanc avec raie rouge, 1 liseré blanc et un losange au contour or."
    ],
    "correct": 2,
    "exp": "Le Sous-Brigadier correspond au 6e échelon (et non au 5e). L'échelon exceptionnel de Major (losange contour or) est supprimé à compter du 1er janvier 2024, mais les majors qui en étaient détenteurs peuvent néanmoins continuer à porter ce galonnage. Le Major RULP porte un losange contour blanc."
  },
  {
    "id": 40,
    "module": "m1",
    "ref": "Fiche Organisation de la Police Nationale",
    "q": "Quelles sont les trois grandes entités composant la Police nationale au sein desquelles les agents peuvent exercer leurs missions ?",
    "options": [
      "La D.G.P.N., la D.G.G.N. et la D.G.S.I.",
      "La D.G.P.N., la D.N.S.P. et la D.N.P.J.",
      "La direction générale de la police nationale (D.G.P.N.), la direction générale de la sécurité intérieure (D.G.S.I.) et la préfecture de police de Paris (P.P.).",
      "La D.G.P.N., l'I.G.P.N. et la Préfecture de police de Paris (P.P.)."
    ],
    "correct": 2,
    "exp": "La Police nationale comporte trois grandes entités : la D.G.P.N., la D.G.S.I. et la Préfecture de police de Paris (P.P.). La D.N.S.P., la D.N.P.J. et l'I.G.P.N. sont des directions actives rattachées à la D.G.P.N."
  },
  {
    "id": 41,
    "module": "m1",
    "ref": "Fiche Organigramme DGPN",
    "q": "Dans l'organigramme de la DGPN, lesquels de ces services sont rattachés directement à l'État-major (et non au Cabinet) ?",
    "options": [
      "L'École nationale supérieure de la police (E.N.S.P.) et la Mission outre-mer.",
      "Le S.I.C.O.P., la Réserve opérationnelle de la PN, le Médiateur de la PN et le S.N.E.A.S.",
      "L'Agence nationale des données de voyage (A.N.D.V.) et le Service de la transformation numérique (S.T.N.).",
      "Le R.A.I.D. et la Direction des ressources humaines, des finances et des soutiens (D.R.H.F.S.)."
    ],
    "correct": 1,
    "exp": "L'État-major regroupe : le S.I.C.O.P., la Réserve opérationnelle de la PN, le C.S.A.T.E., le Médiateur de la PN, le S.N.E.A.S., Frontière intelligente et le S.S.M.S.I."
  },
  {
    "id": 42,
    "module": "m1",
    "ref": "Fiche Organisation de la Police Nationale",
    "q": "Parmi les structures suivantes placées sous l'autorité du Directeur général de la Police nationale, laquelle n'est PAS classée comme une « direction ou service actif », mais comme une direction d'administration et de soutien ?",
    "options": [
      "L'Académie de police (A.D.P.).",
      "Le Service de la protection (S.D.L.P.).",
      "La Direction des ressources humaines, des finances et des soutiens de la police nationale (D.R.H.F.S.).",
      "Le Service national de police scientifique (S.N.P.S.)."
    ],
    "correct": 2,
    "exp": "La D.R.H.F.S. est listée à part des directions et services actifs. L'A.D.P., le S.D.L.P., le S.N.P.S. et le R.A.I.D. font partie des directions et services actifs de la DGPN."
  },
  {
    "id": 43,
    "module": "m1",
    "ref": "Fiche Galonnage — Corps de Conception et de Direction",
    "q": "Comment distingue-t-on le galonnage d'un Directeur des services actifs de celui d'un Inspecteur général ?",
    "options": [
      "Le Directeur des services actifs porte 4 pointes de diamant or, tandis que l'Inspecteur général porte 3 pointes de diamant or.",
      "Tous deux portent une branche de chêne (9 feuilles et 3 glands), mais le Directeur des services actifs porte 4 pointes de diamant argent (« Monsieur le directeur ») tandis que l'Inspecteur général porte 3 pointes de diamant argent (« Monsieur l'inspecteur général »).",
      "Le Directeur des services actifs porte 5 pointes de diamant argent et l'Inspecteur général en porte 4.",
      "L'Inspecteur général porte une branche de chêne à 7 feuilles et 2 glands avec 3 pointes de diamant argent."
    ],
    "correct": 1,
    "exp": "Dans les emplois de direction (diamants argent + 9 feuilles et 3 glands) : 5 diamants = DGPN ; 4 diamants = Directeur des services actifs ; 3 diamants = Inspecteur général ; 2 diamants = Contrôleur général."
  },
  {
    "id": 44,
    "module": "m1",
    "ref": "Fiche Galonnage — Corps de Conception et de Direction",
    "q": "Quel est le galonnage exact d'un Commissaire divisionnaire de police et celui d'un Élève ou stagiaire commissaire ?",
    "options": [
      "Commissaire divisionnaire : 9 feuilles, 3 glands et 2 barrettes ; Élève commissaire : 5 feuilles et 1 gland sans cordon.",
      "Commissaire divisionnaire : branche de chêne (7 feuilles et 2 glands), 2 barrettes, cordon et rangée de paillettes ; Élève ou stagiaire commissaire : branche de chêne (3 feuilles).",
      "Commissaire divisionnaire : branche de chêne (5 feuilles et 1 gland) et 2 barrettes ; Élève commissaire : 1 alpha or.",
      "Commissaire divisionnaire : 7 feuilles, 2 glands et 1 pointe de diamant or ; Élève commissaire : 3 feuilles et 1 gland."
    ],
    "correct": 1,
    "exp": "Les grades de commissaire : Élève/stagiaire = 3 feuilles ; Commissaire = 5 feuilles, 1 gland et 1 cordon ; Commissaire divisionnaire = 7 feuilles, 2 glands, 2 barrettes, cordon et rangée de paillettes ; Commissaire général = 9 feuilles, 3 glands et 2 pointes de diamant or."
  },
  {
    "id": 45,
    "module": "m1",
    "ref": "Fiche Galonnage — Corps de Commandement (p. 39)",
    "q": "Dans le corps de commandement, quel galonnage et quelle appellation porte un Capitaine de police pendant les 4 années suivant sa titularisation ?",
    "options": [
      "3 galons blancs et l'appellation « Capitaine ».",
      "2 galons blancs et l'appellation « Capitaine ».",
      "2 galons blancs et l'appellation « Lieutenant ».",
      "1 galon blanc et l'appellation « Lieutenant »."
    ],
    "correct": 2,
    "exp": "Bien que son grade soit Capitaine de police, il porte l'appellation « Lieutenant » avec : 1 alpha blanc (élève 6 premiers mois), 1 galon blanc (stagiaire jusqu'à la fin de la scolarité), puis 2 galons blancs pendant 4 ans après titularisation."
  },
  {
    "id": 46,
    "module": "m1",
    "ref": "Fiche Galonnage — Corps d'Encadrement et d'Application",
    "q": "Quelle est la différence exacte de galonnage entre un Brigadier-chef de police, un Major de police et un Major de police RULP ?",
    "options": [
      "Le Brigadier-chef porte 3 chevrons blancs ; le Major porte 1 galon blanc à raie rouge ; le Major RULP ajoute un liseré blanc.",
      "Le Brigadier-chef porte 1 galon blanc avec raie rouge ; le Major ajoute 1 liseré blanc ; le Major RULP ajoute en plus un losange au contour blanc.",
      "Le Brigadier-chef porte 1 galon blanc avec liseré rouge ; le Major ajoute un losange blanc ; le Major RULP porte un losange or.",
      "Tous trois portent 1 galon blanc avec raie rouge et 1 liseré blanc, seul le losange changeant de couleur."
    ],
    "correct": 1,
    "exp": "Brigadier-chef = 1 galon blanc avec raie rouge. Major = 1 galon blanc avec raie rouge + 1 liseré blanc. Major RULP = 1 galon blanc avec raie rouge + 1 liseré blanc + losange contour blanc."
  },
  {
    "id": 47,
    "module": "m1",
    "ref": "Fiches Galonnage (En-têtes et Réserve)",
    "q": "Comment varient la couleur des pattes d'épaules et des manchons selon la direction d'emploi, et quel galonnage portent les retraités des corps actifs engagés dans la réserve ?",
    "options": [
      "Bleu clair pour la D.N.P.A.F., bleu police pour les autres ; les retraités réservistes portent un fond bleu clair sans galon.",
      "Bleu CRS pour la D.C.C.R.S. et bleu police pour les autres directions ; par ailleurs, les retraités des corps actifs de la P.N. conservent dans la réserve le grade qu'ils détenaient en activité.",
      "Bleu Loire pour toute la Police nationale ; les retraités réservistes portent tous le galon de Gardien de la paix.",
      "Bleu CRS pour la D.C.C.R.S. et la D.N.S.P. ; les retraités réservistes perdent leur galonnage au profit d'un insigne spécifique."
    ],
    "correct": 1,
    "exp": "La couleur des pattes d'épaules et des manchons varie : D.C.C.R.S. (bleu CRS), autres directions (bleu police). Par ailleurs, contrairement aux Policiers Adjoints Réservistes (fond bleu clair sans galon), les retraités des corps actifs de la P.N. conservent le grade qu'ils détenaient en activité."
  },
  {
    "id": 6,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Sur le plan des éléments constitutifs de l'infraction, laquelle de ces propositions est juridiquement exacte ?",
    "options": [
      "Les crimes, les délits et les contraventions de 5e classe sont définis par la loi, tandis que les contraventions des 4 premières classes relèvent du règlement.",
      "Dans le Code pénal, l'article 311-1 réprime le vol tandis que l'article 311-3 le définit.",
      "L'infraction de commission exige la réunion de trois conditions matérielles : une action physique du coupable, un résultat, et un lien de causalité entre l'action et le résultat.",
      "L'article 121-3 alinéa 1 du Code pénal dispose qu'il n'y a point de crime, de délit ou de contravention sans intention de le commettre."
    ],
    "correct": 2,
    "exp": "1) Toutes les contraventions sont prévues par des règlements (décrets, arrêtés), seuls les crimes et délits sont prévus par des lois. 2) L'art. 311-1 CP définit le vol et l'art. 311-3 CP le réprime. 3) L'art. 121-3 al. 1 CP ne mentionne que les crimes et délits (« il n'y a point de crime ou de délit sans intention de le commettre »)."
  },
  {
    "id": 7,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "Un individu achète un pied-de-biche ainsi qu'une arme de poing de catégorie B (sans autorisation) dans le but d'aller assassiner son rival. Sur le trajet, pris de remords avant d'arriver sur les lieux, il fait demi-tour. Qu'encourt-il pénalement ?",
    "options": [
      "Il est punissable pour tentative d'assassinat car l'achat de l'arme caractérise sans équivoque son intention criminelle.",
      "Il bénéficie d'une impunité totale grâce à son désistement volontaire intervenu avant tout commencement d'exécution.",
      "Il n'est pas punissable pour tentative de meurtre (acte préparatoire), mais il peut être réprimé au titre de l'infraction distincte de détention d'arme prohibée.",
      "Il est punissable pour infraction manquée, assimilée par l'article 121-5 du Code pénal à la tentative."
    ],
    "correct": 2,
    "exp": "L'achat ne constitue qu'un acte préparatoire non punissable au titre de la tentative (pas de commencement d'exécution). Toutefois, comme le précise le NOTA de la fiche p. 19, les auteurs d'actes préparatoires peuvent être réprimés à titre d'infractions distinctes (ici : détention d'arme de catégorie B prohibée)."
  },
  {
    "id": 8,
    "module": "m2",
    "ref": "Fiche La Tentative Infructueuse (p. 20)",
    "q": "Un individu tire sur son ennemi allongé dans son lit avec l'intention de le tuer. L'autopsie révèle que la victime était déjà décédée deux heures avant le tir. Comment qualifie-t-on juridiquement cet acte et quelle en est la conséquence pénale ?",
    "options": [
      "C'est une infraction putative, non punissable faute d'élément matériel (absence de vie au moment du tir).",
      "C'est une infraction manquée, punie de la moitié de la peine encourue pour le crime tenté.",
      "C'est une infraction impossible (variante de la tentative infructueuse), punie exactement comme l'infraction tentée.",
      "C'est un délit d'atteinte à l'intégrité d'un cadavre uniquement, la tentative de meurtre étant juridiquement écartée."
    ],
    "correct": 2,
    "exp": "Dans l'infraction impossible, le résultat ne pouvait exister du fait d'une impossibilité ignorée de l'auteur au moment des faits (coup de feu tiré à blanc, tir sur un mort croyant tuer un vivant, pickpocket plongeant la main dans une poche vide). L'infraction impossible est punie comme l'infraction tentée."
  },
  {
    "id": 9,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21)",
    "q": "En matière de complicité d'une contravention, quelle est la règle exacte posée par le Code pénal ?",
    "options": [
      "La complicité n'est jamais punissable en matière contraventionnelle, quels qu'en soient les moyens.",
      "Le complice par instigation (provocation ou instructions) est toujours punissable (art. R. 610-2 CP), tandis que le complice par aide ou assistance ne l'est que si le règlement le prévoit expressément.",
      "Le complice par aide ou assistance est toujours punissable, tandis que la complicité par provocation ne l'est que pour les contraventions de 5e classe.",
      "La complicité contraventionnelle est punissable dans tous les cas dès lors qu'il existe un fait principal punissable."
    ],
    "correct": 1,
    "exp": "En matière contraventionnelle : le complice par aide ou assistance n'est puni que lorsque le règlement le prévoit expressément. En revanche, le complice par instigation (celui qui provoque à une infraction ou donne des instructions) est toujours punissable (art. R. 610-2 C.P.)."
  },
  {
    "id": 10,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 22 & 23)",
    "q": "Pour que la complicité par provocation (art. 121-7 CP) soit pénalement retenue, quelles conditions cumulatives doivent impérativement être réunies ?",
    "options": [
      "Un simple conseil donné à une personne déterminée, suivi d'une tentative ou d'une réalisation de l'infraction.",
      "Une incitation publique ou privée accompagnée de don ou menace, même si l'auteur principal renonce avant tout commencement d'exécution.",
      "Une provocation accompagnée de circonstances précises (don, promesse, ordre, menace, abus d'autorité ou de pouvoir), individuelle (adressée à une personne déterminée) et suivie d'effets (infraction réalisée ou au moins tentée).",
      "La fourniture d'indications générales sans obligation que l'infraction principale soit tentée."
    ],
    "correct": 2,
    "exp": "Le simple conseil donné n'entraîne pas la complicité. La provocation doit être accompagnée de don, promesse, ordre, menace, abus d'autorité ou de pouvoir, être individuelle et suivie d'effets (sauf infraction autonome spéciale comme la provocation à la rébellion de l'art. 433-10 C.P.)."
  },
  {
    "id": 11,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21)",
    "q": "Un complice fournit une arme à un individu pour commettre un braquage. L'auteur principal est ensuite déclaré pénalement irresponsable pour abolition du discernement (art. 122-1 CP). Le complice peut-il être condamné ?",
    "options": [
      "Non, en vertu du principe de l'emprunt de criminalité, si l'auteur principal n'est pas puni, le complice ne peut jamais l'être.",
      "Oui, car l'existence d'un fait principal punissable (acte contraire à la loi) suffit, ce qui n'induit pas obligatoirement que l'auteur même de l'acte soit personnellement puni.",
      "Non, sauf si le complice était physiquement présent sur les lieux au moment des faits (coauteur).",
      "Oui, mais sa peine est obligatoirement réduite de moitié en raison de l'irresponsabilité de l'auteur principal."
    ],
    "correct": 1,
    "exp": "La fiche p. 21 précise : « L'existence d'un fait principal punissable est une condition indispensable à la répression de la complicité, ce qui n'induit pas obligatoirement que l'auteur même de l'acte soit puni. » Il suffit que l'auteur ait commis un acte objectivement contraire à la loi."
  },
  {
    "id": 48,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Comment se définit juridiquement l'infraction et quelle est la différence entre une infraction de commission et une infraction d'omission ?",
    "options": [
      "L'infraction est uniquement une action positive contraire à la morale et punie d'une peine d'emprisonnement.",
      "L'infraction est toute action ou omission contraire à l'ordre social, prévue et réprimée par la loi et exposant son auteur à une peine ou une mesure de sûreté ; il y a commission lorsque l'individu commet un acte interdit par la loi et omission lorsqu'il ne fait pas ce que la loi ordonne.",
      "L'infraction d'omission ne nécessite ni élément légal ni élément moral pour être constituée.",
      "L'infraction de commission ne requiert pas de lien de causalité entre l'action physique et le résultat."
    ],
    "correct": 1,
    "exp": "L'infraction expose son auteur à une peine ou une mesure de sûreté et réunit toujours trois éléments (légal, matériel, moral). Elle est dite de commission (acte interdit, ex. vol) ou d'omission (inaction face à une obligation légale d'agir, ex. omission de porter secours)."
  },
  {
    "id": 49,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "Selon l'article 121-4 du Code pénal, dans quels cas la tentative est-elle punissable selon la classification tripartite des infractions ?",
    "options": [
      "Toujours pour les crimes et les délits, et dans les cas prévus par le règlement pour les contraventions de 5e classe.",
      "Toujours pour les crimes, uniquement dans les cas prévus par la loi pour les délits, et jamais pour les contraventions.",
      "Uniquement dans les cas expressément prévus par la loi, qu'il s'agisse d'un crime ou d'un délit.",
      "Toujours pour les crimes, les délits et les contraventions dès lors qu'il y a un commencement d'exécution."
    ],
    "correct": 1,
    "exp": "L'article 121-4 du Code pénal dispose que l'auteur est la personne qui commet les faits incriminés ou qui tente de commettre un crime ou, dans les cas prévus par la loi, un délit."
  },
  {
    "id": 50,
    "module": "m2",
    "ref": "Fiche La Tentative (p. 20 haut)",
    "q": "Des policiers observent un individu muni d'un pied-de-biche qui s'apprête à agresser physiquement un passant, mais qui n'a pas encore entamé son commencement d'exécution. Quelle conduite doivent-ils adopter selon le cours ?",
    "options": [
      "Ils ont l'obligation d'attendre le premier coup porté (commencement d'exécution) pour pouvoir intervenir légalement.",
      "Dès lors que l'intégrité corporelle des personnes est mise en danger, l'intervention de la force publique doit être mise en œuvre avant tout commencement d'exécution (qualité de discernement).",
      "Ils ne peuvent procéder qu'à un simple relevé d'identité contraventionnel au titre de l'article 78-6 du CPP.",
      "Ils peuvent l'interpeller pour tentative de violences volontaires car l'acte préparatoire devient punissable dès qu'un policier le constate."
    ],
    "correct": 1,
    "exp": "La fiche p. 20 souligne expressément : « en revanche, si l'intégrité corporelle des personnes est mise en danger, l'intervention de la force publique doit être mise en œuvre avant tout commencement d'exécution. On notera la qualité de discernement à laquelle il est fait appel à propos de la tentative. »"
  },
  {
    "id": 51,
    "module": "m2",
    "ref": "Fiche La Tentative Infructueuse (p. 20)",
    "q": "Quelle est la différence exacte entre « l'infraction manquée » et « l'infraction impossible » au sein de la tentative infructueuse ?",
    "options": [
      "L'infraction manquée est punie comme l'infraction tentée, tandis que l'infraction impossible entraîne une exemption de peine.",
      "L'infraction manquée suppose une exécution complète qui échoue par maladresse de l'auteur (ex. rater sa cible au tir), tandis que dans l'infraction impossible, le résultat ne pouvait exister du fait d'une impossibilité ignorée de l'auteur au moment des faits ; toutes deux sont punies comme l'infraction tentée.",
      "L'infraction impossible suppose un désistement volontaire de dernière seconde de la part de l'auteur.",
      "L'infraction manquée ne s'applique qu'aux délits contre les biens et l'infraction impossible uniquement aux crimes contre les personnes."
    ],
    "correct": 1,
    "exp": "La tentative infructueuse recouvre ces deux hypothèses (infraction manquée par maladresse et infraction impossible par impossibilité ignorée de l'auteur). Dans les deux cas, l'auteur est puni comme pour l'infraction tentée (art. 121-5 C.P.)."
  },
  {
    "id": 52,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21)",
    "q": "Comment le droit pénal et la jurisprudence distinguent-ils le « coauteur » du « complice » ?",
    "options": [
      "Le complice encourt la moitié de la peine du coauteur.",
      "Le coauteur est celui qui réalise tous les éléments constitutifs de l'infraction, mais la jurisprudence étend toutefois cette qualité à celui qui a juste apporté son aide ou assistance mais qui est présent au moment des faits.",
      "Le coauteur est celui qui finance l'infraction à distance, tandis que le complice est celui qui exécute matériellement l'acte.",
      "Il n'existe aucune distinction entre coauteur et complice, même lorsque l'individu aide uniquement à la préparation plusieurs jours avant les faits."
    ],
    "correct": 1,
    "exp": "L'introduction de la fiche p. 21 précise : « Le coauteur est celui qui réalise tous les éléments constitutifs de l'infraction. La jurisprudence étend toutefois cette qualité à celui qui a juste apporté son aide ou assistance mais qui est présent au moment des faits. »"
  },
  {
    "id": 53,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 22)",
    "q": "Un passager à bord d'une voiture donne l'ordre au conducteur de forcer un barrage routier constitué par un véhicule de gendarmerie. Quelle est la situation pénale du passager (Cass. crim. 18 mars 2003) ?",
    "options": [
      "Il est simple témoin passif car seul le conducteur qui tient le volant maîtrise le véhicule.",
      "Il est complice par fourniture d'instructions techniques.",
      "Il doit être considéré comme complice par provocation (auteur moral ayant donné l'ordre de commettre l'infraction).",
      "Il est uniquement poursuivable pour non-empêchement de délit."
    ],
    "correct": 2,
    "exp": "C'est l'arrêt de la Chambre criminelle du 18 mars 2003 cité page 22 : « Doit être considéré comme complice par provocation le passager d'un véhicule ayant donné l'ordre au conducteur de forcer le barrage constitué par un véhicule de gendarmerie »."
  },
  {
    "id": 54,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21 & 22)",
    "q": "Un individu joue volontairement de la musique pour qu'on n'entende pas les cris de la personne que son complice est en train d'assassiner. De quel mode de complicité relève cet acte ?",
    "options": [
      "Complicité par fourniture d'instructions.",
      "Complicité par provocation.",
      "Complicité par aide ou assistance (concours apporté à l'auteur principal au moment de la réalisation de l'infraction).",
      "Il ne s'agit pas de complicité criminelle, mais uniquement d'une contravention pour tapage sonore."
    ],
    "correct": 2,
    "exp": "Cet exemple figure en haut de la page 22 au titre de la complicité par aide ou assistance : outre la fourniture de moyens matériels (arme, poison), il peut s'agir d'un concours apporté à l'auteur principal au moment de la préparation ou de la réalisation."
  },
  {
    "id": 12,
    "module": "m3",
    "ref": "Fiche Responsabilité Pénale — La Minorité (p. 35)",
    "q": "Concernant la responsabilité pénale des mineurs (art. 122-8 CP et L. 11-1 CJPM), laquelle de ces affirmations est exacte ?",
    "options": [
      "La capacité de discernement du mineur relève de l'appréciation souveraine de l'officier de police judiciaire lors de la garde à vue.",
      "La présomption de non-discernement des mineurs de moins de 13 ans interdit formellement aux services de police de les entendre en audition libre.",
      "Le mineur de 11 ans peut faire l'objet d'une retenue ainsi que d'une mesure éducative judiciaire imposant une obligation ou une interdiction (ex. interdiction d'entrer en contact avec la victime).",
      "Le mineur de 12 ans reconnu coupable d'un crime peut faire l'objet d'une peine d'emprisonnement diminuée de moitié si sa personnalité l'exige."
    ],
    "correct": 2,
    "exp": "1) Le discernement relève du magistrat et non de l'enquêteur. 2) Les mineurs de moins de 13 ans peuvent être entendus en audition libre ou, de 10 à 13 ans, placés en retenue. 3) Jusqu'à 13 ans : uniquement des mesures éducatives (aucune peine), et dès plus de 10 ans, ces mesures peuvent imposer une obligation ou une interdiction."
  },
  {
    "id": 13,
    "module": "m3",
    "ref": "Fiche Trouble Psychique (p. 36)",
    "q": "Un individu consomme volontairement des stupéfiants et de l'alcool dans un temps très voisin de l'action dans le but de commettre un délit. Au moment des faits, son discernement est totalement aboli. Est-il pénalement irresponsable (art. 122-1 CP) ?",
    "options": [
      "Oui, car l'abolition totale du discernement au moment des faits entraîne automatiquement l'irresponsabilité pénale, quelle qu'en soit l'origine.",
      "Non, sa responsabilité pénale peut néanmoins être retenue car l'abolition temporaire résulte d'une consommation volontaire de substances psychoactives dans un temps très voisin de l'action, dans le but de commettre l'infraction ou d'en faciliter la commission (art. 122-1-1 CP).",
      "Oui, il est irresponsable pour le délit principal, mais sera uniquement condamné pour usage illicite de stupéfiants.",
      "Non, car l'article 122-1 du Code pénal ne s'applique jamais aux troubles temporaires."
    ],
    "correct": 1,
    "exp": "C'est l'exception prévue aux articles 122-1-1 et 122-1-2 du Code pénal (fiche p. 36) : la responsabilité pénale peut néanmoins être retenue lorsque l'abolition ou l'altération temporaire résulte de la consommation volontaire de substances psychoactives dans un temps très voisin de l'action dans le but de commettre ou faciliter un crime ou un délit."
  },
  {
    "id": 14,
    "module": "m3",
    "ref": "Fiche Contrainte et Erreur de Droit (p. 36)",
    "q": "Quelles sont les caractéristiques exactes de la contrainte (art. 122-2 CP) et de l'erreur de droit (art. 122-3 CP) comme causes d'irresponsabilité pénale ?",
    "options": [
      "La contrainte physique résulte d'une force matérielle irrésistible, même si elle était parfaitement prévisible par l'auteur.",
      "L'erreur de droit est admise dès lors que le citoyen prouve sa bonne foi en démontrant qu'il ignorait l'existence du texte de loi.",
      "La contrainte physique exige une force matérielle irrésistible et imprévisible, tandis que l'erreur de droit exige que l'auteur n'ait pas été en mesure de l'éviter (ex. information erronée fournie préalablement par l'administration interrogée ou défaut de publication du texte).",
      "La contrainte morale n'est jamais reconnue par le Code pénal, seule la contrainte physique anéantissant la responsabilité."
    ],
    "correct": 2,
    "exp": "La contrainte physique exige une force matérielle irrésistible ET imprévisible (la contrainte morale résulte d'une crainte inspirée avec une force irrésistible). L'erreur de droit (art. 122-3 CP) exige que l'auteur n'ait pas été en mesure de l'éviter (information erronée de l'administration ou défaut de publication)."
  },
  {
    "id": 15,
    "module": "m3",
    "ref": "Fiche État de Nécessité (p. 37)",
    "q": "Un particulier pénètre dans le jardin de son voisin par bris de clôture pour combattre plus efficacement l'incendie qui ravage un immeuble (état de nécessité, art. 122-7 CP). Quelles sont les conséquences juridiques de son acte ?",
    "options": [
      "Sa responsabilité pénale est maintenue avec dispense de peine, et il est exonéré de toute réparation civile envers le voisin.",
      "Il bénéficie d'une absence totale de responsabilité pénale, mais au plan civil, il peut être tenu d'indemniser la victime (le voisin) qui n'est pas responsable des conditions ayant poussé à l'acte.",
      "Il bénéficie d'une irresponsabilité pénale et civile totale.",
      "Sa responsabilité est administrative, au même titre qu'un policier ou un pompier brisant une porte par nécessité."
    ],
    "correct": 1,
    "exp": "L'état de nécessité entraîne l'absence de toute responsabilité pénale. Toutefois, au plan civil, l'auteur de l'infraction peut être tenu d'indemniser la victime innocente (tandis que s'il s'agit d'un pompier ou d'un policier brisant une porte d'habitation par nécessité, la responsabilité sera administrative)."
  },
  {
    "id": 16,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (p. 38)",
    "q": "Concernant le fait justificatif du lanceur d'alerte (art. 122-9 CP et loi du 9 décembre 2016), dans lequel de ces cas la personne bénéficie-t-elle de l'irresponsabilité pénale ?",
    "options": [
      "Une personne morale (association) qui divulgue contre rémunération un délit fiscal dont elle a eu connaissance par un tiers.",
      "Un agent public qui divulgue des documents couverts par le secret de la défense nationale pour dénoncer un dysfonctionnement militaire grave.",
      "Une personne physique qui, de manière désintéressée et de bonne foi, soustrait, détourne ou recèle des documents contenant des informations dont elle a eu connaissance de manière licite pour signaler un crime ou un délit dans les conditions légales.",
      "Un professionnel de santé qui révèle publiquement un dossier couvert par le secret médical."
    ],
    "correct": 2,
    "exp": "Le lanceur d'alerte doit être une personne physique, désintéressée et de bonne foi, ayant eu personnellement et licitement connaissance des faits (l'art. 122-9 al. 2 CP couvre aussi la soustraction, le détournement ou le recel des documents supports). Sont formellement exclus : le secret de la défense nationale, le secret médical et le secret des relations avocat-client."
  },
  {
    "id": 55,
    "module": "m3",
    "ref": "Fiche La Responsabilité Pénale (p. 35)",
    "q": "Selon l'article 121-1 du Code pénal et l'introduction de votre cours sur la responsabilité pénale, laquelle de ces propositions est exacte ?",
    "options": [
      "La responsabilité pénale constitue le quatrième élément constitutif général de l'infraction.",
      "Seules les personnes physiques peuvent être pénalement responsables, à l'exclusion des personnes morales.",
      "Nul n'est responsable que de son propre fait (personne physique ou morale) ; la responsabilité n'est pas un élément de l'infraction, elle en est l'effet et la conséquence juridique.",
      "Les causes d'irresponsabilité pénale ne peuvent résulter que de la personnalité de l'auteur et jamais des circonstances de commission de l'infraction."
    ],
    "correct": 2,
    "exp": "La fiche p. 35 souligne en vert : « Elle n'est donc pas un élément de l'infraction, elle en est l'effet et la conséquence juridique. » Par ailleurs, l'irresponsabilité peut résulter de circonstances relatives à la commission de l'infraction (faits justificatifs) ou à la personnalité de l'auteur."
  },
  {
    "id": 56,
    "module": "m3",
    "ref": "Fiche La Minorité (p. 35)",
    "q": "Quelle est la différence de traitement pénal entre un mineur de moins de 13 ans et un mineur de plus de 13 ans lorsqu'ils sont reconnus coupables d'une infraction ?",
    "options": [
      "Le mineur de moins de 13 ans ne peut faire l'objet d'aucune réponse judiciaire, tandis que le mineur de plus de 13 ans encourt les mêmes peines qu'un majeur.",
      "Jusqu'à 13 ans, le mineur ne peut faire l'objet que de mesures éducatives (avertissement judiciaire ou mesure éducative judiciaire) ; le mineur de plus de 13 ans peut faire l'objet de mesures éducatives et, si les circonstances et sa personnalité l'exigent, de peines diminuées.",
      "Dès 10 ans, le mineur peut être condamné à une peine d'amende ou de travail d'intérêt général.",
      "La présomption de discernement ne s'applique qu'à partir de 16 ans révolus."
    ],
    "correct": 1,
    "exp": "Jusqu'à 13 ans (présomption de non-discernement), seules des mesures éducatives sont possibles. À partir de 13 ans (présomption de discernement), le mineur peut faire l'objet de mesures éducatives et, si les circonstances et sa personnalité l'exigent, de peines (les peines encourues étant diminuées)."
  },
  {
    "id": 57,
    "module": "m3",
    "ref": "Fiche Trouble Psychique (p. 36)",
    "q": "Au moment des faits, un individu est atteint d'un trouble psychique ayant simplement « altéré » son discernement ou « entravé » le contrôle de ses actes. Quelle en est la conséquence selon l'article 122-1 al. 2 du Code pénal ?",
    "options": [
      "Il bénéficie d'une irresponsabilité pénale totale.",
      "Cet état n'exclut pas la sanction pénale, mais la responsabilité pénale peut être atténuée par la juridiction.",
      "Sa peine est automatiquement doublée en raison de sa dangerosité.",
      "Il relève exclusivement du juge des enfants."
    ],
    "correct": 1,
    "exp": "Contrairement à l'abolition totale du discernement (qui entraîne l'irresponsabilité pénale), la simple altération du discernement n'exclut pas la sanction pénale, mais la responsabilité pénale peut être atténuée par la juridiction."
  },
  {
    "id": 58,
    "module": "m3",
    "ref": "Fiche Les Faits Justificatifs (p. 37)",
    "q": "Parmi les situations suivantes, laquelle illustre « l'acte prescrit ou autorisé par des dispositions législatives et réglementaires » (art. 122-4 al. 1 CP) et quelle est la limite du « commandement de l'autorité légitime » (art. 122-4 al. 2 CP) ?",
    "options": [
      "Le pompier brisant une clôture relève de l'art. 122-4 al. 1 CP ; le commandement de l'autorité légitime justifie tous les ordres sans exception.",
      "Le médecin à qui la loi impose de déclarer certaines maladies contagieuses n'est pas punissable de violation du secret professionnel (art. 122-4 al. 1 CP) ; concernant le commandement de l'autorité légitime (art. 122-4 al. 2 CP), il n'y a pas de justification lorsque l'ordre est manifestement illégal.",
      "L'usage de la force en maintien de l'ordre relève de l'état de nécessité ; le médecin relève du statut de lanceur d'alerte.",
      "Seul un ordre écrit du procureur de la République constitue un fait justificatif au titre de l'article 122-4 du Code pénal."
    ],
    "correct": 1,
    "exp": "La fiche p. 37 cite le médecin déclarant une maladie contagieuse pour l'art. 122-4 al. 1 CP, et l'utilisation de la force en maintien de l'ordre lors d'une manifestation interdite pour l'art. 122-4 al. 2 CP, en soulignant qu'il n'y a pas de justification lorsque l'ordre est manifestement illégal."
  },
  {
    "id": 59,
    "module": "m3",
    "ref": "Fiche État de Nécessité (p. 37)",
    "q": "Quelles sont les trois conditions cumulatives exigées pour que soit accepté l'état de nécessité (art. 122-7 CP) ?",
    "options": [
      "Une agression injuste, une riposte simultanée et l'absence d'homicide volontaire.",
      "L'existence d'un danger actuel ou imminent menaçant une personne ou un bien, la nécessité de commettre une infraction pour sauvegarder cette personne ou ce bien, et des moyens employés non disproportionnés par rapport à la gravité de la menace.",
      "Une autorisation préalable du procureur de la République, un péril grave et l'indemnisation immédiate de la victime.",
      "Une force physique imprévisible supprimant toute volonté de l'auteur."
    ],
    "correct": 1,
    "exp": "Les 3 éléments surlignés sur la fiche p. 37 sont : 1) danger actuel ou imminent menaçant une personne ou un bien ; 2) nécessité de commettre une infraction pour sauvegarder cette personne ou ce bien ; 3) moyens employés non disproportionnés par rapport à la gravité de la menace."
  },
  {
    "id": 60,
    "module": "m3",
    "ref": "Fiche État de Nécessité (p. 38 haut)",
    "q": "En cas de pénétration dans une habitation par un pompier ou un policier avec bris de porte par nécessité (art. 122-7 CP), de quelle nature sera la responsabilité pour les dommages matériels causés ?",
    "options": [
      "Responsabilité civile personnelle de l'agent ayant fracturé la porte.",
      "Responsabilité administrative.",
      "Responsabilité pénale atténuée.",
      "Aucune responsabilité ni indemnisation possible."
    ],
    "correct": 1,
    "exp": "En haut de la fiche p. 38, il est expressément indiqué : « En cas de pénétration dans une habitation par un pompier ou un policier, la responsabilité sera administrative s'il y a bris de porte par nécessité (ou autres dommages). »"
  },
  {
    "id": 61,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (p. 38)",
    "q": "Quelle est la procédure de signalement qu'un lanceur d'alerte doit respecter (loi du 9 décembre 2016 et arrêté du 8 janvier 2024 pour le ministère de l'Intérieur) et qu'encourt-il en cas d'alerte abusive de mauvaise foi ?",
    "options": [
      "Il doit saisir directement les médias ; en cas de mensonge, il n'encourt qu'un avertissement.",
      "L'alerte doit être adressée au supérieur hiérarchique direct ou indirect, à l'employeur ou au référent désigné (et seulement en l'absence de diligences dans un délai raisonnable, à l'autorité judiciaire, administrative ou à l'ordre professionnel), ou au Défenseur des droits ; l'alerte dépassant le cadre défini expose notamment au délit de dénonciation calomnieuse (art. 226-10 CP).",
      "Il doit obligatoirement saisir le juge d'instruction avant toute démarche interne.",
      "Les agents du ministère de l'Intérieur ont l'interdiction d'être lanceurs d'alerte."
    ],
    "correct": 1,
    "exp": "La fiche p. 38 détaille la procédure interne préalable (et l'arrêté du 8 janvier 2024 propre au ministère de l'Intérieur), la possibilité de saisir le Défenseur des droits, et la sanction pénale en cas de dépassement : la dénonciation calomnieuse de l'article 226-10 du Code pénal."
  },
  {
    "id": 17,
    "module": "m4",
    "ref": "Fiches Légitime Défense des Biens & Cas Présumés (p. 25 & 26)",
    "q": "Surpris en pleine nuit par le propriétaire d'un entrepôt commercial inhabité, un cambrioleur non armé s'enfuit sans violence avec un carton. Le propriétaire tire pour interrompre le vol. Quelle est sa situation au regard de la légitime défense ?",
    "options": [
      "Il bénéficie de la présomption de légitime défense de l'article 122-6 du Code pénal car les faits se déroulent de nuit avec effraction.",
      "Il relève de la légitime défense des biens (art. 122-5 al. 2 CP) à condition que son acte soit autre qu'un homicide volontaire, strictement nécessaire et proportionné (charge de la preuve pesant sur lui).",
      "Il ne peut jamais invoquer la légitime défense des biens car celle-ci ne couvre que les crimes contre les biens et non les délits.",
      "Il bénéficie de la présomption du 2e cas de l'article 122-6 CP qui vise tous les vols commis de jour comme de nuit."
    ],
    "correct": 1,
    "exp": "La présomption de l'art. 122-6 CP ne s'applique pas : le 1er cas exige une entrée de nuit dans un LIEU HABITÉ (maison ou appartement habités), et le 2e cas exige des vols ou pillages exécutés AVEC VIOLENCES. Il relève donc de l'art. 122-5 al. 2 CP (défense d'un bien contre un crime ou un délit : acte strictement nécessaire, autre qu'un homicide volontaire, proportionné)."
  },
  {
    "id": 18,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Un Policier Adjoint (PA) qui a terminé son service rentre chez lui en civil. Peut-il invoquer le cadre spécifique d'usage des armes de l'article L. 435-1 du Code de la sécurité intérieure ?",
    "options": [
      "Oui, s'il porte son brassard Police et intervient pour porter assistance à une personne en danger conformément à l'article R. 434-19 du CSI.",
      "Non, contrairement aux fonctionnaires actifs de la PN, les dispositions de l'article L. 435-1 du CSI ne peuvent se concevoir hors service pour les policiers adjoints car ils ne sont pas autorisés à conserver leur arme individuelle en dehors des heures de service (art. R. 411-7 CSI et 134-4 RGEPN).",
      "Oui, dès lors que son chef de service l'a exceptionnellement autorisé à travailler en tenue civile au cours de la semaine.",
      "Non, car l'article L. 435-1 du CSI ne s'applique jamais aux policiers adjoints, même pendant leurs heures de service."
    ],
    "correct": 1,
    "exp": "Si l'article L. 435-1 CSI s'applique bien aux policiers adjoints et réservistes pendant leur service, le NOTA de la fiche p. 27 précise qu'il ne peut se concevoir hors service pour les policiers adjoints car ils ne sont pas autorisés à conserver leur arme individuelle en dehors des heures de service (art. R. 411-7 CSI et 134-4 RGEPN)."
  },
  {
    "id": 19,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 28 haut)",
    "q": "Un policier en service mais en tenue civile intervient en urgence face à un individu qui tente de le poignarder. Dans la précipitation, il n'a pas le temps de mettre son brassard avant de faire feu. Sur quel fondement juridique son tir peut-il être justifié ?",
    "options": [
      "Sur le fondement de l'article L. 435-1 1° du CSI, car l'imminence de l'atteinte dispense du port des insignes extérieurs et apparents.",
      "Sur aucun fondement légal, l'absence de brassard entraînant automatiquement une condamnation pénale.",
      "Sur le fondement des dispositions de l'article 122-5 du Code pénal (légitime défense), qui peuvent être invoquées dès lors qu'une des conditions préalables de l'art. L. 435-1 CSI n'est pas remplie.",
      "Sur le fondement de l'article L. 211-9 du CSI relatif aux attroupements."
    ],
    "correct": 2,
    "exp": "En haut de la page 28, le cours précise expressément : « Dans l'hypothèse où l'une des conditions préalables posées par l'art. L. 435-1 C.S.I. ne serait pas remplie, les dispositions de l'art. 122-5 C.P. peuvent être invoquées par les policiers, dès lors qu'ils ont agi en état de légitime défense (ex : le policier intervient dans l'exercice de ses fonctions sans être porteur des insignes extérieurs et apparents de sa qualité). »"
  },
  {
    "id": 20,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 28 & 29)",
    "q": "Dans lesquelles des cinq situations prévues par l'article L. 435-1 du CSI le policier a-t-il l'obligation légale de procéder à deux sommations faites à haute voix (« Halte police », puis « Halte ou je fais feu ») avant d'utiliser son arme ?",
    "options": [
      "Dans les situations 1°, 2° et 3°.",
      "Uniquement dans les situations 2° (défense des lieux occupés ou des personnes confiées) et 3° (fuite d'un individu dangereux placé sous leur garde).",
      "Dans les situations 2°, 3° et 4° (immobilisation d'un véhicule).",
      "Dans toutes les situations de l'article L. 435-1 du CSI à l'exception du 5° (périple meurtrier)."
    ],
    "correct": 1,
    "exp": "Les deux sommations à haute voix (« Halte police », et si l'individu n'obtempère pas « Halte ou je fais feu ») sont obligatoires uniquement dans les cas 2° et 3° de l'article L. 435-1 du CSI."
  },
  {
    "id": 21,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 28 & 29 haut)",
    "q": "Un individu placé en garde à vue pour vol simple profite d'un transfert au tribunal pour s'enfuir en courant. Malgré deux sommations à haute voix, les policiers distancés ne peuvent l'arrêter autrement. Peuvent-ils ouvrir le feu au titre de l'article L. 435-1 3° du CSI ?",
    "options": [
      "Oui, car il est placé sous leur garde, les deux sommations ont été faites et il n'existe aucun autre moyen de l'arrêter.",
      "Non, car quand bien même le fugitif ne pourrait être arrêté autrement, l'usage de l'arme ne pourra être considéré comme légitime si l'individu, au moment précis où il prend la fuite, ne représente aucune menace objective pour la vie ou l'intégrité physique.",
      "Oui, mais uniquement en visant les jambes.",
      "Non, car l'article L. 435-1 3° du CSI ne s'applique qu'aux condamnés définitifs s'évadant d'une prison."
    ],
    "correct": 1,
    "exp": "Le haut de la fiche p. 29 est formel : « Quand bien même le fugitif ne pourrait être arrêté autrement, l'usage de l'arme ne pourra être considéré comme légitime si l'individu, au moment précis où il prend la fuite, ne représente aucune menace. Une simple crainte ne peut être considérée comme un fait objectif. »"
  },
  {
    "id": 22,
    "module": "m4",
    "ref": "Fiche Usage des Armes — Périple Meurtrier (p. 29)",
    "q": "Quelles sont les trois conditions cumulatives exigées par l'article L. 435-1 5° du CSI pour ouvrir le feu dans le cadre du « périple meurtrier » ?",
    "options": [
      "L'individu vient de commettre un crime quelconque, il refuse de se rendre après deux sommations, et il est armé.",
      "L'individu vient de commettre ou tenter de commettre un ou plusieurs meurtres, il existe des raisons réelles et objectives de penser qu'une réitération de ces crimes est probable, et l'usage de l'arme est le seul moyen et a pour but exclusif d'empêcher la réitération de ces crimes dans un temps rapproché.",
      "L'individu est fiché S14, il s'enfuit à bord d'un véhicule, et le procureur de la République a autorisé le tir.",
      "L'individu vient de commettre un viol ou un braquage et menace de réitérer dans la semaine."
    ],
    "correct": 1,
    "exp": "Le 5° de l'article L. 435-1 CSI exige la réunion de 3 conditions : 1) vient de commettre ou tenter de commettre un ou plusieurs MEURTRES ; 2) raisons réelles et objectives de penser qu'une réitération de ces crimes est probable ; 3) seul moyen et but exclusif d'empêcher la réitération de ces crimes dans un TEMPS RAPPROCHÉ."
  },
  {
    "id": 62,
    "module": "m4",
    "ref": "Fiche La Légitime Défense d'une Personne (p. 24)",
    "q": "Pour que la légitime défense des personnes (art. 122-5 al. 1 CP) soit autorisée par la loi, quels caractères doivent réunir respectivement l'atteinte subie et l'acte de défense ?",
    "options": [
      "Atteinte : Intentionnelle, Grave, Imprévisible ; Défense : Écrite, Autorisée, Mesurée.",
      "Atteinte : Injustifiée, Actuelle, Réelle (A.I.R.) ; Acte de défense : Nécessaire, Simultané, Proportionné (N.S.P.).",
      "Atteinte : Illégale, Future ou Éventuelle, Subjective ; Défense : Immédiate, Illimitée, Définitive.",
      "Atteinte : Criminelle, Nocturne, Violente ; Défense : Proportionnée, Sans homicide, Avec sommations."
    ],
    "correct": 1,
    "exp": "Selon le tableau de la fiche p. 24 : l'atteinte doit être Injustifiée (contraire au droit), Actuelle (en train de se produire ou imminente) et Réelle (certaine, une crainte subjective ne suffit pas). L'acte de défense doit être Nécessaire, Simultané (ni peur anticipée ni vengeance tardive) et Proportionné."
  },
  {
    "id": 63,
    "module": "m4",
    "ref": "Fiches Légitime Défense (p. 25 & 26)",
    "q": "Sur qui pèse la charge de la preuve en matière de légitime défense des biens (art. 122-5 al. 2 CP) par opposition aux cas présumés de légitime défense (art. 122-6 CP) ?",
    "options": [
      "Dans les deux cas, il s'agit d'une présomption irréfragable qui interdit toute poursuite.",
      "Pour la défense des biens (art. 122-5 al. 2 CP), il appartient à la personne poursuivie de prouver que les conditions (dont la proportionnalité) sont réunies ; dans les deux cas de l'article 122-6 CP, il s'agit d'une présomption de légitime défense qui peut toutefois céder devant la preuve contraire.",
      "C'est toujours au parquet de prouver la disproportion dans le cadre de l'article 122-5 al. 2 CP.",
      "La présomption de l'article 122-6 du Code pénal ne peut jamais être renversée par la preuve contraire."
    ],
    "correct": 1,
    "exp": "Pour la défense des biens (p. 25), la jurisprudence impose à la personne poursuivie la preuve que les conditions nécessaires sont réunies. À l'inverse, l'art. 122-6 CP (p. 26) institue une présomption simple de légitime défense (qui peut céder devant la preuve contraire)."
  },
  {
    "id": 64,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Un Gardien de la paix titulaire est hors service. Il assiste à une agression armée menaçant la vie d'un passant. S'il porte son brassard Police et son arme, peut-il agir dans le cadre de l'article L. 435-1 du CSI ?",
    "options": [
      "Non, l'article L. 435-1 du CSI ne s'applique que pendant les heures de service planifiées.",
      "Oui, car la condition d'agir « dans l'exercice de ses fonctions » inclut le policier actif hors service lorsqu'il agit au titre des articles R. 434-19 du CSI et 113-3 du RGEPN qui lui imposent d'intervenir de sa propre initiative pour porter assistance à toute personne en danger.",
      "Non, hors service, un fonctionnaire actif n'a jamais le droit d'intervenir de sa propre initiative.",
      "Oui, même sans revêtir d'insigne extérieur et apparent de sa qualité."
    ],
    "correct": 1,
    "exp": "La première condition préalable (« agir dans l'exercice de ses fonctions ») couvre deux cas pour les fonctionnaires actifs : soit pendant leur temps de service, soit hors service lorsqu'ils agissent au titre des art. R. 434-19 CSI et 113-3 RGEPN pour porter assistance à toute personne en danger."
  },
  {
    "id": 65,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Dans quelle condition un Policier Adjoint (PA) peut-il exercer ses fonctions en tenue civile pendant son service ?",
    "options": [
      "Jamais, le port de la tenue d'uniforme ne souffre aucune dérogation pour les policiers adjoints.",
      "Sur simple décision personnelle dès lors qu'il travaille de nuit.",
      "Lorsque la nature de la mission le justifie, il peut être autorisé, à titre exceptionnel, par son chef de service, à revêtir la tenue civile (art. R. 133-18 al. 3 du RGEPN).",
      "Uniquement sur réquisition écrite du procureur de la République."
    ],
    "correct": 2,
    "exp": "Le second NOTA de la fiche p. 27 précise : « Les policiers adjoints exercent leurs fonctions en tenue d'uniforme. Cependant, lorsque la nature de la mission le justifie, ils peuvent être autorisés, à titre exceptionnel, par leur chef de service, à revêtir la tenue civile. (art. R. 133-18 al. 3 du RGEPN). »"
  },
  {
    "id": 66,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 28)",
    "q": "Au titre de l'article L. 435-1 2° du CSI (défense des lieux occupés ou des personnes confiées), lesquels de ces lieux et personnes entrent dans le champ d'application du texte ?",
    "options": [
      "Uniquement les commissariats de police et les magistrats sous protection rapprochée.",
      "Les lieux occupés à titre permanent (ex. poste de police, CRA) ou provisoire (ex. lieu de perquisition), ainsi que les personnes confiées (personnalité protégée, personne en GAV ou rétention, personne interpellée, mise en cause ou victime sur les lieux d'une infraction).",
      "Tout lieu public ouvert à la circulation, sans obligation de procéder à des sommations.",
      "Uniquement les bâtiments classés secret défense après trois sommations."
    ],
    "correct": 1,
    "exp": "La fiche p. 28 précise que les lieux occupés peuvent l'être à titre permanent (poste de police, CRA) ou provisoire (lieu de perquisition), et que les personnes confiées incluent les personnalités protégées, personnes en GAV/rétention, interpellées, mises en cause ou victimes sur les lieux d'une infraction."
  },
  {
    "id": 67,
    "module": "m4",
    "ref": "Fiche Usage des Armes — Immobilisation d'un véhicule (p. 29)",
    "q": "Lors d'un contrôle routier, un conducteur n'obtempère pas à un ordre d'arrêt réglementaire et prend la fuite sans qu'aucun élément ne permette de penser que les occupants sont dangereux pour la vie ou l'intégrité physique. Les policiers peuvent-ils tirer dans les pneus (art. L. 435-1 4° CSI) ?",
    "options": [
      "Oui, dès lors que l'ordre d'arrêt n'était pas équivoque et qu'il s'agit uniquement d'immobiliser matériellement le véhicule.",
      "Non, il ne peut être fait usage de l'arme pour contraindre un véhicule à s'arrêter en l'absence de toute dangerosité de ses occupants (il faut des raisons réelles et objectives de penser qu'ils sont susceptibles de porter atteinte, dans leur fuite, à leur vie, à leur intégrité physique ou à celles d'autrui).",
      "Oui, si le véhicule est signalé volé au fichier des véhicules volés.",
      "Oui, après deux sommations faites au mégaphone."
    ],
    "correct": 1,
    "exp": "La fiche p. 29 insiste sur cette condition cumulative : « Il ne peut être fait usage de l'arme pour contraindre un véhicule à s'arrêter en l'absence de toute dangerosité de ses occupants. »"
  },
  {
    "id": 68,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 28)",
    "q": "Quel article du Code de la sécurité intérieure encadre spécifiquement la dispersion d'un attroupement en maintien de l'ordre (régime distinct des cinq situations de l'article L. 435-1 du CSI) ?",
    "options": [
      "L'article 73 du Code de procédure pénale.",
      "L'article L. 211-9 du Code de la sécurité intérieure.",
      "L'article 122-6 du Code pénal.",
      "L'article 433-10 du Code pénal."
    ],
    "correct": 1,
    "exp": "L'encadré II de la fiche p. 28 mentionne que les cinq situations s'appliquent « hors cas prévus à l'article L. 211-9 du code de la sécurité intérieure (dispersion d'un attroupement) et régime de droit commun de la légitime défense prévu à l'art. 122-5 C.P. »."
  },
  {
    "id": 23,
    "module": "m5",
    "ref": "Fiche Les Libertés Publiques (I - La liberté individuelle ou sûreté)",
    "q": "Quel texte fondateur dispose dans son article 66 que « Nul ne peut être arbitrairement détenu. L'autorité judiciaire, gardienne de la liberté individuelle, assure le respect de ce principe dans les conditions prévues par la loi » ?",
    "options": [
      "La Déclaration des droits de l'homme et du citoyen de 1789.",
      "La Constitution de 1958.",
      "La décision du Conseil constitutionnel du 12 juillet 1979.",
      "Le Code de procédure pénale en son article préliminaire."
    ],
    "correct": 1,
    "exp": "La DDHC de 1789 consacre la sûreté à son article 7, tandis que l'article 66 de la Constitution de 1958 confie à l'autorité judiciaire le rôle de gardienne de la liberté individuelle. La décision du Conseil constitutionnel du 12 juillet 1979 consacre quant à elle la valeur constitutionnelle de la liberté d'aller et venir."
  },
  {
    "id": 24,
    "module": "m5",
    "ref": "Fiche Compétences en matière de Contrôle d'Identité (p. 43)",
    "q": "Quelles sont les prérogatives exactes d'un Policier Adjoint (art. 21-1° ter CPP) en matière de contrôle et de relevé d'identité ?",
    "options": [
      "Sous le contrôle d'un OPJ, il est habilité à procéder à tous les contrôles d'identité prévus par l'article 78-2 du CPP au même titre qu'un APJ.",
      "Il est habilité à procéder uniquement aux contrôles d'identité prévus par les articles 78-2-2 et 78-2-4 du CPP ; à l'exclusion de ces cas, il ne peut que relever l'identité (art. 78-6 CPP) des contrevenants pour dresser des procès-verbaux de contraventions.",
      "Il ne peut procéder à aucun contrôle d'identité, mais peut effectuer des relevés d'identité (art. 78-6 CPP) pour les délits et les contraventions.",
      "Il peut contrôler l'identité de toute personne de sa propre initiative dans le cadre d'un contrôle préventif de police administrative (art. 78-2 al. 8 CPP)."
    ],
    "correct": 1,
    "exp": "Selon la fiche p. 43 : dans tous les cas prévus par le CPP, seuls les OPJ et, sur l'ordre et sous la responsabilité de ceux-ci, les APJ et certains APJA (art. 21/1° CPP) sont habilités. Les policiers adjoints et réservistes non APJ (art. 21-1° ter CPP) ne sont habilités qu'aux contrôles des art. 78-2-2 et 78-2-4 CPP, et ne peuvent sinon que relever l'identité (art. 78-6 CPP) des contrevenants."
  },
  {
    "id": 25,
    "module": "m5",
    "ref": "Fiche Contrôles d'Identité PJ (p. 44)",
    "q": "Dans le cadre d'un contrôle d'identité de police judiciaire effectué à l'initiative des policiers (art. 78-2 al. 2 à 6 CPP), laquelle de ces situations ne permet PAS légalement de contrôler une personne ?",
    "options": [
      "La personne a commis ou tenté de commettre une contravention.",
      "La personne est susceptible de fournir des renseignements utiles à l'enquête en cas de contravention.",
      "La personne fait l'objet de recherches ordonnées par un juge des enfants ou un juge de l'application des peines.",
      "La personne a un comportement anormal à la vue des policiers laissant soupçonner qu'elle se prépare à commettre un délit."
    ],
    "correct": 1,
    "exp": "L'article 78-2 al. 4 du CPP (personne susceptible de fournir des renseignements utiles à l'enquête) ne s'applique qu'en cas de crime ou de délit : le contrôle, dans ce cadre, exclut formellement les contraventions."
  },
  {
    "id": 26,
    "module": "m5",
    "ref": "Fiche Contrôles sur Réquisition du PR (p. 45)",
    "q": "Lors d'un contrôle d'identité sur réquisition écrite du procureur de la République (art. 78-2 al. 7 CPP) visant la recherche d'infractions sur les stupéfiants, les policiers découvrent une infraction incidente non visée dans la réquisition. La procédure est-elle valable ?",
    "options": [
      "Non, la procédure est frappée de nullité absolue car elle dépasse le périmètre fixé par le magistrat.",
      "Oui, le fait que ce contrôle révèle des infractions autres que celles visées dans les réquisitions du procureur de la République ne constitue pas une cause de nullité des procédures incidentes (art. 78-2 al. 7 CPP).",
      "Oui, mais uniquement si la personne contrôlée avait un comportement suspect préalable.",
      "Non, sauf délivrance d'une réquisition supplétive dans l'heure."
    ],
    "correct": 1,
    "exp": "L'article 78-2 al. 7 du CPP précise expressément que la découverte d'infractions autres que celles visées dans les réquisitions du procureur de la République ne constitue pas une cause de nullité des procédures incidentes."
  },
  {
    "id": 27,
    "module": "m5",
    "ref": "Fiche Vérification de Situation (p. 50 & 51)",
    "q": "Un individu contrôlé aux abords d'un site sensible présente un passeport valide. Cependant, le FPR révèle une fiche S14 prescrivant d'aviser le service demandeur. Que peut faire l'Officier de Police Judiciaire ?",
    "options": [
      "Il doit le laisser repartir immédiatement car la personne a présenté un titre d'identité probant.",
      "Il peut le placer en vérification d'identité (art. 78-3 CPP) pendant 4 heures.",
      "Il peut engager une retenue pour vérification de sa situation (art. 78-3-1 CPP) pendant 4 heures maximum (même si elle présente un justificatif d'identité), ainsi que pour les personnes l'accompagnant.",
      "Il peut le retenir pendant 24 heures sur décision du préfet."
    ],
    "correct": 2,
    "exp": "L'article 78-3-1 du CPP permet, lorsqu'il existe des raisons sérieuses de penser que le comportement est lié à des activités à caractère terroriste (ex. fiche S14 ou S15 près d'un site sensible), une retenue pour vérification de situation jusqu'à 4 heures sous la responsabilité exclusive de l'OPJ, même si la personne présente un justificatif d'identité."
  },
  {
    "id": 69,
    "module": "m5",
    "ref": "Fiches Les Libertés Publiques (I et II)",
    "q": "Quelle est la différence fondamentale de finalité entre une mesure privative de liberté prise dans un cadre judiciaire et une mesure prise dans un cadre administratif ?",
    "options": [
      "La mesure judiciaire est décidée par le préfet, tandis que la mesure administrative est décidée par le juge d'instruction.",
      "La mesure judiciaire intervient en conséquence d'une infraction pour réprimer (GAV, contrôle d'identité, mandat, détention provisoire), tandis que la mesure administrative vise à préserver ou rétablir l'ordre public à titre de précaution et non à punir (ex. internement de malades mentaux, rétention administrative des étrangers).",
      "Les mesures administratives ne sont pas prévues par la loi.",
      "Seules les mesures administratives sont soumises à l'article 66 de la Constitution."
    ],
    "correct": 1,
    "exp": "Dans un cadre judiciaire, l'atteinte à la liberté intervient en conséquence d'une infraction. Dans un cadre administratif, l'autorité agit pour préserver ou rétablir l'ordre public (précautions visant à protéger la société et non à punir : internement des malades mentaux, rétention administrative des étrangers)."
  },
  {
    "id": 70,
    "module": "m5",
    "ref": "Fiche La Liberté d'Aller et Venir",
    "q": "Quelle décision a consacré la valeur constitutionnelle de la liberté d'aller et venir, et quelle obligation administrative pèse sur les commerçants ambulants ?",
    "options": [
      "L'article 7 de la DDHC de 1789 ; les commerçants ambulants doivent déclarer leurs trajets au procureur.",
      "La décision du Conseil constitutionnel du 12 juillet 1979 ; par ailleurs, les commerçants ambulants doivent posséder, pour exercer leur activité, une carte délivrée par la préfecture.",
      "La loi du 9 décembre 2016 ; les commerçants ambulants sont dispensés de toute autorisation.",
      "L'article 66 de la Constitution ; les commerçants ambulants relèvent du juge de l'application des peines."
    ],
    "correct": 1,
    "exp": "Le Conseil constitutionnel a considéré que la liberté d'aller et venir avait valeur constitutionnelle dans sa décision du 12 juillet 1979. Parmi les restrictions à cette liberté figure l'obligation pour les commerçants ambulants de posséder une carte délivrée par la préfecture."
  },
  {
    "id": 71,
    "module": "m5",
    "ref": "Fiche Moyens de Preuve de l'Identité (p. 44)",
    "q": "Lors d'un contrôle d'identité (art. 78-2 al. 1 CPP), une personne présente uniquement une carte d'électeur, un certificat d'immatriculation ou un livret de famille. Quelle est la valeur juridique de ces documents ?",
    "options": [
      "Ce sont des documents officiels probants irréfutables au même titre que la CNI, le passeport ou le permis de conduire.",
      "Ils sont dépourvus de toute valeur et obligent à placer la personne en vérification d'identité.",
      "Dépourvus de photographie et/ou de reconnaissance officielle de valeur, ils ne constituent qu'un commencement de preuve à prendre en considération selon les circonstances et l'appréciation des policiers (qui peuvent aussi recourir à des témoignages concomitants au contrôle).",
      "Ils ne sont valables qu'en matière contraventionnelle."
    ],
    "correct": 2,
    "exp": "La fiche p. 44 distingue : 1) les documents officiels probants portant photographie (CNI, passeport, permis de conduire) ; 2) les autres documents (carte d'électeur, certificat d'immatriculation, livret de famille) qui ne constituent qu'un commencement de preuve ; 3) le recours à des témoignages concomitants au contrôle."
  },
  {
    "id": 72,
    "module": "m5",
    "ref": "Fiche Contrôles d'Identité PJ (p. 45)",
    "q": "Un individu fait l'objet d'une diffusion administrative (débiteur du Trésor, mineur en fugue ou notification d'arrêté d'expulsion). Peut-il être contrôlé au titre de l'article 78-2 alinéa 6 du CPP ?",
    "options": [
      "Oui, car l'article 78-2 al. 6 du CPP vise toutes les personnes inscrites au FPR sans distinction.",
      "Non, car l'article 78-2 al. 6 du CPP vise les recherches ordonnées par une autorité judiciaire (parquet, juge d'instruction, juridiction de jugement, JAP, juge des enfants) et ne peut pas s'exercer en matière de diffusions administratives.",
      "Oui, si le contrôle est réalisé par un OPJ.",
      "Oui, mais uniquement de jour."
    ],
    "correct": 1,
    "exp": "La fiche p. 45 précise que le contrôle au titre de l'art. 78-2 al. 6 CPP (recherches ordonnées par une autorité judiciaire) ne peut pas s'exercer en matière de diffusions administratives (débiteurs du Trésor, mineurs en fugue, notification d'arrêtés d'expulsion)."
  },
  {
    "id": 73,
    "module": "m5",
    "ref": "Fiche Réquisitions du PR (p. 45)",
    "q": "Quelles sont les trois conditions formelles que doivent respecter les réquisitions du procureur de la République aux fins de contrôle d'identité (art. 78-2 al. 7 CPP) ?",
    "options": [
      "Être orales ou écrites, viser une personne déterminée, et durer moins de 4 heures.",
      "Être écrites, préciser les infractions à rechercher, et déterminer les lieux et la période de temps concernés.",
      "Être signées par le préfet, viser les contraventions, et concerner toute la commune.",
      "Être écrites, liées au comportement suspect des personnes, et exclure les procédures incidentes."
    ],
    "correct": 1,
    "exp": "Selon la fiche p. 45, les réquisitions du procureur de la République (art. 78-2 al. 7 CPP) doivent : 1) être écrites ; 2) préciser les infractions à rechercher ; 3) déterminer les lieux et la période de temps concernés."
  },
  {
    "id": 74,
    "module": "m5",
    "ref": "Fiche Contrôles d'Identité Préventifs (p. 45)",
    "q": "Quelles sont les caractéristiques du contrôle d'identité préventif prévu à l'article 78-2 alinéa 8 du CPP ?",
    "options": [
      "Il dépend strictement du comportement suspect de la personne contrôlée.",
      "Il vise « toute personne » quel que soit son comportement, pour prévenir une atteinte à l'ordre public (notamment à la sécurité des personnes et des biens), et doit être basé sur des éléments objectifs permettant de présumer une menace pour l'ordre public que les agents doivent préciser.",
      "Il nécessite une réquisition écrite préalable du procureur de la République.",
      "Il ne peut être effectué que dans les gares et aéroports."
    ],
    "correct": 1,
    "exp": "Le contrôle préventif (art. 78-2 al. 8 CPP) vise « toute personne » quel que soit son comportement, mais doit reposer sur des éléments objectifs permettant de présumer une menace pour l'ordre public : les agents doivent préciser en quoi la sécurité des personnes et des biens est menacée."
  },
  {
    "id": 75,
    "module": "m5",
    "ref": "Fiche La Vérification d'Identité (p. 50)",
    "q": "Lorsqu'une personne est retenue aux fins de vérification de son identité (art. 78-3 CPP), quelles sont les règles exactes concernant la durée, l'autorité responsable et la notification des droits ?",
    "options": [
      "Durée de 24 heures sous la responsabilité de l'APJ ; notification des droits réservée à l'OPJ.",
      "Retenue sur place ou au local de police, présentation dans tous les cas à un OPJ (responsabilité exclusive de l'OPJ), durée maximale de 4 heures (ou 8 heures à Mayotte et dans la collectivité territoriale de Guyane) ; les droits peuvent être notifiés par un OPJ ou par un APJ sous le contrôle d'un OPJ.",
      "Durée de 4 heures partout en France, sans possibilité de prévenir sa famille.",
      "Mesure applicable même lorsque la personne présente immédiatement un passeport valide."
    ],
    "correct": 1,
    "exp": "Sous l'art. 78-3 CPP : présentation obligatoire à un OPJ, responsabilité exclusive de l'OPJ, durée max de 4h (8h à Mayotte et en Guyane). Les droits (faire aviser le PR et prévenir à tout moment sa famille ou toute personne de son choix) peuvent être notifiés par un OPJ ou par un APJ sous le contrôle d'un OPJ."
  },
  {
    "id": 76,
    "module": "m5",
    "ref": "Fiche La Vérification de Situation (p. 50 & 51)",
    "q": "Lequel de ces éléments NE figure PAS parmi les quatre catégories d'éléments objectifs permettant d'engager une vérification de situation liée à des activités terroristes (art. 78-3-1 CPP) ?",
    "options": [
      "Le signalement au FPR par une fiche S14 ou S15 prescrivant d'aviser le service demandeur, associé à sa présence près d'un site sensible.",
      "Tout signalement émis par un service de renseignement ou d'investigations (hors procédures de recherches judiciaires).",
      "Le comportement suspect aux abords d'un établissement sensible laissant penser à des repérages, ou la découverte d'objets/documents laissant présumer un lien avec le terrorisme.",
      "Une diffusion administrative au FPR en tant que débiteur du Trésor public."
    ],
    "correct": 3,
    "exp": "Les 4 cas d'éléments objectifs de l'art. 78-3-1 CPP (fiches p. 50 et 51) sont : 1) fiche S14/S15 près d'un site sensible ; 2) signalement d'un service de renseignement/investigations ; 3) comportement suspect de repérage aux abords d'un établissement sensible ; 4) découverte d'objets ou documents liés à des activités terroristes."
  },
  {
    "id": 28,
    "module": "m6",
    "ref": "Fiche Les Cadres d'Enquête — L'Enquête de Flagrant Délit (p. 56)",
    "q": "Dans lequel de ces cas l'ouverture d'une enquête de flagrant délit (art. 53 à 73 CPP) est-elle juridiquement IMPOSSIBLE ?",
    "options": [
      "Un vol simple (puni de 3 ans d'emprisonnement) qui vient de se commettre.",
      "Un délit qui vient de se commettre mais qui est puni par la loi uniquement d'une peine d'amende (sans peine d'emprisonnement).",
      "Un crime commis il y a trois heures.",
      "Un délit puni d'un an d'emprisonnement qui se commet actuellement."
    ],
    "correct": 1,
    "exp": "L'enquête de flagrant délit s'applique aux crimes (art. 53 CPP) et aux délits punis par la loi d'une peine d'emprisonnement (art. 67 CPP). Elle n'est pas possible en cas de contraventions ou de délits non punis d'emprisonnement."
  },
  {
    "id": 29,
    "module": "m6",
    "ref": "Fiche Durée de l'Enquête Préliminaire (p. 57 & 62)",
    "q": "Quelles sont les règles exactes encadrant la durée d'une enquête préliminaire de droit commun (art. 75-3 CPP) menée d'office par les OPJ ?",
    "options": [
      "Compte rendu au PR au bout de 3 mois ; durée maximale d'un an renouvelable une fois.",
      "Compte rendu au PR lorsqu'elle est commencée depuis plus de 6 mois ; durée maximale de 2 ans (+ 1 an sur autorisation écrite et motivée du PR) à compter du premier acte d'audition libre, de GAV ou de perquisition, puis à titre exceptionnel une nouvelle prolongation d'un an renouvelable une fois à l'expiration du délai de 3 ans.",
      "Durée maximale de 3 ans sans possibilité de prolongation.",
      "Aucun délai légal tant qu'aucune garde à vue n'a été réalisée."
    ],
    "correct": 1,
    "exp": "En enquête préliminaire menée d'office : compte rendu au PR à 6 mois ; durée max de 2 ans (+ 1 an sur autorisation écrite et motivée du PR) à compter du 1er acte d'audition libre, GAV ou perquisition (même intervenu en flagrance) ; à l'issue des 3 ans, prolongation exceptionnelle d'1 an renouvelable une fois (soit jusqu'à 5 ans)."
  },
  {
    "id": 30,
    "module": "m6",
    "ref": "Fiche L'Enquête Préliminaire (p. 63)",
    "q": "Concernant le domaine d'application de l'enquête préliminaire (art. 75 et 76 CPP), laquelle de ces propositions est exacte ?",
    "options": [
      "Toute personne résidant en France peut être impliquée, à l'exception du Président de la République, des ministres et des préfets.",
      "Toute personne qui réside sur le territoire français peut se trouver impliquée dans une enquête préliminaire, à l'exception du Président de la République et des agents diplomatiques accrédités en France.",
      "L'introduction dans un domicile en enquête préliminaire peut se faire sur simple accord verbal de l'occupant.",
      "Les crimes et délits flagrants ne peuvent jamais être traités en enquête préliminaire."
    ],
    "correct": 1,
    "exp": "Selon la fiche p. 63 : 1) Tous les crimes, délits et contraventions (même les crimes et délits flagrants, hors information judiciaire) peuvent être traités en préliminaire ; 2) Les seules exceptions personnelles sont le Président de la République et les agents diplomatiques accrédités en France ; 3) L'introduction dans un domicile suppose l'assentiment exprès et écrit (art. 76 CPP)."
  },
  {
    "id": 31,
    "module": "m6",
    "ref": "Fiche La Commission Rogatoire (p. 57 & 58)",
    "q": "Dans le cadre d'une commission rogatoire (art. 81 et 151 à 154-2 CPP), quel est le rôle exact de l'Agent de Police Judiciaire (APJ) ?",
    "options": [
      "L'APJ a l'interdiction absolue de rédiger le moindre acte dans le cadre d'une commission rogatoire.",
      "Sous le contrôle de l'OPJ, l'APJ peut procéder seul aux perquisitions et aux auditions du mis en examen.",
      "La commission rogatoire est du domaine exclusif de l'OPJ, mais sous son contrôle, l'APJ peut rédiger certains actes précis (ex. retranscription des interceptions et sonorisations, ou certaines réquisitions techniques).",
      "L'APJ dispose exactement des mêmes pouvoirs que l'OPJ sur commission rogatoire."
    ],
    "correct": 2,
    "exp": "La commission rogatoire est du domaine exclusif de l'OPJ. Toutefois, sous le contrôle de ce dernier, l'APJ peut rédiger certains actes techniques limitativement énumérés (réquisitions art. 57-1 CPP, réquisitions télécoms et copies de données avec autorisation expresse du JI, pose de dispositifs d'interception, retranscription des interceptions et sonorisations)."
  },
  {
    "id": 32,
    "module": "m6",
    "ref": "Fiche Les Autres Cadres d'Enquête (p. 57 & 58)",
    "q": "Quelles sont les règles applicables aux cadres spécifiques de mort ou blessures graves de cause inconnue ou suspecte (art. 74 CPP) et de disparitions inquiétantes (art. 74-1 CPP) ?",
    "options": [
      "Ils exigent qu'un crime soit préalablement établi et sont réservés exclusivement aux OPJ.",
      "Leur particularité repose sur l'indétermination quant à l'existence d'une infraction, et ils sont de la compétence de l'OPJ ou, sous le contrôle de ce dernier, de l'APJ.",
      "L'article 74-1 du CPP ne s'applique qu'aux mineurs et jamais aux majeurs non protégés.",
      "En cas de découverte d'une personne grièvement blessée de cause suspecte, l'article 74 du CPP ne s'applique pas."
    ],
    "correct": 1,
    "exp": "Ces cadres spécifiques permettent d'enquêter sans qu'une infraction soit préalablement établie (mort ou blessures graves de cause inconnue ou suspecte art. 74 al. 1 et 6 CPP ; disparitions inquiétantes de mineur, majeur protégé ou majeur dont la disparition présente un caractère inquiétant ou suspect art. 74-1 CPP). Les APJ peuvent agir sous le contrôle de l'OPJ."
  },
  {
    "id": 77,
    "module": "m6",
    "ref": "Fiche Les Cadres d'Enquête (p. 56)",
    "q": "En matière de secret de l'enquête et de l'instruction, dans quel cas sa violation est-elle pénalement sanctionnée et qui a légalement le droit de communiquer ?",
    "options": [
      "Elle est sanctionnée même pour les contraventions ; tout APJ peut communiquer à la presse.",
      "Toute violation du secret de l'enquête ou de l'instruction est pénalement sanctionnée si les faits divulgués concernent un crime ou un délit ; seuls peuvent communiquer le procureur de la République, et l'OPJ avec l'accord et sous le contrôle du procureur de la République.",
      "Seul le juge d'instruction peut communiquer en enquête de flagrance.",
      "Le secret de l'enquête ne s'applique qu'aux commissions rogatoires."
    ],
    "correct": 1,
    "exp": "L'introduction de la fiche p. 56 précise : « Toute violation du secret de l'enquête ou de l'instruction est pénalement sanctionnée, si les faits divulgués concernent un crime ou un délit. Seuls peuvent communiquer le procureur de la République, et l'officier de police judiciaire avec l'accord et sous le contrôle du procureur de la République. »"
  },
  {
    "id": 78,
    "module": "m6",
    "ref": "Fiche Durée de l'Enquête Préliminaire (p. 62)",
    "q": "Quelle est la durée initiale d'une enquête préliminaire lorsqu'elle porte sur des crimes ou délits relevant de la criminalité organisée (art. 706-73 ou 706-73-1 CPP) ou de la compétence du procureur de la République antiterroriste ?",
    "options": [
      "2 ans (+ 1 an).",
      "3 ans (+ 2 ans) à compter du premier acte d'audition libre, de garde à vue ou de perquisition.",
      "10 ans sans autorisation du parquet.",
      "6 mois renouvelables."
    ],
    "correct": 1,
    "exp": "La note d'astérisque de la fiche p. 62 indique : « Cette durée est portée à 3 ans (+ 2 ans) lorsque l'enquête porte sur des crimes ou délits mentionnés aux art. 706-73 ou 706-73-1 ou relevant de la compétence du procureur de la République antiterroriste. »"
  },
  {
    "id": 79,
    "module": "m6",
    "ref": "Fiche Durée de l'Enquête Préliminaire (p. 62)",
    "q": "En enquête préliminaire (art. 75-3 CPP), quel est le sort juridique d'un acte d'enquête intervenant après l'expiration des délais légaux ?",
    "options": [
      "L'acte demeure pleinement valable.",
      "Tout acte d'enquête intervenant après l'expiration de ces délais est nul (sauf si une personne est mise en cause durant cette période).",
      "Toute la procédure depuis l'origine est annulée sans exception.",
      "L'OPJ doit simplement payer une amende civile."
    ],
    "correct": 1,
    "exp": "La fiche p. 62 précise : « Tout acte d'enquête intervenant après l'expiration de ces délais est nul (sauf si une personne est mise en cause durant cette période). »"
  },
  {
    "id": 80,
    "module": "m6",
    "ref": "Fiche Les Autorités Habilitées en Enquête Préliminaire (p. 63)",
    "q": "Lorsqu'une enquête préliminaire est menée sur instructions du procureur de la République (art. 75 CPP), comment est fixé son délai d'exécution ?",
    "options": [
      "L'OPJ décide seul du délai de retour de la procédure.",
      "Le procureur de la République fixe le délai dans lequel l'enquête doit être effectuée (instructions parquet) et peut le proroger au vu des justifications fournies par l'enquêteur.",
      "Le délai est obligatoirement de 8 jours fermes.",
      "C'est le chef de circonscription qui proroge les délais du parquet."
    ],
    "correct": 1,
    "exp": "Au bas de la fiche p. 63 : « Lorsque le procureur de la République donne instructions aux O.P.J. de procéder à une enquête, il fixe le délai dans lequel elle doit être effectuée (instructions parquet) et peut le proroger au vu des justifications fournies par l'enquêteur. »"
  },
  {
    "id": 81,
    "module": "m6",
    "ref": "Fiche La Commission Rogatoire (p. 57 & 58)",
    "q": "Dans quel cas l'ouverture d'une information judiciaire par saisine d'un juge d'instruction est-elle obligatoire ?",
    "options": [
      "Pour toutes les contraventions de 5e classe.",
      "Elle est obligatoire en cas de crime (et pour certains délits) ; le juge d'instruction peut également être saisi lorsqu'une plainte avec constitution de partie civile est déposée.",
      "Dès qu'une garde à vue dépasse 24 heures.",
      "Uniquement lorsque l'auteur d'un délit simple est majeur."
    ],
    "correct": 1,
    "exp": "L'ouverture d'une information judiciaire est obligatoire en cas de crime (ainsi que pour certains délits spécifiques). Le juge d'instruction peut aussi être saisi par une plainte avec constitution de partie civile."
  },
  {
    "id": 82,
    "module": "m6",
    "ref": "Fiche La Commission Rogatoire (p. 58)",
    "q": "Sur commission rogatoire, pour lesquels de ces actes rédigés par un APJ sous le contrôle d'un OPJ « l'autorisation expresse du juge d'instruction » est-elle spécifiquement mentionnée ?",
    "options": [
      "Pour la retranscription des interceptions et sonorisations.",
      "Pour les réquisitions aux opérateurs de télécommunications et les réquisitions de personnes qualifiées pour réaliser des copies de données informatiques.",
      "Pour les réquisitions de l'article 57-1 du CPP.",
      "Pour toutes les auditions de témoins."
    ],
    "correct": 1,
    "exp": "Parmi les 5 actes listés p. 58 que l'APJ peut rédiger sous le contrôle de l'OPJ, deux exigent « l'autorisation expresse du juge d'instruction » : les réquisitions aux opérateurs de télécommunications et les réquisitions de personnes qualifiées pour réaliser des copies de données informatiques."
  },
  {
    "id": 33,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-2 CSI",
    "q": "Selon l'article R. 434-2 du Code de la sécurité intérieure, comment sont définies la Police nationale et la Gendarmerie nationale dans l'accomplissement de leurs missions de sécurité intérieure ?",
    "options": [
      "Deux forces civiles placées sous l'autorité conjointe du ministre de l'Intérieur et du garde des Sceaux.",
      "La Police nationale, force à statut civil, et la Gendarmerie nationale, force armée, sont placées sous l'autorité du ministre de l'Intérieur pour l'accomplissement des missions de sécurité intérieure.",
      "Deux forces militaires soumises au même statut général des militaires.",
      "La Police nationale relève du ministre de l'Intérieur et la Gendarmerie nationale relève uniquement du ministre des Armées pour ses missions de sécurité intérieure."
    ],
    "correct": 1,
    "exp": "L'article R. 434-2 du CSI précise que pour l'accomplissement des missions de sécurité intérieure, la police nationale (force à statut civil) et la gendarmerie nationale (force armée) sont placées sous l'autorité du ministre de l'Intérieur."
  },
  {
    "id": 34,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-4 et R. 434-5 CSI",
    "q": "En vertu des articles R. 434-4 et R. 434-5 du CSI, que se passe-t-il lorsqu'un ordre est transmis directement en urgence sans passer par la hiérarchie intermédiaire, ou lorsque le policier reçoit un ordre manifestement illégal ?",
    "options": [
      "L'ordre direct est nul ; le policier doit toujours exécuter un ordre même manifestement illégal.",
      "Si l'urgence impose une transmission directe, la hiérarchie intermédiaire en est informée sans délai (art. R. 434-4) ; face à un ordre manifestement illégal et de nature à compromettre gravement un intérêt public, le policier a le devoir de faire part de ses objections et de ne pas l'exécuter (art. R. 434-5).",
      "Le supérieur hiérarchique n'assume jamais la responsabilité des ordres qu'il donne.",
      "Le refus d'exécuter un ordre illégal dispense le policier d'en informer l'autorité supérieure."
    ],
    "correct": 1,
    "exp": "L'autorité de commandement est responsable des ordres qu'elle donne (R. 434-4). En cas d'ordre direct par urgence, l'échelon intermédiaire est informé sans délai. Si l'ordre est manifestement illégal ET de nature à compromettre gravement un intérêt public (conditions cumulatives), le policier a le devoir de ne pas l'exécuter (R. 434-5)."
  },
  {
    "id": 35,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-8 CSI",
    "q": "Selon l'article R. 434-8 du CSI, quelle obligation incombe au policier lorsqu'un fait survient en dehors du service et est susceptible d'entraîner sa convocation par une autorité de police, juridictionnelle ou de contrôle ?",
    "options": [
      "Il n'a aucune obligation d'en référer s'il s'agit de sa vie privée hors service.",
      "Il doit le porter sans délai à la connaissance de l'autorité hiérarchique, que le fait soit survenu à l'occasion ou en dehors du service.",
      "Il ne doit prévenir sa hiérarchie qu'en cas de condamnation définitive à une peine ferme.",
      "Il dispose d'un délai d'un mois pour informer son syndicat."
    ],
    "correct": 1,
    "exp": "L'article R. 434-8 II du CSI dispose : « Le policier ou le gendarme porte sans délai à la connaissance de l'autorité hiérarchique tout fait survenu à l'occasion ou en dehors du service, ayant entraîné ou susceptible d'entraîner sa convocation par une autorité de police, juridictionnelle ou de contrôle. »"
  },
  {
    "id": 36,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-14 et R. 434-15 CSI",
    "q": "Que prévoient les articles R. 434-14 et R. 434-15 du CSI concernant la relation avec la population et l'expression devant les médias ?",
    "options": [
      "Le tutoiement est autorisé envers les mineurs ; la parole aux médias est totalement libre.",
      "La relation avec la population impose la courtoisie et requiert l'usage du vouvoiement (art. R. 434-14) ; le policier s'exprime librement devant les médias dans le respect du secret de l'enquête, de l'instruction, du secret professionnel et du devoir de discrétion (art. R. 434-15).",
      "Le policier n'a jamais à justifier de sa qualité lorsqu'il intervient en civil.",
      "Seul le préfet peut autoriser l'usage du vouvoiement."
    ],
    "correct": 1,
    "exp": "L'article R. 434-14 du CSI impose le respect de la dignité, la courtoisie, l'usage du vouvoiement et la justification de sa qualité. L'article R. 434-15 encadre l'expression devant les médias par le secret de l'enquête/instruction, le secret professionnel et le devoir de discrétion."
  },
  {
    "id": 37,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-16 CSI",
    "q": "Selon l'article R. 434-16 du CSI relatif aux contrôles d'identité et aux palpations de sécurité, quelle affirmation est exacte ?",
    "options": [
      "La palpation de sécurité est un acte d'enquête judiciaire systématique assimilé à une fouille à corps.",
      "La palpation de sécurité est exclusivement une mesure de sûreté (elle ne revêt pas un caractère systématique, est réservée aux cas où elle apparaît nécessaire à la garantie de la sécurité des intervenants ou d'autrui, et est pratiquée chaque fois que les circonstances le permettent à l'abri du regard du public).",
      "Le policier peut choisir les personnes à contrôler sur la base d'une caractéristique physique même sans signalement précis.",
      "La palpation de sécurité permet de fouiller l'intérieur d'un portefeuille pour vérifier l'identité."
    ],
    "correct": 1,
    "exp": "L'article R. 434-16 du CSI rappelle que la palpation de sécurité est exclusivement une mesure de sûreté visant à vérifier que la personne n'est pas porteuse d'un objet dangereux pour elle-même ou pour autrui. Elle n'est pas systématique et se pratique, autant que possible, à l'abri du regard du public."
  },
  {
    "id": 38,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-17 CSI",
    "q": "D'après l'article R. 434-17 du CSI, dans quels cas précis l'utilisation des menottes ou des entraves est-elle justifiée ?",
    "options": [
      "Systématiquement pour toute personne placée en garde à vue ou en retenue.",
      "Uniquement lorsque la personne appréhendée est considérée soit comme dangereuse pour autrui ou pour elle-même, soit comme susceptible de tenter de s'enfuir.",
      "Dès que l'infraction reprochée est un délit puni d'emprisonnement.",
      "Uniquement sur autorisation écrite préalable du procureur de la République."
    ],
    "correct": 1,
    "exp": "Conformément aux articles 803 du CPP et R. 434-17 du CSI, l'utilisation des menottes ou des entraves n'est justifiée que lorsque la personne appréhendée est considérée soit comme dangereuse pour autrui ou pour elle-même, soit comme susceptible de tenter de s'enfuir."
  },
  {
    "id": 39,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-23 et R. 434-24 CSI",
    "q": "Quelles sont les obligations du policier vis-à-vis des contrôles hiérarchiques, des inspections et du Défenseur des droits (art. R. 434-23 et R. 434-24 CSI) ?",
    "options": [
      "Le policier peut refuser de répondre au Défenseur des droits sans mandat d'un juge d'instruction.",
      "Il facilite en toute circonstance le déroulement des opérations de contrôle et d'inspection (R. 434-23) ; lorsqu'il y est invité par le Défenseur des droits, il lui communique les informations et pièces utiles, défère à ses convocations et peut à cette occasion être assisté de la personne de son choix (R. 434-24).",
      "Il ne peut être assisté devant le Défenseur des droits que par un avocat au Conseil d'État.",
      "Le Défenseur des droits n'est pas compétent à l'égard des policiers adjoints."
    ],
    "correct": 1,
    "exp": "Les articles R. 434-23 et R. 434-24 du CSI imposent de faciliter les inspections et de déférer aux convocations du Défenseur des droits (art. 71-1 de la Constitution), avec la faculté d'être assisté de la personne de son choix."
  },
  {
    "id": 83,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-6 et R. 434-7 CSI",
    "q": "Selon les articles R. 434-6 et R. 434-7 du CSI relatifs aux devoirs de l'autorité de commandement, comment le supérieur hiérarchique doit-il exercer son autorité ?",
    "options": [
      "En transférant la responsabilité de ses décisions à ses subordonnés.",
      "Ses ordres doivent être précis et assortis des explications nécessaires à leur bonne exécution (R. 434-6) ; il exerce ses fonctions avec dignité (sans abus d'autorité ni harcèlement) et apporte aide, soutien et protection à ses subordonnés (R. 434-7).",
      "En s'abstenant de contrôler l'exécution des ordres donnés.",
      "En réservant son soutien aux seuls officiers de police judiciaire."
    ],
    "correct": 1,
    "exp": "Les articles R. 434-6 et R. 434-7 du CSI imposent à l'autorité de commandement de donner des ordres précis accompagnés des explications nécessaires, d'en contrôler l'exécution, de proscrire tout abus d'autorité ou harcèlement, et d'apporter aide et soutien à ses subordonnés."
  },
  {
    "id": 84,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-9 CSI",
    "q": "Que dispose l'article R. 434-9 du CSI concernant le devoir de probité du policier ou du gendarme ?",
    "options": [
      "Il peut accepter des gratifications en nature si leur montant est symbolique.",
      "Il exerce ses fonctions avec probité : il ne se prévaut pas de sa qualité pour obtenir un avantage personnel et n'accepte aucun avantage ni aucune gratification, directe ou indirecte, pour les actes qu'il accomplit ou s'abstient d'accomplir dans l'exercice de ses fonctions.",
      "Il peut utiliser ses fonctions pour régler un litige privé de voisinage.",
      "Le devoir de probité ne concerne que la gestion comptable des scellés."
    ],
    "correct": 1,
    "exp": "L'article R. 434-9 du CSI interdit formellement de se prévaloir de sa qualité pour obtenir un avantage personnel et d'accepter ou solliciter tout avantage ou gratification directe ou indirecte."
  },
  {
    "id": 85,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-10 et R. 434-11 CSI",
    "q": "Quelles sont les obligations du policier en matière de discernement, d'impartialité et de neutralité (art. R. 434-10 et R. 434-11 CSI) ?",
    "options": [
      "Il peut exprimer ses convictions politiques ou religieuses pendant son service s'il n'est pas en contact avec le public.",
      "Il fait preuve de discernement dans l'exercice de ses fonctions (R. 434-10), accomplit ses missions en toute impartialité et sans aucune discrimination, et s'abstient dans l'exercice de ses fonctions de toute expression ou manifestation de ses convictions religieuses, politiques ou philosophiques (R. 434-11).",
      "Le principe de neutralité ne s'applique qu'aux cérémonies officielles.",
      "Le discernement dispense le policier du respect de la loi."
    ],
    "correct": 1,
    "exp": "L'article R. 434-10 consacre le discernement dans l'appréciation des situations, et l'article R. 434-11 impose l'impartialité, la non-discrimination et la stricte neutralité religieuse, politique et philosophique dans l'exercice des fonctions."
  },
  {
    "id": 86,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-12 CSI",
    "q": "Selon l'article R. 434-12 du CSI (crédit et renom de la police et de la gendarmerie nationales), quelle règle régit le comportement du policier en dehors du service et sur les réseaux sociaux ?",
    "options": [
      "Hors service et sur les réseaux sociaux personnels, le policier n'est soumis à aucune obligation déontologique.",
      "Le policier ne se départit de sa dignité en aucune circonstance : en tout temps, dans ou en dehors du service, y compris lorsqu'il s'exprime à travers les réseaux de communication électronique sociaux, il s'abstient de tout acte, propos ou comportement de nature à nuire à la considération portée à la police et à la gendarmerie nationales.",
      "L'usage d'un pseudonyme autorise à tenir des propos contraires à l'honneur de l'institution.",
      "L'article R. 434-12 du CSI ne vise que les prises de parole à la télévision."
    ],
    "correct": 1,
    "exp": "L'article R. 434-12 du CSI s'applique « en tout temps, dans ou en dehors du service, y compris lorsqu'il s'exprime à travers les réseaux de communication électronique sociaux » et veille à ce qu'aucun acte ou propos ne nuise à la considération de l'institution ou à la sécurité des personnels."
  },
  {
    "id": 87,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-13 et R. 434-22 CSI",
    "q": "Que prévoient les articles R. 434-13 et R. 434-22 du CSI concernant les matériels confiés et les fichiers de police (traitements automatisés de données à caractère personnel) ?",
    "options": [
      "Le policier peut consulter les fichiers de police à titre personnel tant qu'il ne divulgue pas les résultats.",
      "Il veille à la préservation des locaux et matériels qui lui sont confiés (R. 434-13) et n'alimente et ne consulte les traitements automatisés de données à caractère personnel que dans le strict respect des finalités propres à chaque traitement et pour les seuls besoins de ses missions (R. 434-22).",
      "Le prêt de sa carte professionnelle ou de son identifiant CHEOPS à un collègue est autorisé.",
      "Les policiers adjoints peuvent utiliser les véhicules de service à des fins privées."
    ],
    "correct": 1,
    "exp": "L'article R. 434-13 interdit d'utiliser les locaux et matériels à des fins étrangères au service, et l'article R. 434-22 encadre strictement l'alimentation et la consultation des fichiers de police pour les seuls besoins des missions."
  },
  {
    "id": 88,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-18 CSI",
    "q": "Selon l'article R. 434-18 du CSI, selon quels principes directeurs le policier ou le gendarme fait-il emploi de la force ?",
    "options": [
      "Sans condition de proportionnalité dès lors que la personne résiste passivement.",
      "Il emploie la force dans le cadre fixé par la loi, uniquement lorsque c'est nécessaire, et de façon proportionnée au but à atteindre ou à la gravité de la menace, suivant les exigences du cas particulier et dans la mesure requise pour l'accomplissement de sa mission.",
      "Uniquement après autorisation téléphonique de l'officier de police judiciaire.",
      "Toujours avec usage d'une arme de force intermédiaire."
    ],
    "correct": 1,
    "exp": "L'article R. 434-18 du CSI pose les deux conditions cumulatives de tout usage de la force : la nécessité (dans le cadre fixé par la loi) et la proportionnalité au but à atteindre ou à la gravité de la menace."
  },
  {
    "id": 89,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-21 CSI",
    "q": "Quelles sont les obligations du policier à l'égard d'une personne appréhendée et placée sous sa garde conformément à l'article R. 434-21 du CSI ?",
    "options": [
      "Il assure uniquement sa surveillance contre l'évasion, sans responsabilité quant à son intégrité physique.",
      "Toute personne appréhendée est placée sous la responsabilité et la protection de la police ou de la gendarmerie : elle ne doit subir aucune violence ni aucun traitement inhumain ou dégradant (des agents ou de tiers), le policier veille à son état de santé, observe une stricte neutralité et la protège de la curiosité du public ou des médias.",
      "Le policier peut exposer la personne interpellée aux caméras des journalistes pour démontrer l'efficacité de l'intervention.",
      "Si un tiers frappe la personne gardée à vue dans les locaux, les policiers n'en sont pas responsables."
    ],
    "correct": 1,
    "exp": "L'article R. 434-21 du CSI place la personne appréhendée sous la responsabilité et la protection des forces de l'ordre : interdiction de toute violence ou traitement dégradant (y compris de la part de tiers), attention portée à l'état de santé (examen médical si nécessaire) et interdiction de l'exposer à la curiosité du public ou des médias sans son accord."
  },
  {
    "id": 90,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-19 et R. 434-20 CSI",
    "q": "Que prévoient les articles R. 434-19 et R. 434-20 du CSI concernant l'assistance aux personnes en danger et l'attention portée aux victimes ?",
    "options": [
      "Le policier hors service n'a aucune obligation d'intervenir lorsqu'une personne est en péril ; les victimes ne sont accueillies que sur rendez-vous.",
      "Même lorsqu'il n'est pas en service, le policier intervient de sa propre initiative pour porter assistance à toute personne en danger (R. 434-19) ; sans se départir de son impartialité, il accorde une attention particulière aux victimes et veille à la qualité de leur prise en charge tout au long de la procédure les concernant (R. 434-20).",
      "Le devoir d'assistance hors service impose au policier de prendre le parti de la victime en renonçant à son impartialité.",
      "L'accueil des victimes relève exclusivement des associations d'aide aux victimes."
    ],
    "correct": 1,
    "exp": "L'article R. 434-19 du CSI impose au policier, même hors service, d'intervenir de sa propre initiative pour porter assistance à toute personne en danger. L'article R. 434-20 du CSI lui impose, sans se départir de son impartialité, d'accorder une attention particulière aux victimes et de garantir la qualité de leur prise en charge."
  },
  {
    "id": 91,
    "module": "m1",
    "ref": "Fiche Organisation PN (Introduction)",
    "q": "Combien de grandes entités comporte la Police nationale ?",
    "options": [
      "2 grandes entités (D.G.P.N. et D.G.G.N.).",
      "3 grandes entités (D.G.P.N., D.G.S.I. et Préfecture de police de Paris).",
      "4 grandes entités (D.N.S.P., D.N.P.J., D.N.P.A.F. et D.C.C.R.S.).",
      "5 grandes entités régionales."
    ],
    "correct": 1,
    "exp": "La Police nationale comporte 3 grandes entités au sein desquelles les agents exercent leurs missions : la D.G.P.N., la D.G.S.I. et la Préfecture de police de Paris (P.P.)."
  },
  {
    "id": 92,
    "module": "m1",
    "ref": "Fiche Organisation PN",
    "q": "Que signifie le sigle D.G.P.N. ?",
    "options": [
      "Direction de la Gestion de la Police Nationale.",
      "Direction Générale de la Police Nationale.",
      "Direction Gouvernementale de la Prévention Nationale.",
      "Délégation Générale de la Police Nationale."
    ],
    "correct": 1,
    "exp": "D.G.P.N. signifie Direction générale de la police nationale."
  },
  {
    "id": 93,
    "module": "m1",
    "ref": "Fiche Organisation PN",
    "q": "Que signifie le sigle D.G.S.I. ?",
    "options": [
      "Direction Générale de la Sécurité Intérieure.",
      "Direction Générale des Services d'Intervention.",
      "Division Générale de la Surveillance Informatique.",
      "Direction de la Gendarmerie et de la Sécurité Intérieure."
    ],
    "correct": 0,
    "exp": "D.G.S.I. signifie Direction générale de la sécurité intérieure."
  },
  {
    "id": 94,
    "module": "m1",
    "ref": "Fiche Organisation PN (Directions actives)",
    "q": "Que signifie le sigle D.N.S.P. ?",
    "options": [
      "Direction Nationale des Services de Police.",
      "Direction Nationale de la Sécurité Publique.",
      "Division Nationale de la Sécurité de Proximité.",
      "Direction Nationale du Soutien Policier."
    ],
    "correct": 1,
    "exp": "D.N.S.P. signifie Direction nationale de la sécurité publique."
  },
  {
    "id": 95,
    "module": "m1",
    "ref": "Fiche Organisation PN (Directions actives)",
    "q": "Que signifie le sigle D.N.P.J. ?",
    "options": [
      "Direction Nationale de la Police Judiciaire.",
      "Département National des Procédures Judiciaires.",
      "Direction Nationale de la Prévention de la Jeunesse.",
      "Division Nationale des Policiers Juristes."
    ],
    "correct": 0,
    "exp": "D.N.P.J. signifie Direction nationale de la police judiciaire."
  },
  {
    "id": 96,
    "module": "m1",
    "ref": "Fiche Organisation PN (Directions actives)",
    "q": "Que signifie le sigle D.N.P.A.F. ?",
    "options": [
      "Direction Nationale de la Police Administrative et Financière.",
      "Direction Nationale de la Police Aux Frontières.",
      "Direction Nationale des Policiers Adjoints de France.",
      "Division Nationale de Protection Aérienne et Ferroviaire."
    ],
    "correct": 1,
    "exp": "D.N.P.A.F. signifie Direction nationale de la police aux frontières."
  },
  {
    "id": 97,
    "module": "m1",
    "ref": "Fiche Organisation PN (Directions actives)",
    "q": "Que signifie le sigle D.N.R.T. ?",
    "options": [
      "Direction Nationale de la Régulation du Trafic.",
      "Direction Nationale du Renseignement Territorial.",
      "Division Nationale des Réseaux de Télécommunications.",
      "Direction Nationale de la Réserve Territoriale."
    ],
    "correct": 1,
    "exp": "D.N.R.T. signifie Direction nationale du renseignement territorial."
  },
  {
    "id": 98,
    "module": "m1",
    "ref": "Fiche Organisation PN (Directions actives)",
    "q": "Que signifie le sigle D.C.C.R.S. ?",
    "options": [
      "Direction Centrale des Compagnies Républicaines de Sécurité.",
      "Direction Commune des Corps de Réserve et de Sécurité.",
      "Département Central de Coordination Routière et de Secours.",
      "Direction Centrale du Contrôle des Risques Sanitaires."
    ],
    "correct": 0,
    "exp": "D.C.C.R.S. signifie Direction centrale des compagnies républicaines de sécurité."
  },
  {
    "id": 99,
    "module": "m1",
    "ref": "Fiche Organisation PN (Directions actives)",
    "q": "Que signifie le sigle I.G.P.N. ?",
    "options": [
      "Institut de Gestion de la Police Nationale.",
      "Inspection Générale de la Police Nationale.",
      "Intendance Générale de la Police Nationale.",
      "Intervention Groupée de la Police Nationale."
    ],
    "correct": 1,
    "exp": "I.G.P.N. signifie Inspection générale de la police nationale (« la police des polices »)."
  },
  {
    "id": 100,
    "module": "m1",
    "ref": "Fiche Organisation PN",
    "q": "Que signifient les quatre lettres de l'unité d'élite R.A.I.D. ?",
    "options": [
      "Renseignement, Action, Intervention, Défense.",
      "Recherche, Assistance, Intervention, Dissuasion.",
      "Réaction, Appui, Investigation, Détection.",
      "Regroupement, Assaut, Interpellation, Défense."
    ],
    "correct": 1,
    "exp": "R.A.I.D. signifie Unité de recherche, d'assistance, d'intervention et de dissuasion."
  },
  {
    "id": 101,
    "module": "m1",
    "ref": "Fiche Organisation PN",
    "q": "Que signifie le sigle S.N.P.S. ?",
    "options": [
      "Service National de Police Scientifique.",
      "Service National de Prévention et de Sécurité.",
      "Section Nationale de Protection Spécialisée.",
      "Syndicat National des Policiers Spécialisés."
    ],
    "correct": 0,
    "exp": "S.N.P.S. signifie Service national de police scientifique."
  },
  {
    "id": 102,
    "module": "m1",
    "ref": "Fiche Organisation PN",
    "q": "Que signifie le sigle S.D.L.P. ?",
    "options": [
      "Service de la Logistique Policière.",
      "Service de la Protection.",
      "Section Départementale de Lutte Préventive.",
      "Service de Direction de la Législation Pénale."
    ],
    "correct": 1,
    "exp": "S.D.L.P. signifie Service de la protection (chargé notamment de la protection des hautes personnalités)."
  },
  {
    "id": 103,
    "module": "m1",
    "ref": "Fiche Galonnage CEA",
    "q": "Quelle est l'appellation officielle pour s'adresser à un Policier Adjoint ?",
    "options": [
      "« Gardien ».",
      "« Adjoint ».",
      "« Élève ».",
      "« Agent »."
    ],
    "correct": 1,
    "exp": "L'appellation réglementaire d'un Policier Adjoint est « Adjoint »."
  },
  {
    "id": 104,
    "module": "m1",
    "ref": "Fiche Galonnage CEA",
    "q": "Quel est le galonnage d'un Policier Adjoint ?",
    "options": [
      "1 chevron blanc sur fond noir.",
      "Fond bleu Loire sans galon.",
      "Fond bleu clair sans galon.",
      "1 alpha blanc."
    ],
    "correct": 1,
    "exp": "Le Policier Adjoint porte une patte d'épaule (ou manchon) à fond bleu Loire sans galon."
  },
  {
    "id": 105,
    "module": "m1",
    "ref": "Fiche Galonnage CEA",
    "q": "Quel est le galonnage et l'appellation d'un Policier Adjoint Réserviste ?",
    "options": [
      "Fond bleu Loire sans galon — appellation « Adjoint ».",
      "Fond bleu clair sans galon — appellation « Réserviste ».",
      "1 chevron blanc — appellation « Réserviste ».",
      "2 chevrons blancs — appellation « Gardien »."
    ],
    "correct": 1,
    "exp": "Le Policier Adjoint Réserviste porte un fond bleu clair sans galon et son appellation est « Réserviste »."
  },
  {
    "id": 106,
    "module": "m1",
    "ref": "Fiche Galonnage CEA",
    "q": "Quel est le galonnage d'un Élève Gardien de la Paix et son appellation ?",
    "options": [
      "Patte d'épaule sans chevron (avec bouton) — appellation « Gardien ».",
      "1 chevron blanc — appellation « Élève ».",
      "1 alpha blanc — appellation « Gardien ».",
      "Fond bleu clair sans bouton — appellation « Stagiaire »."
    ],
    "correct": 0,
    "exp": "L'Élève Gardien de la Paix porte une patte d'épaule bleu police (ou bleu CRS) sans chevron, et son appellation est déjà « Gardien »."
  },
  {
    "id": 107,
    "module": "m1",
    "ref": "Fiche Galonnage CEA",
    "q": "Quel est le galonnage d'un Gardien de la Paix stagiaire ?",
    "options": [
      "Aucun chevron.",
      "1 chevron blanc.",
      "2 chevrons blancs.",
      "3 chevrons blancs."
    ],
    "correct": 1,
    "exp": "Le Gardien de la Paix stagiaire porte 1 chevron blanc (appellation : « Gardien »)."
  },
  {
    "id": 108,
    "module": "m1",
    "ref": "Fiche Galonnage CEA",
    "q": "Combien de chevrons blancs porte un Gardien de la Paix titulaire (avant le 6e échelon) ?",
    "options": [
      "1 chevron blanc.",
      "2 chevrons blancs.",
      "3 chevrons blancs.",
      "1 galon blanc avec raie rouge."
    ],
    "correct": 1,
    "exp": "Le Gardien de la Paix titulaire porte 2 chevrons blancs (appellation : « Gardien »)."
  },
  {
    "id": 109,
    "module": "m1",
    "ref": "Fiche Galonnage CEA",
    "q": "Combien de chevrons blancs porte un Gardien de la Paix ayant atteint le 6e échelon et quelle est son appellation ?",
    "options": [
      "2 chevrons blancs — appellation « Brigadier ».",
      "3 chevrons blancs — appellation « Sous-Brigadier ».",
      "3 chevrons blancs — appellation « Brigadier-Chef ».",
      "1 galon blanc — appellation « Sous-Brigadier »."
    ],
    "correct": 1,
    "exp": "Au 6e échelon, le Gardien de la Paix porte 3 chevrons blancs et a pour appellation « Sous-Brigadier »."
  },
  {
    "id": 110,
    "module": "m1",
    "ref": "Fiche Galonnage CEA",
    "q": "Quel est le galonnage d'un Brigadier-Chef de police ?",
    "options": [
      "3 chevrons blancs.",
      "1 galon blanc avec raie rouge.",
      "1 galon blanc avec raie rouge et 1 liseré blanc.",
      "2 galons blancs."
    ],
    "correct": 1,
    "exp": "Le Brigadier-Chef de police porte 1 galon blanc avec raie rouge (appellation : « Brigadier-Chef »)."
  },
  {
    "id": 111,
    "module": "m1",
    "ref": "Fiche Galonnage CEA",
    "q": "Quel est le galonnage d'un Major de police (hors RULP) ?",
    "options": [
      "1 galon blanc avec raie rouge uniquement.",
      "1 galon blanc avec raie rouge et 1 liseré blanc.",
      "2 galons blancs avec raie rouge.",
      "3 galons blancs."
    ],
    "correct": 1,
    "exp": "Le Major de police porte 1 galon blanc avec raie rouge surmonté d'un liseré blanc (appellation : « Major »)."
  },
  {
    "id": 112,
    "module": "m1",
    "ref": "Fiche Galonnage Commandement (p. 39)",
    "q": "Combien de galons blancs porte un Capitaine de police ayant l'appellation « Capitaine » ?",
    "options": [
      "2 galons blancs.",
      "3 galons blancs.",
      "4 galons blancs.",
      "1 galon blanc et un losange."
    ],
    "correct": 1,
    "exp": "Le Capitaine de police (après ses 4 ans comme Lieutenant à 2 galons blancs) porte 3 galons blancs et a pour appellation « Capitaine »."
  },
  {
    "id": 113,
    "module": "m1",
    "ref": "Fiche Galonnage Commandement (p. 39)",
    "q": "Quel est le galonnage d'un Commandant de police (premier grade de commandant) ?",
    "options": [
      "3 galons blancs et 1 pointe de diamant.",
      "4 galons blancs.",
      "5 galons blancs.",
      "1 branche de chêne à 3 feuilles."
    ],
    "correct": 1,
    "exp": "Le Commandant de police porte 4 galons blancs (appellation : « Commandant »)."
  },
  {
    "id": 114,
    "module": "m1",
    "ref": "Fiche Galonnage Conception et Direction",
    "q": "Quelle est l'appellation réglementaire d'un Commissaire de police ?",
    "options": [
      "« Commissaire » tout court.",
      "« Madame ou Monsieur le Commissaire ».",
      "« Mon Commissaire ».",
      "« Chef »."
    ],
    "correct": 1,
    "exp": "Dans le corps de conception et de direction, on utilise toujours « Madame ou Monsieur le... » (ici : « Madame ou Monsieur le Commissaire »)."
  },
  {
    "id": 115,
    "module": "m1",
    "ref": "Fiche Galonnage Conception et Direction",
    "q": "Combien de pointes de diamant argent porte le Directeur général de la Police nationale (D.G.P.N.) ?",
    "options": [
      "2 pointes de diamant argent.",
      "3 pointes de diamant argent.",
      "4 pointes de diamant argent.",
      "5 pointes de diamant argent."
    ],
    "correct": 3,
    "exp": "Le Directeur général de la Police nationale porte une branche de chêne (9 feuilles et 3 glands) et 5 pointes de diamant argent."
  },
  {
    "id": 116,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Quels sont les trois éléments constitutifs indispensables pour qu'une infraction existe ?",
    "options": [
      "Un auteur, une victime et un témoin.",
      "Un élément légal, un élément matériel et un élément moral.",
      "Une plainte, une garde à vue et un jugement.",
      "Un crime, un délit et une contravention."
    ],
    "correct": 1,
    "exp": "Pour que l'infraction existe, trois éléments constitutifs généraux doivent être réunis : l'élément légal, l'élément matériel et l'élément moral."
  },
  {
    "id": 117,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Quelles sont les trois catégories d'infractions en droit pénal français (classification tripartite) ?",
    "options": [
      "Les fautes, les délits et les crimes.",
      "Les contraventions, les délits et les crimes.",
      "Les amendes, les peines et les mesures de sûreté.",
      "Les infractions d'action, d'omission et de tentative."
    ],
    "correct": 1,
    "exp": "Le Code pénal classe les infractions en trois catégories selon leur gravité : contraventions, délits et crimes."
  },
  {
    "id": 118,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Par quels textes sont prévus les crimes et les délits (élément légal) ?",
    "options": [
      "Par de simples arrêtés municipaux.",
      "Par des lois.",
      "Par des circulaires internes.",
      "Par des décrets uniquement."
    ],
    "correct": 1,
    "exp": "Les crimes et les délits sont prévus par des lois (votées par le Parlement)."
  },
  {
    "id": 119,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Par quels textes sont prévues les contraventions (élément légal) ?",
    "options": [
      "Par des règlements (décrets, arrêtés).",
      "Par la Constitution.",
      "Par les juges d'instruction.",
      "Par coutume orale."
    ],
    "correct": 0,
    "exp": "Les contraventions sont prévues par des règlements (décrets, arrêtés)."
  },
  {
    "id": 120,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Quel article du Code pénal définit le vol ?",
    "options": [
      "L'article 121-1 du Code pénal.",
      "L'article 311-1 du Code pénal.",
      "L'article 73 du Code de procédure pénale.",
      "L'article L. 435-1 du CSI."
    ],
    "correct": 1,
    "exp": "L'article 311-1 du Code pénal définit le vol (et l'article 311-3 du Code pénal le réprime)."
  },
  {
    "id": 121,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Comment appelle-t-on une infraction dans laquelle l'individu commet un acte interdit par la loi (comme le vol ou le meurtre) ?",
    "options": [
      "Une infraction d'omission.",
      "Une infraction de commission.",
      "Une infraction impossible.",
      "Une infraction putative."
    ],
    "correct": 1,
    "exp": "Lorsque l'individu commet un acte interdit par la loi, il y a infraction de commission."
  },
  {
    "id": 122,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Comment appelle-t-on une infraction dans laquelle l'individu ne fait pas ce que la loi lui ordonne de faire (ex. non-assistance à personne en péril) ?",
    "options": [
      "Une infraction de commission.",
      "Une infraction d'omission.",
      "Un acte préparatoire.",
      "Un fait justificatif."
    ],
    "correct": 1,
    "exp": "Lorsque l'individu s'abstient de faire ce que la loi ordonne, il y a infraction d'omission."
  },
  {
    "id": 123,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "À quoi correspond « l'élément moral » d'une infraction ?",
    "options": [
      "Au texte de loi qui interdit l'acte.",
      "Au fait que l'acte répréhensible soit issu de la volonté de son auteur.",
      "Au préjudice financier subi par la victime.",
      "Aux excuses présentées par l'auteur en garde à vue."
    ],
    "correct": 1,
    "exp": "Il n'y a pas d'infraction sans élément moral, c'est-à-dire qu'il faut que l'acte répréhensible soit issu de la volonté de son auteur."
  },
  {
    "id": 124,
    "module": "m2",
    "ref": "Fiche L'Infraction (p. 18)",
    "q": "Comment se définit la faute intentionnelle (l'intention) en droit pénal ?",
    "options": [
      "Par une simple maladresse ou imprudence.",
      "Par la conscience ou la volonté d'accomplir un acte illicite.",
      "Par la connaissance personnelle de la victime.",
      "Par le regret exprimé après l'acte."
    ],
    "correct": 1,
    "exp": "L'intention se définit par la conscience ou la volonté d'accomplir un acte illicite."
  },
  {
    "id": 125,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "Quelles sont les deux conditions cumulatives nécessaires pour que la tentative soit punissable (art. 121-5 CP) ?",
    "options": [
      "Un acte préparatoire et un aveu de l'auteur.",
      "Un commencement d'exécution et l'absence de désistement volontaire.",
      "Une réunion de plusieurs complices et l'usage d'une arme.",
      "Une plainte de la victime et un préjudice matériel."
    ],
    "correct": 1,
    "exp": "Pour que la tentative soit retenue, deux conditions doivent être réunies : un commencement d'exécution et l'absence de désistement volontaire."
  },
  {
    "id": 126,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "La tentative d'un crime est-elle punissable ?",
    "options": [
      "Oui, la tentative de crime est toujours punissable.",
      "Non, jamais.",
      "Uniquement si l'auteur est récidiviste.",
      "Uniquement si la victime est blessée."
    ],
    "correct": 0,
    "exp": "Conformément à l'article 121-4 du Code pénal, la tentative de crime est toujours punissable."
  },
  {
    "id": 127,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "La tentative d'un délit est-elle punissable ?",
    "options": [
      "Oui, pour absolument tous les délits sans exception.",
      "Oui, mais uniquement dans les cas prévus par la loi.",
      "Non, la tentative de délit n'existe pas.",
      "Uniquement si le délit est commis la nuit."
    ],
    "correct": 1,
    "exp": "En matière délictuelle, la tentative n'est punissable que dans les cas expressément prévus par la loi (ex. tentative de vol)."
  },
  {
    "id": 128,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "La tentative de contravention est-elle punissable ?",
    "options": [
      "Oui, toujours.",
      "Oui, pour les contraventions de 5e classe.",
      "Non, la tentative de contravention n'est jamais punissable.",
      "Uniquement en matière routière."
    ],
    "correct": 2,
    "exp": "L'article 121-4 du Code pénal ne vise que les crimes et certains délits : la tentative de contravention n'est jamais punissable."
  },
  {
    "id": 129,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "Le simple fait d'acheter un pied-de-biche en magasin avec l'idée de commettre plus tard un cambriolage constitue :",
    "options": [
      "Un commencement d'exécution punissable pour tentative de vol.",
      "Un acte préparatoire non punissable au titre de la tentative.",
      "Un délit de complicité.",
      "Une infraction manquée."
    ],
    "correct": 1,
    "exp": "L'achat du pied-de-biche ne constitue qu'un acte préparatoire non punissable (l'auteur n'est pas encore en action du crime ou du délit)."
  },
  {
    "id": 130,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "En quoi consiste le « désistement volontaire » ?",
    "options": [
      "À prendre la fuite à l'arrivée de la police.",
      "À renoncer de sa propre volonté à la commission de l'infraction.",
      "À avouer les faits lors de son audition.",
      "À rembourser la victime après le vol."
    ],
    "correct": 1,
    "exp": "Le désistement volontaire consiste à renoncer librement et de sa propre volonté à commettre l'infraction avant sa consommation."
  },
  {
    "id": 131,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "Un cambrioleur fracture la porte d'une maison avec un pied-de-biche mais s'enfuit sans rien voler car un voisin arrive. Est-il punissable pour tentative de vol ?",
    "options": [
      "Non, car il n'a rien emporté.",
      "Oui, car il y a eu commencement d'exécution (fracturer la porte) et interruption par une cause extérieure à sa volonté (arrivée du voisin).",
      "Non, c'est un désistement volontaire.",
      "Il n'encourt qu'une simple contravention."
    ],
    "correct": 1,
    "exp": "Dès lors que la porte est fracturée (commencement d'exécution) et que l'interruption est due à l'arrivée d'un tiers (absence de désistement volontaire), la tentative de vol est caractérisée."
  },
  {
    "id": 132,
    "module": "m2",
    "ref": "Fiche La Tentative Infructueuse (p. 20)",
    "q": "Quelles sont les deux catégories qui composent la « tentative infructueuse » ?",
    "options": [
      "L'acte préparatoire et le repentir actif.",
      "L'infraction manquée et l'infraction impossible.",
      "L'infraction d'action et l'infraction d'omission.",
      "Le crime et le délit."
    ],
    "correct": 1,
    "exp": "La tentative infructueuse recouvre deux hypothèses : l'infraction manquée (maladresse) et l'infraction impossible."
  },
  {
    "id": 133,
    "module": "m2",
    "ref": "Fiche La Tentative Infructueuse (p. 20)",
    "q": "Un pickpocket plonge la main dans la poche d'un passant pour le voler, mais la poche est vide. De quoi s'agit-il ?",
    "options": [
      "D'un acte non punissable car la poche était vide.",
      "D'une infraction impossible, qui est punie comme l'infraction tentée.",
      "D'un désistement volontaire.",
      "D'une simple contravention."
    ],
    "correct": 1,
    "exp": "C'est l'exemple type de l'infraction impossible cité par le cours : elle est punie exactement comme l'infraction tentée."
  },
  {
    "id": 134,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21)",
    "q": "Comment appelle-t-on la personne qui réalise personnellement tous les éléments constitutifs de l'infraction avec un autre auteur ?",
    "options": [
      "Un témoin assisté.",
      "Un coauteur.",
      "Un receleur.",
      "Un instigateur."
    ],
    "correct": 1,
    "exp": "Le coauteur est celui qui réalise tous les éléments constitutifs de l'infraction (ou qui apporte son aide en étant présent sur place au moment des faits)."
  },
  {
    "id": 135,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21)",
    "q": "Quelles sont les trois conditions nécessaires pour que la complicité soit punissable ?",
    "options": [
      "Un contrat écrit, une rémunération et une arme.",
      "Un fait principal punissable, une participation à l'infraction et une intention de participer à cette infraction.",
      "La présence obligatoire sur les lieux, un aveu et une récidive.",
      "Trois personnes minimum, un crime et une condamnation préalable."
    ],
    "correct": 1,
    "exp": "La complicité punissable exige la réunion de 3 conditions : un fait principal punissable, un acte matériel de participation et une intention de participer."
  },
  {
    "id": 136,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21)",
    "q": "Quel article du Code pénal définit la complicité ?",
    "options": [
      "L'article 121-7 du Code pénal.",
      "L'article 122-5 du Code pénal.",
      "L'article 311-1 du Code pénal.",
      "L'article 53 du Code de procédure pénale."
    ],
    "correct": 0,
    "exp": "C'est l'article 121-7 du Code pénal qui définit les cas de complicité."
  },
  {
    "id": 137,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21 & 22)",
    "q": "Quels sont les trois modes de participation matérielle à la complicité prévus par l'article 121-7 du Code pénal ?",
    "options": [
      "Le vol, le recel et le blanchiment.",
      "L'aide ou assistance, la provocation et la fourniture d'instructions.",
      "L'achat, la vente et le transport.",
      "La négligence, l'imprudence et l'omission."
    ],
    "correct": 1,
    "exp": "L'article 121-7 CP prévoit 3 formes d'actes : 1) la complicité par aide ou assistance ; 2) la complicité par provocation ; 3) la complicité par fourniture d'instructions."
  },
  {
    "id": 138,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21)",
    "q": "Fournir une arme ou du poison à une personne en sachant qu'elle va s'en servir pour tuer quelqu'un relève de :",
    "options": [
      "La complicité par aide ou assistance (fourniture de moyens matériels).",
      "L'état de nécessité.",
      "La légitime défense.",
      "L'erreur de droit."
    ],
    "correct": 0,
    "exp": "Celui qui procure sciemment une arme ou du poison facilite la préparation ou la consommation de l'infraction : il est complice par aide ou assistance."
  },
  {
    "id": 139,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 22)",
    "q": "Un simple conseil donné à quelqu'un (sans don, promesse, ordre, menace, ni abus d'autorité) suffit-il à rendre complice par provocation ?",
    "options": [
      "Oui, tout conseil rend complice.",
      "Non, le simple conseil donné n'entraîne pas la complicité.",
      "Oui, s'il est donné par téléphone.",
      "Oui, pour les contraventions."
    ],
    "correct": 1,
    "exp": "La fiche p. 22 précise expressément : « Le simple conseil donné n'entraîne pas la complicité. » Il faut un don, une promesse, un ordre, une menace ou un abus d'autorité/pouvoir."
  },
  {
    "id": 140,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 22)",
    "q": "Indiquer volontairement à un cambrioleur les heures auxquelles un voisin est absent de son domicile constitue :",
    "options": [
      "Une complicité par fourniture d'instructions.",
      "Une infraction impossible.",
      "Un fait justificatif.",
      "Un acte non punissable."
    ],
    "correct": 0,
    "exp": "Donner des indications précises de nature à faciliter l'exécution d'un cambriolage en connaissance de cause constitue une complicité par fourniture d'instructions."
  },
  {
    "id": 141,
    "module": "m3",
    "ref": "Fiche Responsabilité Pénale (p. 35)",
    "q": "Quel principe fondamental pose l'article 121-1 du Code pénal ?",
    "options": [
      "« Les parents sont pénalement responsables des délits de leurs enfants ».",
      "« Nul n'est responsable que de son propre fait ».",
      "« Toute personne soupçonnée est présumée coupable ».",
      "« Le chef de service est pénalement responsable de ses agents »."
    ],
    "correct": 1,
    "exp": "L'article 121-1 du Code pénal dispose que « Nul n'est responsable que de son propre fait »."
  },
  {
    "id": 142,
    "module": "m3",
    "ref": "Fiche La Minorité (p. 35)",
    "q": "À partir de quel âge un mineur est-il présumé capable de discernement selon le Code de la justice pénale des mineurs (CJPM) ?",
    "options": [
      "À partir de 10 ans.",
      "À partir de 13 ans.",
      "À partir de 15 ans.",
      "À partir de 16 ans."
    ],
    "correct": 1,
    "exp": "Les mineurs de moins de 13 ans bénéficient d'une présomption de non-discernement ; a contrario, les mineurs de 13 ans et plus sont présumés capables de discernement."
  },
  {
    "id": 143,
    "module": "m3",
    "ref": "Fiche La Minorité (p. 35)",
    "q": "De quelle présomption bénéficient les mineurs âgés de moins de 13 ans ?",
    "options": [
      "D'une présomption de culpabilité.",
      "D'une présomption de non-discernement.",
      "D'une immunité diplomatique.",
      "D'une présomption de légitime défense."
    ],
    "correct": 1,
    "exp": "Les mineurs de moins de 13 ans bénéficient d'une présomption de non-discernement (art. L. 11-1 CJPM)."
  },
  {
    "id": 144,
    "module": "m3",
    "ref": "Fiche La Minorité (p. 35)",
    "q": "Qui a compétence pour apprécier la capacité de discernement d'un mineur ?",
    "options": [
      "Le Policier Adjoint.",
      "L'Officier de Police Judiciaire.",
      "Le magistrat (et non l'enquêteur).",
      "Le maire de la commune."
    ],
    "correct": 2,
    "exp": "La fiche p. 35 précise : « Cette capacité de discernement relève de l'appréciation du magistrat et non de l'enquêteur. »"
  },
  {
    "id": 145,
    "module": "m3",
    "ref": "Fiche La Minorité (p. 35)",
    "q": "Un mineur âgé de moins de 13 ans peut-il être entendu en audition libre par les services de police ?",
    "options": [
      "Non, c'est strictement interdit.",
      "Oui, la présomption d'absence de discernement n'interdit pas son audition libre.",
      "Uniquement s'il est majeur émancipé.",
      "Uniquement devant une cour d'assises."
    ],
    "correct": 1,
    "exp": "Le NOTA de la fiche p. 35 rappelle que les mineurs de moins de 13 ans peuvent toujours être auditionnés dans le cadre d'une audition libre."
  },
  {
    "id": 146,
    "module": "m3",
    "ref": "Fiche La Minorité (p. 35)",
    "q": "Dans quelle tranche d'âge un mineur de moins de 13 ans peut-il faire l'objet d'une « retenue » ?",
    "options": [
      "De 6 à 10 ans.",
      "De 10 à 13 ans.",
      "Dès la naissance.",
      "Jamais avant 15 ans."
    ],
    "correct": 1,
    "exp": "Le mineur de 10 à 13 ans peut faire l'objet d'une retenue."
  },
  {
    "id": 147,
    "module": "m3",
    "ref": "Fiche La Minorité (p. 35)",
    "q": "Si un mineur de moins de 13 ans (jugé discernant) est reconnu coupable d'une infraction, de quoi peut-il faire l'objet ?",
    "options": [
      "D'une peine de prison ferme.",
      "Uniquement de mesures éducatives (avertissement judiciaire ou mesure éducative judiciaire).",
      "D'une amende pénale maximale.",
      "D'une garde à vue de 96 heures."
    ],
    "correct": 1,
    "exp": "Jusqu'à 13 ans, le mineur reconnu coupable pourra seulement faire l'objet de mesures éducatives (jamais de peine)."
  },
  {
    "id": 148,
    "module": "m3",
    "ref": "Fiche La Minorité (p. 35)",
    "q": "À partir de quel âge un mineur reconnu coupable peut-il faire l'objet d'une peine (diminuée) si les circonstances et sa personnalité l'exigent ?",
    "options": [
      "À partir de 10 ans.",
      "À partir de plus de 13 ans.",
      "Uniquement à 18 ans.",
      "À partir de 8 ans."
    ],
    "correct": 1,
    "exp": "Le mineur de plus de 13 ans peut faire l'objet de mesures éducatives et, si les circonstances et sa personnalité l'exigent, de peines diminuées."
  },
  {
    "id": 149,
    "module": "m3",
    "ref": "Fiche Trouble Psychique (p. 36)",
    "q": "Quel est l'effet d'un trouble psychique ou neuropsychique ayant totalement « aboli » le discernement au moment des faits (art. 122-1 al. 1 CP) ?",
    "options": [
      "Une simple diminution d'amende.",
      "L'irresponsabilité pénale du sujet.",
      "Le doublement de la peine.",
      "L'application d'une contravention."
    ],
    "correct": 1,
    "exp": "Lorsque la perte de discernement est totale (abolition) au moment des faits, cet état entraîne l'irresponsabilité pénale du sujet."
  },
  {
    "id": 150,
    "module": "m3",
    "ref": "Fiche Trouble Psychique (p. 36)",
    "q": "Quel est l'effet d'un trouble psychique ayant simplement « altéré » le discernement au moment des faits (art. 122-1 al. 2 CP) ?",
    "options": [
      "L'irresponsabilité pénale totale.",
      "Cet état n'exclut pas la sanction pénale, mais la responsabilité pénale peut être atténuée par la juridiction.",
      "Aucune poursuite n'est possible.",
      "L'affaire est transférée au tribunal administratif."
    ],
    "correct": 1,
    "exp": "La simple altération du discernement n'exclut pas la sanction pénale, mais la responsabilité pénale peut être atténuée par la juridiction."
  },
  {
    "id": 151,
    "module": "m3",
    "ref": "Fiche La Contrainte (p. 36)",
    "q": "Quelles sont les deux formes de contrainte prévues par l'article 122-2 du Code pénal ?",
    "options": [
      "La contrainte financière et la contrainte routière.",
      "La contrainte physique et la contrainte morale.",
      "La contrainte légale et la contrainte judiciaire.",
      "La contrainte légère et la contrainte lourde."
    ],
    "correct": 1,
    "exp": "L'article 122-2 du Code pénal distingue la contrainte physique et la contrainte morale, qui anéantissent la responsabilité."
  },
  {
    "id": 152,
    "module": "m3",
    "ref": "Fiche La Contrainte (p. 36)",
    "q": "Quels caractères doit présenter la contrainte physique (art. 122-2 CP) ?",
    "options": [
      "Une force matérielle, irrésistible et imprévisible.",
      "Une simple fatigue passagère.",
      "Une pluie légère prévue par la météo.",
      "Un conseil donné par un proche."
    ],
    "correct": 0,
    "exp": "La contrainte est physique lorsqu'elle résulte d'une force matérielle, irrésistible et imprévisible qui oblige à accomplir un acte défendu ou empêche d'accomplir un acte obligatoire."
  },
  {
    "id": 153,
    "module": "m3",
    "ref": "Fiche La Contrainte (p. 36)",
    "q": "De quoi résulte la « contrainte morale » (art. 122-2 CP) ?",
    "options": [
      "D'une panne mécanique de voiture.",
      "D'une crainte inspirée à une personne, agissant sur sa volonté avec une force irrésistible.",
      "D'une erreur de lecture du Code pénal.",
      "D'une autorisation du maire."
    ],
    "correct": 1,
    "exp": "La contrainte est morale lorsqu'elle résulte d'une crainte inspirée à une personne, agissant sur sa volonté avec une force irrésistible."
  },
  {
    "id": 154,
    "module": "m3",
    "ref": "Fiche L'Erreur de Droit (p. 36)",
    "q": "Quel article du Code pénal prévoit l'irresponsabilité pénale pour « erreur sur le droit » ?",
    "options": [
      "L'article 122-3 du Code pénal.",
      "L'article 311-1 du Code pénal.",
      "L'article 53 du CPP.",
      "L'article 78-2 du CPP."
    ],
    "correct": 0,
    "exp": "L'erreur sur le droit est prévue par l'article 122-3 du Code pénal."
  },
  {
    "id": 155,
    "module": "m3",
    "ref": "Fiche L'Erreur de Droit (p. 36)",
    "q": "Dans quel cas l'erreur de droit (art. 122-3 CP) peut-elle être reconnue ?",
    "options": [
      "Dès qu'un citoyen dit qu'il n'avait pas lu la loi.",
      "En cas d'information erronée fournie préalablement par l'administration interrogée ou de défaut de publication du texte normatif.",
      "Lorsque l'auteur était pressé.",
      "Lorsqu'un ami lui a dit que c'était légal."
    ],
    "correct": 1,
    "exp": "L'auteur doit justifier d'une erreur sur le droit qu'il n'était pas en mesure d'éviter (ex. information erronée fournie par l'administration ou texte non publié)."
  },
  {
    "id": 156,
    "module": "m3",
    "ref": "Fiche Les Faits Justificatifs (p. 37)",
    "q": "Lorsqu'un médecin déclare une maladie contagieuse comme la loi le lui impose, pourquoi n'est-il pas punissable pour violation du secret professionnel ?",
    "options": [
      "Parce qu'il bénéficie de la légitime défense.",
      "Parce qu'il accomplit un acte prescrit ou autorisé par des dispositions législatives ou réglementaires (art. 122-4 al. 1 CP).",
      "Parce qu'il a moins de 13 ans.",
      "Parce qu'il est atteint d'un trouble psychique."
    ],
    "correct": 1,
    "exp": "Il est couvert par le fait justificatif de l'article 122-4 alinéa 1 du Code pénal (ordre ou autorisation de la loi ou du règlement)."
  },
  {
    "id": 157,
    "module": "m3",
    "ref": "Fiche Les Faits Justificatifs (p. 37)",
    "q": "Le commandement de l'autorité légitime (art. 122-4 al. 2 CP) justifie-t-il un acte lorsque l'ordre reçu est manifestement illégal ?",
    "options": [
      "Oui, l'ordre couvre toujours le subordonné.",
      "Non, il n'y a jamais de justification lorsque l'ordre est manifestement illégal.",
      "Oui, si l'ordre est donné par écrit.",
      "Oui, en enquête de flagrance."
    ],
    "correct": 1,
    "exp": "L'article 122-4 al. 2 du Code pénal exclut formellement toute justification lorsque l'acte est manifestement illégal."
  },
  {
    "id": 158,
    "module": "m3",
    "ref": "Fiche L'État de Nécessité (p. 37)",
    "q": "Quel article du Code pénal définit « l'état de nécessité » ?",
    "options": [
      "L'article 122-7 du Code pénal.",
      "L'article 121-1 du Code pénal.",
      "L'article 433-10 du Code pénal.",
      "L'article 74 du CPP."
    ],
    "correct": 0,
    "exp": "L'état de nécessité est prévu par l'article 122-7 du Code pénal."
  },
  {
    "id": 159,
    "module": "m3",
    "ref": "Fiche L'État de Nécessité (p. 37)",
    "q": "Un pompier brise la clôture du jardin d'un voisin pour éteindre plus efficacement l'incendie qui ravage l'immeuble d'à côté. Quel fait justificatif s'applique ?",
    "options": [
      "L'erreur de droit.",
      "L'état de nécessité (art. 122-7 CP).",
      "Le statut de lanceur d'alerte.",
      "La minorité."
    ],
    "correct": 1,
    "exp": "C'est l'exemple type de l'état de nécessité (art. 122-7 CP) : commettre volontairement une infraction (bris de clôture) pour éviter un mal grave ou imminent (l'incendie)."
  },
  {
    "id": 160,
    "module": "m3",
    "ref": "Fiche L'État de Nécessité (p. 37)",
    "q": "Quel est l'effet de l'état de nécessité (art. 122-7 CP) sur la responsabilité pénale ?",
    "options": [
      "Il entraîne l'absence de toute responsabilité pénale (pas de culpabilité ni de sanction pénale).",
      "Il réduit la peine de prison de moitié.",
      "Il transforme le délit en contravention.",
      "Il oblige le juge à prononcer une amende."
    ],
    "correct": 0,
    "exp": "Quand il est dûment établi, l'état de nécessité, comme la légitime défense, entraîne l'absence de toute responsabilité pénale."
  },
  {
    "id": 161,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (p. 38)",
    "q": "Quel article du Code pénal prévoit l'irresponsabilité pénale du lanceur d'alerte ?",
    "options": [
      "L'article 122-9 du Code pénal.",
      "L'article 122-1 du Code pénal.",
      "L'article 311-3 du Code pénal.",
      "L'article 78-6 du CPP."
    ],
    "correct": 0,
    "exp": "L'article 122-9 du Code pénal protège pénalement le lanceur d'alerte."
  },
  {
    "id": 162,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (p. 38)",
    "q": "Qui peut avoir la qualité de lanceur d'alerte au sens de la loi ?",
    "options": [
      "Une société commerciale anonyme.",
      "Uniquement une personne physique.",
      "Un parti politique.",
      "Un syndicat uniquement."
    ],
    "correct": 1,
    "exp": "Le lanceur d'alerte doit obligatoirement être une personne physique."
  },
  {
    "id": 163,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (p. 38)",
    "q": "Dans quelles conditions morales le lanceur d'alerte doit-il agir pour bénéficier de la protection légale ?",
    "options": [
      "Contre une rémunération financière.",
      "De manière désintéressée et de bonne foi.",
      "Par esprit de vengeance personnelle.",
      "En vendant les documents à la presse."
    ],
    "correct": 1,
    "exp": "Le lanceur d'alerte doit révéler ou signaler les faits de manière désintéressée et de bonne foi."
  },
  {
    "id": 164,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (p. 38)",
    "q": "Quels sont les trois secrets formellement exclus du régime du lanceur d'alerte ?",
    "options": [
      "Le secret bancaire, le secret commercial et le secret fiscal.",
      "Le secret de la défense nationale, le secret médical et le secret des relations entre un avocat et son client.",
      "Le secret professionnel des boulangers, des chauffeurs et des commerçants.",
      "Aucun secret n'est exclu."
    ],
    "correct": 1,
    "exp": "Les informations couvertes par le secret de la défense nationale, le secret médical ou le secret avocat-client sont strictement exclues du régime de l'alerte."
  },
  {
    "id": 165,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (p. 38)",
    "q": "Vers quelle institution toute personne peut-elle adresser son signalement afin d'être orientée vers l'organisme approprié de recueil de l'alerte ?",
    "options": [
      "Le Défenseur des droits.",
      "La mairie.",
      "Le tribunal de commerce.",
      "L'Académie française."
    ],
    "correct": 0,
    "exp": "Toute personne peut adresser son signalement au Défenseur des droits afin d'être orientée vers l'organisme approprié."
  },
  {
    "id": 166,
    "module": "m4",
    "ref": "Fiche La Légitime Défense (p. 24)",
    "q": "Quel article du Code pénal définit la légitime défense des personnes et des biens ?",
    "options": [
      "L'article 122-5 du Code pénal.",
      "L'article 121-7 du Code pénal.",
      "L'article 311-1 du Code pénal.",
      "L'article 73 du CPP."
    ],
    "correct": 0,
    "exp": "L'article 122-5 du Code pénal définit la légitime défense des personnes (alinéa 1) et des biens (alinéa 2)."
  },
  {
    "id": 167,
    "module": "m4",
    "ref": "Fiche La Légitime Défense (p. 24)",
    "q": "Dans la légitime défense d'une personne, que signifient les 3 lettres « A.I.R. » concernant l'atteinte subie ?",
    "options": [
      "Ancienne, Imaginaire, Rapide.",
      "Actuelle, Injustifiée, Réelle.",
      "Autorisée, Intentionnelle, Répétée.",
      "Armée, Illégale, Régulière."
    ],
    "correct": 1,
    "exp": "L'atteinte subie doit réunir trois caractères : Actuelle (en train de se produire ou imminente), Injustifiée (contraire au droit) et Réelle (certaine)."
  },
  {
    "id": 168,
    "module": "m4",
    "ref": "Fiche La Légitime Défense (p. 24)",
    "q": "Dans la légitime défense d'une personne, que signifient les 3 lettres « N.S.P. » concernant l'acte de défense ?",
    "options": [
      "Nouveau, Sévère, Planifié.",
      "Nécessaire, Simultané, Proportionné.",
      "Nocturne, Silencieux, Puissant.",
      "Normal, Spontané, Public."
    ],
    "correct": 1,
    "exp": "L'acte de défense doit être Nécessaire (aucun autre moyen de se soustraire au danger), Simultané (immédiat) et Proportionné à la gravité de l'atteinte."
  },
  {
    "id": 169,
    "module": "m4",
    "ref": "Fiche La Légitime Défense (p. 24)",
    "q": "Si une personne agressée retrouve son agresseur deux heures plus tard et le frappe pour se venger, est-elle en état de légitime défense ?",
    "options": [
      "Oui, car elle avait été agressée en premier.",
      "Non, car la riposte n'est pas simultanée (il s'agit d'une réaction tardive de vengeance).",
      "Oui, si elle utilise la même force.",
      "Oui, s'il fait nuit."
    ],
    "correct": 1,
    "exp": "L'acte de défense doit être accompli « dans le même temps » (simultané). On ne peut pas invoquer la légitime défense pour une réaction tardive (vengeance)."
  },
  {
    "id": 170,
    "module": "m4",
    "ref": "Fiche Légitime Défense d'un Bien (p. 25)",
    "q": "Dans la légitime défense d'un bien (art. 122-5 al. 2 CP), quel acte est formellement exclu par la loi ?",
    "options": [
      "L'usage de la force physique.",
      "L'homicide volontaire.",
      "Le fait de retenir le voleur.",
      "Le fait de crier."
    ],
    "correct": 1,
    "exp": "Pour défendre un bien, l'acte de défense doit être « autre qu'un homicide volontaire » : aucun crime ou délit contre un bien ne peut justifier de donner volontairement la mort."
  },
  {
    "id": 171,
    "module": "m4",
    "ref": "Fiche Légitime Défense d'un Bien (p. 25)",
    "q": "Peut-on invoquer la légitime défense d'un bien (art. 122-5 al. 2 CP) pour interrompre une simple contravention ?",
    "options": [
      "Oui, pour toutes les contraventions.",
      "Non, uniquement pour interrompre l'exécution d'un crime ou d'un délit contre un bien.",
      "Oui, pour un stationnement gênant.",
      "Oui, de nuit uniquement."
    ],
    "correct": 1,
    "exp": "L'article 122-5 alinéa 2 du Code pénal exige que le bien soit menacé par l'exécution d'un crime ou d'un délit (les contraventions sont exclues)."
  },
  {
    "id": 172,
    "module": "m4",
    "ref": "Fiche Cas Présumés de Légitime Défense (p. 26)",
    "q": "Quel article du Code pénal prévoit les deux cas de « présomption de légitime défense » ?",
    "options": [
      "L'article 122-6 du Code pénal.",
      "L'article 121-3 du Code pénal.",
      "L'article 311-1 du Code pénal.",
      "L'article 78-3 du CPP."
    ],
    "correct": 0,
    "exp": "C'est l'article 122-6 du Code pénal qui définit les deux cas présumés de légitime défense."
  },
  {
    "id": 173,
    "module": "m4",
    "ref": "Fiche Cas Présumés de Légitime Défense (p. 26)",
    "q": "Quel est le 1er cas de présomption de légitime défense (art. 122-6 1° CP) ?",
    "options": [
      "Repousser en plein jour un passant dans son jardin.",
      "Repousser, de nuit, l'entrée par effraction, violence ou ruse dans un lieu habité.",
      "Se défendre contre une insulte sur la voie publique.",
      "Protéger un véhicule stationné dans la rue de jour."
    ],
    "correct": 1,
    "exp": "Le 1er cas vise celui qui accomplit l'acte pour repousser, de nuit, l'entrée par effraction, violence ou ruse dans un lieu habité (maison ou appartement habités)."
  },
  {
    "id": 174,
    "module": "m4",
    "ref": "Fiche Cas Présumés de Légitime Défense (p. 26)",
    "q": "Quel est le 2e cas de présomption de légitime défense (art. 122-6 2° CP) ?",
    "options": [
      "Se défendre contre un vol à la tire sans violence.",
      "Se défendre, de jour comme de nuit, contre les auteurs de vols ou de pillages exécutés avec violences.",
      "Se défendre contre une escroquerie sur internet.",
      "Poursuivre un voleur le lendemain des faits."
    ],
    "correct": 1,
    "exp": "Le 2e cas vise celui qui accomplit l'acte pour se défendre (de jour comme de nuit) contre les auteurs de vols ou de pillages exécutés avec violences (coups, tortures, etc.)."
  },
  {
    "id": 175,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Quel article du Code de la sécurité intérieure (CSI) fixe le cadre légal d'usage des armes commun aux policiers et aux gendarmes ?",
    "options": [
      "L'article L. 435-1 du CSI.",
      "L'article R. 434-14 du CSI.",
      "L'article 53 du CPP.",
      "L'article 122-1 du Code pénal."
    ],
    "correct": 0,
    "exp": "Le cadre légal d'usage des armes commun à la police et à la gendarmerie nationales est prévu par l'article L. 435-1 du Code de la sécurité intérieure."
  },
  {
    "id": 176,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "L'article L. 435-1 du CSI s'applique-t-il aux Policiers Adjoints et aux réservistes pendant leur service ?",
    "options": [
      "Non, uniquement aux commissaires et officiers.",
      "Oui, il s'applique à tous les policiers régulièrement armés (fonctionnaires actifs, policiers adjoints et réservistes) dans l'exercice de leurs fonctions.",
      "Non, uniquement aux gendarmes.",
      "Uniquement aux unités d'intervention comme le RAID."
    ],
    "correct": 1,
    "exp": "L'article L. 435-1 du CSI s'applique à tous les policiers régulièrement armés (fonctionnaires actifs, policiers adjoints et réservistes) qui font usage de leur arme dans l'exercice de leurs fonctions."
  },
  {
    "id": 177,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Un Policier Adjoint est-il autorisé à conserver et porter son arme individuelle en dehors de ses heures de service ?",
    "options": [
      "Oui, comme les gardiens de la paix.",
      "Non, les policiers adjoints ne sont pas autorisés à conserver leur arme individuelle en dehors des heures de service (art. R. 411-7 CSI).",
      "Oui, le week-end uniquement.",
      "Oui, s'il rentre directement chez lui."
    ],
    "correct": 1,
    "exp": "Contrairement aux fonctionnaires actifs de la PN, les policiers adjoints ne sont pas autorisés à conserver leur arme individuelle en dehors des heures de service."
  },
  {
    "id": 178,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Combien de conditions préalables et combien de situations d'ouverture du feu prévoit l'article L. 435-1 du CSI ?",
    "options": [
      "2 conditions préalables et 3 situations.",
      "3 conditions préalables et 5 situations.",
      "5 conditions préalables et 3 situations.",
      "1 seule condition et 10 situations."
    ],
    "correct": 1,
    "exp": "L'article L. 435-1 du CSI impose 3 conditions préalables cumulatives et prévoit 5 situations dans lesquelles l'usage de l'arme peut intervenir."
  },
  {
    "id": 179,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Quelles sont les trois conditions préalables à l'usage d'une arme selon l'article L. 435-1 du CSI ?",
    "options": [
      "Être OPJ, avoir l'accord du maire et tirer en l'air.",
      "Agir dans l'exercice de ses fonctions, être revêtu de son uniforme ou des insignes extérieurs et apparents de sa qualité, et agir en cas d'absolue nécessité et de manière strictement proportionnée.",
      "Être en véhicule, travailler de nuit et faire trois sommations.",
      "Avoir plus de 5 ans d'ancienneté, être accompagné d'un officier et être en flagrance."
    ],
    "correct": 1,
    "exp": "Les 3 conditions préalables sont : 1) agir dans l'exercice de ses fonctions ; 2) être en uniforme ou porter les insignes extérieurs et apparents de sa qualité ; 3) absolue nécessité et stricte proportionnalité."
  },
  {
    "id": 180,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Lorsqu'un policier exerce ses missions en tenue civile, quel équipement constitue un « insigne extérieur et apparent de sa qualité » ?",
    "options": [
      "Sa montre personnelle.",
      "Le port du brassard Police.",
      "Ses chaussures.",
      "Son téléphone portable."
    ],
    "correct": 1,
    "exp": "Le cours cite expressément le port du brassard comme exemple d'insigne extérieur et apparent de la qualité de policier."
  },
  {
    "id": 181,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Que signifie la condition « d'absolue nécessité » lors de l'usage de l'arme par un policier ?",
    "options": [
      "Qu'il doit exister une menace d'atteinte à la vie ou à l'intégrité physique de l'agent ou d'autrui.",
      "Que l'individu refuse de présenter ses papiers.",
      "Que l'individu insulte les policiers.",
      "Qu'il s'agit d'un vol de vélo sans violence."
    ],
    "correct": 0,
    "exp": "L'absolue nécessité signifie qu'il doit exister une menace d'atteinte à la vie ou à l'intégrité physique de l'agent ou d'autrui (raisons réelles et objectives de penser que l'individu est dangereux)."
  },
  {
    "id": 182,
    "module": "m4",
    "ref": "Fiche Cadre Légal d'Usage des Armes (p. 27)",
    "q": "Que signifie « l'obligation de proportionnalité » dans le cadre de l'article L. 435-1 du CSI ?",
    "options": [
      "Qu'il faut utiliser le même calibre que l'agresseur.",
      "Qu'il n'existe aucun autre moyen d'écarter la menace.",
      "Qu'il faut toujours attendre que l'agresseur tire en premier.",
      "Qu'il faut demander l'accord écrit du commissaire."
    ],
    "correct": 1,
    "exp": "La fiche p. 27 précise : « L'obligation de proportionnalité implique qu'il n'existe aucun autre moyen d'écarter cette menace. »"
  },
  {
    "id": 183,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 29)",
    "q": "Quelles sont les formules exactes des deux sommations à haute voix prévues par le cours ?",
    "options": [
      "« Police nationale » puis « Arrêtez-vous s'il vous plaît ».",
      "« Halte police », et si l'individu n'obtempère pas : « Halte ou je fais feu ».",
      "« Attention je vais tirer » puis « Dernier avertissement ».",
      "Deux coups de sifflet."
    ],
    "correct": 1,
    "exp": "Les deux sommations à haute voix qui doivent se succéder dans un temps court sont : « Halte police », et si l'individu n'obtempère pas « Halte ou je fais feu »."
  },
  {
    "id": 184,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 28)",
    "q": "Dans la 1re situation de l'article L. 435-1 1° du CSI (atteintes à la vie ou personnes armées menaçant la vie), les sommations sont-elles obligatoires ?",
    "options": [
      "Oui, toujours deux sommations.",
      "Non, compte tenu de l'imminence de l'atteinte à la vie ou à l'intégrité physique, il n'est pas prévu qu'il soit procédé à des sommations.",
      "Oui, trois sommations.",
      "Uniquement par écrit."
    ],
    "correct": 1,
    "exp": "Dans le 1° de l'article L. 435-1 du CSI (qui se rapproche le plus de la légitime défense), il n'est pas prévu de sommations compte tenu de l'imminence du danger."
  },
  {
    "id": 185,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 28)",
    "q": "Que vise la 2e situation de l'article L. 435-1 2° du CSI (avec deux sommations obligatoires) ?",
    "options": [
      "Le contrôle du stationnement payant.",
      "La défense des lieux que les policiers occupent ou des personnes qui leur sont confiées.",
      "L'audition libre d'un témoin.",
      "La rédaction d'une main courante."
    ],
    "correct": 1,
    "exp": "Le 2° de l'article L. 435-1 du CSI concerne la défense des lieux occupés (à titre permanent ou provisoire) ou des personnes qui leur sont confiées."
  },
  {
    "id": 186,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 28)",
    "q": "Que vise la 3e situation de l'article L. 435-1 3° du CSI (avec deux sommations obligatoires) ?",
    "options": [
      "La fuite d'un contrevenant au code de la route à pied sans dangerosité.",
      "La fuite d'un individu dangereux placé sous leur garde (lorsqu'il va porter atteinte dans sa fuite à la vie ou à l'intégrité physique).",
      "Le refus de signer un procès-verbal.",
      "La perte d'une pièce d'identité."
    ],
    "correct": 1,
    "exp": "Le 3° vise la personne qui cherche à échapper à leur garde ou à leurs investigations, après deux sommations, uniquement s'il existe des raisons réelles et objectives de penser qu'elle va porter atteinte à la vie ou à l'intégrité physique."
  },
  {
    "id": 187,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 29)",
    "q": "Que vise la 4e situation de l'article L. 435-1 4° du CSI ?",
    "options": [
      "La mise en fourrière d'une voiture mal garée.",
      "L'immobilisation d'un véhicule (ou autre moyen de transport) dont le conducteur n'obtempère pas à un ordre d'arrêt et dont les occupants sont dangereux pour la vie ou l'intégrité physique.",
      "Le contrôle technique d'un poids lourd à l'arrêt.",
      "L'escorte d'un convoi exceptionnel."
    ],
    "correct": 1,
    "exp": "Le 4° permet d'immobiliser un véhicule dont le conducteur n'obtempère pas immédiatement à un ordre d'arrêt ET dont les occupants sont susceptibles de porter atteinte, dans leur fuite, à la vie ou à l'intégrité physique."
  },
  {
    "id": 188,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 29)",
    "q": "Par quoi peut être constitué un « ordre d'arrêt » adressé au conducteur d'un véhicule (art. L. 435-1 4° CSI) ?",
    "options": [
      "Gestes réglementaires d'arrêt, coups de sifflets, barrage routier, dispositif DIVA...",
      "Une simple pensée des policiers.",
      "Un courrier envoyé par la poste.",
      "Un appel téléphonique au propriétaire."
    ],
    "correct": 0,
    "exp": "L'ordre d'arrêt est constitué de toute injonction non équivoque intimant l'ordre de s'arrêter : gestes réglementaires d'arrêt, coups de sifflets, barrage routier, DIVA..."
  },
  {
    "id": 189,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 29)",
    "q": "Comment appelle-t-on la 5e situation prévue par l'article L. 435-1 5° du CSI ?",
    "options": [
      "Le flagrant délit routier.",
      "Le périple meurtrier.",
      "La garde à vue prolongée.",
      "La vérification de situation."
    ],
    "correct": 1,
    "exp": "Le 5° de l'article L. 435-1 du CSI correspond au cas dit du « périple meurtrier »."
  },
  {
    "id": 190,
    "module": "m4",
    "ref": "Fiche Usage des Armes (p. 29)",
    "q": "Quel est le but exclusif de l'usage des armes dans la 5e situation (périple meurtrier, art. L. 435-1 5° CSI) ?",
    "options": [
      "Punir l'auteur sur place sans jugement.",
      "Empêcher la réitération d'un ou plusieurs meurtres dans un temps rapproché.",
      "Empêcher la dégradation d'un bâtiment public.",
      "Contrôler l'identité d'un témoin."
    ],
    "correct": 1,
    "exp": "Dans le 5°, l'usage de l'arme est le seul moyen et a pour but exclusif d'empêcher la réitération d'un ou plusieurs meurtres, dans un temps rapproché."
  },
  {
    "id": 191,
    "module": "m5",
    "ref": "Fiche Les Libertés Publiques (p. 30)",
    "q": "Comment se définit la « liberté individuelle ou sûreté » ?",
    "options": [
      "Le droit de ne payer aucun impôt.",
      "Le droit de se déplacer à son gré, de n'être ni arrêté, ni détenu arbitrairement.",
      "Le droit de conduire sans permis de conduire.",
      "Le droit de refuser tout contrôle de police."
    ],
    "correct": 1,
    "exp": "La liberté individuelle ou sûreté désigne le droit de se déplacer à son gré, de n'être ni arrêté, ni détenu arbitrairement."
  },
  {
    "id": 192,
    "module": "m5",
    "ref": "Fiche Les Libertés Publiques (p. 30)",
    "q": "Quels sont les deux textes fondateurs qui protègent le principe de la sûreté en France ?",
    "options": [
      "Le Code de la route et le Code civil.",
      "La Déclaration des droits de l'homme et du citoyen de 1789 (art. 7) et la Constitution de 1958 (art. 66).",
      "Le règlement intérieur du commissariat et le RGEPN.",
      "Le Code du travail et le Code de commerce."
    ],
    "correct": 1,
    "exp": "Le principe de sûreté trouve son fondement dans la DDHC de 1789 (art. 7) et dans la Constitution de 1958 (art. 66)."
  },
  {
    "id": 193,
    "module": "m5",
    "ref": "Fiche Les Libertés Publiques (p. 30)",
    "q": "Quelle autorité est désignée par l'article 66 de la Constitution de 1958 comme « gardienne de la liberté individuelle » ?",
    "options": [
      "L'autorité municipale.",
      "L'autorité judiciaire.",
      "L'autorité préfectorale.",
      "L'autorité militaire."
    ],
    "correct": 1,
    "exp": "L'article 66 de la Constitution dispose que « L'autorité judiciaire, gardienne de la liberté individuelle, assure le respect de ce principe dans les conditions prévues par la loi »."
  },
  {
    "id": 194,
    "module": "m5",
    "ref": "Fiche Les Libertés Publiques (p. 30)",
    "q": "Parmi ces mesures privatives de liberté, lesquelles interviennent dans un « cadre judiciaire » ?",
    "options": [
      "La garde à vue, les contrôles d'identité, les mandats de justice et la détention provisoire.",
      "L'hospitalisation d'office uniquement.",
      "La délivrance d'une carte de commerçant ambulant.",
      "Le stationnement des caravanes."
    ],
    "correct": 0,
    "exp": "Dans un cadre judiciaire, on retrouve la garde à vue et les contrôles d'identité (décidés par les policiers), ainsi que les mandats de justice et la détention provisoire (décidés par les magistrats)."
  },
  {
    "id": 195,
    "module": "m5",
    "ref": "Fiche Les Libertés Publiques (p. 31)",
    "q": "Parmi ces mesures privatives de liberté, lesquelles interviennent dans un « cadre administratif » (pour préserver l'ordre public) ?",
    "options": [
      "La détention provisoire et le mandat d'arrêt.",
      "L'internement des malades mentaux et la rétention administrative des étrangers.",
      "La garde à vue criminelle.",
      "La condamnation aux assises."
    ],
    "correct": 1,
    "exp": "Dans un cadre administratif (précautions visant à protéger la société et non à punir), le cours cite l'internement des malades mentaux et la rétention administrative des étrangers."
  },
  {
    "id": 196,
    "module": "m5",
    "ref": "Fiche Contrôle d'Identité (p. 43)",
    "q": "Comment se définit le « contrôle d'identité » ?",
    "options": [
      "Une fouille intégrale au commissariat pendant 24 heures.",
      "L'opération par laquelle une personne est invitée à justifier sur-le-champ de son identité.",
      "Une audition par un juge d'instruction.",
      "Une perquisition au domicile."
    ],
    "correct": 1,
    "exp": "Le contrôle d'identité est l'opération par laquelle une personne est invitée à justifier sur-le-champ de son identité."
  },
  {
    "id": 197,
    "module": "m5",
    "ref": "Fiche Contrôle d'Identité (p. 43)",
    "q": "Selon l'article 78-1 du CPP, qui doit accepter de se prêter à un contrôle d'identité légalement effectué ?",
    "options": [
      "Uniquement les personnes de nationalité française.",
      "Toute personne se trouvant sur le territoire national.",
      "Uniquement les conducteurs de véhicules.",
      "Uniquement les personnes déjà condamnées."
    ],
    "correct": 1,
    "exp": "Toute personne se trouvant sur le territoire national doit accepter de se prêter à un contrôle d'identité effectué dans les conditions légales (art. 78-1 CPP)."
  },
  {
    "id": 198,
    "module": "m5",
    "ref": "Fiche Contrôle d'Identité (p. 43)",
    "q": "Qu'est-ce que le « relevé d'identité » (art. 78-6 CPP) qu'un Policier Adjoint est habilité à effectuer ?",
    "options": [
      "Un contrôle préventif sans infraction.",
      "Une opération de nature judiciaire faisant suite à la commission d'une infraction pour dresser un procès-verbal de contravention.",
      "Une garde à vue de 48 heures.",
      "Une perquisition de nuit."
    ],
    "correct": 1,
    "exp": "En dehors des cas des articles 78-2-2 et 78-2-4 CPP, les policiers adjoints (art. 21-1° ter CPP) relèvent l'identité des contrevenants (art. 78-6 CPP) pour dresser des PV de contraventions."
  },
  {
    "id": 199,
    "module": "m5",
    "ref": "Fiche Contrôle d'Identité (p. 43)",
    "q": "Selon l'article 78-2 alinéa 1 du CPP, par quel moyen une personne contrôlée peut-elle justifier de son identité ?",
    "options": [
      "Uniquement par un passeport biométrique.",
      "Par tout moyen.",
      "Uniquement par un acte de naissance de moins de 3 mois.",
      "Uniquement par sa carte vitale."
    ],
    "correct": 1,
    "exp": "Toute personne soumise à un contrôle d'identité peut justifier de son identité par tout moyen (art. 78-2 al. 1 CPP)."
  },
  {
    "id": 200,
    "module": "m5",
    "ref": "Fiche Contrôle d'Identité (p. 44)",
    "q": "Lesquels de ces documents sont considérés comme des « documents officiels probants » portant photographie ?",
    "options": [
      "La carte d'électeur et le livret de famille.",
      "La carte nationale d'identité, le passeport et le permis de conduire.",
      "Une facture d'électricité et un ticket de caisse.",
      "Un certificat d'immatriculation (carte grise)."
    ],
    "correct": 1,
    "exp": "La carte nationale d'identité, le passeport et le permis de conduire sont des documents officiels probants portant photographie."
  },
  {
    "id": 201,
    "module": "m5",
    "ref": "Fiche Contrôle d'Identité (p. 44)",
    "q": "Si une personne n'a aucune pièce d'identité sur elle, son identité peut-elle être confirmée par un tiers présent sur place ?",
    "options": [
      "Non, c'est formellement interdit.",
      "Oui, par le recours à des témoignages concomitants au contrôle (pratique laissée à l'appréciation des policiers).",
      "Uniquement par un notaire.",
      "Uniquement par écrit au tribunal."
    ],
    "correct": 1,
    "exp": "La confirmation de l'identité peut être obtenue par le policier au moyen de témoignages concomitants au contrôle (laissé à l'appréciation des policiers)."
  },
  {
    "id": 202,
    "module": "m5",
    "ref": "Fiche Contrôles PJ (p. 44 & 45)",
    "q": "Combien existe-t-il de cas dans lesquels un policier peut contrôler l'identité d'une personne de sa propre initiative en police judiciaire (art. 78-2 al. 2 à 6 CPP) ?",
    "options": [
      "2 cas.",
      "5 cas.",
      "10 cas.",
      "1 seul cas."
    ],
    "correct": 1,
    "exp": "L'article 78-2 al. 2 à 6 du CPP énumère 5 cas de contrôle de police judiciaire à l'initiative des policiers."
  },
  {
    "id": 203,
    "module": "m5",
    "ref": "Fiche Contrôles PJ (p. 44)",
    "q": "Quel comportement d'un individu à la vue des policiers peut laisser soupçonner qu'il se prépare à commettre un crime ou un délit (art. 78-2 al. 3 CPP) ?",
    "options": [
      "Marcher calmement sur le trottoir.",
      "Un moment d'hésitation, un changement brusque de direction, une fuite, ou des passages répétés devant une banque.",
      "Attendre le bus à un arrêt.",
      "Lire un journal sur un banc."
    ],
    "correct": 1,
    "exp": "La fiche p. 44 cite : moment d'hésitation, changement brusque de direction, fuite, passages répétés devant une banque..."
  },
  {
    "id": 204,
    "module": "m5",
    "ref": "Fiche Réquisitions du PR (p. 45)",
    "q": "Dans un contrôle d'identité sur réquisition écrite du procureur de la République (art. 78-2 al. 7 CPP), qui peut être contrôlé ?",
    "options": [
      "Uniquement les personnes qui courent.",
      "« Toute personne » qui se trouve sur les lieux et pendant la période de temps déterminés par la réquisition.",
      "Uniquement les mineurs.",
      "Uniquement les personnes inscrites au FPR."
    ],
    "correct": 1,
    "exp": "Le contrôle sur réquisition du procureur de la République vise « toute personne » qui se trouve sur les lieux où le contrôle est mis en œuvre."
  },
  {
    "id": 205,
    "module": "m5",
    "ref": "Fiche Contrôles Préventifs (p. 45)",
    "q": "Quel est le but d'un contrôle d'identité préventif (art. 78-2 al. 8 CPP) ?",
    "options": [
      "Prévenir une atteinte à l'ordre public, notamment à la sécurité des personnes et des biens.",
      "Exécuter une commission rogatoire.",
      "Auditionner un mis en examen.",
      "Sanctionner un excès de vitesse."
    ],
    "correct": 0,
    "exp": "Le contrôle préventif (art. 78-2 al. 8 CPP) est destiné à prévenir une atteinte à l'ordre public, notamment à la sécurité des personnes ou des biens."
  },
  {
    "id": 206,
    "module": "m5",
    "ref": "Fiche La Vérification d'Identité (p. 50)",
    "q": "Dans quel cas place-t-on une personne en « vérification d'identité » (art. 78-3 CPP) ?",
    "options": [
      "Lorsqu'elle présente une carte d'identité valide.",
      "Lorsque l'intéressé refuse ou se trouve dans l'impossibilité de justifier de son identité.",
      "Pour toute contravention de stationnement.",
      "Lorsqu'un témoin veut déposer plainte."
    ],
    "correct": 1,
    "exp": "Si l'intéressé refuse ou ne peut justifier de son identité, il peut être retenu sur place ou conduit au local de police aux fins de vérification de son identité (art. 78-3 CPP)."
  },
  {
    "id": 207,
    "module": "m5",
    "ref": "Fiche La Vérification d'Identité (p. 50)",
    "q": "En vérification d'identité (art. 78-3 CPP), à qui la personne retenue doit-elle être présentée dans tous les cas ?",
    "options": [
      "Au maire.",
      "À un Officier de Police Judiciaire (OPJ).",
      "À un Policier Adjoint.",
      "Au préfet."
    ],
    "correct": 1,
    "exp": "En vérification d'identité, l'intéressé doit dans tous les cas être présenté à un Officier de Police Judiciaire (la retenue est de la responsabilité exclusive de l'OPJ)."
  },
  {
    "id": 208,
    "module": "m5",
    "ref": "Fiche La Vérification d'Identité (p. 50)",
    "q": "Quelle est la durée maximale d'une retenue pour vérification d'identité (art. 78-3 CPP) en métropole ?",
    "options": [
      "2 heures.",
      "4 heures.",
      "12 heures.",
      "24 heures."
    ],
    "correct": 1,
    "exp": "La retenue pour vérification d'identité ne peut excéder 4 heures en métropole."
  },
  {
    "id": 209,
    "module": "m5",
    "ref": "Fiche La Vérification d'Identité (p. 50)",
    "q": "Quelle est la durée maximale d'une retenue pour vérification d'identité (art. 78-3 CPP) à Mayotte et en Guyane ?",
    "options": [
      "4 heures.",
      "8 heures.",
      "24 heures.",
      "48 heures."
    ],
    "correct": 1,
    "exp": "La durée maximale est portée à 8 heures à Mayotte et dans la collectivité territoriale de Guyane."
  },
  {
    "id": 210,
    "module": "m5",
    "ref": "Fiche La Vérification d'Identité (p. 50)",
    "q": "Quels sont les deux droits de la personne retenue pour vérification d'identité (art. 78-3 CPP) ?",
    "options": [
      "Faire aviser le procureur de la République et prévenir à tout moment sa famille ou toute personne de son choix.",
      "Sortir librement déjeuner et téléphoner à la presse.",
      "Refuser de décliner son nom et exiger une remise en liberté immédiate.",
      "Demander un jury populaire."
    ],
    "correct": 0,
    "exp": "La personne retenue peut : 1) faire aviser le procureur de la République de la vérification dont elle fait l'objet ; 2) prévenir à tout moment sa famille ou toute personne de son choix."
  },
  {
    "id": 211,
    "module": "m5",
    "ref": "Fiche La Vérification de Situation (p. 50)",
    "q": "Quel article du CPP prévoit la « vérification de situation » lorsqu'il existe des raisons sérieuses de penser que le comportement est lié au terrorisme ?",
    "options": [
      "L'article 78-3-1 du CPP.",
      "L'article 78-6 du CPP.",
      "L'article 53 du CPP.",
      "L'article 74 du CPP."
    ],
    "correct": 0,
    "exp": "C'est l'article 78-3-1 du CPP qui régit la retenue pour vérification de situation en lien avec des activités à caractère terroriste."
  },
  {
    "id": 212,
    "module": "m5",
    "ref": "Fiche La Vérification de Situation (p. 50)",
    "q": "La retenue pour vérification de situation terroriste (art. 78-3-1 CPP) peut-elle être engagée même si la personne présente une pièce d'identité valide ?",
    "options": [
      "Non, jamais.",
      "Oui, même si elle présente un justificatif d'identité.",
      "Uniquement si la pièce d'identité est périmée.",
      "Uniquement pour les mineurs."
    ],
    "correct": 1,
    "exp": "L'article 78-3-1 du CPP permet la retenue pour vérification de situation « même si elle présente un justificatif d'identité »."
  },
  {
    "id": 213,
    "module": "m5",
    "ref": "Fiche La Vérification de Situation (p. 51)",
    "q": "Quelle est la durée maximale d'une retenue pour vérification de situation (art. 78-3-1 CPP) ?",
    "options": [
      "1 heure.",
      "4 heures maximum.",
      "24 heures.",
      "96 heures."
    ],
    "correct": 1,
    "exp": "La retenue pour vérification de situation ne peut durer que le temps nécessaire à la vérification sans excéder 4 heures."
  },
  {
    "id": 214,
    "module": "m5",
    "ref": "Fiche La Vérification de Situation (p. 51)",
    "q": "De la responsabilité de qui relève la retenue pour vérification de situation (art. 78-3-1 CPP) ?",
    "options": [
      "De la responsabilité exclusive de l'Officier de Police Judiciaire (OPJ).",
      "Du Policier Adjoint.",
      "Du maire.",
      "Du gardien de la paix stagiaire."
    ],
    "correct": 0,
    "exp": "Cette retenue relève de la responsabilité exclusive de l'Officier de Police Judiciaire."
  },
  {
    "id": 215,
    "module": "m5",
    "ref": "Fiche La Vérification de Situation (p. 50)",
    "q": "Que signifie le sigle F.P.R. ?",
    "options": [
      "Fichier de la Police Routière.",
      "Fichier des Personnes Recherchées.",
      "Force de Protection Régionale.",
      "Formation Initiale des Policiers Réservistes."
    ],
    "correct": 1,
    "exp": "F.P.R. signifie Fichier des personnes recherchées."
  },
  {
    "id": 216,
    "module": "m6",
    "ref": "Fiche Les Cadres d'Enquête (p. 56)",
    "q": "Quels sont les trois cadres juridiques d'enquête traditionnels mentionnés par les articles 14 et 17 du CPP ?",
    "options": [
      "La garde à vue, l'audition libre et le contrôle d'identité.",
      "L'enquête de flagrant délit, l'enquête préliminaire et la commission rogatoire.",
      "Le tribunal de police, le tribunal correctionnel et la cour d'assises.",
      "La main courante, la plainte et le procès-verbal."
    ],
    "correct": 1,
    "exp": "Les trois cadres d'enquête traditionnels sont : l'enquête de flagrant délit, l'enquête préliminaire et la commission rogatoire."
  },
  {
    "id": 217,
    "module": "m6",
    "ref": "Fiche L'Enquête de Flagrant Délit (p. 56)",
    "q": "Quels articles du Code de procédure pénale régissent l'enquête de flagrant délit ?",
    "options": [
      "Les articles 53 à 73 du CPP.",
      "Les articles 75 à 78 du CPP.",
      "Les articles 122-1 à 122-9 du CP.",
      "Les articles R. 434-1 à R. 434-24 du CSI."
    ],
    "correct": 0,
    "exp": "L'enquête de flagrant délit est régie par les articles 53 à 73 du Code de procédure pénale."
  },
  {
    "id": 218,
    "module": "m6",
    "ref": "Fiche L'Enquête de Flagrant Délit (p. 56)",
    "q": "À quelles infractions s'applique l'enquête de flagrant délit ?",
    "options": [
      "Uniquement aux contraventions.",
      "Aux crimes (art. 53 CPP) et aux délits punis par la loi d'une peine d'emprisonnement (art. 67 CPP).",
      "Aux délits punis uniquement d'une peine d'amende.",
      "Aux litiges civils de voisinage."
    ],
    "correct": 1,
    "exp": "L'enquête de flagrant délit s'applique aux crimes et aux délits punis d'une peine d'emprisonnement lorsqu'ils se commettent actuellement ou viennent de se commettre."
  },
  {
    "id": 219,
    "module": "m6",
    "ref": "Fiche L'Enquête de Flagrant Délit (p. 56)",
    "q": "L'enquête de flagrant délit est-elle possible pour une contravention ?",
    "options": [
      "Oui, toujours.",
      "Non, elle n'est jamais possible en cas de contravention.",
      "Oui, si le contrevenant prend la fuite.",
      "Oui, la nuit."
    ],
    "correct": 1,
    "exp": "L'enquête de flagrant délit n'est pas possible en cas de contraventions ou de délits non punis d'emprisonnement."
  },
  {
    "id": 220,
    "module": "m6",
    "ref": "Fiche L'Enquête Préliminaire (p. 56)",
    "q": "Dans quel cadre d'enquête « bascule » le policier lorsqu'il n'est plus dans les délais du flagrant délit ?",
    "options": [
      "En enquête préliminaire.",
      "En vérification d'identité.",
      "En cour d'assises.",
      "En police administrative."
    ],
    "correct": 0,
    "exp": "Lorsque le policier n'est plus dans les délais de l'enquête de flagrant délit, il « bascule » en enquête préliminaire."
  },
  {
    "id": 221,
    "module": "m6",
    "ref": "Fiche L'Enquête Préliminaire (p. 56)",
    "q": "Quels articles du Code de procédure pénale régissent l'enquête préliminaire ?",
    "options": [
      "Les articles 53 à 73 du CPP.",
      "Les articles 75 à 78 du CPP.",
      "Les articles 81 et 151 du CPP.",
      "L'article 311-1 du CP."
    ],
    "correct": 1,
    "exp": "L'enquête préliminaire est régie par les articles 75 à 78 du Code de procédure pénale."
  },
  {
    "id": 222,
    "module": "m6",
    "ref": "Fiche L'Enquête Préliminaire (p. 56 & 63)",
    "q": "À quelles infractions s'applique l'enquête préliminaire ?",
    "options": [
      "Uniquement aux contraventions.",
      "À tous les crimes, délits et contraventions.",
      "Uniquement aux crimes.",
      "Uniquement aux délits routiers."
    ],
    "correct": 1,
    "exp": "L'enquête préliminaire s'applique à tous les crimes, délits et contraventions."
  },
  {
    "id": 223,
    "module": "m6",
    "ref": "Fiche L'Enquête Préliminaire (p. 63)",
    "q": "En enquête préliminaire, que faut-il en principe pour pouvoir s'introduire et perquisitionner dans un domicile (art. 76 CPP) ?",
    "options": [
      "Rien, la contrainte est automatique.",
      "L'assentiment (accord) exprès et écrit de la personne chez laquelle l'opération a lieu.",
      "Un simple accord par clin d'œil.",
      "L'autorisation du maire."
    ],
    "correct": 1,
    "exp": "Caractérisée par l'absence de coercition de principe, l'introduction dans un domicile en enquête préliminaire suppose l'assentiment exprès et écrit de la personne (art. 76 CPP)."
  },
  {
    "id": 224,
    "module": "m6",
    "ref": "Fiche L'Enquête Préliminaire (p. 63)",
    "q": "Quel magistrat dirige l'enquête préliminaire ?",
    "options": [
      "Le juge aux affaires familiales.",
      "Le procureur de la République.",
      "Le juge d'instruction.",
      "Le président du tribunal de commerce."
    ],
    "correct": 1,
    "exp": "Le procureur de la République dirige l'enquête préliminaire, que l'initiative revienne au parquet ou à la police judiciaire."
  },
  {
    "id": 225,
    "module": "m6",
    "ref": "Fiche L'Enquête Préliminaire (p. 63)",
    "q": "Selon l'article 75 du CPP, comment les OPJ et les APJ (sous le contrôle des OPJ) procèdent-ils à des enquêtes préliminaires ?",
    "options": [
      "Soit sur les instructions du procureur de la République, soit d'office (d'initiative).",
      "Uniquement sur ordre du préfet.",
      "Uniquement sur commission rogatoire.",
      "Uniquement après un vote municipal."
    ],
    "correct": 0,
    "exp": "Conformément à l'article 75 du CPP, ils procèdent à des enquêtes préliminaires « soit sur les instructions du procureur de la République, soit d'office »."
  },
  {
    "id": 226,
    "module": "m6",
    "ref": "Fiche Durée Enquête Préliminaire (p. 62)",
    "q": "Si une enquête préliminaire est menée d'office, au bout de quel délai les OPJ doivent-ils rendre compte de son état d'avancement au procureur de la République ?",
    "options": [
      "Au bout de 48 heures.",
      "Lorsqu'elle est commencée depuis plus de 6 mois.",
      "Au bout de 5 ans.",
      "Jamais."
    ],
    "correct": 1,
    "exp": "Si l'enquête préliminaire est menée d'office, les OPJ doivent rendre compte au procureur de son état d'avancement lorsqu'elle est commencée depuis plus de 6 mois."
  },
  {
    "id": 227,
    "module": "m6",
    "ref": "Fiche Durée Enquête Préliminaire (p. 57 & 62)",
    "q": "Quelle est la durée initiale d'une enquête préliminaire en droit commun (art. 75-3 CPP) ?",
    "options": [
      "8 jours.",
      "2 ans (prolongeable d'un an sur autorisation écrite et motivée du procureur).",
      "10 ans.",
      "24 heures."
    ],
    "correct": 1,
    "exp": "La durée d'une enquête préliminaire ne peut excéder 2 ans en droit commun (+ 1 an sur autorisation écrite et motivée du procureur de la République)."
  },
  {
    "id": 228,
    "module": "m6",
    "ref": "Fiche L'Enquête Préliminaire (p. 63)",
    "q": "Quelles sont les deux seules exceptions de personnes résidant en France qui ne peuvent pas être impliquées dans une enquête préliminaire ?",
    "options": [
      "Les médecins et les avocats.",
      "Le Président de la République et les agents diplomatiques accrédités en France.",
      "Les maires et les conseillers municipaux.",
      "Les journalistes et les professeurs."
    ],
    "correct": 1,
    "exp": "Toute personne résidant en France peut être impliquée dans une enquête préliminaire, à l'exception du Président de la République et des agents diplomatiques accrédités en France."
  },
  {
    "id": 229,
    "module": "m6",
    "ref": "Fiche La Commission Rogatoire (p. 57 & 58)",
    "q": "Par quel magistrat est délivrée une « commission rogatoire » (art. 81 et 151 à 154-2 CPP) ?",
    "options": [
      "Par le juge d'instruction.",
      "Par le procureur de la République.",
      "Par le préfet.",
      "Par le Défenseur des droits."
    ],
    "correct": 0,
    "exp": "Lorsqu'une information judiciaire est ouverte, c'est le juge d'instruction qui délègue une partie de ses pouvoirs à un OPJ par le biais d'une commission rogatoire."
  },
  {
    "id": 230,
    "module": "m6",
    "ref": "Fiche La Commission Rogatoire (p. 57 & 58)",
    "q": "Dans quel cas l'ouverture d'une information judiciaire (saisine d'un juge d'instruction) est-elle obligatoire ?",
    "options": [
      "En cas de contravention de 1re classe.",
      "En cas de crime (et pour certains délits).",
      "Pour tout contrôle d'identité.",
      "Pour une simple perte de passeport."
    ],
    "correct": 1,
    "exp": "L'ouverture d'une information judiciaire est obligatoire en cas de crime."
  },
  {
    "id": 231,
    "module": "m6",
    "ref": "Fiche La Commission Rogatoire (p. 57 & 58)",
    "q": "Au sein de la police, de qui relève le domaine exclusif de la commission rogatoire ?",
    "options": [
      "Du Policier Adjoint.",
      "De l'Officier de Police Judiciaire (OPJ).",
      "Du réserviste.",
      "Du personnel administratif."
    ],
    "correct": 1,
    "exp": "La commission rogatoire est du domaine exclusif de l'Officier de Police Judiciaire (l'APJ peut toutefois l'assister et rédiger certains actes précis sous son contrôle)."
  },
  {
    "id": 232,
    "module": "m6",
    "ref": "Fiche Les Autres Cadres d'Enquête (p. 58)",
    "q": "Quelle est la particularité des trois cadres d'enquête spécifiques (mort suspecte, blessures graves suspectes, disparition inquiétante) ?",
    "options": [
      "Ils ne concernent que les infractions routières.",
      "Ils reposent sur l'indétermination quant à l'existence d'une infraction (permettent d'enquêter sans qu'une infraction soit préalablement établie).",
      "Ils sont réalisés sans aucun procès-verbal.",
      "Ils sont réservés aux gendarmes."
    ],
    "correct": 1,
    "exp": "Ces cadres juridiques spécifiques permettent d'enquêter sans qu'une infraction soit préalablement établie."
  },
  {
    "id": 233,
    "module": "m6",
    "ref": "Fiche Les Autres Cadres d'Enquête (p. 57 & 58)",
    "q": "Quel article du CPP s'applique en cas de découverte de cadavre ou d'une personne grièvement blessée de cause inconnue ou suspecte ?",
    "options": [
      "L'article 74 du CPP.",
      "L'article 78-6 du CPP.",
      "L'article 311-1 du CP.",
      "L'article 122-5 du CP."
    ],
    "correct": 0,
    "exp": "L'article 74 (et 80-4) du CPP s'applique en cas de mort ou de blessures graves de cause inconnue ou suspecte."
  },
  {
    "id": 234,
    "module": "m6",
    "ref": "Fiche Les Autres Cadres d'Enquête (p. 57)",
    "q": "Quelles sont les deux conditions qui doivent être réunies pour ouvrir une enquête au titre de l'article 74 du CPP ?",
    "options": [
      "Un vol de voiture et un témoin.",
      "La découverte d'un cadavre ou d'une personne grièvement blessée, ET des causes inconnues ou suspectes.",
      "Un décès naturel à l'hôpital avec certificat médical sans obstacle.",
      "Une simple égratignure lors d'un match de sport."
    ],
    "correct": 1,
    "exp": "Deux conditions doivent être réunies : 1) découverte de cadavre ou d'une personne grièvement blessée ; 2) les causes sont inconnues ou suspectes."
  },
  {
    "id": 235,
    "module": "m6",
    "ref": "Fiche Les Autres Cadres d'Enquête (p. 57 & 58)",
    "q": "Quel article du CPP s'applique en cas de « disparition inquiétante » ?",
    "options": [
      "L'article 74-1 du CPP.",
      "L'article 53 du CPP.",
      "L'article 121-4 du CP.",
      "L'article L. 435-1 du CSI."
    ],
    "correct": 0,
    "exp": "Les disparitions inquiétantes sont régies par l'article 74-1 (et 80-4) du Code de procédure pénale."
  },
  {
    "id": 236,
    "module": "m6",
    "ref": "Fiche Les Autres Cadres d'Enquête (p. 57)",
    "q": "Pour quelles personnes disparues l'enquête de l'article 74-1 du CPP s'applique-t-elle ?",
    "options": [
      "Uniquement pour les personnes de plus de 80 ans.",
      "En cas de disparition d'un mineur, d'un majeur protégé, ou d'un majeur dont la disparition présente un caractère inquiétant ou suspect.",
      "Uniquement pour les touristes étrangers.",
      "Uniquement après 30 jours d'absence."
    ],
    "correct": 1,
    "exp": "L'article 74-1 du CPP vise la disparition d'un mineur, d'un majeur protégé, ou d'un majeur dont la disparition présente un caractère inquiétant ou suspect (circonstances, âge, état de santé)."
  },
  {
    "id": 237,
    "module": "m6",
    "ref": "Fiche Les Autres Cadres d'Enquête (p. 57)",
    "q": "Un Agent de Police Judiciaire (APJ) peut-il procéder à des actes dans le cadre d'une enquête pour mort suspecte (art. 74) ou disparition inquiétante (art. 74-1) ?",
    "options": [
      "Non, jamais.",
      "Oui, sous le contrôle d'un Officier de Police Judiciaire (OPJ).",
      "Oui, totalement seul sans OPJ.",
      "Uniquement s'il est commissaire."
    ],
    "correct": 1,
    "exp": "Ces cadres d'enquête sont de la compétence de l'OPJ ou, sous le contrôle de ce dernier, de l'APJ."
  },
  {
    "id": 238,
    "module": "m6",
    "ref": "Fiche La Commission Rogatoire (p. 57 & 58)",
    "q": "Outre la saisine par le procureur de la République, comment un juge d'instruction peut-il être saisi par une victime ?",
    "options": [
      "Par une simple main courante.",
      "Lorsqu'une plainte avec constitution de partie civile est déposée.",
      "Par un appel au 17.",
      "Par un courrier au maire."
    ],
    "correct": 1,
    "exp": "Le juge d'instruction peut également être saisi lorsqu'une plainte avec constitution de partie civile est déposée."
  },
  {
    "id": 239,
    "module": "m6",
    "ref": "Fiche Les Cadres d'Enquête (p. 56)",
    "q": "Qui sont les seules autorités pouvant légalement communiquer sur une enquête en cours ?",
    "options": [
      "Tous les policiers du commissariat.",
      "Le procureur de la République, et l'Officier de Police Judiciaire avec l'accord et sous le contrôle du procureur de la République.",
      "Les témoins et les journalistes.",
      "Le Policier Adjoint d'accueil."
    ],
    "correct": 1,
    "exp": "Seuls peuvent communiquer le procureur de la République, et l'OPJ avec l'accord et sous le contrôle du procureur de la République."
  },
  {
    "id": 240,
    "module": "m6",
    "ref": "Fiche Durée Enquête Préliminaire (p. 57 & 62)",
    "q": "À partir de quel acte commence à courir le délai de 2 ans de l'enquête préliminaire (art. 75-3 CPP) ?",
    "options": [
      "À compter du premier acte d'audition libre, de garde à vue ou de perquisition (y compris s'il est intervenu en flagrance).",
      "À compter de l'entrée en école de police de l'enquêteur.",
      "À compter du jugement final.",
      "À compter d'un simple contrôle routier."
    ],
    "correct": 0,
    "exp": "Le délai de 2 ans court à compter du premier acte d'audition libre, de garde à vue ou de perquisition, y compris si cet acte est intervenu dans le cadre de la flagrance."
  },
  {
    "id": 241,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-1 CSI",
    "q": "À quelles forces de sécurité s'applique le Code de déontologie prévu aux articles R. 434-1 à R. 434-24 du CSI ?",
    "options": [
      "Uniquement à la Police nationale.",
      "À la Police nationale et à la Gendarmerie nationale.",
      "Aux agents de sécurité privée uniquement.",
      "Aux douaniers uniquement."
    ],
    "correct": 1,
    "exp": "Ce Code de déontologie est commun à la Police nationale et à la Gendarmerie nationale."
  },
  {
    "id": 242,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-2 CSI",
    "q": "Quel est le statut de la Police nationale selon l'article R. 434-2 du CSI ?",
    "options": [
      "Une force militaire.",
      "Une force à statut civil.",
      "Une entreprise privée.",
      "Une association."
    ],
    "correct": 1,
    "exp": "La Police nationale est une force à statut civil (tandis que la Gendarmerie nationale est une force armée)."
  },
  {
    "id": 243,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-2 CSI",
    "q": "Quel est le statut de la Gendarmerie nationale selon l'article R. 434-2 du CSI ?",
    "options": [
      "Une force à statut civil.",
      "Une force armée.",
      "Une police municipale.",
      "Une société privée."
    ],
    "correct": 1,
    "exp": "La Gendarmerie nationale est une force armée."
  },
  {
    "id": 244,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-2 CSI",
    "q": "Sous l'autorité de quel ministre sont placées la Police nationale et la Gendarmerie nationale pour l'accomplissement des missions de sécurité intérieure ?",
    "options": [
      "Le ministre de l'Économie.",
      "Le ministre de l'Intérieur.",
      "Le ministre des Transports.",
      "Le ministre de la Santé."
    ],
    "correct": 1,
    "exp": "Pour l'accomplissement des missions de sécurité intérieure, la Police nationale et la Gendarmerie nationale sont placées sous l'autorité du ministre de l'Intérieur."
  },
  {
    "id": 245,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-4 CSI",
    "q": "Selon l'article R. 434-4 du CSI, comment le policier doit-il exécuter les ordres donnés par son supérieur hiérarchique ?",
    "options": [
      "Uniquement s'il est d'accord avec l'ordre.",
      "Il doit exécuter loyalement les ordres qui lui sont donnés par l'autorité hiérarchique.",
      "Avec un délai de réflexion de 48 heures.",
      "Uniquement si l'ordre est signé par le préfet."
    ],
    "correct": 1,
    "exp": "Le policier ou le gendarme exécute loyalement les ordres qui lui sont donnés par l'autorité hiérarchique."
  },
  {
    "id": 246,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-5 CSI",
    "q": "Que doit faire un policier s'il reçoit un ordre « manifestement illégal et de nature à compromettre gravement un intérêt public » (art. R. 434-5 CSI) ?",
    "options": [
      "L'exécuter immédiatement sans discuter.",
      "Il a le devoir de faire part de ses objections à l'autorité qui l'a donné et de ne pas exécuter cet ordre.",
      "Quitter définitivement la Police nationale.",
      "Demander l'avis d'un passant."
    ],
    "correct": 1,
    "exp": "Face à un ordre manifestement illégal et de nature à compromettre gravement un intérêt public, il a le devoir de faire part de ses objections et de ne pas l'exécuter."
  },
  {
    "id": 247,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-9 CSI",
    "q": "Au titre du devoir de probité (art. R. 434-9 CSI), un policier peut-il accepter un cadeau ou un avantage pour un acte de ses fonctions ?",
    "options": [
      "Oui, si le cadeau vaut moins de 50 euros.",
      "Non, il n'accepte aucun avantage ni aucune gratification directe ou indirecte.",
      "Oui, pendant les fêtes de fin d'année.",
      "Oui, s'il le partage avec sa brigade."
    ],
    "correct": 1,
    "exp": "L'article R. 434-9 du CSI interdit d'accepter tout avantage ou gratification directe ou indirecte pour les actes accomplis ou abstenus dans l'exercice des fonctions."
  },
  {
    "id": 248,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-10 CSI",
    "q": "Quelle qualité l'article R. 434-10 du CSI demande-t-il au policier d'exercer dans l'appréciation des situations ?",
    "options": [
      "La précipitation.",
      "Le discernement.",
      "La sévérité maximale.",
      "L'indifférence."
    ],
    "correct": 1,
    "exp": "L'article R. 434-10 du CSI dispose que « Le policier ou le gendarme fait preuve de discernement dans l'exercice de ses fonctions »."
  },
  {
    "id": 249,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-11 CSI",
    "q": "Selon l'article R. 434-11 du CSI (impartialité et neutralité), le policier peut-il exprimer ses convictions religieuses ou politiques pendant son service ?",
    "options": [
      "Oui, librement.",
      "Non, il est tenu à l'obligation de neutralité et s'abstient de toute expression ou manifestation de ses convictions religieuses, politiques ou philosophiques.",
      "Oui, s'il travaille de nuit.",
      "Oui, dans le véhicule de police."
    ],
    "correct": 1,
    "exp": "Dans l'exercice de ses fonctions, le policier est tenu à l'obligation de neutralité et d'impartialité."
  },
  {
    "id": 250,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-12 CSI",
    "q": "Selon l'article R. 434-12 du CSI, le policier doit-il veiller à ne pas nuire au renom de la Police nationale même lorsqu'il est hors service et sur les réseaux sociaux ?",
    "options": [
      "Non, hors service tout est permis.",
      "Oui, en tout temps, dans ou en dehors du service, y compris lorsqu'il s'exprime sur les réseaux sociaux.",
      "Uniquement s'il publie une photo en uniforme.",
      "Les réseaux sociaux ne sont pas concernés."
    ],
    "correct": 1,
    "exp": "L'article R. 434-12 du CSI s'applique en tout temps, dans ou en dehors du service, y compris sur les réseaux de communication électronique sociaux."
  },
  {
    "id": 251,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-13 CSI",
    "q": "Selon l'article R. 434-13 du CSI, un policier peut-il utiliser un véhicule ou du matériel de service à des fins privées ?",
    "options": [
      "Oui, pour faire ses courses sur le trajet.",
      "Non, il lui est interdit d'utiliser les locaux et les matériels à des fins étrangères au service.",
      "Oui, s'il remet du carburant.",
      "Oui, pendant sa pause."
    ],
    "correct": 1,
    "exp": "Le policier veille à la préservation des locaux et matériels qui lui sont confiés et s'interdit de les utiliser à des fins étrangères au service."
  },
  {
    "id": 252,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-14 CSI",
    "q": "Selon l'article R. 434-14 du CSI (relation avec la population), comment le policier doit-il s'adresser aux personnes contrôlées ou secourues ?",
    "options": [
      "En les tutoyant si elles sont jeunes.",
      "En étant courtois et en utilisant le vouvoiement.",
      "Sans jamais leur adresser la parole.",
      "En parlant uniquement par gestes."
    ],
    "correct": 1,
    "exp": "Exemplaire et courtois, le policier ou le gendarme respecte la dignité des personnes et sa relation avec la population requiert l'usage du vouvoiement."
  },
  {
    "id": 253,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-16 CSI",
    "q": "Selon l'article R. 434-16 du CSI, sur quoi le policier a-t-il l'interdiction de se fonder pour choisir une personne à contrôler (sauf signalement précis) ?",
    "options": [
      "Sur la commission d'une infraction.",
      "Sur une caractéristique physique ou un signe distinctif.",
      "Sur une réquisition du procureur.",
      "Sur le non-port de la ceinture de sécurité."
    ],
    "correct": 1,
    "exp": "Le policier ne se fonde sur aucune caractéristique physique ou aucun signe distinctif pour déterminer les personnes à contrôler, sauf s'il dispose d'un signalement précis motivant le contrôle."
  },
  {
    "id": 254,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-16 CSI",
    "q": "Quelle est la nature exacte de la « palpation de sécurité » selon l'article R. 434-16 du CSI ?",
    "options": [
      "Une fouille judiciaire approfondie.",
      "Exclusivement une mesure de sûreté (vérifier que la personne ne porte aucun objet dangereux pour elle-même ou pour autrui).",
      "Une sanction administrative.",
      "Un relevé d'identité."
    ],
    "correct": 1,
    "exp": "La palpation de sécurité est exclusivement une mesure de sûreté."
  },
  {
    "id": 255,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-16 CSI",
    "q": "La palpation de sécurité doit-elle être pratiquée de manière systématique sur toute personne contrôlée ?",
    "options": [
      "Oui, elle est obligatoire à chaque contrôle.",
      "Non, elle ne revêt pas un caractère systématique (elle est réservée aux cas où elle apparaît nécessaire à la garantie de la sécurité).",
      "Oui, uniquement le soir.",
      "Oui, sur tous les conducteurs."
    ],
    "correct": 1,
    "exp": "L'article R. 434-16 du CSI précise que la palpation de sécurité ne revêt pas un caractère systématique."
  },
  {
    "id": 256,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-16 CSI",
    "q": "Comment doit être pratiquée la palpation de sécurité chaque fois que les circonstances le permettent ?",
    "options": [
      "Au milieu de la foule.",
      "À l'abri du regard du public.",
      "En filmant avec un téléphone personnel.",
      "Sans aucune précaution."
    ],
    "correct": 1,
    "exp": "Chaque fois que les circonstances le permettent, la palpation de sécurité est pratiquée à l'abri du regard du public."
  },
  {
    "id": 257,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-17 CSI",
    "q": "Selon l'article R. 434-17 du CSI, dans quels cas l'utilisation des menottes ou des entraves est-elle justifiée ?",
    "options": [
      "Sur toutes les personnes entendues au commissariat sans exception.",
      "Uniquement lorsque la personne appréhendée est considérée soit comme dangereuse pour autrui ou pour elle-même, soit comme susceptible de tenter de s'enfuir.",
      "Pour punir une personne impolie.",
      "Sur tous les témoins d'un accident."
    ],
    "correct": 1,
    "exp": "L'utilisation des menottes n'est justifiée que lorsque la personne appréhendée est considérée soit comme dangereuse pour autrui ou pour elle-même, soit comme susceptible de tenter de s'enfuir."
  },
  {
    "id": 258,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-18 CSI",
    "q": "Selon l'article R. 434-18 du CSI, à quelles conditions le policier peut-il faire emploi de la force ?",
    "options": [
      "De manière illimitée dès qu'il est en uniforme.",
      "Dans le cadre fixé par la loi, uniquement lorsque c'est nécessaire, et de façon proportionnée au but à atteindre ou à la gravité de la menace.",
      "Uniquement sur ordre écrit du maire.",
      "Sans jamais rendre compte."
    ],
    "correct": 1,
    "exp": "L'emploi de la force doit toujours être légal, nécessaire et proportionné."
  },
  {
    "id": 259,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-19 CSI",
    "q": "Selon l'article R. 434-19 du CSI, quelle est l'obligation d'un policier (même hors service) face à une personne en danger ?",
    "options": [
      "Passer son chemin s'il est en repos.",
      "Intervenir de sa propre initiative pour porter assistance à toute personne en danger.",
      "Attendre le lendemain pour rédiger un rapport.",
      "Filmer la scène sans intervenir."
    ],
    "correct": 1,
    "exp": "Même lorsqu'il n'est pas en service, le policier intervient de sa propre initiative pour porter assistance à toute personne en danger."
  },
  {
    "id": 260,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-20 CSI",
    "q": "Que prévoit l'article R. 434-20 du CSI concernant les victimes ?",
    "options": [
      "Le policier doit refuser de prendre leur plainte si l'auteur est inconnu.",
      "Sans se départir de son impartialité, le policier accorde une attention particulière aux victimes et veille à la qualité de leur prise en charge.",
      "Le policier doit donner raison à la victime sans vérifier les faits.",
      "Les victimes doivent mener l'enquête elles-mêmes."
    ],
    "correct": 1,
    "exp": "Sans se départir de son impartialité, le policier accorde une attention particulière aux victimes et veille à la qualité de leur prise en charge tout au long de la procédure."
  },
  {
    "id": 261,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-21 CSI",
    "q": "Selon l'article R. 434-21 du CSI, sous la responsabilité et la protection de qui est placée toute personne appréhendée ?",
    "options": [
      "Sous la responsabilité de sa propre famille.",
      "Sous la responsabilité et la protection de la police ou de la gendarmerie.",
      "Sous la responsabilité des journalistes.",
      "Sous la responsabilité de la mairie."
    ],
    "correct": 1,
    "exp": "Toute personne appréhendée est placée sous la responsabilité et la protection de la police ou de la gendarmerie et ne doit subir aucune violence ni traitement dégradant."
  },
  {
    "id": 262,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-21 CSI",
    "q": "Que doit faire le policier concernant l'état de santé d'une personne placée sous sa garde (art. R. 434-21 CSI) ?",
    "options": [
      "Ignorer ses demandes médicales.",
      "Veiller à son état de santé et prendre, en cas de besoin, toutes les mesures nécessaires (examen médical).",
      "Lui donner ses propres médicaments personnels.",
      "La laisser sortir seule aller à la pharmacie."
    ],
    "correct": 1,
    "exp": "Le policier veille à l'état de santé de la personne gardée et sollicite un examen médical en cas de besoin."
  },
  {
    "id": 263,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-22 CSI",
    "q": "Selon l'article R. 434-22 du CSI, dans quel cadre le policier peut-il consulter les fichiers de police ?",
    "options": [
      "Pour vérifier le casier judiciaire de ses voisins par curiosité.",
      "Dans le strict respect des finalités propres à chaque traitement et pour les seuls besoins de ses missions.",
      "Pour rendre service à un ami commerçant.",
      "En prêtant son code d'accès à un tiers."
    ],
    "correct": 1,
    "exp": "Le policier n'alimente et ne consulte les fichiers automatisés que dans le strict respect de la loi et pour les seuls besoins de ses missions."
  },
  {
    "id": 264,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-24 CSI",
    "q": "Quelle autorité constitutionnelle indépendante contrôle le respect de la déontologie par les policiers et les gendarmes (art. R. 434-24 CSI) ?",
    "options": [
      "La Cour des comptes.",
      "Le Défenseur des droits.",
      "Le Conseil économique et social.",
      "La Banque de France."
    ],
    "correct": 1,
    "exp": "La Police et la Gendarmerie nationales sont soumises au contrôle du Défenseur des droits (art. 71-1 de la Constitution et R. 434-24 CSI)."
  },
  {
    "id": 265,
    "module": "m7",
    "ref": "Code de déontologie — Art. R. 434-24 CSI",
    "q": "Lorsqu'un policier défère à une convocation du Défenseur des droits (art. R. 434-24 CSI), par qui peut-il être assisté ?",
    "options": [
      "Il lui est interdit d'être assisté.",
      "Par la personne de son choix.",
      "Uniquement par le ministre de l'Intérieur.",
      "Uniquement par un médecin."
    ],
    "correct": 1,
    "exp": "L'article R. 434-24 du CSI précise que le policier ou le gendarme convoqué par le Défenseur des droits peut à cette occasion être assisté de la personne de son choix."
  },
  {
    "id": 266,
    "module": "m1",
    "ref": "Fiche Organisation PN (DGPN & DGGN)",
    "q": "VRAI OU FAUX : Le Service national de police scientifique (S.N.P.S.) et la D.C.I.S. sont tous deux dirigés conjointement avec le Directeur général de la gendarmerie nationale (DGGN).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Seuls la Direction de la coopération internationale de sécurité (D.C.I.S.), l'A.N.F.S.I. et le S.S.M.S.I. sont dirigés conjointement avec le DGGN. Le S.N.P.S. est un service actif de la seule DGPN."
  },
  {
    "id": 267,
    "module": "m1",
    "ref": "Fiche Galonnage CEA (Policiers Adjoints)",
    "q": "VRAI OU FAUX : Le Policier Adjoint (PA) d'active porte une patte d'épaule à fond bleu Loire sans aucun galon et son appellation réglementaire est « Adjoint ».",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. Le Policier Adjoint d'active porte un fond bleu Loire sans galon et son appellation réglementaire est « Adjoint »."
  },
  {
    "id": 268,
    "module": "m1",
    "ref": "Fiche Galonnage CEA (Réserve opérationnelle)",
    "q": "VRAI OU FAUX : Le Policier Adjoint Réserviste porte exactement le même fond bleu Loire que le Policier Adjoint d'active.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Le Policier Adjoint Réserviste porte une patte d'épaule à fond bleu clair sans galon et a pour appellation « Réserviste »."
  },
  {
    "id": 269,
    "module": "m1",
    "ref": "Fiche Galonnage Conception et Direction",
    "q": "VRAI OU FAUX : Un Commissaire général de police porte 2 pointes de diamant or, tandis qu'un Contrôleur général porte 2 pointes de diamant argent.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. Le Commissaire général porte 2 diamants or sur sa branche de chêne, tandis que les emplois supérieurs de direction (dont Contrôleur général) portent des pointes de diamant argent."
  },
  {
    "id": 270,
    "module": "m1",
    "ref": "Fiche Galonnage CEA (Majors de police)",
    "q": "VRAI OU FAUX : Le grade de Major à l'échelon exceptionnel est supprimé depuis le 1er janvier 2024, et les majors qui en étaient titulaires ont l'obligation immédiate de retirer ce galonnage.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. L'échelon exceptionnel est effectivement supprimé à compter du 1er janvier 2024, mais les majors qui en étaient détenteurs peuvent continuer à porter ce galonnage."
  },
  {
    "id": 271,
    "module": "m1",
    "ref": "Fiche Galonnage Conception et Direction",
    "q": "VRAI OU FAUX : L'Inspecteur général de la Police nationale porte 3 pointes de diamant argent et a pour appellation « Monsieur l'inspecteur général ».",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. Dans les emplois supérieurs de direction : 2 diamants argent = Contrôleur général, 3 = Inspecteur général, 4 = Directeur des services actifs, 5 = DGPN."
  },
  {
    "id": 272,
    "module": "m1",
    "ref": "Fiches Galonnage & Réserve",
    "q": "VRAI OU FAUX : Les retraités des corps actifs de la Police nationale engagés dans la réserve opérationnelle perdent leur galon d'origine et portent un fond bleu clair sans galon.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Contrairement aux policiers adjoints réservistes, les retraités des corps actifs de la P.N. conservent dans la réserve le grade qu'ils détenaient en activité."
  },
  {
    "id": 273,
    "module": "m2",
    "ref": "Annales Nîmes (Thème M. Lemaître, Fascicule DPS-DPG p. 9)",
    "q": "VRAI OU FAUX : Un individu coupe le cadenas de la chaîne de l'antivol d'une moto avec une pince monseigneur, mais s'enfuit en courant quand le propriétaire crie par la fenêtre « au voleur ». Cette fuite constitue un désistement volontaire exonérant l'auteur de toute tentative punissable.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. (Corrigé officiel Nîmes Q11) : L'auteur n'a pas renoncé de sa propre volonté à la commission de l'infraction. C'est la réaction du propriétaire criant par la fenêtre qui provoque la fuite : il y a donc absence de désistement volontaire et la tentative de vol est punissable."
  },
  {
    "id": 274,
    "module": "m2",
    "ref": "Annales Nîmes (Thème Vol au scooter, Fascicule DPS-DPG p. 9)",
    "q": "VRAI OU FAUX : Deux individus sur un scooter ciblent une passante ; le passager tente d'arracher son sac à main tandis que le conducteur manœuvre le deux-roues. Le conducteur doit être qualifié de coauteur de la tentative de vol.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q20) : Le conducteur présent sur les lieux qui participe activement à la réalisation des faits en pilotant le scooter est qualifié de coauteur de l'infraction."
  },
  {
    "id": 275,
    "module": "m2",
    "ref": "Annales Nîmes (Fascicule DPS-DPG p. 34)",
    "q": "VRAI OU FAUX : Pour qu'une infraction soit juridiquement constituée, la réunion de trois éléments est indispensable : l'élément matériel, l'élément moral et l'élément légal.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q7) : Pour qu'une infraction soit constituée, il faut obligatoirement l'existence de ces trois éléments cumulatifs."
  },
  {
    "id": 276,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (Art. 121-4 CP)",
    "q": "VRAI OU FAUX : La tentative d'infraction est toujours punissable pour les crimes, ainsi que pour les contraventions de 5e classe prévues par décret.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Selon l'article 121-4 du Code pénal, la tentative est toujours punissable pour les crimes, et dans les cas prévus par la loi pour les délits. Elle n'est JAMAIS punissable pour les contraventions."
  },
  {
    "id": 277,
    "module": "m2",
    "ref": "Fiche La Complicité (Art. 121-7 CP p. 22)",
    "q": "VRAI OU FAUX : Le simple conseil technique donné à un individu pour commettre une infraction suffit à lui seul à caractériser une complicité par provocation.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Le cours précise expressément que le simple conseil donné n'entraîne pas la complicité. La provocation exige des circonstances précises (don, promesse, ordre, menace, ou abus d'autorité/pouvoir)."
  },
  {
    "id": 278,
    "module": "m2",
    "ref": "Fiche La Tentative Infructueuse (p. 20)",
    "q": "VRAI OU FAUX : L'infraction impossible (ex: un pickpocket qui plonge sa main dans une poche de manteau s'avérant vide) n'est pas punissable faute d'objet matériel à dérober.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. L'infraction impossible est une variante de la tentative infructueuse : elle est punie exactement comme l'infraction tentée."
  },
  {
    "id": 279,
    "module": "m2",
    "ref": "Annales Nîmes (Fascicule DPS-DPG p. 34)",
    "q": "VRAI OU FAUX : Selon la classification tripartite des infractions en droit pénal français, les infractions sont classées par gravité en crime, délit, contravention.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q6) : C'est la définition exacte de la classification tripartite des infractions."
  },
  {
    "id": 280,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21)",
    "q": "VRAI OU FAUX : Un complice peut être condamné pour complicité même si l'auteur principal de l'acte est déclaré pénalement irresponsable en raison d'un trouble psychique.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. L'existence d'un fait principal punissable suffit à réprimer la complicité, ce qui n'induit pas obligatoirement que l'auteur même de l'acte soit personnellement puni."
  },
  {
    "id": 281,
    "module": "m3",
    "ref": "Fiche Responsabilité Pénale (Art. 121-1 CP p. 35)",
    "q": "VRAI OU FAUX : En vertu de l'article 121-1 du Code pénal, « Nul n'est responsable que de son propre fait ».",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. C'est le principe cardinal de la responsabilité pénale posé par l'article 121-1 du Code pénal."
  },
  {
    "id": 282,
    "module": "m3",
    "ref": "Fiche La Minorité (CJPM & CP p. 35)",
    "q": "VRAI OU FAUX : Un mineur âgé de 11 ans reconnu coupable d'une infraction peut être condamné à une peine d'emprisonnement avec sursis probatoire.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Jusqu'à 13 ans, le mineur bénéficie de la présomption de non-discernement et ne peut faire l'objet QUE de mesures éducatives (jamais de peine d'emprisonnement ou d'amende)."
  },
  {
    "id": 283,
    "module": "m3",
    "ref": "Fiche La Minorité (p. 35)",
    "q": "VRAI OU FAUX : La capacité de discernement d'un mineur suspecté d'une infraction relève de l'appréciation souveraine du policier enquêteur lors de la procédure.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Le cours souligne expressément que cette capacité de discernement relève de l'appréciation du magistrat et non de l'enquêteur."
  },
  {
    "id": 284,
    "module": "m3",
    "ref": "Fiche Les Faits Justificatifs (Art. 122-4 CP & R. 434-5 CSI)",
    "q": "VRAI OU FAUX : Le commandement de l'autorité légitime justifie pénalement le policier dans l'exécution de tout ordre de sa hiérarchie, y compris s'il est manifestement illégal.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. L'article 122-4 alinéa 2 du Code pénal et l'article R. 434-5 du CSI prévoient expressément qu'il n'y a pas de justification lorsque l'ordre est manifestement illégal et de nature à compromettre gravement un intérêt public."
  },
  {
    "id": 285,
    "module": "m3",
    "ref": "Fiche L'État de Nécessité (Art. 122-7 CP p. 37)",
    "q": "VRAI OU FAUX : L'état de nécessité exige la réunion de trois conditions : danger actuel ou imminent menaçant une personne ou un bien, nécessité de l'infraction, et proportionnalité des moyens employés.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. Ce sont les trois conditions cumulatives strictes exigées par l'article 122-7 du Code pénal."
  },
  {
    "id": 286,
    "module": "m3",
    "ref": "Fiche Trouble Psychique (Art. 122-1-1 CP p. 36)",
    "q": "VRAI OU FAUX : L'abolition temporaire du discernement causée par la consommation volontaire récente de drogues dans le but de commettre un crime exonère son auteur de toute responsabilité pénale.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. En vertu de l'article 122-1-1 du Code pénal, la responsabilité pénale demeure engagée lorsque l'abolition temporaire résulte d'une intoxication volontaire préalable destinée à commettre ou faciliter l'infraction."
  },
  {
    "id": 287,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (Art. 122-9 CP p. 38)",
    "q": "VRAI OU FAUX : Le régime protecteur du lanceur d'alerte peut s'appliquer à des révélations de faits couverts par le secret de la défense nationale s'ils concernent un délit fiscal.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Le secret de la défense nationale, le secret médical et le secret des relations avocat-client sont formellement exclus du régime protecteur de l'alerte."
  },
  {
    "id": 288,
    "module": "m4",
    "ref": "Annales Nîmes (Thèmes M. Parolit & M. Parsoni, BJ-06/08 DPS DPG p. 7)",
    "q": "VRAI OU FAUX : Pour protéger son stock de bouteilles ou de boissons contre un cambrioleur en fuite, un propriétaire lui assène un coup de barre de fer sur le crâne ou lui tire dessus : il agit en état de légitime défense des biens.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. (Corrigé officiel Nîmes) : Non. Pour défendre un bien, l'acte doit être autre qu'un homicide volontaire et proportionné. Frapper violemment à la tête avec une barre de fer ou tirer sur un fuyard pour défendre de simples caisses de boissons est disproportionné et constitutif d'une infraction pénale."
  },
  {
    "id": 289,
    "module": "m4",
    "ref": "Annales Nîmes (Thèmes Couteau/Statuette/Chaise, BJ-06/08 DPS DPG p. 7)",
    "q": "VRAI OU FAUX : Une victime agressée d'un coup de couteau qui, pour éviter un second coup imminent, frappe l'agresseur à la tête avec une statuette ou une chaise agit en état de légitime défense des personnes.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes A1/A2/A3) : L'atteinte est injustifiée, actuelle et réelle (A.I.R.), et la riposte est nécessaire, simultanée et proportionnée (N.S.P.) par rapport à l'agression au couteau susceptible d'infliger une blessure mortelle."
  },
  {
    "id": 290,
    "module": "m4",
    "ref": "Annales Nîmes (Poursuite dans l'immeuble / Arme pointée, BJ-06/08 DPS DPG p. 8)",
    "q": "VRAI OU FAUX : Lors d'une poursuite à pied, un voleur bloqué dans une impasse ou un hall se retourne et pointe une arme de poing vers les policiers : les policiers peuvent faire feu sur lui sans faire de sommations préalables.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q19-21) : C'est le 1° de l'article L. 435-1 du CSI (personnes armées menaçant la vie). En raison de l'imminence de la menace mortelle, aucune sommation n'est légalement requise."
  },
  {
    "id": 291,
    "module": "m4",
    "ref": "Annales Nîmes (Vol d'ordinateur / Vol de collier, BJ-06/08 DPS DPG)",
    "q": "VRAI OU FAUX : Un individu casse la vitre d'une voiture pour dérober un ordinateur ou arrache un collier et s'enfuit en courant sans arme : les policiers qui le poursuivent sans pouvoir le rattraper peuvent faire usage de leur arme de service pour stopper sa fuite.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. (Corrigé officiel Nîmes Q18 et Q2) : Non, à ce moment précis, les policiers ne peuvent pas utiliser leur arme de service en l'absence de toute dangerosité physique de l'auteur pour la vie ou l'intégrité d'autrui."
  },
  {
    "id": 292,
    "module": "m4",
    "ref": "Annales Nîmes (Sommations obligatoires, BJ-06 DPS DPG)",
    "q": "VRAI OU FAUX : Les deux sommations à haute voix (« Halte police », puis « Halte ou je fais feu ») sont obligatoires uniquement dans les situations 2° (défense des lieux/personnes confiées) et 3° (fuite d'un individu dangereux sous garde) de l'article L. 435-1 du CSI.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q22 et Q5) : Les sommations ne sont obligatoires que pour ces deux situations (défense des lieux/personnes confiées et fuite d'un individu dangereux placé sous garde)."
  },
  {
    "id": 293,
    "module": "m4",
    "ref": "Annales Nîmes (Conditions acte de défense des biens, BJ-06/08 DPS DPG p. 7)",
    "q": "VRAI OU FAUX : L'acte de défense pour interrompre l'exécution d'un crime ou délit contre un bien (art. 122-5 al. 2 CP) doit cumulativement être : strictement nécessaire, autre qu'un homicide volontaire, et proportionné.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q13 & Q16) : Ce sont les trois conditions cumulatives strictes exigées par l'article 122-5 alinéa 2 du Code pénal."
  },
  {
    "id": 294,
    "module": "m4",
    "ref": "Annales Nîmes (Absolue nécessité, BJ-06/08 DPS DPG p. 8)",
    "q": "VRAI OU FAUX : Dans le cadre de l'article L. 435-1 du CSI, la condition d'« absolue nécessité » signifie qu'il doit exister une menace d'atteinte à la vie ou à l'intégrité physique de l'agent ou d'autrui.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q16 et Q5) : C'est la définition exacte formulée dans le fascicule de formation et les grilles officielles de correction."
  },
  {
    "id": 295,
    "module": "m4",
    "ref": "Annales Nîmes (PA hors service, BJ-08 DPS DPG p. 19)",
    "q": "VRAI OU FAUX : Un Policier Adjoint (PA) en repos chez lui peut faire usage de son arme de service dans le cadre de l'article L. 435-1 du CSI s'il est témoin d'une infraction.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. (Corrigé officiel Nîmes Exercice 3 Q6) : Non. Les policiers adjoints ne sont pas autorisés à conserver leur arme individuelle en dehors des heures de service."
  },
  {
    "id": 296,
    "module": "m4",
    "ref": "Annales Nîmes (Types d'armes concernés, BJ-06 DPS DPG p. 19)",
    "q": "VRAI OU FAUX : Pour un policier actif, les armes qui rentrent dans le cadre légal de l'usage des armes (L. 435-1 CSI) comprennent l'arme individuelle, l'arme en dotation collective et l'arme de force intermédiaire.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q12 Promotion 278) : Ces trois catégories d'armes régulièrement dotées relèvent du cadre légal d'usage des armes de l'article L. 435-1 du CSI."
  },
  {
    "id": 297,
    "module": "m4",
    "ref": "Annales Nîmes (Immobilisation de véhicule, BJ-08 DPS DPG p. 8)",
    "q": "VRAI OU FAUX : Les policiers peuvent tirer pour immobiliser un véhicule dont le conducteur n'obtempère pas à un ordre d'arrêt, même si rien n'indique que les occupants sont dangereux pour la vie ou l'intégrité d'autrui.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. (Corrigé officiel Nîmes Exercice 2 Q6) : L'article L. 435-1 4° CSI exige des raisons réelles et objectives de penser que les occupants dans leur fuite sont susceptibles de porter atteinte à leur vie, à leur intégrité physique ou à celles d'autrui."
  },
  {
    "id": 298,
    "module": "m5",
    "ref": "Fiche Compétences Contrôles d'Identité (Art. 78-2 & 78-6 CPP p. 43)",
    "q": "VRAI OU FAUX : Un Policier Adjoint (art. 21-1° ter CPP) est habilité de plein droit à effectuer l'ensemble des contrôles d'identité préventifs de l'article 78-2 alinéa 8 du CPP au même titre qu'un OPJ.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Les policiers adjoints ne sont habilités aux contrôles d'identité que dans les cas limitatifs des art. 78-2-2 et 78-2-4 du CPP ; en dehors de ces cas, ils ne peuvent que relever l'identité (art. 78-6 CPP) des contrevenants pour dresser des PV."
  },
  {
    "id": 299,
    "module": "m5",
    "ref": "Fiche Contrôles d'Identité PJ (Art. 78-2 al. 4 CPP p. 44)",
    "q": "VRAI OU FAUX : Dans le cadre d'un contrôle d'identité de police judiciaire (art. 78-2 al. 4 CPP), une personne peut être contrôlée au seul motif qu'elle est susceptible de fournir des renseignements utiles sur une simple contravention.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. L'article 78-2 alinéa 4 du CPP précise expressément que ce cadre s'applique uniquement en cas de crime ou de délit : les contraventions sont formellement exclues."
  },
  {
    "id": 300,
    "module": "m5",
    "ref": "Fiche Contrôles sur Réquisitions du PR (Art. 78-2 al. 7 CPP p. 45)",
    "q": "VRAI OU FAUX : Lors d'un contrôle d'identité sur réquisition écrite du procureur de la République, la découverte fortuite d'une infraction non visée dans les réquisitions entraîne la nullité de la procédure.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. L'article 78-2 alinéa 7 du CPP dispose que le fait que ce contrôle révèle des infractions autres que celles visées dans les réquisitions du procureur ne constitue pas une cause de nullité des procédures incidentes."
  },
  {
    "id": 301,
    "module": "m5",
    "ref": "Fiche La Vérification d'Identité (Art. 78-3 CPP p. 50)",
    "q": "VRAI OU FAUX : La retenue pour vérification d'identité (art. 78-3 CPP) ne peut excéder 4 heures en métropole et relève de la responsabilité exclusive d'un Officier de Police Judiciaire (OPJ).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. La durée est limitée à 4 heures maximum (8 heures à Mayotte et en Guyane) et la personne doit être présentée à un OPJ qui en assure la responsabilité exclusive."
  },
  {
    "id": 302,
    "module": "m5",
    "ref": "Fiche Vérification de Situation (Art. 78-3-1 CPP p. 50)",
    "q": "VRAI OU FAUX : Une retenue pour vérification de situation liée à des activités terroristes (art. 78-3-1 CPP) peut être mise en œuvre même si la personne contrôlée présente un justificatif d'identité officiel valide.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. L'article 78-3-1 du CPP permet expressément de retenir la personne pour vérification de sa situation jusqu'à 4 heures « même si elle présente un justificatif d'identité »."
  },
  {
    "id": 303,
    "module": "m5",
    "ref": "Fiche Les Libertés Publiques (Art. 66 Constitution p. 30)",
    "q": "VRAI OU FAUX : L'autorité judiciaire est désignée par l'article 66 de la Constitution de 1958 comme la gardienne de la liberté individuelle.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. L'article 66 de la Constitution dispose que « L'autorité judiciaire, gardienne de la liberté individuelle, assure le respect de ce principe dans les conditions prévues par la loi »."
  },
  {
    "id": 304,
    "module": "m5",
    "ref": "Fiche Moyens de Preuve de l'Identité (Art. 78-2 al. 1 CPP p. 43)",
    "q": "VRAI OU FAUX : Lors d'un contrôle d'identité, toute personne a l'obligation légale de justifier de son identité exclusivement au moyen d'un passeport biométrique ou d'une CNI en cours de validité.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Selon l'article 78-2 alinéa 1 du CPP, la personne peut justifier de son identité « par tout moyen » (CNI, passeport, permis, mais aussi témoignages, etc.)."
  },
  {
    "id": 305,
    "module": "m6",
    "ref": "Annales Nîmes (Clameur publique, Fascicule DPS-DPG p. 33)",
    "q": "VRAI OU FAUX : Le gérant d'un magasin qui poursuit un individu dans la rue en criant « au voleur, arrêtez-le ! » place immédiatement les policiers intervenants dans le cadre de l'enquête de flagrant délit.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q7 Promotion 278) : Il s'agit du cas de flagrance où, dans un temps très voisin de l'action, la personne soupçonnée est poursuivie par la clameur publique (art. 53 al. 1 CPP)."
  },
  {
    "id": 306,
    "module": "m6",
    "ref": "Annales Nîmes (Durée flagrance, Fascicule DPS-DPG p. 34)",
    "q": "VRAI OU FAUX : L'enquête de flagrant délit peut se poursuivre sans discontinuer pendant une durée initiale de huit jours.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q8) : L'enquête de flagrance peut se poursuivre sans discontinuer pendant une durée de huit jours (art. 53 CPP)."
  },
  {
    "id": 307,
    "module": "m6",
    "ref": "Annales Nîmes (Champ flagrance, Fascicule DPS-DPG p. 34)",
    "q": "VRAI OU FAUX : Une enquête de flagrant délit peut être diligentée pour un délit qui n'est pas puni d'une peine d'emprisonnement (délit puni d'amende seule).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. (Corrigé officiel Nîmes Q4 et Q13) : L'enquête de flagrant délit est strictement réservée aux crimes et aux délits punis d'une peine d'emprisonnement (art. 67 CPP)."
  },
  {
    "id": 308,
    "module": "m6",
    "ref": "Annales Nîmes (Communication sur l'enquête, Fascicule DPS-DPG p. 31)",
    "q": "VRAI OU FAUX : Dans le cadre d'une enquête pénale, tout policier de patrouille peut communiquer librement aux médias sur l'état d'avancement des investigations sans accord préalable.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. (Corrigé officiel Nîmes Q14) : Seuls peuvent légalement communiquer le procureur de la République, et l'OPJ avec l'accord et sous le contrôle du procureur de la République (art. 11 CPP)."
  },
  {
    "id": 309,
    "module": "m6",
    "ref": "Annales Nîmes (Principaux cadres d'enquête, Fascicule DPS-DPG p. 31)",
    "q": "VRAI OU FAUX : Les trois principaux cadres d'enquête en droit procédural pénal sont : l'enquête de flagrant délit, l'enquête préliminaire et la commission rogatoire.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. (Corrigé officiel Nîmes Q5 et Q8) : Ce sont les trois cadres d'enquête fondamentaux prévus par le Code de procédure pénale."
  },
  {
    "id": 310,
    "module": "m6",
    "ref": "Fiche L'Enquête Préliminaire (Art. 76 CPP p. 63)",
    "q": "VRAI OU FAUX : En enquête préliminaire de droit commun, les policiers peuvent en principe s'introduire et perquisitionner dans un domicile sans l'assentiment exprès et manuscrit de l'occupant.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. Caractérisée par l'absence de contrainte de principe, l'introduction dans un domicile en enquête préliminaire suppose obligatoirement l'assentiment exprès et écrit de la personne (art. 76 CPP)."
  },
  {
    "id": 311,
    "module": "m7",
    "ref": "Code de déontologie (Art. R. 434-16 CSI)",
    "q": "VRAI OU FAUX : La palpation de sécurité est exclusivement une mesure de sûreté qui ne revêt pas un caractère systématique et se pratique, autant que possible, à l'abri du regard du public.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. L'article R. 434-16 du CSI rappelle que la palpation de sécurité est exclusivement une mesure de sûreté visant à s'assurer de l'absence d'objet dangereux. Elle n'est pas systématique."
  },
  {
    "id": 312,
    "module": "m7",
    "ref": "Code de déontologie (Art. R. 434-17 CSI & 803 CPP)",
    "q": "VRAI OU FAUX : L'utilisation des menottes ou des entraves est légalement obligatoire sur toute personne appréhendée ou placée sous garde de police sans aucune condition supplémentaire.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. L'utilisation des menottes n'est justifiée que lorsque la personne est considérée soit comme dangereuse pour autrui ou elle-même, soit comme susceptible de tenter de s'enfuir."
  },
  {
    "id": 313,
    "module": "m7",
    "ref": "Code de déontologie (Art. R. 434-19 CSI)",
    "q": "VRAI OU FAUX : Même lorsqu'il n'est pas en service, le policier intervient de sa propre initiative pour porter assistance à toute personne en danger.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. L'article R. 434-19 du CSI impose formellement cette obligation d'assistance de sa propre initiative même en dehors des heures de service."
  },
  {
    "id": 314,
    "module": "m7",
    "ref": "Code de déontologie (Art. R. 434-12 CSI)",
    "q": "VRAI OU FAUX : L'obligation de ne pas nuire à la considération portée à l'institution policière s'impose au policier en tout temps, y compris lorsqu'il s'exprime sur les réseaux sociaux.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "VRAI. L'article R. 434-12 du CSI s'applique « en tout temps, dans ou en dehors du service, y compris lorsqu'il s'exprime à travers les réseaux de communication électronique sociaux »."
  },
  {
    "id": 315,
    "module": "m7",
    "ref": "Code de déontologie (Art. R. 434-24 CSI)",
    "q": "VRAI OU FAUX : Un policier ou un gendarme invité à déférer à une convocation du Défenseur des droits a l'interdiction d'être assisté par un tiers lors de son audition.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "FAUX. L'article R. 434-24 du CSI dispose expressément que le fonctionnaire ou militaire convoqué par le Défenseur des droits « peut à cette occasion être assisté de la personne de son choix »."
  },
  {
    "id": 316,
    "module": "m1",
    "ref": "Fiche Organisation PN (Direction Générale)",
    "q": "VRAI OU FAUX : La Police nationale et la Gendarmerie nationale sont toutes les deux sous l'autorité exclusive du ministère des Armées pour leurs missions de maintien de l'ordre public.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Pour l'accomplissement des missions de sécurité intérieure et de maintien de l'ordre, la Police nationale et la Gendarmerie nationale sont placées sous l'autorité du MINISTRE DE L'INTÉRIEUR (art. R. 434-2 CSI). Le ministère des Armées n'intervient que pour les missions purement militaires de la gendarmerie."
  },
  {
    "id": 317,
    "module": "m1",
    "ref": "Fiche Organigramme DGPN",
    "q": "VRAI OU FAUX : La Préfecture de police de Paris (P.P.) est une simple direction centrale rattachée à la DGPN au même titre que la DNSP.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La Police nationale est composée de trois grandes entités distinctes : la DGPN, la DGSI et la Préfecture de police de Paris (P.P.). La P.P. n'est pas une direction sous la DGPN, c'est une entité majeure autonome placée sous l'autorité directe du Préfet de police."
  },
  {
    "id": 318,
    "module": "m1",
    "ref": "Fiche Galonnage CEA (Gardien de la paix)",
    "q": "VRAI OU FAUX : Un Gardien de la paix stagiaire porte 1 chevron blanc sur sa patte d'épaule, tandis que le titulaire en porte 2.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'élève gardien ne porte aucun chevron, le stagiaire porte 1 chevron blanc, et le gardien titularisé porte 2 chevrons blancs (avant le 6e échelon où il en porte 3 avec l'appellation Sous-Brigadier)."
  },
  {
    "id": 319,
    "module": "m1",
    "ref": "Fiche Galonnage CEA (Sous-Brigadier)",
    "q": "VRAI OU FAUX : L'appellation « Sous-Brigadier » est un grade officiel distinct auquel on accède uniquement par examen professionnel.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : « Sous-Brigadier » n'est pas un grade séparé, c'est une appellation attribuée automatiquement aux Gardiens de la paix ayant atteint le 6e échelon de leur grade. Ils portent alors 3 chevrons blancs."
  },
  {
    "id": 320,
    "module": "m1",
    "ref": "Fiche Galonnage CEA (Brigadier-Chef)",
    "q": "VRAI OU FAUX : Le galonnage d'un Brigadier-Chef de police est constitué d'un galon blanc traversé d'une raie rouge.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Le Brigadier-Chef de police porte exactement 1 galon blanc avec raie rouge. Le Major de police ajoute à cela un liseré blanc."
  },
  {
    "id": 321,
    "module": "m1",
    "ref": "Fiche Galonnage CEA (Major RULP)",
    "q": "VRAI OU FAUX : Le Major de police RULP (Responsable d'Unité Locale de Police) porte un losange au contour or sur son galonnage.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le Major RULP porte un losange au contour BLANC (accompagné du galon blanc à raie rouge et du liseré blanc). C'était l'ancien échelon exceptionnel (supprimé en 2024) qui portait un contour or."
  },
  {
    "id": 322,
    "module": "m1",
    "ref": "Fiche Galonnage Commandement (Capitaine)",
    "q": "VRAI OU FAUX : Durant les 4 années suivant sa titularisation, un Capitaine de police porte 2 galons blancs et a pour appellation réglementaire « Lieutenant ».",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Pendant ses 4 premières années après titularisation dans le corps de commandement, le Capitaine porte 2 galons blancs et l'appellation « Lieutenant ». Ce n'est qu'après qu'il arbore ses 3 galons blancs avec l'appellation « Capitaine »."
  },
  {
    "id": 323,
    "module": "m1",
    "ref": "Fiche Galonnage Commandement (Commandant divisionnaire)",
    "q": "VRAI OU FAUX : Le Commandant divisionnaire fonctionnel porte une pointe de diamant OR, tandis que le Commandant divisionnaire de grade porte une pointe de diamant ARGENT.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : C'est l'inverse ! Le grade de Commandant divisionnaire porte une pointe de diamant OR, tandis que l'emploi supérieur de Commandant divisionnaire FONCTIONNEL porte une pointe de diamant ARGENT (comme tous les emplois fonctionnels de direction)."
  },
  {
    "id": 324,
    "module": "m1",
    "ref": "Fiche Galonnage Conception et Direction (Commissaire)",
    "q": "VRAI OU FAUX : Le Commissaire de police porte une branche de chêne comportant 5 feuilles et 1 gland brodés.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'Élève commissaire porte 3 feuilles ; le Commissaire de police porte 5 feuilles et 1 gland ; le Commissaire divisionnaire porte 7 feuilles et 2 glands ; le Commissaire général porte 9 feuilles, 3 glands et 2 diamants or."
  },
  {
    "id": 325,
    "module": "m1",
    "ref": "Fiche Organisation PN (DGSI)",
    "q": "VRAI OU FAUX : La Direction Générale de la Sécurité Intérieure (DGSI) est une direction active subordonnée au Directeur général de la police nationale (DGPN).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La DGSI est une Direction Générale autonome qui dépend directement de l'autorité du ministre de l'Intérieur, et non de la DGPN."
  },
  {
    "id": 326,
    "module": "m1",
    "ref": "Fiche Organisation PN (RAID)",
    "q": "VRAI OU FAUX : Le RAID est l'unité d'intervention d'élite de la Police nationale dont le sigle signifie : Recherche, Assistance, Intervention, Dissuasion.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le sens officiel et exact du sigle R.A.I.D."
  },
  {
    "id": 327,
    "module": "m1",
    "ref": "Fiche Organisation PN (SDLP)",
    "q": "VRAI OU FAUX : Le Service de la protection (SDLP) a pour mission principale la gestion du parc automobile et du matériel d'intervention de la police.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le S.D.L.P. est le Service de la protection chargé d'assurer la sécurité rapprochée des hautes personnalités françaises et étrangères, et non de la logistique du matériel (qui relève de la DRHFS)."
  },
  {
    "id": 328,
    "module": "m1",
    "ref": "Fiche Galonnage Police (Couleurs d'épaules)",
    "q": "VRAI OU FAUX : Les manchons et pattes d'épaules sont de couleur bleu CRS pour les personnels de la DCCRS, et bleu police pour les autres directions.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : La couleur des pattes d'épaule varie selon la direction d'affectation : bleu CRS pour les Compagnies Républicaines de Sécurité, et bleu police pour les autres directions actives."
  },
  {
    "id": 329,
    "module": "m1",
    "ref": "Fiche Galonnage (DGPN)",
    "q": "VRAI OU FAUX : Le Directeur Général de la Police Nationale (DGPN) porte 5 pointes de diamant or sur ses épaulettes.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le DGPN porte 5 pointes de diamant ARGENT (comme tous les emplois de direction : 2 pour contrôleur général, 3 pour inspecteur général, 4 pour directeur des services actifs, 5 pour le DGPN). Seuls les grades de commissaire général et commandant divisionnaire portent des diamants or."
  },
  {
    "id": 330,
    "module": "m1",
    "ref": "Fiche Organisation PN (ANFSI)",
    "q": "VRAI OU FAUX : L'A.N.F.S.I. (Agence du numérique des forces de sécurité intérieure) est un service conjoint à la police et à la gendarmerie nationales.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'A.N.F.S.I., la D.C.I.S. et le S.S.M.S.I. sont les trois entités dirigées conjointement par le DGPN et le DGGN."
  },
  {
    "id": 331,
    "module": "m1",
    "ref": "Fiche Organisation PN (Académie de Police)",
    "q": "VRAI OU FAUX : L'Académie de police créée en 2023 est chargée de la formation initiale et continue de l'ensemble des policiers nationaux.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'Académie de Police (A.D.P.) pilote désormais l'ensemble de la formation, des écoles de police et de la doctrine des métiers de la sécurité intérieure."
  },
  {
    "id": 332,
    "module": "m1",
    "ref": "Fiche Galonnage Commandement (Élève et Stagiaire)",
    "q": "VRAI OU FAUX : Un élève officier porte un alpha blanc pendant ses 6 premiers mois, puis 1 galon blanc lorsqu'il devient stagiaire.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le déroulé exact du galonnage dans le corps de commandement : 1 alpha blanc (élève 6 premiers mois) puis 1 galon blanc (stagiaire jusqu'à titularisation)."
  },
  {
    "id": 333,
    "module": "m1",
    "ref": "Fiche Galonnage CEA (Appellation du PA)",
    "q": "VRAI OU FAUX : On s'adresse réglementairement à un Policier Adjoint en lui disant « Monsieur le Gardien ».",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'appellation officielle d'un Policier Adjoint est « Adjoint ». L'appellation « Gardien » commence dès le grade d'élève gardien de la paix."
  },
  {
    "id": 334,
    "module": "m1",
    "ref": "Fiche Organisation PN (DNSP)",
    "q": "VRAI OU FAUX : La Direction Nationale de la Sécurité Publique (DNSP) est la direction qui assure la police du quotidien et les patrouilles de police secours dans les circonscriptions.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : La DNSP regroupe les effectifs en tenue, commissariats locaux, brigades anticriminalité (BAC) et police secours au contact direct de la population."
  },
  {
    "id": 335,
    "module": "m1",
    "ref": "Fiche Galonnage Conception et Direction (Appellation)",
    "q": "VRAI OU FAUX : Pour s'adresser à un Commissaire de police divisionnaire, la formule verbale d'usage est simplement « Divisionnaire ».",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Dans le corps de conception et de direction, on utilise obligatoirement le titre protocolaire complet : « Madame / Monsieur le commissaire divisionnaire »."
  },
  {
    "id": 336,
    "module": "m2",
    "ref": "Annales Nîmes (Thème Scooter, Fascicule DPS-DPG p. 9)",
    "q": "VRAI OU FAUX : Lors d'un vol à l'arraché commis à deux sur un scooter, si la victime s'accroche fermement à son sac et fait chuter les auteurs qui s'enfuient bredouilles, l'infraction doit être qualifiée de délit de violences simples.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'infraction doit être qualifiée de TENTATIVE DE VOL (éventuellement aggravé par la réunion de circonstances). Les violences subies par la résistance de la victime ne font pas disparaître l'intention et le commencement d'exécution du vol."
  },
  {
    "id": 337,
    "module": "m2",
    "ref": "Annales Nîmes (Fascicule DPS-DPG p. 9)",
    "q": "VRAI OU FAUX : Il y a absence de désistement volontaire lorsque l'auteur interrompt son action en raison de l'intervention d'un tiers ou de l'alarme d'un riverain.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes Q11) : Pour qu'il y ait désistement volontaire, le renoncement doit être spontané et émaner de la seule volonté de l'auteur. Si la fuite est provoquée par un cri, un témoin ou une alarme, il y a absence de désistement volontaire et la tentative est punissable."
  },
  {
    "id": 338,
    "module": "m2",
    "ref": "Fiche L'Infraction (Art. 121-3 CP)",
    "q": "VRAI OU FAUX : Il n'y a point de crime ou de délit sans intention de le commettre, sauf lorsque la loi prévoit expressément une faute d'imprudence ou de négligence.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la lettre même de l'article 121-3 alinéas 1 et 2 du Code pénal concernant l'élément moral des infractions."
  },
  {
    "id": 339,
    "module": "m2",
    "ref": "Fiche L'Infraction (Art. 311-1 CP)",
    "q": "VRAI OU FAUX : L'article 311-1 du Code pénal définit le vol comme la soustraction frauduleuse de la chose d'autrui.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la définition légale exacte du vol en droit français (l'article 311-3 en fixant la répression)."
  },
  {
    "id": 340,
    "module": "m2",
    "ref": "Fiche La Tentative Punissable (p. 19)",
    "q": "VRAI OU FAUX : Les simples actes préparatoires (ex: acheter des gants et une cagoule dans un magasin) suffisent à constituer le commencement d'exécution d'un vol.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Les actes préparatoires ne constituent pas un commencement d'exécution et ne sont pas punissables au titre de la tentative. Le commencement d'exécution exige des actes tendant directement et immédiatement à la commission du délit (ex: fracturer la serrure)."
  },
  {
    "id": 341,
    "module": "m2",
    "ref": "Fiche La Complicité (Art. 121-7 CP p. 21)",
    "q": "VRAI OU FAUX : Le complice par aide ou assistance est puni de la même peine que celle encourue par l'auteur principal de l'infraction.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Selon l'article 121-6 du Code pénal, « sera puni comme auteur le complice de l'infraction ». Il encourt la même peine maximale que l'auteur principal."
  },
  {
    "id": 342,
    "module": "m2",
    "ref": "Fiche La Complicité (Cass. crim. 18 mars 2003)",
    "q": "VRAI OU FAUX : Le passager d'une voiture qui crie au conducteur « fonce sur le barrage de police ! » est un simple témoin passif puisqu'il n'avait pas les mains sur le volant.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Selon la Cour de cassation (arrêt du 18 mars 2003 cité dans le cours), le passager ayant donné l'ordre de forcer le barrage est complice par provocation (ordre donné) et doit être poursuivi pénalement."
  },
  {
    "id": 343,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 21)",
    "q": "VRAI OU FAUX : La complicité par aide ou assistance est punissable pour toutes les contraventions sans exception.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : En matière de contraventions, la complicité par aide ou assistance n'est punissable QUE si le texte réglementaire le prévoit expressément. En revanche, le complice par provocation/instructions y est toujours punissable (art. R. 610-2 CP)."
  },
  {
    "id": 344,
    "module": "m2",
    "ref": "Fiche L'Infraction (Commission vs Omission)",
    "q": "VRAI OU FAUX : La non-assistance à personne en péril (art. 223-6 CP) est une infraction de commission car elle suppose une action physique contre la victime.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : C'est une infraction d'OMISSION ! L'individu s'abstient volontairement d'agir alors que la loi lui impose de porter secours."
  },
  {
    "id": 345,
    "module": "m2",
    "ref": "Annales Nîmes (Juridictions du 1er degré, Fascicule DPS-DPG p. 37)",
    "q": "VRAI OU FAUX : La cour d'appel et la Cour de cassation sont des juridictions pénales du premier degré.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : (Corrigé officiel Nîmes Q9) : Les juridictions du 1er degré sont le tribunal de police (contraventions), le tribunal correctionnel (délits), la cour d'assises et la cour criminelle départementale (crimes). La cour d'appel est du 2e degré et la Cour de cassation juge le droit."
  },
  {
    "id": 346,
    "module": "m2",
    "ref": "Fiche La Tentative Infructueuse (p. 20)",
    "q": "VRAI OU FAUX : L'infraction manquée se produit lorsque l'auteur a exécuté tous les actes nécessaires mais échoue par simple maladresse (ex: rater sa cible en tirant).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la définition exacte de l'infraction manquée. L'auteur est puni comme pour l'infraction consommée."
  },
  {
    "id": 347,
    "module": "m2",
    "ref": "Fiche La Tentative (p. 20)",
    "q": "VRAI OU FAUX : Si des policiers voient un individu armé d'une batte de baseball qui s'apprête à frapper un passant mais n'a pas encore porté le premier coup, ils ont l'obligation légale d'attendre l'impact physique avant d'intervenir.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La fiche p. 20 souligne expressément que si l'intégrité corporelle des personnes est en danger, l'intervention de la force publique doit impérativement être mise en œuvre AVANT tout commencement d'exécution."
  },
  {
    "id": 348,
    "module": "m2",
    "ref": "Fiche La Complicité (p. 22)",
    "q": "VRAI OU FAUX : Mettre volontairement de la musique à très fort volume pour dissimuler les bruits de coups mortels portés par son ami constitue une complicité par aide ou assistance.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'aide ou assistance peut être matérielle ou consister en un concours apporté pour faciliter la consommation de l'infraction au moment des faits."
  },
  {
    "id": 349,
    "module": "m2",
    "ref": "Fiche La Tentative (Art. 121-5 CP)",
    "q": "VRAI OU FAUX : Pour que la tentative soit punissable, deux conditions cumulatives suffisent : un commencement d'exécution et l'absence de désistement volontaire.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Ce sont les deux seules conditions cumulatives exigées par l'article 121-5 du Code pénal."
  },
  {
    "id": 350,
    "module": "m2",
    "ref": "Fiche L'Infraction (Peines de référence)",
    "q": "VRAI OU FAUX : Les délits sont jugés par le tribunal de police et punis d'amendes n'excédant pas 3 000 euros.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Les délits sont jugés par le TRIBUNAL CORRECTIONNEL et sont punis de peines d'emprisonnement allant de plus de 2 mois jusqu'à 10 ans (voire 20 ans en récidive) et d'amendes d'au moins 3 750 euros. Le tribunal de police juge les contraventions."
  },
  {
    "id": 351,
    "module": "m2",
    "ref": "Fiche La Complicité (Fourniture d'instructions)",
    "q": "VRAI OU FAUX : Donner le code d'accès d'un digicode et les plans d'un entrepôt à des malfaiteurs pour qu'ils commettent un cambriolage constitue une complicité par fourniture d'instructions.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le cas typique de la complicité par fourniture d'instructions prévu par l'article 121-7 alinéa 2 du Code pénal."
  },
  {
    "id": 352,
    "module": "m2",
    "ref": "Fiche La Complicité (Coauteur vs Complice)",
    "q": "VRAI OU FAUX : La jurisprudence considère comme coauteur toute personne qui a apporté son aide tout en étant présente physiquement sur les lieux au moment des faits.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : La fiche p. 21 rappelle que la jurisprudence assimile souvent au coauteur celui qui apporte son aide et est présent au moment de la réalisation de l'infraction."
  },
  {
    "id": 353,
    "module": "m2",
    "ref": "Fiche L'Infraction (Élément légal)",
    "q": "VRAI OU FAUX : En matière pénale, les crimes et délits sont exclusivement créés par la loi, tandis que les contraventions relèvent du pouvoir réglementaire (décrets et arrêtés).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le principe constitutionnel de légalité des délits et des peines (art. 111-2 du Code pénal)."
  },
  {
    "id": 354,
    "module": "m2",
    "ref": "Fiche La Tentative (Désistement actif)",
    "q": "VRAI OU FAUX : Un voleur qui a dérobé des bijoux, puis qui pris de remords les rapporte au commissariat le lendemain, bénéficie du désistement volontaire qui annule l'infraction de vol.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Une fois l'infraction consommée (les bijoux ont été soustraits), le fait de les rendre s'appelle un « repentir actif ». Il n'efface pas l'infraction de vol qui est consommée et punissable (le juge pourra seulement en tenir compte dans la peine)."
  },
  {
    "id": 355,
    "module": "m2",
    "ref": "Fiche La Complicité (Antériorité de l'aide)",
    "q": "VRAI OU FAUX : L'aide ou l'assistance apportée par un individu après la commission de l'infraction, sans accord préalable, relève de la complicité.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'aide doit en principe être antérieure ou concomitante à l'infraction. L'aide intervenue après (sans entente préalable) constitue une infraction autonome distincte (ex: recel, recel de malfaiteurs ou non-dénonciation)."
  },
  {
    "id": 356,
    "module": "m2",
    "ref": "Fiche L'Infraction (Causalité)",
    "q": "VRAI OU FAUX : Dans une infraction de commission, il doit exister un lien de causalité direct et certain entre l'action physique de l'auteur et le résultat dommageable.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est une condition matérielle indispensable : l'auteur ne peut être condamné pour le dommage que si son acte en est la cause."
  },
  {
    "id": 357,
    "module": "m2",
    "ref": "Annales Nîmes (Qualification vol et circonstances)",
    "q": "VRAI OU FAUX : Le vol commis à deux sur la voie publique avec violences physiques constitue un délit de vol aggravé par deux circonstances (réunion et violences).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est l'analyse juridique conforme aux annales et aux articles 311-4 et suivants du Code pénal."
  },
  {
    "id": 358,
    "module": "m3",
    "ref": "Fiche Responsabilité Pénale (p. 35)",
    "q": "VRAI OU FAUX : La responsabilité pénale constitue le quatrième élément constitutif de l'infraction en plus des éléments légal, matériel et moral.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le cours précise formellement que la responsabilité pénale n'est PAS un élément de l'infraction : elle en est l'EFFET et la CONSÉQUENCE juridique."
  },
  {
    "id": 359,
    "module": "m3",
    "ref": "Fiche La Minorité (CJPM p. 35)",
    "q": "VRAI OU FAUX : Un mineur de 14 ans reconnu coupable d'un vol avec effraction encourt les mêmes peines d'emprisonnement qu'un majeur, sans diminution possible.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le mineur de plus de 13 ans bénéficie de l'excuse de minorité qui diminue de moitié les peines maximales encourues par rapport à un majeur."
  },
  {
    "id": 360,
    "module": "m3",
    "ref": "Fiche La Minorité (Retenue)",
    "q": "VRAI OU FAUX : La mesure de « retenue » peut être appliquée aux mineurs âgés de 10 à 13 ans sous des conditions strictes prévues par le Code de la justice pénale des mineurs.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la mesure privative spécifique applicable aux mineurs de 10 à 13 ans (qui ne peuvent pas être placés en garde à vue de droit commun)."
  },
  {
    "id": 361,
    "module": "m3",
    "ref": "Fiche Trouble Psychique (Art. 122-1 al. 2 CP)",
    "q": "VRAI OU FAUX : Une personne dont le discernement a été simplement « altéré » au moment des faits est totalement déclarée pénalement irresponsable.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Seule l'ABOLITION TOTALE du discernement (art. 122-1 al. 1) entraîne l'irresponsabilité pénale. La simple altération (art. 122-1 al. 2) laisse subsister la responsabilité pénale, même si la juridiction peut atténuer la peine."
  },
  {
    "id": 362,
    "module": "m3",
    "ref": "Fiche La Contrainte (Art. 122-2 CP)",
    "q": "VRAI OU FAUX : La contrainte physique n'est reconnue comme cause d'irresponsabilité que si l'événement qui l'a provoquée était à la fois irrésistible et imprévisible.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Les deux caractères sont cumulatifs : une force à laquelle l'individu pouvait raisonnablement s'attendre ou résister ne constitue pas une contrainte exonératoire."
  },
  {
    "id": 363,
    "module": "m3",
    "ref": "Fiche L'Erreur de Droit (Art. 122-3 CP)",
    "q": "VRAI OU FAUX : Pour bénéficier de l'erreur sur le droit, il suffit à un prévenu de démontrer au juge qu'il n'avait pas connaissance du texte de loi.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : « Nul n'est censé ignorer la loi ». L'erreur de droit n'est admise que si l'auteur prouve qu'il n'était objectivement pas en mesure de l'éviter (ex: information erronée écrite d'une administration ou texte non publié)."
  },
  {
    "id": 364,
    "module": "m3",
    "ref": "Fiche Faits Justificatifs (Art. 122-4 al. 1 CP)",
    "q": "VRAI OU FAUX : L'infraction commise par une personne accomplissant un acte prescrit ou autorisé par des dispositions législatives ou réglementaires n'est pas punissable.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est l'énoncé textuel de l'article 122-4 alinéa 1 du Code pénal (ex: médecin signalant une maladie contagieuse imposée par la loi)."
  },
  {
    "id": 365,
    "module": "m3",
    "ref": "Fiche L'État de Nécessité (p. 37)",
    "q": "VRAI OU FAUX : L'état de nécessité peut être invoqué même si la menace visait uniquement un bien matériel et non une personne.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article 122-7 du Code pénal couvre expressément la sauvegarde d'une personne OU d'un bien (ex: briser une porte pour éteindre un feu dans un hangar)."
  },
  {
    "id": 366,
    "module": "m3",
    "ref": "Fiche L'État de Nécessité (Dommages p. 38)",
    "q": "VRAI OU FAUX : Lorsqu'un policier brise une porte par état de nécessité pour porter secours à une personne en danger, sa responsabilité financière personnelle est engagée.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La fiche p. 38 précise qu'en cas de bris de porte par nécessité par un policier ou un pompier dans l'exercice de ses fonctions, la responsabilité relève de l'ADMINISTRATION (responsabilité administrative) et non de sa responsabilité civile personnelle."
  },
  {
    "id": 367,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (p. 38)",
    "q": "VRAI OU FAUX : Une personne morale, telle qu'une société commerciale concurrente, peut valablement bénéficier du statut légal de lanceur d'alerte.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La loi exige obligatoirement que le lanceur d'alerte soit une PERSONNE PHYSIQUE agissant sans contrepartie financière directe et de bonne foi."
  },
  {
    "id": 368,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (Dénonciation calomnieuse)",
    "q": "VRAI OU FAUX : Une personne qui lance une fausse alerte de mauvaise foi pour nuire à sa hiérarchie encourt des poursuites pénales pour dénonciation calomnieuse (art. 226-10 CP).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'abus du dispositif d'alerte de mauvaise foi expose directement son auteur au délit pénal de dénonciation calomnieuse."
  },
  {
    "id": 369,
    "module": "m3",
    "ref": "Fiche La Minorité (Audition libre)",
    "q": "VRAI OU FAUX : La présomption de non-discernement interdit formellement d'entendre un mineur de moins de 13 ans en audition libre dans un service de police.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le NOTA de la fiche p. 35 précise bien que la présomption de non-discernement n'interdit aucunement d'entendre un mineur de moins de 13 ans en audition libre (avec les garanties légales)."
  },
  {
    "id": 370,
    "module": "m3",
    "ref": "Fiche Personnes Morales (Art. 121-2 CP)",
    "q": "VRAI OU FAUX : Les personnes morales (entreprises, associations) peuvent être déclarées pénalement responsables des infractions commises pour leur compte par leurs organes ou représentants.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le principe de la responsabilité pénale des personnes morales posé par l'article 121-2 du Code pénal."
  },
  {
    "id": 371,
    "module": "m3",
    "ref": "Fiche Faits Justificatifs (Effet sur l'infraction)",
    "q": "VRAI OU FAUX : Les faits justificatifs (légitime défense, état de nécessité, ordre de la loi) font disparaître l'élément matériel de l'infraction.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Les faits justificatifs font disparaître l'ÉLÉMENT LÉGAL (l'injustice de l'acte au regard du droit) : l'acte matériel a bien eu lieu, mais la loi lui retire son caractère infractionnel."
  },
  {
    "id": 372,
    "module": "m3",
    "ref": "Fiche Trouble Psychique (Alcoolémie involontaire)",
    "q": "VRAI OU FAUX : Une personne droguée à son insu par un tiers dans un verre et qui commet un délit sous l'effet hallucinatoire peut invoquer la contrainte ou l'irresponsabilité de l'article 122-1 du CP.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'intoxication étant involontaire et subie à son insu, l'exception des articles 122-1-1 ne s'applique pas : le sujet bénéficie de l'irresponsabilité pénale pour abolition involontaire du discernement."
  },
  {
    "id": 373,
    "module": "m3",
    "ref": "Fiche La Contrainte Morale (p. 36)",
    "q": "VRAI OU FAUX : La contrainte morale peut résulter d'une menace de mort immédiate formulée avec une arme sur un employé de banque pour le forcer à ouvrir un coffre.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est l'exemple classique de la contrainte morale externe qui supprime totalement le libre arbitre de l'employé."
  },
  {
    "id": 374,
    "module": "m3",
    "ref": "Fiche L'État de Nécessité (Proportionnalité)",
    "q": "VRAI OU FAUX : Tuer un passant innocent pour se nourrir dans une situation de famine est justifié par l'état de nécessité.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Il y a disproportion manifeste entre la valeur sauvegardée et la valeur détruite (la vie humaine est sacrée) : l'état de nécessité ne peut jamais justifier un homicide volontaire d'un innocent."
  },
  {
    "id": 375,
    "module": "m3",
    "ref": "Fiche Le Lanceur d'Alerte (Défenseur des droits)",
    "q": "VRAI OU FAUX : Le Défenseur des droits est l'organisme officiel qui peut être saisi par tout lanceur d'alerte pour être orienté et protégé.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : La loi du 9 décembre 2016 confie au Défenseur des droits la mission d'orienter et d'aider tout lanceur d'alerte."
  },
  {
    "id": 376,
    "module": "m3",
    "ref": "Fiche Commandement de l'Autorité Légitime (Art. 122-4 al. 2 CP)",
    "q": "VRAI OU FAUX : Pour exonérer son exécutant, l'ordre de l'autorité légitime doit émaner d'une autorité publique régulière (civile ou militaire) et non d'un employeur privé.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'autorité légitime au sens pénal s'entend uniquement d'une autorité publique légale (magistrat, préfet, hiérarchie de police, etc.), jamais d'un patron d'entreprise privée."
  },
  {
    "id": 377,
    "module": "m3",
    "ref": "Fiche Responsabilité Pénale (Personnes Morales)",
    "q": "VRAI OU FAUX : La responsabilité pénale d'une personne morale exclut obligatoirement celle des personnes physiques auteurs ou complices des mêmes faits.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Selon l'article 121-2 alinéa 3 du Code pénal, la responsabilité pénale des personnes morales n'exclut pas celle des personnes physiques auteurs ou complices des mêmes faits. Les deux peuvent être condamnées cumulativement."
  },
  {
    "id": 378,
    "module": "m4",
    "ref": "Annales Nîmes (Thème Mme Lecoeur, BJ-06 DPS DPG p. 7)",
    "q": "VRAI OU FAUX : Une victime à qui l'on dérobe son téléphone dans la rue reçoit un coup de couteau au bras et, pour éviter un deuxième coup de couteau imminent, plante ses doigts dans les yeux de l'agresseur : elle est en état de légitime défense.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes 278/153 Q1) : L'atteinte est injustifiée, actuelle et réelle, et l'acte de défense est nécessaire, simultané et proportionné par rapport au coup de couteau susceptible de causer la mort."
  },
  {
    "id": 379,
    "module": "m4",
    "ref": "Annales Nîmes (Thème Entrepôt Coca-Cola, BJ-06 DPS DPG p. 7)",
    "q": "VRAI OU FAUX : Un agent de sécurité surprend un individu chargeant des packs de boissons dans son coffre ; pour l'empêcher de partir, il lui assène un violent coup de matraque télescopique sur le crâne : cet acte relève de la légitime défense des biens.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : (Corrigé officiel Nîmes 278/153 Q15) : Non. Frapper à la tête avec une matraque télescopique pouvant causer des blessures mortelles est disproportionné par rapport au vol matériel de bouteilles."
  },
  {
    "id": 380,
    "module": "m4",
    "ref": "Annales Nîmes (Conditions de l'atteinte AIR, BJ-06 DPS DPG p. 7)",
    "q": "VRAI OU FAUX : Pour que la légitime défense d'une personne soit recevable, l'atteinte subie doit cumulativement être : Actuelle, Injustifiée et Réelle (A.I.R.).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes grille A1) : L'atteinte doit être injustifiée (contraire à la loi), actuelle (en train de se produire) et réelle (non hypothétique ou imaginaire)."
  },
  {
    "id": 381,
    "module": "m4",
    "ref": "Annales Nîmes (Conditions de la défense NSP, BJ-06 DPS DPG p. 7)",
    "q": "VRAI OU FAUX : L'acte de défense d'une personne doit être : Nécessaire, Simultané et Proportionné (N.S.P.).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes grille A2) : La défense doit être nécessaire (pas d'autre issue), simultanée (dans le même temps, pas de vengeance tardive) et proportionnée."
  },
  {
    "id": 382,
    "module": "m4",
    "ref": "Annales Nîmes (Arme pointée en fuite, BJ-06 DPS DPG Q10)",
    "q": "VRAI OU FAUX : Lorsque le fuyard se retourne en pleine course et pointe un pistolet vers les policiers, la situation relève du cas n° 1 de l'article L. 435-1 du CSI (« des personnes armées menacent leur vie ou leur intégrité physique »).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes 278 Q10 & 276 Q4) : Pointer une arme à feu vers les policiers constitue une menace armée directe contre leur vie justifiant l'usage de l'arme au titre du 1°."
  },
  {
    "id": 383,
    "module": "m4",
    "ref": "Annales Nîmes (Fuyard armé qui reprend sa course, Q11)",
    "q": "VRAI OU FAUX : Le suspect qui pointait son arme reprend sa course en avant sans menacer personne ; à ce moment précis, les policiers qui le poursuivent peuvent immédiatement lui tirer dans le dos.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : (Corrigé officiel Nîmes 278 Q11) : Non. Dès lors que l'individu reprend sa course et ne pointe plus son arme, la menace directe cesse : les policiers ne peuvent pas tirer dans le dos d'un fuyard."
  },
  {
    "id": 384,
    "module": "m4",
    "ref": "Annales Nîmes (Conditions périple meurtrier, BJ-06 DPS DPG p. 8)",
    "q": "VRAI OU FAUX : La 5e situation de l'article L. 435-1 du CSI (périple meurtrier) n'exige pas que l'individu ait déjà commis un meurtre, une simple menace verbale suffit.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : (Corrigé officiel Nîmes Q6) : Les 3 conditions sont strictes : 1) L'individu VIENT DE COMMETTRE ou tenter de commettre un ou plusieurs MEURTRES ; 2) Raisons réelles et objectives de réitération probable ; 3) Seul moyen d'empêcher cette réitération dans un temps rapproché."
  },
  {
    "id": 385,
    "module": "m4",
    "ref": "Fiche Légitime Défense (Art. 122-6 CP Cas 1)",
    "q": "VRAI OU FAUX : La présomption de légitime défense s'applique à toute personne qui repousse, de jour, l'entrée par effraction dans un bureau commercial inoccupé.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'article 122-6 1° exige que les faits aient lieu DE NUIT et dans un LIEU HABITÉ (maison, appartement). Ni le plein jour, ni un local commercial inoccupé ne bénéficient de cette présomption."
  },
  {
    "id": 386,
    "module": "m4",
    "ref": "Fiche Légitime Défense (Art. 122-6 CP Cas 2)",
    "q": "VRAI OU FAUX : Le deuxième cas de présomption de légitime défense concerne la défense contre les auteurs de vols ou de pillages exécutés avec violences (de jour comme de nuit).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le texte exact de l'article 122-6 2° du Code pénal (Corrigé officiel Nîmes Q14 et Q17)."
  },
  {
    "id": 387,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Conditions préalables L. 435-1 CSI)",
    "q": "VRAI OU FAUX : Les trois conditions préalables d'usage des armes par un policier sont : agir dans l'exercice des fonctions, être en uniforme ou porteur des insignes extérieurs et apparents, et agir en cas d'absolue nécessité et de manière strictement proportionnée.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes Q15, Q4 et Q2) : Ce sont les 3 conditions cumulatives préalables incontournables posées par la loi."
  },
  {
    "id": 388,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Policier en civil sans brassard)",
    "q": "VRAI OU FAUX : Un policier en civil qui n'a pas mis son brassard et qui tire pour sauver sa vie menacée par un couteau ne peut pas invoquer l'article L. 435-1 du CSI, mais peut être couvert par la légitime défense de droit commun (art. 122-5 CP).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Fiche p. 28 et Corrigé Nîmes Ex. 3 Q5) : Si une des conditions préalables de l'art. L. 435-1 CSI manque (ici absence d'insigne apparent), le policier bascule dans le régime de la légitime défense (art. 122-5 CP)."
  },
  {
    "id": 389,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Cas 2 défense des lieux)",
    "q": "VRAI OU FAUX : Dans la situation 2° de l'article L. 435-1 du CSI (défense des lieux occupés ou personnes confiées), les deux sommations à haute voix doivent précéder l'ouverture du feu.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Les sommations sont obligatoires pour les situations 2° et 3° de l'article L. 435-1 CSI."
  },
  {
    "id": 390,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Formule des sommations)",
    "q": "VRAI OU FAUX : Les sommations réglementaires prévues par le cours sont : « Police, arrêtez-vous ou je vous interpelle » puis « Attention aux tirs ».",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Les sommations réglementaires officielles sont : 1re sommation : « Halte police », puis en cas de refus : « Halte ou je fais feu »."
  },
  {
    "id": 391,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Maintien de l'ordre L. 211-9 CSI)",
    "q": "VRAI OU FAUX : L'usage des armes lors de la dispersion d'un attroupement en maintien de l'ordre relève du régime spécifique de l'article L. 211-9 du CSI et non des 5 cas de l'article L. 435-1 du CSI.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Le maintien de l'ordre public lors d'attroupements violents fait l'objet d'un cadre légal autonome (art. L. 211-9 CSI avec sommations particulières)."
  },
  {
    "id": 392,
    "module": "m4",
    "ref": "Fiche Légitime Défense des Personnes (Crainte subjective)",
    "q": "VRAI OU FAUX : Une personne qui riposte violemment parce qu'elle a eu peur d'une ombre dans la rue alors qu'aucune menace objective n'existait bénéficie de la légitime défense.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'atteinte doit être RÉELLE et certaine. Une simple frayeur ou une atteinte purement imaginaire ou putative ne permet jamais d'invoquer la légitime défense."
  },
  {
    "id": 393,
    "module": "m4",
    "ref": "Fiche Légitime Défense (Riposte tardive)",
    "q": "VRAI OU FAUX : Frapper son agresseur une heure après la fin de la bagarre pour lui faire payer ses actes s'inscrit dans le cadre de la légitime défense.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'acte de défense doit être SIMULTANÉ (dans le même temps que l'atteinte). Frapper plus tard constitue une vengeance privée illégale (violences volontaires)."
  },
  {
    "id": 394,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Fuite d'un détenu L. 435-1 3°)",
    "q": "VRAI OU FAUX : Les policiers peuvent tirer sur un gardé à vue en fuite même s'il ne représente aucun danger pour la vie d'autrui dès lors qu'il refuse de s'arrêter après sommations.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le cours précise formellement que l'usage de l'arme ne pourra être légitime que si l'individu représente une menace objective pour la vie ou l'intégrité physique dans sa fuite. La simple fuite ne justifie pas le tir."
  },
  {
    "id": 395,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Arme en dotation collective)",
    "q": "VRAI OU FAUX : Le pistolet-mitrailleur HK UMP9 et le fusil d'assaut HK G36 font partie des armes en dotation collective pouvant être utilisées au titre de l'article L. 435-1 du CSI.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Ces armes de dotation collective régulièrement attribuées relèvent pleinement du cadre d'emploi légal de l'article L. 435-1 du CSI."
  },
  {
    "id": 396,
    "module": "m4",
    "ref": "Fiche Légitime Défense (Preuve des cas présumés)",
    "q": "VRAI OU FAUX : La présomption de légitime défense de l'article 122-6 du Code pénal est irréfragable (la preuve contraire ne peut jamais être apportée par le parquet).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : C'est une présomption SIMPLE : elle peut être renversée par la preuve contraire si les magistrats établissent que l'auteur connaissait l'agresseur ou a agi avec une disproportion manifeste."
  },
  {
    "id": 397,
    "module": "m4",
    "ref": "Fiche Légitime Défense (Preuve en défense des biens)",
    "q": "VRAI OU FAUX : En matière de légitime défense d'un bien (art. 122-5 al. 2 CP), la charge de prouver la nécessité et la proportionnalité repose sur la personne poursuivie.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Fiche p. 25) : La jurisprudence impose à la personne poursuivie la charge de prouver que les conditions justificatives étaient réunies."
  },
  {
    "id": 398,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Situation 1 vs Légitime défense)",
    "q": "VRAI OU FAUX : La situation 1° de l'article L. 435-1 du CSI permet au policier de faire usage de son arme pour protéger la vie d'un tiers menacé par une personne armée.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Le 1° de l'article L. 435-1 CSI vise les atteintes contre les policiers OU un tiers, ainsi que les personnes armées menaçant leur vie ou celle d'un tiers."
  },
  {
    "id": 399,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Véhicule bélier L. 435-1 4°)",
    "q": "VRAI OU FAUX : Un conducteur qui fonce délibérément avec son véhicule sur un barrage de policiers pour les écraser relève de la situation 1° de l'article L. 435-1 CSI (atteinte imminente à la vie).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Lorsque le véhicule est utilisé comme une arme par destination pour tuer les policiers, il y a atteinte directe à la vie (situation 1° ou légitime défense art. 122-5 CP), le tir de riposte immédiat est justifié sans sommation."
  },
  {
    "id": 400,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Arme intermédiaire LBD/Taser)",
    "q": "VRAI OU FAUX : L'usage d'un lanceur de balles de défense (LBD 40) ou d'un pistolet à impulsion électrique (Taser) dans le cadre du service est soumis aux principes de nécessité et de proportionnalité.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Toute arme de force intermédiaire doit respecter strictement les principes de nécessité et de proportionnalité fixés par le Code de déontologie (art. R. 434-18 CSI)."
  },
  {
    "id": 401,
    "module": "m4",
    "ref": "Fiche Légitime Défense des Biens (Contravention)",
    "q": "VRAI OU FAUX : Un propriétaire peut tirer sur le chien de son voisin parce qu'il fait du bruit la nuit en invoquant la légitime défense des biens.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La légitime défense des biens (art. 122-5 al. 2 CP) ne s'applique QUE pour interrompre un crime ou un délit contre un bien. Un simple tapage sonore n'est qu'une contravention et l'acte de défense est totalement disproportionné."
  },
  {
    "id": 402,
    "module": "m4",
    "ref": "Fiche Usage des Armes (Tir de sommation)",
    "q": "VRAI OU FAUX : Le tir de sommation en l'air avec une arme à feu létale est formellement recommandé par la doctrine de la Police nationale en zone urbaine.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le tir d'intimidation ou de sommation en l'air est strictement déconseillé et prohibé par la doctrine opérationnelle en milieu urbain en raison du risque mortel de balle perdue ou de ricochet sur des tiers innocents."
  },
  {
    "id": 403,
    "module": "m5",
    "ref": "Fichiers de Police (FPR - Fichier des Personnes Recherchées)",
    "q": "VRAI OU FAUX : Dans le F.P.R. (Fichier des Personnes Recherchées), une fiche « S » signifie que la personne fait l'objet d'un mandat d'arrêt émis par un juge et doit être immédiatement incarcérée.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La fiche « S » concerne la Sûreté de l'État (renseignement). Elle ne constitue PAS un titre judiciaire de détention et ne permet pas d'incarcérer la personne ! Elle prescrit généralement une surveillance discrète ou le recueil de renseignements (sauf si une fiche PJ d'arrêt existe par ailleurs)."
  },
  {
    "id": 404,
    "module": "m5",
    "ref": "Fichiers de Police (FPR - Fiches M et V)",
    "q": "VRAI OU FAUX : Dans le F.P.R., la fiche « M » correspond aux mineurs en fugue et la fiche « V » aux évadés.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la codification officielle du FPR : fiche M = Mineurs en fugue, fiche V = Évadés (de garde à vue ou d'établissement pénitentiaire)."
  },
  {
    "id": 405,
    "module": "m5",
    "ref": "Fichiers de Police (TAJ - Traitement des Antécédents Judiciaires)",
    "q": "VRAI OU FAUX : Le T.A.J. est un fichier commun à la Police nationale et à la Gendarmerie nationale qui a fusionné et remplacé les anciens fichiers STIC et JUDEX.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Le TAJ regroupe dans une base unique sécurisée les antécédents judiciaires (mis en cause et victimes) pour les policiers et les gendarmes."
  },
  {
    "id": 406,
    "module": "m5",
    "ref": "Fichiers de Police (TAJ - Contenu)",
    "q": "VRAI OU FAUX : Le fichier T.A.J. recense uniquement les personnes ayant été définitivement condamnées par un tribunal, à l'exclusion des personnes simplement mises en cause lors d'une enquête.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : C'est le Casier Judiciaire qui enregistre les condamnations. Le TAJ enregistre les personnes MISE EN CAUSE (pour lesquelles il existe des indices graves ou concordants) ainsi que les VICTIMES d'infractions."
  },
  {
    "id": 407,
    "module": "m5",
    "ref": "Fichiers de Police (SIV - Système d'Immatriculation des Véhicules)",
    "q": "VRAI OU FAUX : Le S.I.V. permet aux policiers de vérifier l'identité du titulaire de la carte grise, les caractéristiques techniques du véhicule et l'existence d'éventuelles oppositions administratives.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Le Système d'Immatriculation des Véhicules géré par le ministère de l'Intérieur permet d'obtenir en temps réel toutes ces informations lors des contrôles routiers."
  },
  {
    "id": 408,
    "module": "m5",
    "ref": "Fichiers de Police (FOVES - Objets et Véhicules Signalés)",
    "q": "VRAI OU FAUX : Le fichier F.O.V.E.S. (qui a remplacé le FVPP) est la base nationale recensant les véhicules volés, les plaques d'immatriculation détournées, ainsi que les armes et objets signalés.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : FOVES signifie Fichier des Objets et Véhicules Signalés. Il permet de savoir immédiatement lors d'une patrouille si une voiture ou un objet est recherché."
  },
  {
    "id": 409,
    "module": "m5",
    "ref": "Fichiers de Police (FAED - Empreintes Digitales)",
    "q": "VRAI OU FAUX : Le F.A.E.D. est le Fichier Automatisé des Empreintes Digitales utilisé par la police scientifique pour comparer les traces papillaires et les empreintes palmaires relevées sur les scènes d'infraction.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Le FAED gère les empreintes digitales et palmaires pour l'identification des auteurs d'infractions."
  },
  {
    "id": 410,
    "module": "m5",
    "ref": "Fichiers de Police (FNAEG - Empreintes Génétiques)",
    "q": "VRAI OU FAUX : Le F.N.A.E.G. enregistre les empreintes rétiniennes et palmaires des individus placés en garde à vue.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le F.N.A.E.G. est le Fichier National Automatisé des Empreintes GÉNÉTIQUES (profils ADN). Les empreintes palmaires vont au FAED."
  },
  {
    "id": 411,
    "module": "m5",
    "ref": "Fichiers de Police (FINIADA - Interdits d'armes)",
    "q": "VRAI OU FAUX : Le F.I.N.I.A.D.A. recense les personnes interdites d'acquisition et de détention d'armes suite à une condamnation ou une décision préfectorale.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la mission exclusive du Fichier National des Interdits d'Acquisition et de Détention d'Armes."
  },
  {
    "id": 412,
    "module": "m5",
    "ref": "Fichiers de Police (SNPC - Permis de conduire)",
    "q": "VRAI OU FAUX : Le S.N.P.C. (Système National des Permis de Conduire) permet de vérifier en temps réel la validité d'un permis de conduire et son solde de points.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Le SNPC permet aux forces de l'ordre de vérifier l'état du permis (valide, suspendu, annulé, solde de points)."
  },
  {
    "id": 413,
    "module": "m5",
    "ref": "Fichiers de Police (CHEOPS)",
    "q": "VRAI OU FAUX : C.H.E.O.P.S. est l'application portail sécurisée de la Police nationale permettant aux agents d'interroger simultanément les fichiers (FPR, SIV, FOVES, TAJ).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : CHEOPS (Circulation Hiérarchisée des Enregistrements Opérationnels de la Police Sécurisée) est le portail central d'interrogation des fichiers opérationnels."
  },
  {
    "id": 414,
    "module": "m5",
    "ref": "Fichiers de Police (Règle déontologique R. 434-22 CSI)",
    "q": "VRAI OU FAUX : Un policier a le droit de consulter le fichier TAJ ou le SIV pour vérifier les antécédents d'un ami ou l'adresse d'un voisin par curiosité personnelle tant qu'il ne divulgue pas le résultat.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Selon l'article R. 434-22 du CSI, la consultation des fichiers est strictement réservée aux seuls besoins des missions professionnelles. Toute consultation privée est un délit pénal (accès frauduleux à un système de traitement de données) passible de sanctions disciplinaires et pénales !"
  },
  {
    "id": 415,
    "module": "m5",
    "ref": "Fiche Contrôles d'Identité (Art. 78-2 al. 2 CPP)",
    "q": "VRAI OU FAUX : Les policiers peuvent contrôler l'identité d'une personne à l'égard de laquelle il existe une raison plausible de soupçonner qu'elle a commis ou tenté de commettre une infraction.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le 1er cas de contrôle de police judiciaire à l'initiative des policiers prévu par l'article 78-2 alinéa 2 du CPP."
  },
  {
    "id": 416,
    "module": "m5",
    "ref": "Fiche Contrôles d'Identité Préventifs (Art. 78-2 al. 8 CPP)",
    "q": "VRAI OU FAUX : Le contrôle d'identité préventif (art. 78-2 al. 8 CPP) exige obligatoirement que la personne ait commis une infraction sous les yeux des policiers.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Le contrôle préventif vise justement à PRÉVENIR une atteinte à l'ordre public ou à la sécurité des personnes et des biens. Il peut viser « toute personne » quel que soit son comportement, sur la base d'éléments objectifs de menace."
  },
  {
    "id": 417,
    "module": "m5",
    "ref": "Fiche Contrôles sur Réquisitions du PR (Art. 78-2 al. 7 CPP)",
    "q": "VRAI OU FAUX : Les réquisitions du procureur de la République aux fins de contrôle d'identité peuvent être données verbalement par téléphone sans aucune limitation dans le temps.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'article 78-2 al. 7 du CPP impose formellement des réquisitions ÉCRITES précisant les infractions recherchées, ainsi que des lieux et une période de temps limités."
  },
  {
    "id": 418,
    "module": "m5",
    "ref": "Fiche La Vérification d'Identité (Droits de la personne)",
    "q": "VRAI OU FAUX : Une personne retenue pour vérification d'identité (art. 78-3 CPP) a le droit de faire aviser le procureur de la République et de prévenir sa famille à tout moment.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Ce sont les deux droits fondamentaux garantis par la loi à la personne retenue pour vérification d'identité."
  },
  {
    "id": 419,
    "module": "m5",
    "ref": "Fiche La Vérification d'Identité (Mineurs)",
    "q": "VRAI OU FAUX : Lorsque la vérification d'identité concerne un mineur de 18 ans, le procureur de la République et ses représentants légaux doivent être informés immédiatement.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Pour les mineurs, la loi impose une information immédiate des représentants légaux et du procureur de la République."
  },
  {
    "id": 420,
    "module": "m5",
    "ref": "Fiche Vérification de Situation (Fiche S14 près d'un site)",
    "q": "VRAI OU FAUX : La présence d'une personne faisant l'objet d'une fiche S14 aux abords immédiats d'un site sensible permet à l'OPJ d'engager une retenue pour vérification de situation (art. 78-3-1 CPP).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est l'un des quatre éléments objectifs expressément cités par le cours et la loi pour mettre en œuvre cette retenue jusqu'à 4 heures."
  },
  {
    "id": 421,
    "module": "m5",
    "ref": "Fiche Relevé d'Identité (Art. 78-6 CPP)",
    "q": "VRAI OU FAUX : Le relevé d'identité (art. 78-6 CPP) permet aux policiers adjoints de vérifier l'identité d'une personne dans le seul but de constater et verbaliser une contravention.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la prérogative spécifique de police judiciaire de l'art. 78-6 CPP accordée notamment aux APJA (policiers adjoints et réservistes) pour dresser les PV de contraventions."
  },
  {
    "id": 422,
    "module": "m5",
    "ref": "Fiche La Liberté d'Aller et Venir",
    "q": "VRAI OU FAUX : La liberté d'aller et venir est un principe de valeur constitutionnelle consacré par le Conseil constitutionnel en 1979.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Décision fondamentale du Conseil constitutionnel du 12 juillet 1979 qui lui a conféré sa valeur constitutionnelle."
  },
  {
    "id": 423,
    "module": "m5",
    "ref": "Fiche Palpation de Sécurité vs Fouille",
    "q": "VRAI OU FAUX : La palpation de sécurité autorise le policier à ouvrir le sac à main d'une femme et à fouiller l'intérieur de son portefeuille.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La palpation de sécurité est EXCLUSIVEMENT une mesure de sûreté externe réalisée à travers les vêtements pour s'assurer qu'aucun objet dangereux n'est porté. Fouiller l'intérieur d'un portefeuille est un acte de perquisition judiciaire ou de fouille à corps qui relève d'un cadre procédural strict."
  },
  {
    "id": 424,
    "module": "m5",
    "ref": "Fiche Contrôles dans les Véhicules (Art. 78-2-2 CPP)",
    "q": "VRAI OU FAUX : Sur réquisitions écrites du procureur de la République, les policiers peuvent procéder à la visite des véhicules circulant ou arrêtés sur les voies publiques pour rechercher des armes ou des stupéfiants.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article 78-2-2 du CPP permet la visite des véhicules dans les lieux et pour la période désignés par les réquisitions du procureur de la République."
  },
  {
    "id": 425,
    "module": "m5",
    "ref": "Fiche Contrôles d'Identité Transfrontaliers (Art. 78-2 al. 9 CPP)",
    "q": "VRAI OU FAUX : Les contrôles d'identité dans la zone comprise entre la frontière terrestre de la France et une ligne tracée à 20 kilomètres en deçà sont autorisés pour vérifier le respect des obligations de détention de titres.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le cadre de l'article 78-2 alinéa 9 du CPP dans la bande frontalière des 20 kilomètres."
  },
  {
    "id": 426,
    "module": "m5",
    "ref": "Fichiers de Police (FPR - Fiche T)",
    "q": "VRAI OU FAUX : Une fiche « T » au FPR correspond à une personne faisant l'objet d'une enquête pour terrorisme international.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Piège classique des annales ! La fiche « T » au FPR correspond aux débiteurs du TRÉSOR PUBLIC (matière fiscale/administrative) et non au terrorisme."
  },
  {
    "id": 427,
    "module": "m5",
    "ref": "Fichiers de Police (Conservation TAJ)",
    "q": "VRAI OU FAUX : Dans le fichier TAJ, les données concernant les victimes d'infractions sont effacées automatiquement dès la fin de la garde à vue de l'auteur.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Les données relatives aux victimes peuvent être conservées pendant une durée légale maximale de 15 ans au TAJ afin de permettre d'éventuels recoupements judiciaires."
  },
  {
    "id": 428,
    "module": "m6",
    "ref": "Annales Nîmes (Cas de flagrance art. 53 CPP)",
    "q": "VRAI OU FAUX : Selon l'article 53 alinéa 1 du CPP, il y a flagrance lorsque le crime ou le délit se commet actuellement, ou lorsqu'il vient de se commettre.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes Q2, Q8 et Fascicule DPS-DPG p. 33) : Ce sont les deux premiers cas fondamentaux de la flagrance directe."
  },
  {
    "id": 429,
    "module": "m6",
    "ref": "Annales Nîmes (Traces et indices art. 53 CPP)",
    "q": "VRAI OU FAUX : Une personne trouvée dans un temps très voisin de l'action en possession d'objets ou présentant des traces laissant penser qu'elle a participé au crime est en situation de flagrant délit.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes Q3 et Q8) : C'est le cas de flagrance présumée par les traces ou indices prévu par l'article 53 du CPP."
  },
  {
    "id": 430,
    "module": "m6",
    "ref": "Fiche Enquête de Flagrance (Poursuite de 8 jours p. 56)",
    "q": "VRAI OU FAUX : L'enquête de flagrance qui a débuté pour un crime peut être prolongée pour une nouvelle durée maximale de 8 jours par le procureur de la République si l'enquête le justifie.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Lorsque des investigations nécessaires à la manifestation de la vérité ne peuvent être différées, le procureur de la République peut décider de prolonger l'enquête de flagrance pour une durée maximale de 8 jours supplémentaires."
  },
  {
    "id": 431,
    "module": "m6",
    "ref": "Fiche Enquête Préliminaire (Durée art. 75-3 CPP)",
    "q": "VRAI OU FAUX : La durée de droit commun d'une enquête préliminaire est limitée par la loi à 2 ans, prolongeable d'une année sur autorisation écrite et motivée du procureur de la République.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la règle de l'article 75-3 du CPP : 2 ans maximum, extensible à 3 ans sur autorisation écrite du procureur."
  },
  {
    "id": 432,
    "module": "m6",
    "ref": "Fiche Enquête Préliminaire (Dépassement des délais p. 62)",
    "q": "VRAI OU FAUX : En enquête préliminaire, tout acte d'enquête accompli après l'expiration des délais légaux est frappé de nullité.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : La fiche p. 62 rappelle la sanction procédurale stricte : tout acte intervenant après l'expiration de ces délais légaux est nul."
  },
  {
    "id": 433,
    "module": "m6",
    "ref": "Fiche La Commission Rogatoire (Art. 81 & 151 CPP)",
    "q": "VRAI OU FAUX : Une commission rogatoire est un acte par lequel le procureur de la République ordonne à un gardien de la paix d'arrêter un suspect.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La commission rogatoire est délivrée par un JUGE D'INSTRUCTION (dans le cadre d'une information judiciaire) et est confiée exclusivement à un OFFICIER DE POLICE JUDICIAIRE (OPJ)."
  },
  {
    "id": 434,
    "module": "m6",
    "ref": "Fiche La Commission Rogatoire (Rôle de l'APJ p. 58)",
    "q": "VRAI OU FAUX : Sur commission rogatoire, un Agent de Police Judiciaire (APJ) peut rédiger certains actes techniques (comme les transcriptions d'interceptions) sous le contrôle d'un OPJ.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Fiche p. 58) : L'APJ peut assister l'OPJ et rédiger sous son contrôle des actes limitativement prévus (transcription d'écoutes, réquisitions 57-1, etc.)."
  },
  {
    "id": 435,
    "module": "m6",
    "ref": "Fiche Découverte de Cadavre (Art. 74 CPP)",
    "q": "VRAI OU FAUX : L'article 74 du CPP s'applique dès qu'une personne âgée décède paisiblement de vieillesse à l'hôpital avec un certificat médical délivré sans obstacle médico-légal.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'article 74 du CPP exige que la mort soit de CAUSE INCONNUE OU SUSPECTE. Une mort naturelle certifiée médicalement sans obstacle ne fait pas l'objet d'une enquête de l'art. 74."
  },
  {
    "id": 436,
    "module": "m6",
    "ref": "Fiche Blessures Graves Suspectes (Art. 74 al. 6 CPP)",
    "q": "VRAI OU FAUX : Le cadre juridique de l'article 74 du CPP est également applicable en cas de découverte d'une personne grièvement blessée lorsque la cause des blessures est inconnue ou suspecte.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article 74 alinéa 6 du CPP étend expressément cette procédure aux personnes grièvement blessées de cause inconnue ou suspecte."
  },
  {
    "id": 437,
    "module": "m6",
    "ref": "Fiche Disparition Inquiétante (Art. 74-1 CPP)",
    "q": "VRAI OU FAUX : L'enquête pour disparition inquiétante de l'article 74-1 du CPP est réservée exclusivement aux mineurs et ne peut jamais s'appliquer à un majeur.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'article 74-1 du CPP s'applique aux mineurs, aux majeurs protégés, ainsi qu'à TOUT MAJEUR dont la disparition présente un caractère inquiétant ou suspect (âge, santé, circonstances)."
  },
  {
    "id": 438,
    "module": "m6",
    "ref": "Fiche Enquête Préliminaire (Compte rendu à 6 mois)",
    "q": "VRAI OU FAUX : Lorsqu'une enquête préliminaire est menée d'office par les OPJ, ils ont l'obligation de rendre compte de son état d'avancement au procureur de la République lorsqu'elle est commencée depuis plus de 6 mois.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est l'obligation légale de compte rendu semestriel posée par l'article 75-3 du Code de procédure pénale."
  },
  {
    "id": 439,
    "module": "m6",
    "ref": "Fiche Enquête Préliminaire (Personnes exclues p. 63)",
    "q": "VRAI OU FAUX : Les maires et les députés sont totalement immunisés et ne peuvent jamais être visés par des actes d'enquête préliminaire.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : La fiche p. 63 précise que les deux seules exceptions personnelles résidant en France sont le Président de la République et les agents diplomatiques accrédités en France. Les parlementaires et maires peuvent faire l'objet d'enquêtes préliminaires."
  },
  {
    "id": 440,
    "module": "m6",
    "ref": "Fiche Perquisition en Flagrance (Art. 56 CPP)",
    "q": "VRAI OU FAUX : En enquête de flagrance, la perquisition au domicile du suspect exige obligatoirement l'accord écrit préalable de ce dernier.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : C'est en enquête préliminaire que l'assentiment écrit est exigé ! En flagrance, la perquisition est COERCITIVE : elle peut se faire sans l'assentiment de l'intéressé (art. 56 CPP)."
  },
  {
    "id": 441,
    "module": "m6",
    "ref": "Fiche Secret de l'Enquête (Art. 11 CPP)",
    "q": "VRAI OU FAUX : La violation du secret de l'enquête ou de l'instruction n'est pénalement sanctionnée que si les faits divulgués concernent un crime ou un délit.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Fiche p. 56) : Toute violation du secret de l'enquête est sanctionnée pénalement si les faits divulgués concernent un crime ou un délit."
  },
  {
    "id": 442,
    "module": "m6",
    "ref": "Fiche Information Judiciaire Obligatoire",
    "q": "VRAI OU FAUX : L'ouverture d'une information judiciaire (saisine d'un juge d'instruction) est facultative pour les crimes et obligatoire pour toutes les contraventions.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'information judiciaire est OBLIGATOIRE EN CAS DE CRIME (art. 79 CPP). Pour les délits elle est facultative et pour les contraventions elle est exceptionnelle."
  },
  {
    "id": 443,
    "module": "m6",
    "ref": "Fiche Enquête Préliminaire (Infractions couvertes)",
    "q": "VRAI OU FAUX : L'enquête préliminaire peut être ouverte pour tous les crimes, délits et contraventions.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'enquête préliminaire est le cadre d'enquête de droit commun à compétence générale pour toutes les catégories d'infractions."
  },
  {
    "id": 444,
    "module": "m6",
    "ref": "Fiche Découverte de Cadavre (Compétence APJ)",
    "q": "VRAI OU FAUX : Les actes prévus aux articles 74 et 74-1 du CPP sont de la compétence exclusive de l'OPJ, mais peuvent également être effectués par l'APJ sous le contrôle de l'OPJ.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Fiche p. 57) : Ces cadres d'enquête sont de la compétence de l'OPJ ou, sous son contrôle, de l'APJ."
  },
  {
    "id": 445,
    "module": "m6",
    "ref": "Fiche Heures Légales de Perquisition (Art. 59 CPP)",
    "q": "VRAI OU FAUX : Sauf dérogation spéciale prévue par la loi (terrorisme, stupéfiants), les perquisitions en domicile ne peuvent en principe commencer qu'entre 6 heures et 21 heures.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la règle protectrice de l'inviolabilité du domicile posée par l'article 59 du Code de procédure pénale."
  },
  {
    "id": 446,
    "module": "m6",
    "ref": "Fiche Enquête de Flagrance (Art. 73 CPP - Rôle citoyen)",
    "q": "VRAI OU FAUX : En vertu de l'article 73 du CPP, tout citoyen (y compris un policier adjoint) a le pouvoir d'appréhender l'auteur d'un crime ou d'un délit flagrant puni d'emprisonnement et de le conduire devant l'OPJ le plus proche.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article 73 du Code de procédure pénale permet à toute personne d'appréhender l'auteur d'un crime ou délit flagrant puni d'emprisonnement."
  },
  {
    "id": 447,
    "module": "m6",
    "ref": "Fiche Enquête Préliminaire (Instructions Parquet)",
    "q": "VRAI OU FAUX : Lorsque le procureur de la République ordonne une enquête préliminaire, il fixe lui-même le délai dans lequel les policiers doivent la clôturer.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : (Fiche p. 63) : Le procureur de la République fixe le délai d'exécution et peut le proroger au vu des justifications de l'enquêteur."
  },
  {
    "id": 448,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-14 CSI)",
    "q": "VRAI OU FAUX : Dans sa relation avec la population, le policier peut tutoyer un contrevenant si celui-ci se montre provocateur.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'article R. 434-14 du CSI impose expressément la courtoisie et L'USAGE OBLIGATOIRE DU VOUVOIEMENT, en toutes circonstances, même face à une personne agressive ou impolie."
  },
  {
    "id": 449,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-11 CSI)",
    "q": "VRAI OU FAUX : Le policier en service est soumis à une stricte obligation de neutralité et ne doit manifester aucune conviction religieuse, politique ou philosophique.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le principe fondamental de neutralité du service public rappelé à l'article R. 434-11 du CSI."
  },
  {
    "id": 450,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-9 CSI)",
    "q": "VRAI OU FAUX : Un commerçant qui offre des viennoiseries chaque matin à une patrouille de police pour la remercier de sécuriser sa rue peut être accepté par les agents car c'est un geste d'amitié.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'article R. 434-9 du CSI (devoir de probité) interdit formellement d'accepter toute gratification ou avantage, direct ou indirect, pour des actes accomplis ou dans l'exercice des fonctions."
  },
  {
    "id": 451,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-15 CSI)",
    "q": "VRAI OU FAUX : Les policiers sont tenus au devoir de réserve et au secret professionnel, ce qui encadre strictement toute expression publique devant les médias.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article R. 434-15 du CSI encadre toute prise de parole publique par le respect du secret professionnel, du secret de l'enquête et du devoir de réserve."
  },
  {
    "id": 452,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-18 CSI)",
    "q": "VRAI OU FAUX : Selon l'article R. 434-18 du CSI, le policier n'emploie la force que lorsque c'est nécessaire et de façon proportionnée au but à atteindre.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Ce sont les deux conditions fondamentales de tout emploi de la force publique (nécessité et proportionnalité)."
  },
  {
    "id": 453,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-21 CSI)",
    "q": "VRAI OU FAUX : Une personne appréhendée et placée en garde à vue est sous la responsabilité et la protection de la police : les agents doivent veiller à son état de santé et la protéger de toute violence de tiers.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article R. 434-21 du CSI confère aux policiers la charge de la protection physique et de la dignité de toute personne retenue ou gardée à vue."
  },
  {
    "id": 454,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-21 CSI)",
    "q": "VRAI OU FAUX : Pour montrer l'efficacité d'une opération aux médias, les policiers peuvent exposer la personne menottée aux photographes de presse sur la voie publique.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'article R. 434-21 alinéa 3 interdit formellement d'exposer la personne privée de liberté à la curiosité du public ou des médias sans son accord exprès."
  },
  {
    "id": 455,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-8 CSI)",
    "q": "VRAI OU FAUX : Un policier convoqué par la justice ou une autorité de contrôle pour des faits survenus pendant ses vacances doit en informer sans délai son autorité hiérarchique.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article R. 434-8 II du CSI oblige tout policier à porter sans délai à la connaissance de sa hiérarchie tout fait, en service ou hors service, susceptible d'entraîner une convocation par une autorité judiciaire ou de contrôle."
  },
  {
    "id": 456,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-10 CSI)",
    "q": "VRAI OU FAUX : Le policier doit faire preuve de discernement dans l'exercice de ses fonctions.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article R. 434-10 du CSI érige le discernement en qualité déontologique essentielle du policier pour apprécier chaque situation avec mesure et justice."
  },
  {
    "id": 457,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-16 CSI)",
    "q": "VRAI OU FAUX : La palpation de sécurité doit être pratiquée obligatoirement sur chaque piéton contrôlé dans la rue, même sans aucun soupçon de danger.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : L'article R. 434-16 du CSI rappelle expressément que la palpation de sécurité NE REVÊT PAS UN CARACTÈRE SYSTÉMATIQUE : elle est réservée aux cas où elle est nécessaire à la garantie de la sécurité."
  },
  {
    "id": 458,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-17 CSI)",
    "q": "VRAI OU FAUX : Les menottes peuvent être appliquées à titre de punition sur un individu arrêté qui refuse de répondre aux questions.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Les menottes ne sont en aucun cas une sanction disciplinaire ! Elles sont exclusivement une mesure de contrainte de sûreté autorisée si la personne est jugée dangereuse pour autrui ou elle-même, ou susceptible de fuir."
  },
  {
    "id": 459,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-20 CSI)",
    "q": "VRAI OU FAUX : Sans se départir de son impartialité, le policier accorde une attention particulière aux victimes et veille à la qualité de leur accueil.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la prescription déontologique claire énoncée à l'article R. 434-20 du CSI."
  },
  {
    "id": 460,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-4 CSI)",
    "q": "VRAI OU FAUX : Si l'urgence opérationnelle impose à un commandant de donner un ordre direct à un gardien de la paix sans passer par le brigadier intermédiaire, l'échelon intermédiaire doit en être informé sans délai.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est la règle de transmission hiérarchique posée par l'article R. 434-4 du CSI."
  },
  {
    "id": 461,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-6 CSI)",
    "q": "VRAI OU FAUX : L'autorité de commandement doit veiller à donner des ordres précis assortis des explications nécessaires à leur bonne exécution.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : C'est le devoir de l'autorité de commandement fixé par l'article R. 434-6 du CSI."
  },
  {
    "id": 462,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-7 CSI)",
    "q": "VRAI OU FAUX : Le supérieur hiérarchique a l'obligation légale d'apporter aide et soutien à ses subordonnés et de veiller à leur sécurité.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article R. 434-7 du CSI oblige le chef à apporter aide et soutien à ses subordonnés et proscrit tout harcèlement ou abus d'autorité."
  },
  {
    "id": 463,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-23 CSI)",
    "q": "VRAI OU FAUX : Les policiers peuvent refuser l'accès de leurs locaux aux membres de l'Inspection Générale de la Police Nationale (IGPN) s'ils n'ont pas d'ordre de mission du préfet.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 1,
    "exp": "POURQUOI C'EST FAUX : Selon l'article R. 434-23 du CSI, le policier facilite en TOUTE CIRCONSTANCE le déroulement des opérations de contrôle et d'inspection conduites par les organismes d'inspection générale (IGPN)."
  },
  {
    "id": 464,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-13 CSI)",
    "q": "VRAI OU FAUX : L'usage d'un véhicule de patrouille sérigraphié pour aller faire ses courses personnelles en fin de service est formellement interdit.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : L'article R. 434-13 du CSI interdit formellement d'utiliser les locaux, véhicules et matériels de service à des fins étrangères à l'exercice des missions."
  },
  {
    "id": 465,
    "module": "m7",
    "ref": "Code de Déontologie (Art. R. 434-3 CSI)",
    "q": "VRAI OU FAUX : Les règles déontologiques prévues aux articles R. 434-1 à R. 434-24 du CSI s'appliquent à tous les agents de la Police nationale et de la Gendarmerie nationale, quel que soit leur grade ou statut.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": 0,
    "exp": "POURQUOI C'EST VRAI : Le Code de déontologie s'applique à tous les fonctionnaires actifs, policiers adjoints, réservistes opérationnels et personnels de la gendarmerie."
  }
];
