// Generator script for 150 True/False police questions (IDs 316 to 465)
const fs = require('fs');

const q150 = [
  // =========================================================================
  // MODULE 1 : INSTITUTION, ORGANISATION & GALONS (20 Q : 316 à 335)
  // =========================================================================
  {
    id: 316,
    module: "m1",
    ref: "Fiche Organisation PN (Direction Générale)",
    q: "VRAI OU FAUX : La Police nationale et la Gendarmerie nationale sont toutes les deux sous l'autorité exclusive du ministère des Armées pour leurs missions de maintien de l'ordre public.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Pour l'accomplissement des missions de sécurité intérieure et de maintien de l'ordre, la Police nationale et la Gendarmerie nationale sont placées sous l'autorité du MINISTRE DE L'INTÉRIEUR (art. R. 434-2 CSI). Le ministère des Armées n'intervient que pour les missions purement militaires de la gendarmerie."
  },
  {
    id: 317,
    module: "m1",
    ref: "Fiche Organigramme DGPN",
    q: "VRAI OU FAUX : La Préfecture de police de Paris (P.P.) est une simple direction centrale rattachée à la DGPN au même titre que la DNSP.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La Police nationale est composée de trois grandes entités distinctes : la DGPN, la DGSI et la Préfecture de police de Paris (P.P.). La P.P. n'est pas une direction sous la DGPN, c'est une entité majeure autonome placée sous l'autorité directe du Préfet de police."
  },
  {
    id: 318,
    module: "m1",
    ref: "Fiche Galonnage CEA (Gardien de la paix)",
    q: "VRAI OU FAUX : Un Gardien de la paix stagiaire porte 1 chevron blanc sur sa patte d'épaule, tandis que le titulaire en porte 2.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'élève gardien ne porte aucun chevron, le stagiaire porte 1 chevron blanc, et le gardien titularisé porte 2 chevrons blancs (avant le 6e échelon où il en porte 3 avec l'appellation Sous-Brigadier)."
  },
  {
    id: 319,
    module: "m1",
    ref: "Fiche Galonnage CEA (Sous-Brigadier)",
    q: "VRAI OU FAUX : L'appellation « Sous-Brigadier » est un grade officiel distinct auquel on accède uniquement par examen professionnel.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : « Sous-Brigadier » n'est pas un grade séparé, c'est une appellation attribuée automatiquement aux Gardiens de la paix ayant atteint le 6e échelon de leur grade. Ils portent alors 3 chevrons blancs."
  },
  {
    id: 320,
    module: "m1",
    ref: "Fiche Galonnage CEA (Brigadier-Chef)",
    q: "VRAI OU FAUX : Le galonnage d'un Brigadier-Chef de police est constitué d'un galon blanc traversé d'une raie rouge.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Le Brigadier-Chef de police porte exactement 1 galon blanc avec raie rouge. Le Major de police ajoute à cela un liseré blanc."
  },
  {
    id: 321,
    module: "m1",
    ref: "Fiche Galonnage CEA (Major RULP)",
    q: "VRAI OU FAUX : Le Major de police RULP (Responsable d'Unité Locale de Police) porte un losange au contour or sur son galonnage.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le Major RULP porte un losange au contour BLANC (accompagné du galon blanc à raie rouge et du liseré blanc). C'était l'ancien échelon exceptionnel (supprimé en 2024) qui portait un contour or."
  },
  {
    id: 322,
    module: "m1",
    ref: "Fiche Galonnage Commandement (Capitaine)",
    q: "VRAI OU FAUX : Durant les 4 années suivant sa titularisation, un Capitaine de police porte 2 galons blancs et a pour appellation réglementaire « Lieutenant ».",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Pendant ses 4 premières années après titularisation dans le corps de commandement, le Capitaine porte 2 galons blancs et l'appellation « Lieutenant ». Ce n'est qu'après qu'il arbore ses 3 galons blancs avec l'appellation « Capitaine »."
  },
  {
    id: 323,
    module: "m1",
    ref: "Fiche Galonnage Commandement (Commandant divisionnaire)",
    q: "VRAI OU FAUX : Le Commandant divisionnaire fonctionnel porte une pointe de diamant OR, tandis que le Commandant divisionnaire de grade porte une pointe de diamant ARGENT.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : C'est l'inverse ! Le grade de Commandant divisionnaire porte une pointe de diamant OR, tandis que l'emploi supérieur de Commandant divisionnaire FONCTIONNEL porte une pointe de diamant ARGENT (comme tous les emplois fonctionnels de direction)."
  },
  {
    id: 324,
    module: "m1",
    ref: "Fiche Galonnage Conception et Direction (Commissaire)",
    q: "VRAI OU FAUX : Le Commissaire de police porte une branche de chêne comportant 5 feuilles et 1 gland brodés.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'Élève commissaire porte 3 feuilles ; le Commissaire de police porte 5 feuilles et 1 gland ; le Commissaire divisionnaire porte 7 feuilles et 2 glands ; le Commissaire général porte 9 feuilles, 3 glands et 2 diamants or."
  },
  {
    id: 325,
    module: "m1",
    ref: "Fiche Organisation PN (DGSI)",
    q: "VRAI OU FAUX : La Direction Générale de la Sécurité Intérieure (DGSI) est une direction active subordonnée au Directeur général de la police nationale (DGPN).",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La DGSI est une Direction Générale autonome qui dépend directement de l'autorité du ministre de l'Intérieur, et non de la DGPN."
  },
  {
    id: 326,
    module: "m1",
    ref: "Fiche Organisation PN (RAID)",
    q: "VRAI OU FAUX : Le RAID est l'unité d'intervention d'élite de la Police nationale dont le sigle signifie : Recherche, Assistance, Intervention, Dissuasion.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le sens officiel et exact du sigle R.A.I.D."
  },
  {
    id: 327,
    module: "m1",
    ref: "Fiche Organisation PN (SDLP)",
    q: "VRAI OU FAUX : Le Service de la protection (SDLP) a pour mission principale la gestion du parc automobile et du matériel d'intervention de la police.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le S.D.L.P. est le Service de la protection chargé d'assurer la sécurité rapprochée des hautes personnalités françaises et étrangères, et non de la logistique du matériel (qui relève de la DRHFS)."
  },
  {
    id: 328,
    module: "m1",
    ref: "Fiche Galonnage Police (Couleurs d'épaules)",
    q: "VRAI OU FAUX : Les manchons et pattes d'épaules sont de couleur bleu CRS pour les personnels de la DCCRS, et bleu police pour les autres directions.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : La couleur des pattes d'épaule varie selon la direction d'affectation : bleu CRS pour les Compagnies Républicaines de Sécurité, et bleu police pour les autres directions actives."
  },
  {
    id: 329,
    module: "m1",
    ref: "Fiche Galonnage (DGPN)",
    q: "VRAI OU FAUX : Le Directeur Général de la Police Nationale (DGPN) porte 5 pointes de diamant or sur ses épaulettes.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le DGPN porte 5 pointes de diamant ARGENT (comme tous les emplois de direction : 2 pour contrôleur général, 3 pour inspecteur général, 4 pour directeur des services actifs, 5 pour le DGPN). Seuls les grades de commissaire général et commandant divisionnaire portent des diamants or."
  },
  {
    id: 330,
    module: "m1",
    ref: "Fiche Organisation PN (ANFSI)",
    q: "VRAI OU FAUX : L'A.N.F.S.I. (Agence du numérique des forces de sécurité intérieure) est un service conjoint à la police et à la gendarmerie nationales.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'A.N.F.S.I., la D.C.I.S. et le S.S.M.S.I. sont les trois entités dirigées conjointement par le DGPN et le DGGN."
  },
  {
    id: 331,
    module: "m1",
    ref: "Fiche Organisation PN (Académie de Police)",
    q: "VRAI OU FAUX : L'Académie de police créée en 2023 est chargée de la formation initiale et continue de l'ensemble des policiers nationaux.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'Académie de Police (A.D.P.) pilote désormais l'ensemble de la formation, des écoles de police et de la doctrine des métiers de la sécurité intérieure."
  },
  {
    id: 332,
    module: "m1",
    ref: "Fiche Galonnage Commandement (Élève et Stagiaire)",
    q: "VRAI OU FAUX : Un élève officier porte un alpha blanc pendant ses 6 premiers mois, puis 1 galon blanc lorsqu'il devient stagiaire.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le déroulé exact du galonnage dans le corps de commandement : 1 alpha blanc (élève 6 premiers mois) puis 1 galon blanc (stagiaire jusqu'à titularisation)."
  },
  {
    id: 333,
    module: "m1",
    ref: "Fiche Galonnage CEA (Appellation du PA)",
    q: "VRAI OU FAUX : On s'adresse réglementairement à un Policier Adjoint en lui disant « Monsieur le Gardien ».",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'appellation officielle d'un Policier Adjoint est « Adjoint ». L'appellation « Gardien » commence dès le grade d'élève gardien de la paix."
  },
  {
    id: 334,
    module: "m1",
    ref: "Fiche Organisation PN (DNSP)",
    q: "VRAI OU FAUX : La Direction Nationale de la Sécurité Publique (DNSP) est la direction qui assure la police du quotidien et les patrouilles de police secours dans les circonscriptions.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : La DNSP regroupe les effectifs en tenue, commissariats locaux, brigades anticriminalité (BAC) et police secours au contact direct de la population."
  },
  {
    id: 335,
    module: "m1",
    ref: "Fiche Galonnage Conception et Direction (Appellation)",
    q: "VRAI OU FAUX : Pour s'adresser à un Commissaire de police divisionnaire, la formule verbale d'usage est simplement « Divisionnaire ».",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Dans le corps de conception et de direction, on utilise obligatoirement le titre protocolaire complet : « Madame / Monsieur le commissaire divisionnaire »."
  },

  // =========================================================================
  // MODULE 2 : DROIT PÉNAL GÉNÉRAL : INFRACTION, TENTATIVE, COMPLICITÉ (22 Q : 336 à 357)
  // =========================================================================
  {
    id: 336,
    module: "m2",
    ref: "Annales Nîmes (Thème Scooter, Fascicule DPS-DPG p. 9)",
    q: "VRAI OU FAUX : Lors d'un vol à l'arraché commis à deux sur un scooter, si la victime s'accroche fermement à son sac et fait chuter les auteurs qui s'enfuient bredouilles, l'infraction doit être qualifiée de délit de violences simples.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'infraction doit être qualifiée de TENTATIVE DE VOL (éventuellement aggravé par la réunion de circonstances). Les violences subies par la résistance de la victime ne font pas disparaître l'intention et le commencement d'exécution du vol."
  },
  {
    id: 337,
    module: "m2",
    ref: "Annales Nîmes (Fascicule DPS-DPG p. 9)",
    q: "VRAI OU FAUX : Il y a absence de désistement volontaire lorsque l'auteur interrompt son action en raison de l'intervention d'un tiers ou de l'alarme d'un riverain.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes Q11) : Pour qu'il y ait désistement volontaire, le renoncement doit être spontané et émaner de la seule volonté de l'auteur. Si la fuite est provoquée par un cri, un témoin ou une alarme, il y a absence de désistement volontaire et la tentative est punissable."
  },
  {
    id: 338,
    module: "m2",
    ref: "Fiche L'Infraction (Art. 121-3 CP)",
    q: "VRAI OU FAUX : Il n'y a point de crime ou de délit sans intention de le commettre, sauf lorsque la loi prévoit expressément une faute d'imprudence ou de négligence.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la lettre même de l'article 121-3 alinéas 1 et 2 du Code pénal concernant l'élément moral des infractions."
  },
  {
    id: 339,
    module: "m2",
    ref: "Fiche L'Infraction (Art. 311-1 CP)",
    q: "VRAI OU FAUX : L'article 311-1 du Code pénal définit le vol comme la soustraction frauduleuse de la chose d'autrui.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la définition légale exacte du vol en droit français (l'article 311-3 en fixant la répression)."
  },
  {
    id: 340,
    module: "m2",
    ref: "Fiche La Tentative Punissable (p. 19)",
    q: "VRAI OU FAUX : Les simples actes préparatoires (ex: acheter des gants et une cagoule dans un magasin) suffisent à constituer le commencement d'exécution d'un vol.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Les actes préparatoires ne constituent pas un commencement d'exécution et ne sont pas punissables au titre de la tentative. Le commencement d'exécution exige des actes tendant directement et immédiatement à la commission du délit (ex: fracturer la serrure)."
  },
  {
    id: 341,
    module: "m2",
    ref: "Fiche La Complicité (Art. 121-7 CP p. 21)",
    q: "VRAI OU FAUX : Le complice par aide ou assistance est puni de la même peine que celle encourue par l'auteur principal de l'infraction.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Selon l'article 121-6 du Code pénal, « sera puni comme auteur le complice de l'infraction ». Il encourt la même peine maximale que l'auteur principal."
  },
  {
    id: 342,
    module: "m2",
    ref: "Fiche La Complicité (Cass. crim. 18 mars 2003)",
    q: "VRAI OU FAUX : Le passager d'une voiture qui crie au conducteur « fonce sur le barrage de police ! » est un simple témoin passif puisqu'il n'avait pas les mains sur le volant.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Selon la Cour de cassation (arrêt du 18 mars 2003 cité dans le cours), le passager ayant donné l'ordre de forcer le barrage est complice par provocation (ordre donné) et doit être poursuivi pénalement."
  },
  {
    id: 343,
    module: "m2",
    ref: "Fiche La Complicité (p. 21)",
    q: "VRAI OU FAUX : La complicité par aide ou assistance est punissable pour toutes les contraventions sans exception.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : En matière de contraventions, la complicité par aide ou assistance n'est punissable QUE si le texte réglementaire le prévoit expressément. En revanche, le complice par provocation/instructions y est toujours punissable (art. R. 610-2 CP)."
  },
  {
    id: 344,
    module: "m2",
    ref: "Fiche L'Infraction (Commission vs Omission)",
    q: "VRAI OU FAUX : La non-assistance à personne en péril (art. 223-6 CP) est une infraction de commission car elle suppose une action physique contre la victime.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : C'est une infraction d'OMISSION ! L'individu s'abstient volontairement d'agir alors que la loi lui impose de porter secours."
  },
  {
    id: 345,
    module: "m2",
    ref: "Annales Nîmes (Juridictions du 1er degré, Fascicule DPS-DPG p. 37)",
    q: "VRAI OU FAUX : La cour d'appel et la Cour de cassation sont des juridictions pénales du premier degré.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : (Corrigé officiel Nîmes Q9) : Les juridictions du 1er degré sont le tribunal de police (contraventions), le tribunal correctionnel (délits), la cour d'assises et la cour criminelle départementale (crimes). La cour d'appel est du 2e degré et la Cour de cassation juge le droit."
  },
  {
    id: 346,
    module: "m2",
    ref: "Fiche La Tentative Infructueuse (p. 20)",
    q: "VRAI OU FAUX : L'infraction manquée se produit lorsque l'auteur a exécuté tous les actes nécessaires mais échoue par simple maladresse (ex: rater sa cible en tirant).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la définition exacte de l'infraction manquée. L'auteur est puni comme pour l'infraction consommée."
  },
  {
    id: 347,
    module: "m2",
    ref: "Fiche La Tentative (p. 20)",
    q: "VRAI OU FAUX : Si des policiers voient un individu armé d'une batte de baseball qui s'apprête à frapper un passant mais n'a pas encore porté le premier coup, ils ont l'obligation légale d'attendre l'impact physique avant d'intervenir.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La fiche p. 20 souligne expressément que si l'intégrité corporelle des personnes est en danger, l'intervention de la force publique doit impérativement être mise en œuvre AVANT tout commencement d'exécution."
  },
  {
    id: 348,
    module: "m2",
    ref: "Fiche La Complicité (p. 22)",
    q: "VRAI OU FAUX : Mettre volontairement de la musique à très fort volume pour dissimuler les bruits de coups mortels portés par son ami constitue une complicité par aide ou assistance.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'aide ou assistance peut être matérielle ou consister en un concours apporté pour faciliter la consommation de l'infraction au moment des faits."
  },
  {
    id: 349,
    module: "m2",
    ref: "Fiche La Tentative (Art. 121-5 CP)",
    q: "VRAI OU FAUX : Pour que la tentative soit punissable, deux conditions cumulatives suffisent : un commencement d'exécution et l'absence de désistement volontaire.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Ce sont les deux seules conditions cumulatives exigées par l'article 121-5 du Code pénal."
  },
  {
    id: 350,
    module: "m2",
    ref: "Fiche L'Infraction (Peines de référence)",
    q: "VRAI OU FAUX : Les délits sont jugés par le tribunal de police et punis d'amendes n'excédant pas 3 000 euros.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Les délits sont jugés par le TRIBUNAL CORRECTIONNEL et sont punis de peines d'emprisonnement allant de plus de 2 mois jusqu'à 10 ans (voire 20 ans en récidive) et d'amendes d'au moins 3 750 euros. Le tribunal de police juge les contraventions."
  },
  {
    id: 351,
    module: "m2",
    ref: "Fiche La Complicité (Fourniture d'instructions)",
    q: "VRAI OU FAUX : Donner le code d'accès d'un digicode et les plans d'un entrepôt à des malfaiteurs pour qu'ils commettent un cambriolage constitue une complicité par fourniture d'instructions.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le cas typique de la complicité par fourniture d'instructions prévu par l'article 121-7 alinéa 2 du Code pénal."
  },
  {
    id: 352,
    module: "m2",
    ref: "Fiche La Complicité (Coauteur vs Complice)",
    q: "VRAI OU FAUX : La jurisprudence considère comme coauteur toute personne qui a apporté son aide tout en étant présente physiquement sur les lieux au moment des faits.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : La fiche p. 21 rappelle que la jurisprudence assimile souvent au coauteur celui qui apporte son aide et est présent au moment de la réalisation de l'infraction."
  },
  {
    id: 353,
    module: "m2",
    ref: "Fiche L'Infraction (Élément légal)",
    q: "VRAI OU FAUX : En matière pénale, les crimes et délits sont exclusivement créés par la loi, tandis que les contraventions relèvent du pouvoir réglementaire (décrets et arrêtés).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le principe constitutionnel de légalité des délits et des peines (art. 111-2 du Code pénal)."
  },
  {
    id: 354,
    module: "m2",
    ref: "Fiche La Tentative (Désistement actif)",
    q: "VRAI OU FAUX : Un voleur qui a dérobé des bijoux, puis qui pris de remords les rapporte au commissariat le lendemain, bénéficie du désistement volontaire qui annule l'infraction de vol.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Une fois l'infraction consommée (les bijoux ont été soustraits), le fait de les rendre s'appelle un « repentir actif ». Il n'efface pas l'infraction de vol qui est consommée et punissable (le juge pourra seulement en tenir compte dans la peine)."
  },
  {
    id: 355,
    module: "m2",
    ref: "Fiche La Complicité (Antériorité de l'aide)",
    q: "VRAI OU FAUX : L'aide ou l'assistance apportée par un individu après la commission de l'infraction, sans accord préalable, relève de la complicité.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'aide doit en principe être antérieure ou concomitante à l'infraction. L'aide intervenue après (sans entente préalable) constitue une infraction autonome distincte (ex: recel, recel de malfaiteurs ou non-dénonciation)."
  },
  {
    id: 356,
    module: "m2",
    ref: "Fiche L'Infraction (Causalité)",
    q: "VRAI OU FAUX : Dans une infraction de commission, il doit exister un lien de causalité direct et certain entre l'action physique de l'auteur et le résultat dommageable.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est une condition matérielle indispensable : l'auteur ne peut être condamné pour le dommage que si son acte en est la cause."
  },
  {
    id: 357,
    module: "m2",
    ref: "Annales Nîmes (Qualification vol et circonstances)",
    q: "VRAI OU FAUX : Le vol commis à deux sur la voie publique avec violences physiques constitue un délit de vol aggravé par deux circonstances (réunion et violences).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est l'analyse juridique conforme aux annales et aux articles 311-4 et suivants du Code pénal."
  },

  // =========================================================================
  // MODULE 3 : RESPONSABILITÉ PÉNALE, IRRESPONSABILITÉ & FAITS JUSTIFICATIFS (20 Q : 358 à 377)
  // =========================================================================
  {
    id: 358,
    module: "m3",
    ref: "Fiche Responsabilité Pénale (p. 35)",
    q: "VRAI OU FAUX : La responsabilité pénale constitue le quatrième élément constitutif de l'infraction en plus des éléments légal, matériel et moral.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le cours précise formellement que la responsabilité pénale n'est PAS un élément de l'infraction : elle en est l'EFFET et la CONSÉQUENCE juridique."
  },
  {
    id: 359,
    module: "m3",
    ref: "Fiche La Minorité (CJPM p. 35)",
    q: "VRAI OU FAUX : Un mineur de 14 ans reconnu coupable d'un vol avec effraction encourt les mêmes peines d'emprisonnement qu'un majeur, sans diminution possible.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le mineur de plus de 13 ans bénéficie de l'excuse de minorité qui diminue de moitié les peines maximales encourues par rapport à un majeur."
  },
  {
    id: 360,
    module: "m3",
    ref: "Fiche La Minorité (Retenue)",
    q: "VRAI OU FAUX : La mesure de « retenue » peut être appliquée aux mineurs âgés de 10 à 13 ans sous des conditions strictes prévues par le Code de la justice pénale des mineurs.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la mesure privative spécifique applicable aux mineurs de 10 à 13 ans (qui ne peuvent pas être placés en garde à vue de droit commun)."
  },
  {
    id: 361,
    module: "m3",
    ref: "Fiche Trouble Psychique (Art. 122-1 al. 2 CP)",
    q: "VRAI OU FAUX : Une personne dont le discernement a été simplement « altéré » au moment des faits est totalement déclarée pénalement irresponsable.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Seule l'ABOLITION TOTALE du discernement (art. 122-1 al. 1) entraîne l'irresponsabilité pénale. La simple altération (art. 122-1 al. 2) laisse subsister la responsabilité pénale, même si la juridiction peut atténuer la peine."
  },
  {
    id: 362,
    module: "m3",
    ref: "Fiche La Contrainte (Art. 122-2 CP)",
    q: "VRAI OU FAUX : La contrainte physique n'est reconnue comme cause d'irresponsabilité que si l'événement qui l'a provoquée était à la fois irrésistible et imprévisible.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Les deux caractères sont cumulatifs : une force à laquelle l'individu pouvait raisonnablement s'attendre ou résister ne constitue pas une contrainte exonératoire."
  },
  {
    id: 363,
    module: "m3",
    ref: "Fiche L'Erreur de Droit (Art. 122-3 CP)",
    q: "VRAI OU FAUX : Pour bénéficier de l'erreur sur le droit, il suffit à un prévenu de démontrer au juge qu'il n'avait pas connaissance du texte de loi.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : « Nul n'est censé ignorer la loi ». L'erreur de droit n'est admise que si l'auteur prouve qu'il n'était objectivement pas en mesure de l'éviter (ex: information erronée écrite d'une administration ou texte non publié)."
  },
  {
    id: 364,
    module: "m3",
    ref: "Fiche Faits Justificatifs (Art. 122-4 al. 1 CP)",
    q: "VRAI OU FAUX : L'infraction commise par une personne accomplissant un acte prescrit ou autorisé par des dispositions législatives ou réglementaires n'est pas punissable.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est l'énoncé textuel de l'article 122-4 alinéa 1 du Code pénal (ex: médecin signalant une maladie contagieuse imposée par la loi)."
  },
  {
    id: 365,
    module: "m3",
    ref: "Fiche L'État de Nécessité (p. 37)",
    q: "VRAI OU FAUX : L'état de nécessité peut être invoqué même si la menace visait uniquement un bien matériel et non une personne.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article 122-7 du Code pénal couvre expressément la sauvegarde d'une personne OU d'un bien (ex: briser une porte pour éteindre un feu dans un hangar)."
  },
  {
    id: 366,
    module: "m3",
    ref: "Fiche L'État de Nécessité (Dommages p. 38)",
    q: "VRAI OU FAUX : Lorsqu'un policier brise une porte par état de nécessité pour porter secours à une personne en danger, sa responsabilité financière personnelle est engagée.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La fiche p. 38 précise qu'en cas de bris de porte par nécessité par un policier ou un pompier dans l'exercice de ses fonctions, la responsabilité relève de l'ADMINISTRATION (responsabilité administrative) et non de sa responsabilité civile personnelle."
  },
  {
    id: 367,
    module: "m3",
    ref: "Fiche Le Lanceur d'Alerte (p. 38)",
    q: "VRAI OU FAUX : Une personne morale, telle qu'une société commerciale concurrente, peut valablement bénéficier du statut légal de lanceur d'alerte.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La loi exige obligatoirement que le lanceur d'alerte soit une PERSONNE PHYSIQUE agissant sans contrepartie financière directe et de bonne foi."
  },
  {
    id: 368,
    module: "m3",
    ref: "Fiche Le Lanceur d'Alerte (Dénonciation calomnieuse)",
    q: "VRAI OU FAUX : Une personne qui lance une fausse alerte de mauvaise foi pour nuire à sa hiérarchie encourt des poursuites pénales pour dénonciation calomnieuse (art. 226-10 CP).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'abus du dispositif d'alerte de mauvaise foi expose directement son auteur au délit pénal de dénonciation calomnieuse."
  },
  {
    id: 369,
    module: "m3",
    ref: "Fiche La Minorité (Audition libre)",
    q: "VRAI OU FAUX : La présomption de non-discernement interdit formellement d'entendre un mineur de moins de 13 ans en audition libre dans un service de police.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le NOTA de la fiche p. 35 précise bien que la présomption de non-discernement n'interdit aucunement d'entendre un mineur de moins de 13 ans en audition libre (avec les garanties légales)."
  },
  {
    id: 370,
    module: "m3",
    ref: "Fiche Personnes Morales (Art. 121-2 CP)",
    q: "VRAI OU FAUX : Les personnes morales (entreprises, associations) peuvent être déclarées pénalement responsables des infractions commises pour leur compte par leurs organes ou représentants.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le principe de la responsabilité pénale des personnes morales posé par l'article 121-2 du Code pénal."
  },
  {
    id: 371,
    module: "m3",
    ref: "Fiche Faits Justificatifs (Effet sur l'infraction)",
    q: "VRAI OU FAUX : Les faits justificatifs (légitime défense, état de nécessité, ordre de la loi) font disparaître l'élément matériel de l'infraction.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Les faits justificatifs font disparaître l'ÉLÉMENT LÉGAL (l'injustice de l'acte au regard du droit) : l'acte matériel a bien eu lieu, mais la loi lui retire son caractère infractionnel."
  },
  {
    id: 372,
    module: "m3",
    ref: "Fiche Trouble Psychique (Alcoolémie involontaire)",
    q: "VRAI OU FAUX : Une personne droguée à son insu par un tiers dans un verre et qui commet un délit sous l'effet hallucinatoire peut invoquer la contrainte ou l'irresponsabilité de l'article 122-1 du CP.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'intoxication étant involontaire et subie à son insu, l'exception des articles 122-1-1 ne s'applique pas : le sujet bénéficie de l'irresponsabilité pénale pour abolition involontaire du discernement."
  },
  {
    id: 373,
    module: "m3",
    ref: "Fiche La Contrainte Morale (p. 36)",
    q: "VRAI OU FAUX : La contrainte morale peut résulter d'une menace de mort immédiate formulée avec une arme sur un employé de banque pour le forcer à ouvrir un coffre.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est l'exemple classique de la contrainte morale externe qui supprime totalement le libre arbitre de l'employé."
  },
  {
    id: 374,
    module: "m3",
    ref: "Fiche L'État de Nécessité (Proportionnalité)",
    q: "VRAI OU FAUX : Tuer un passant innocent pour se nourrir dans une situation de famine est justifié par l'état de nécessité.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Il y a disproportion manifeste entre la valeur sauvegardée et la valeur détruite (la vie humaine est sacrée) : l'état de nécessité ne peut jamais justifier un homicide volontaire d'un innocent."
  },
  {
    id: 375,
    module: "m3",
    ref: "Fiche Le Lanceur d'Alerte (Défenseur des droits)",
    q: "VRAI OU FAUX : Le Défenseur des droits est l'organisme officiel qui peut être saisi par tout lanceur d'alerte pour être orienté et protégé.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : La loi du 9 décembre 2016 confie au Défenseur des droits la mission d'orienter et d'aider tout lanceur d'alerte."
  },
  {
    id: 376,
    module: "m3",
    ref: "Fiche Commandement de l'Autorité Légitime (Art. 122-4 al. 2 CP)",
    q: "VRAI OU FAUX : Pour exonérer son exécutant, l'ordre de l'autorité légitime doit émaner d'une autorité publique régulière (civile ou militaire) et non d'un employeur privé.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'autorité légitime au sens pénal s'entend uniquement d'une autorité publique légale (magistrat, préfet, hiérarchie de police, etc.), jamais d'un patron d'entreprise privée."
  },
  {
    id: 377,
    module: "m3",
    ref: "Fiche Responsabilité Pénale (Personnes Morales)",
    q: "VRAI OU FAUX : La responsabilité pénale d'une personne morale exclut obligatoirement celle des personnes physiques auteurs ou complices des mêmes faits.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Selon l'article 121-2 alinéa 3 du Code pénal, la responsabilité pénale des personnes morales n'exclut pas celle des personnes physiques auteurs ou complices des mêmes faits. Les deux peuvent être condamnées cumulativement."
  },

  // =========================================================================
  // MODULE 4 : LÉGITIME DÉFENSE & USAGE DES ARMES L. 435-1 CSI (25 Q : 378 à 402)
  // =========================================================================
  {
    id: 378,
    module: "m4",
    ref: "Annales Nîmes (Thème Mme Lecoeur, BJ-06 DPS DPG p. 7)",
    q: "VRAI OU FAUX : Une victime à qui l'on dérobe son téléphone dans la rue reçoit un coup de couteau au bras et, pour éviter un deuxième coup de couteau imminent, plante ses doigts dans les yeux de l'agresseur : elle est en état de légitime défense.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes 278/153 Q1) : L'atteinte est injustifiée, actuelle et réelle, et l'acte de défense est nécessaire, simultané et proportionné par rapport au coup de couteau susceptible de causer la mort."
  },
  {
    id: 379,
    module: "m4",
    ref: "Annales Nîmes (Thème Entrepôt Coca-Cola, BJ-06 DPS DPG p. 7)",
    q: "VRAI OU FAUX : Un agent de sécurité surprend un individu chargeant des packs de boissons dans son coffre ; pour l'empêcher de partir, il lui assène un violent coup de matraque télescopique sur le crâne : cet acte relève de la légitime défense des biens.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : (Corrigé officiel Nîmes 278/153 Q15) : Non. Frapper à la tête avec une matraque télescopique pouvant causer des blessures mortelles est disproportionné par rapport au vol matériel de bouteilles."
  },
  {
    id: 380,
    module: "m4",
    ref: "Annales Nîmes (Conditions de l'atteinte AIR, BJ-06 DPS DPG p. 7)",
    q: "VRAI OU FAUX : Pour que la légitime défense d'une personne soit recevable, l'atteinte subie doit cumulativement être : Actuelle, Injustifiée et Réelle (A.I.R.).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes grille A1) : L'atteinte doit être injustifiée (contraire à la loi), actuelle (en train de se produire) et réelle (non hypothétique ou imaginaire)."
  },
  {
    id: 381,
    module: "m4",
    ref: "Annales Nîmes (Conditions de la défense NSP, BJ-06 DPS DPG p. 7)",
    q: "VRAI OU FAUX : L'acte de défense d'une personne doit être : Nécessaire, Simultané et Proportionné (N.S.P.).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes grille A2) : La défense doit être nécessaire (pas d'autre issue), simultanée (dans le même temps, pas de vengeance tardive) et proportionnée."
  },
  {
    id: 382,
    module: "m4",
    ref: "Annales Nîmes (Arme pointée en fuite, BJ-06 DPS DPG Q10)",
    q: "VRAI OU FAUX : Lorsque le fuyard se retourne en pleine course et pointe un pistolet vers les policiers, la situation relève du cas n° 1 de l'article L. 435-1 du CSI (« des personnes armées menacent leur vie ou leur intégrité physique »).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes 278 Q10 & 276 Q4) : Pointer une arme à feu vers les policiers constitue une menace armée directe contre leur vie justifiant l'usage de l'arme au titre du 1°."
  },
  {
    id: 383,
    module: "m4",
    ref: "Annales Nîmes (Fuyard armé qui reprend sa course, Q11)",
    q: "VRAI OU FAUX : Le suspect qui pointait son arme reprend sa course en avant sans menacer personne ; à ce moment précis, les policiers qui le poursuivent peuvent immédiatement lui tirer dans le dos.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : (Corrigé officiel Nîmes 278 Q11) : Non. Dès lors que l'individu reprend sa course et ne pointe plus son arme, la menace directe cesse : les policiers ne peuvent pas tirer dans le dos d'un fuyard."
  },
  {
    id: 384,
    module: "m4",
    ref: "Annales Nîmes (Conditions périple meurtrier, BJ-06 DPS DPG p. 8)",
    q: "VRAI OU FAUX : La 5e situation de l'article L. 435-1 du CSI (périple meurtrier) n'exige pas que l'individu ait déjà commis un meurtre, une simple menace verbale suffit.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : (Corrigé officiel Nîmes Q6) : Les 3 conditions sont strictes : 1) L'individu VIENT DE COMMETTRE ou tenter de commettre un ou plusieurs MEURTRES ; 2) Raisons réelles et objectives de réitération probable ; 3) Seul moyen d'empêcher cette réitération dans un temps rapproché."
  },
  {
    id: 385,
    module: "m4",
    ref: "Fiche Légitime Défense (Art. 122-6 CP Cas 1)",
    q: "VRAI OU FAUX : La présomption de légitime défense s'applique à toute personne qui repousse, de jour, l'entrée par effraction dans un bureau commercial inoccupé.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'article 122-6 1° exige que les faits aient lieu DE NUIT et dans un LIEU HABITÉ (maison, appartement). Ni le plein jour, ni un local commercial inoccupé ne bénéficient de cette présomption."
  },
  {
    id: 386,
    module: "m4",
    ref: "Fiche Légitime Défense (Art. 122-6 CP Cas 2)",
    q: "VRAI OU FAUX : Le deuxième cas de présomption de légitime défense concerne la défense contre les auteurs de vols ou de pillages exécutés avec violences (de jour comme de nuit).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le texte exact de l'article 122-6 2° du Code pénal (Corrigé officiel Nîmes Q14 et Q17)."
  },
  {
    id: 387,
    module: "m4",
    ref: "Fiche Usage des Armes (Conditions préalables L. 435-1 CSI)",
    q: "VRAI OU FAUX : Les trois conditions préalables d'usage des armes par un policier sont : agir dans l'exercice des fonctions, être en uniforme ou porteur des insignes extérieurs et apparents, et agir en cas d'absolue nécessité et de manière strictement proportionnée.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes Q15, Q4 et Q2) : Ce sont les 3 conditions cumulatives préalables incontournables posées par la loi."
  },
  {
    id: 388,
    module: "m4",
    ref: "Fiche Usage des Armes (Policier en civil sans brassard)",
    q: "VRAI OU FAUX : Un policier en civil qui n'a pas mis son brassard et qui tire pour sauver sa vie menacée par un couteau ne peut pas invoquer l'article L. 435-1 du CSI, mais peut être couvert par la légitime défense de droit commun (art. 122-5 CP).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Fiche p. 28 et Corrigé Nîmes Ex. 3 Q5) : Si une des conditions préalables de l'art. L. 435-1 CSI manque (ici absence d'insigne apparent), le policier bascule dans le régime de la légitime défense (art. 122-5 CP)."
  },
  {
    id: 389,
    module: "m4",
    ref: "Fiche Usage des Armes (Cas 2 défense des lieux)",
    q: "VRAI OU FAUX : Dans la situation 2° de l'article L. 435-1 du CSI (défense des lieux occupés ou personnes confiées), les deux sommations à haute voix doivent précéder l'ouverture du feu.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Les sommations sont obligatoires pour les situations 2° et 3° de l'article L. 435-1 CSI."
  },
  {
    id: 390,
    module: "m4",
    ref: "Fiche Usage des Armes (Formule des sommations)",
    q: "VRAI OU FAUX : Les sommations réglementaires prévues par le cours sont : « Police, arrêtez-vous ou je vous interpelle » puis « Attention aux tirs ».",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Les sommations réglementaires officielles sont : 1re sommation : « Halte police », puis en cas de refus : « Halte ou je fais feu »."
  },
  {
    id: 391,
    module: "m4",
    ref: "Fiche Usage des Armes (Maintien de l'ordre L. 211-9 CSI)",
    q: "VRAI OU FAUX : L'usage des armes lors de la dispersion d'un attroupement en maintien de l'ordre relève du régime spécifique de l'article L. 211-9 du CSI et non des 5 cas de l'article L. 435-1 du CSI.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Le maintien de l'ordre public lors d'attroupements violents fait l'objet d'un cadre légal autonome (art. L. 211-9 CSI avec sommations particulières)."
  },
  {
    id: 392,
    module: "m4",
    ref: "Fiche Légitime Défense des Personnes (Crainte subjective)",
    q: "VRAI OU FAUX : Une personne qui riposte violemment parce qu'elle a eu peur d'une ombre dans la rue alors qu'aucune menace objective n'existait bénéficie de la légitime défense.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'atteinte doit être RÉELLE et certaine. Une simple frayeur ou une atteinte purement imaginaire ou putative ne permet jamais d'invoquer la légitime défense."
  },
  {
    id: 393,
    module: "m4",
    ref: "Fiche Légitime Défense (Riposte tardive)",
    q: "VRAI OU FAUX : Frapper son agresseur une heure après la fin de la bagarre pour lui faire payer ses actes s'inscrit dans le cadre de la légitime défense.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'acte de défense doit être SIMULTANÉ (dans le même temps que l'atteinte). Frapper plus tard constitue une vengeance privée illégale (violences volontaires)."
  },
  {
    id: 394,
    module: "m4",
    ref: "Fiche Usage des Armes (Fuite d'un détenu L. 435-1 3°)",
    q: "VRAI OU FAUX : Les policiers peuvent tirer sur un gardé à vue en fuite même s'il ne représente aucun danger pour la vie d'autrui dès lors qu'il refuse de s'arrêter après sommations.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le cours précise formellement que l'usage de l'arme ne pourra être légitime que si l'individu représente une menace objective pour la vie ou l'intégrité physique dans sa fuite. La simple fuite ne justifie pas le tir."
  },
  {
    id: 395,
    module: "m4",
    ref: "Fiche Usage des Armes (Arme en dotation collective)",
    q: "VRAI OU FAUX : Le pistolet-mitrailleur HK UMP9 et le fusil d'assaut HK G36 font partie des armes en dotation collective pouvant être utilisées au titre de l'article L. 435-1 du CSI.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Ces armes de dotation collective régulièrement attribuées relèvent pleinement du cadre d'emploi légal de l'article L. 435-1 du CSI."
  },
  {
    id: 396,
    module: "m4",
    ref: "Fiche Légitime Défense (Preuve des cas présumés)",
    q: "VRAI OU FAUX : La présomption de légitime défense de l'article 122-6 du Code pénal est irréfragable (la preuve contraire ne peut jamais être apportée par le parquet).",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : C'est une présomption SIMPLE : elle peut être renversée par la preuve contraire si les magistrats établissent que l'auteur connaissait l'agresseur ou a agi avec une disproportion manifeste."
  },
  {
    id: 397,
    module: "m4",
    ref: "Fiche Légitime Défense (Preuve en défense des biens)",
    q: "VRAI OU FAUX : En matière de légitime défense d'un bien (art. 122-5 al. 2 CP), la charge de prouver la nécessité et la proportionnalité repose sur la personne poursuivie.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Fiche p. 25) : La jurisprudence impose à la personne poursuivie la charge de prouver que les conditions justificatives étaient réunies."
  },
  {
    id: 398,
    module: "m4",
    ref: "Fiche Usage des Armes (Situation 1 vs Légitime défense)",
    q: "VRAI OU FAUX : La situation 1° de l'article L. 435-1 du CSI permet au policier de faire usage de son arme pour protéger la vie d'un tiers menacé par une personne armée.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Le 1° de l'article L. 435-1 CSI vise les atteintes contre les policiers OU un tiers, ainsi que les personnes armées menaçant leur vie ou celle d'un tiers."
  },
  {
    id: 399,
    module: "m4",
    ref: "Fiche Usage des Armes (Véhicule bélier L. 435-1 4°)",
    q: "VRAI OU FAUX : Un conducteur qui fonce délibérément avec son véhicule sur un barrage de policiers pour les écraser relève de la situation 1° de l'article L. 435-1 CSI (atteinte imminente à la vie).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Lorsque le véhicule est utilisé comme une arme par destination pour tuer les policiers, il y a atteinte directe à la vie (situation 1° ou légitime défense art. 122-5 CP), le tir de riposte immédiat est justifié sans sommation."
  },
  {
    id: 400,
    module: "m4",
    ref: "Fiche Usage des Armes (Arme intermédiaire LBD/Taser)",
    q: "VRAI OU FAUX : L'usage d'un lanceur de balles de défense (LBD 40) ou d'un pistolet à impulsion électrique (Taser) dans le cadre du service est soumis aux principes de nécessité et de proportionnalité.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Toute arme de force intermédiaire doit respecter strictement les principes de nécessité et de proportionnalité fixés par le Code de déontologie (art. R. 434-18 CSI)."
  },
  {
    id: 401,
    module: "m4",
    ref: "Fiche Légitime Défense des Biens (Contravention)",
    q: "VRAI OU FAUX : Un propriétaire peut tirer sur le chien de son voisin parce qu'il fait du bruit la nuit en invoquant la légitime défense des biens.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La légitime défense des biens (art. 122-5 al. 2 CP) ne s'applique QUE pour interrompre un crime ou un délit contre un bien. Un simple tapage sonore n'est qu'une contravention et l'acte de défense est totalement disproportionné."
  },
  {
    id: 402,
    module: "m4",
    ref: "Fiche Usage des Armes (Tir de sommation)",
    q: "VRAI OU FAUX : Le tir de sommation en l'air avec une arme à feu létale est formellement recommandé par la doctrine de la Police nationale en zone urbaine.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le tir d'intimidation ou de sommation en l'air est strictement déconseillé et prohibé par la doctrine opérationnelle en milieu urbain en raison du risque mortel de balle perdue ou de ricochet sur des tiers innocents."
  },

  // =========================================================================
  // MODULE 5 : LIBERTÉS PUBLIQUES, CONTRÔLES & FICHIERS DE POLICE (25 Q : 403 à 427)
  // =========================================================================
  {
    id: 403,
    module: "m5",
    ref: "Fichiers de Police (FPR - Fichier des Personnes Recherchées)",
    q: "VRAI OU FAUX : Dans le F.P.R. (Fichier des Personnes Recherchées), une fiche « S » signifie que la personne fait l'objet d'un mandat d'arrêt émis par un juge et doit être immédiatement incarcérée.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La fiche « S » concerne la Sûreté de l'État (renseignement). Elle ne constitue PAS un titre judiciaire de détention et ne permet pas d'incarcérer la personne ! Elle prescrit généralement une surveillance discrète ou le recueil de renseignements (sauf si une fiche PJ d'arrêt existe par ailleurs)."
  },
  {
    id: 404,
    module: "m5",
    ref: "Fichiers de Police (FPR - Fiches M et V)",
    q: "VRAI OU FAUX : Dans le F.P.R., la fiche « M » correspond aux mineurs en fugue et la fiche « V » aux évadés.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la codification officielle du FPR : fiche M = Mineurs en fugue, fiche V = Évadés (de garde à vue ou d'établissement pénitentiaire)."
  },
  {
    id: 405,
    module: "m5",
    ref: "Fichiers de Police (TAJ - Traitement des Antécédents Judiciaires)",
    q: "VRAI OU FAUX : Le T.A.J. est un fichier commun à la Police nationale et à la Gendarmerie nationale qui a fusionné et remplacé les anciens fichiers STIC et JUDEX.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Le TAJ regroupe dans une base unique sécurisée les antécédents judiciaires (mis en cause et victimes) pour les policiers et les gendarmes."
  },
  {
    id: 406,
    module: "m5",
    ref: "Fichiers de Police (TAJ - Contenu)",
    q: "VRAI OU FAUX : Le fichier T.A.J. recense uniquement les personnes ayant été définitivement condamnées par un tribunal, à l'exclusion des personnes simplement mises en cause lors d'une enquête.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : C'est le Casier Judiciaire qui enregistre les condamnations. Le TAJ enregistre les personnes MISE EN CAUSE (pour lesquelles il existe des indices graves ou concordants) ainsi que les VICTIMES d'infractions."
  },
  {
    id: 407,
    module: "m5",
    ref: "Fichiers de Police (SIV - Système d'Immatriculation des Véhicules)",
    q: "VRAI OU FAUX : Le S.I.V. permet aux policiers de vérifier l'identité du titulaire de la carte grise, les caractéristiques techniques du véhicule et l'existence d'éventuelles oppositions administratives.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Le Système d'Immatriculation des Véhicules géré par le ministère de l'Intérieur permet d'obtenir en temps réel toutes ces informations lors des contrôles routiers."
  },
  {
    id: 408,
    module: "m5",
    ref: "Fichiers de Police (FOVES - Objets et Véhicules Signalés)",
    q: "VRAI OU FAUX : Le fichier F.O.V.E.S. (qui a remplacé le FVPP) est la base nationale recensant les véhicules volés, les plaques d'immatriculation détournées, ainsi que les armes et objets signalés.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : FOVES signifie Fichier des Objets et Véhicules Signalés. Il permet de savoir immédiatement lors d'une patrouille si une voiture ou un objet est recherché."
  },
  {
    id: 409,
    module: "m5",
    ref: "Fichiers de Police (FAED - Empreintes Digitales)",
    q: "VRAI OU FAUX : Le F.A.E.D. est le Fichier Automatisé des Empreintes Digitales utilisé par la police scientifique pour comparer les traces papillaires et les empreintes palmaires relevées sur les scènes d'infraction.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Le FAED gère les empreintes digitales et palmaires pour l'identification des auteurs d'infractions."
  },
  {
    id: 410,
    module: "m5",
    ref: "Fichiers de Police (FNAEG - Empreintes Génétiques)",
    q: "VRAI OU FAUX : Le F.N.A.E.G. enregistre les empreintes rétiniennes et palmaires des individus placés en garde à vue.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le F.N.A.E.G. est le Fichier National Automatisé des Empreintes GÉNÉTIQUES (profils ADN). Les empreintes palmaires vont au FAED."
  },
  {
    id: 411,
    module: "m5",
    ref: "Fichiers de Police (FINIADA - Interdits d'armes)",
    q: "VRAI OU FAUX : Le F.I.N.I.A.D.A. recense les personnes interdites d'acquisition et de détention d'armes suite à une condamnation ou une décision préfectorale.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la mission exclusive du Fichier National des Interdits d'Acquisition et de Détention d'Armes."
  },
  {
    id: 412,
    module: "m5",
    ref: "Fichiers de Police (SNPC - Permis de conduire)",
    q: "VRAI OU FAUX : Le S.N.P.C. (Système National des Permis de Conduire) permet de vérifier en temps réel la validité d'un permis de conduire et son solde de points.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Le SNPC permet aux forces de l'ordre de vérifier l'état du permis (valide, suspendu, annulé, solde de points)."
  },
  {
    id: 413,
    module: "m5",
    ref: "Fichiers de Police (CHEOPS)",
    q: "VRAI OU FAUX : C.H.E.O.P.S. est l'application portail sécurisée de la Police nationale permettant aux agents d'interroger simultanément les fichiers (FPR, SIV, FOVES, TAJ).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : CHEOPS (Circulation Hiérarchisée des Enregistrements Opérationnels de la Police Sécurisée) est le portail central d'interrogation des fichiers opérationnels."
  },
  {
    id: 414,
    module: "m5",
    ref: "Fichiers de Police (Règle déontologique R. 434-22 CSI)",
    q: "VRAI OU FAUX : Un policier a le droit de consulter le fichier TAJ ou le SIV pour vérifier les antécédents d'un ami ou l'adresse d'un voisin par curiosité personnelle tant qu'il ne divulgue pas le résultat.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Selon l'article R. 434-22 du CSI, la consultation des fichiers est strictement réservée aux seuls besoins des missions professionnelles. Toute consultation privée est un délit pénal (accès frauduleux à un système de traitement de données) passible de sanctions disciplinaires et pénales !"
  },
  {
    id: 415,
    module: "m5",
    ref: "Fiche Contrôles d'Identité (Art. 78-2 al. 2 CPP)",
    q: "VRAI OU FAUX : Les policiers peuvent contrôler l'identité d'une personne à l'égard de laquelle il existe une raison plausible de soupçonner qu'elle a commis ou tenté de commettre une infraction.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le 1er cas de contrôle de police judiciaire à l'initiative des policiers prévu par l'article 78-2 alinéa 2 du CPP."
  },
  {
    id: 416,
    module: "m5",
    ref: "Fiche Contrôles d'Identité Préventifs (Art. 78-2 al. 8 CPP)",
    q: "VRAI OU FAUX : Le contrôle d'identité préventif (art. 78-2 al. 8 CPP) exige obligatoirement que la personne ait commis une infraction sous les yeux des policiers.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Le contrôle préventif vise justement à PRÉVENIR une atteinte à l'ordre public ou à la sécurité des personnes et des biens. Il peut viser « toute personne » quel que soit son comportement, sur la base d'éléments objectifs de menace."
  },
  {
    id: 417,
    module: "m5",
    ref: "Fiche Contrôles sur Réquisitions du PR (Art. 78-2 al. 7 CPP)",
    q: "VRAI OU FAUX : Les réquisitions du procureur de la République aux fins de contrôle d'identité peuvent être données verbalement par téléphone sans aucune limitation dans le temps.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'article 78-2 al. 7 du CPP impose formellement des réquisitions ÉCRITES précisant les infractions recherchées, ainsi que des lieux et une période de temps limités."
  },
  {
    id: 418,
    module: "m5",
    ref: "Fiche La Vérification d'Identité (Droits de la personne)",
    q: "VRAI OU FAUX : Une personne retenue pour vérification d'identité (art. 78-3 CPP) a le droit de faire aviser le procureur de la République et de prévenir sa famille à tout moment.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Ce sont les deux droits fondamentaux garantis par la loi à la personne retenue pour vérification d'identité."
  },
  {
    id: 419,
    module: "m5",
    ref: "Fiche La Vérification d'Identité (Mineurs)",
    q: "VRAI OU FAUX : Lorsque la vérification d'identité concerne un mineur de 18 ans, le procureur de la République et ses représentants légaux doivent être informés immédiatement.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Pour les mineurs, la loi impose une information immédiate des représentants légaux et du procureur de la République."
  },
  {
    id: 420,
    module: "m5",
    ref: "Fiche Vérification de Situation (Fiche S14 près d'un site)",
    q: "VRAI OU FAUX : La présence d'une personne faisant l'objet d'une fiche S14 aux abords immédiats d'un site sensible permet à l'OPJ d'engager une retenue pour vérification de situation (art. 78-3-1 CPP).",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est l'un des quatre éléments objectifs expressément cités par le cours et la loi pour mettre en œuvre cette retenue jusqu'à 4 heures."
  },
  {
    id: 421,
    module: "m5",
    ref: "Fiche Relevé d'Identité (Art. 78-6 CPP)",
    q: "VRAI OU FAUX : Le relevé d'identité (art. 78-6 CPP) permet aux policiers adjoints de vérifier l'identité d'une personne dans le seul but de constater et verbaliser une contravention.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la prérogative spécifique de police judiciaire de l'art. 78-6 CPP accordée notamment aux APJA (policiers adjoints et réservistes) pour dresser les PV de contraventions."
  },
  {
    id: 422,
    module: "m5",
    ref: "Fiche La Liberté d'Aller et Venir",
    q: "VRAI OU FAUX : La liberté d'aller et venir est un principe de valeur constitutionnelle consacré par le Conseil constitutionnel en 1979.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Décision fondamentale du Conseil constitutionnel du 12 juillet 1979 qui lui a conféré sa valeur constitutionnelle."
  },
  {
    id: 423,
    module: "m5",
    ref: "Fiche Palpation de Sécurité vs Fouille",
    q: "VRAI OU FAUX : La palpation de sécurité autorise le policier à ouvrir le sac à main d'une femme et à fouiller l'intérieur de son portefeuille.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La palpation de sécurité est EXCLUSIVEMENT une mesure de sûreté externe réalisée à travers les vêtements pour s'assurer qu'aucun objet dangereux n'est porté. Fouiller l'intérieur d'un portefeuille est un acte de perquisition judiciaire ou de fouille à corps qui relève d'un cadre procédural strict."
  },
  {
    id: 424,
    module: "m5",
    ref: "Fiche Contrôles dans les Véhicules (Art. 78-2-2 CPP)",
    q: "VRAI OU FAUX : Sur réquisitions écrites du procureur de la République, les policiers peuvent procéder à la visite des véhicules circulant ou arrêtés sur les voies publiques pour rechercher des armes ou des stupéfiants.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article 78-2-2 du CPP permet la visite des véhicules dans les lieux et pour la période désignés par les réquisitions du procureur de la République."
  },
  {
    id: 425,
    module: "m5",
    ref: "Fiche Contrôles d'Identité Transfrontaliers (Art. 78-2 al. 9 CPP)",
    q: "VRAI OU FAUX : Les contrôles d'identité dans la zone comprise entre la frontière terrestre de la France et une ligne tracée à 20 kilomètres en deçà sont autorisés pour vérifier le respect des obligations de détention de titres.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le cadre de l'article 78-2 alinéa 9 du CPP dans la bande frontalière des 20 kilomètres."
  },
  {
    id: 426,
    module: "m5",
    ref: "Fichiers de Police (FPR - Fiche T)",
    q: "VRAI OU FAUX : Une fiche « T » au FPR correspond à une personne faisant l'objet d'une enquête pour terrorisme international.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Piège classique des annales ! La fiche « T » au FPR correspond aux débiteurs du TRÉSOR PUBLIC (matière fiscale/administrative) et non au terrorisme."
  },
  {
    id: 427,
    module: "m5",
    ref: "Fichiers de Police (Conservation TAJ)",
    q: "VRAI OU FAUX : Dans le fichier TAJ, les données concernant les victimes d'infractions sont effacées automatiquement dès la fin de la garde à vue de l'auteur.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Les données relatives aux victimes peuvent être conservées pendant une durée légale maximale de 15 ans au TAJ afin de permettre d'éventuels recoupements judiciaires."
  },

  // =========================================================================
  // MODULE 6 : CADRES D'ENQUÊTE : FLAGRANCE, PRÉLIMINAIRE, CR & ART. 74 (20 Q : 428 à 447)
  // =========================================================================
  {
    id: 428,
    module: "m6",
    ref: "Annales Nîmes (Cas de flagrance art. 53 CPP)",
    q: "VRAI OU FAUX : Selon l'article 53 alinéa 1 du CPP, il y a flagrance lorsque le crime ou le délit se commet actuellement, ou lorsqu'il vient de se commettre.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes Q2, Q8 et Fascicule DPS-DPG p. 33) : Ce sont les deux premiers cas fondamentaux de la flagrance directe."
  },
  {
    id: 429,
    module: "m6",
    ref: "Annales Nîmes (Traces et indices art. 53 CPP)",
    q: "VRAI OU FAUX : Une personne trouvée dans un temps très voisin de l'action en possession d'objets ou présentant des traces laissant penser qu'elle a participé au crime est en situation de flagrant délit.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Corrigé officiel Nîmes Q3 et Q8) : C'est le cas de flagrance présumée par les traces ou indices prévu par l'article 53 du CPP."
  },
  {
    id: 430,
    module: "m6",
    ref: "Fiche Enquête de Flagrance (Poursuite de 8 jours p. 56)",
    q: "VRAI OU FAUX : L'enquête de flagrance qui a débuté pour un crime peut être prolongée pour une nouvelle durée maximale de 8 jours par le procureur de la République si l'enquête le justifie.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Lorsque des investigations nécessaires à la manifestation de la vérité ne peuvent être différées, le procureur de la République peut décider de prolonger l'enquête de flagrance pour une durée maximale de 8 jours supplémentaires."
  },
  {
    id: 431,
    module: "m6",
    ref: "Fiche Enquête Préliminaire (Durée art. 75-3 CPP)",
    q: "VRAI OU FAUX : La durée de droit commun d'une enquête préliminaire est limitée par la loi à 2 ans, prolongeable d'une année sur autorisation écrite et motivée du procureur de la République.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la règle de l'article 75-3 du CPP : 2 ans maximum, extensible à 3 ans sur autorisation écrite du procureur."
  },
  {
    id: 432,
    module: "m6",
    ref: "Fiche Enquête Préliminaire (Dépassement des délais p. 62)",
    q: "VRAI OU FAUX : En enquête préliminaire, tout acte d'enquête accompli après l'expiration des délais légaux est frappé de nullité.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : La fiche p. 62 rappelle la sanction procédurale stricte : tout acte intervenant après l'expiration de ces délais légaux est nul."
  },
  {
    id: 433,
    module: "m6",
    ref: "Fiche La Commission Rogatoire (Art. 81 & 151 CPP)",
    q: "VRAI OU FAUX : Une commission rogatoire est un acte par lequel le procureur de la République ordonne à un gardien de la paix d'arrêter un suspect.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La commission rogatoire est délivrée par un JUGE D'INSTRUCTION (dans le cadre d'une information judiciaire) et est confiée exclusivement à un OFFICIER DE POLICE JUDICIAIRE (OPJ)."
  },
  {
    id: 434,
    module: "m6",
    ref: "Fiche La Commission Rogatoire (Rôle de l'APJ p. 58)",
    q: "VRAI OU FAUX : Sur commission rogatoire, un Agent de Police Judiciaire (APJ) peut rédiger certains actes techniques (comme les transcriptions d'interceptions) sous le contrôle d'un OPJ.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Fiche p. 58) : L'APJ peut assister l'OPJ et rédiger sous son contrôle des actes limitativement prévus (transcription d'écoutes, réquisitions 57-1, etc.)."
  },
  {
    id: 435,
    module: "m6",
    ref: "Fiche Découverte de Cadavre (Art. 74 CPP)",
    q: "VRAI OU FAUX : L'article 74 du CPP s'applique dès qu'une personne âgée décède paisiblement de vieillesse à l'hôpital avec un certificat médical délivré sans obstacle médico-légal.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'article 74 du CPP exige que la mort soit de CAUSE INCONNUE OU SUSPECTE. Une mort naturelle certifiée médicalement sans obstacle ne fait pas l'objet d'une enquête de l'art. 74."
  },
  {
    id: 436,
    module: "m6",
    ref: "Fiche Blessures Graves Suspectes (Art. 74 al. 6 CPP)",
    q: "VRAI OU FAUX : Le cadre juridique de l'article 74 du CPP est également applicable en cas de découverte d'une personne grièvement blessée lorsque la cause des blessures est inconnue ou suspecte.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article 74 alinéa 6 du CPP étend expressément cette procédure aux personnes grièvement blessées de cause inconnue ou suspecte."
  },
  {
    id: 437,
    module: "m6",
    ref: "Fiche Disparition Inquiétante (Art. 74-1 CPP)",
    q: "VRAI OU FAUX : L'enquête pour disparition inquiétante de l'article 74-1 du CPP est réservée exclusivement aux mineurs et ne peut jamais s'appliquer à un majeur.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'article 74-1 du CPP s'applique aux mineurs, aux majeurs protégés, ainsi qu'à TOUT MAJEUR dont la disparition présente un caractère inquiétant ou suspect (âge, santé, circonstances)."
  },
  {
    id: 438,
    module: "m6",
    ref: "Fiche Enquête Préliminaire (Compte rendu à 6 mois)",
    q: "VRAI OU FAUX : Lorsqu'une enquête préliminaire est menée d'office par les OPJ, ils ont l'obligation de rendre compte de son état d'avancement au procureur de la République lorsqu'elle est commencée depuis plus de 6 mois.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est l'obligation légale de compte rendu semestriel posée par l'article 75-3 du Code de procédure pénale."
  },
  {
    id: 439,
    module: "m6",
    ref: "Fiche Enquête Préliminaire (Personnes exclues p. 63)",
    q: "VRAI OU FAUX : Les maires et les députés sont totalement immunisés et ne peuvent jamais être visés par des actes d'enquête préliminaire.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : La fiche p. 63 précise que les deux seules exceptions personnelles résidant en France sont le Président de la République et les agents diplomatiques accrédités en France. Les parlementaires et maires peuvent faire l'objet d'enquêtes préliminaires."
  },
  {
    id: 440,
    module: "m6",
    ref: "Fiche Perquisition en Flagrance (Art. 56 CPP)",
    q: "VRAI OU FAUX : En enquête de flagrance, la perquisition au domicile du suspect exige obligatoirement l'accord écrit préalable de ce dernier.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : C'est en enquête préliminaire que l'assentiment écrit est exigé ! En flagrance, la perquisition est COERCITIVE : elle peut se faire sans l'assentiment de l'intéressé (art. 56 CPP)."
  },
  {
    id: 441,
    module: "m6",
    ref: "Fiche Secret de l'Enquête (Art. 11 CPP)",
    q: "VRAI OU FAUX : La violation du secret de l'enquête ou de l'instruction n'est pénalement sanctionnée que si les faits divulgués concernent un crime ou un délit.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Fiche p. 56) : Toute violation du secret de l'enquête est sanctionnée pénalement si les faits divulgués concernent un crime ou un délit."
  },
  {
    id: 442,
    module: "m6",
    ref: "Fiche Information Judiciaire Obligatoire",
    q: "VRAI OU FAUX : L'ouverture d'une information judiciaire (saisine d'un juge d'instruction) est facultative pour les crimes et obligatoire pour toutes les contraventions.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'information judiciaire est OBLIGATOIRE EN CAS DE CRIME (art. 79 CPP). Pour les délits elle est facultative et pour les contraventions elle est exceptionnelle."
  },
  {
    id: 443,
    module: "m6",
    ref: "Fiche Enquête Préliminaire (Infractions couvertes)",
    q: "VRAI OU FAUX : L'enquête préliminaire peut être ouverte pour tous les crimes, délits et contraventions.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'enquête préliminaire est le cadre d'enquête de droit commun à compétence générale pour toutes les catégories d'infractions."
  },
  {
    id: 444,
    module: "m6",
    ref: "Fiche Découverte de Cadavre (Compétence APJ)",
    q: "VRAI OU FAUX : Les actes prévus aux articles 74 et 74-1 du CPP sont de la compétence exclusive de l'OPJ, mais peuvent également être effectués par l'APJ sous le contrôle de l'OPJ.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Fiche p. 57) : Ces cadres d'enquête sont de la compétence de l'OPJ ou, sous son contrôle, de l'APJ."
  },
  {
    id: 445,
    module: "m6",
    ref: "Fiche Heures Légales de Perquisition (Art. 59 CPP)",
    q: "VRAI OU FAUX : Sauf dérogation spéciale prévue par la loi (terrorisme, stupéfiants), les perquisitions en domicile ne peuvent en principe commencer qu'entre 6 heures et 21 heures.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la règle protectrice de l'inviolabilité du domicile posée par l'article 59 du Code de procédure pénale."
  },
  {
    id: 446,
    module: "m6",
    ref: "Fiche Enquête de Flagrance (Art. 73 CPP - Rôle citoyen)",
    q: "VRAI OU FAUX : En vertu de l'article 73 du CPP, tout citoyen (y compris un policier adjoint) a le pouvoir d'appréhender l'auteur d'un crime ou d'un délit flagrant puni d'emprisonnement et de le conduire devant l'OPJ le plus proche.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article 73 du Code de procédure pénale permet à toute personne d'appréhender l'auteur d'un crime ou délit flagrant puni d'emprisonnement."
  },
  {
    id: 447,
    module: "m6",
    ref: "Fiche Enquête Préliminaire (Instructions Parquet)",
    q: "VRAI OU FAUX : Lorsque le procureur de la République ordonne une enquête préliminaire, il fixe lui-même le délai dans lequel les policiers doivent la clôturer.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : (Fiche p. 63) : Le procureur de la République fixe le délai d'exécution et peut le proroger au vu des justifications de l'enquêteur."
  },

  // =========================================================================
  // MODULE 7 : CODE DE DÉONTOLOGIE POLICE & GENDARMERIE CSI (18 Q : 448 à 465)
  // =========================================================================
  {
    id: 448,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-14 CSI)",
    q: "VRAI OU FAUX : Dans sa relation avec la population, le policier peut tutoyer un contrevenant si celui-ci se montre provocateur.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'article R. 434-14 du CSI impose expressément la courtoisie et L'USAGE OBLIGATOIRE DU VOUVOIEMENT, en toutes circonstances, même face à une personne agressive ou impolie."
  },
  {
    id: 449,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-11 CSI)",
    q: "VRAI OU FAUX : Le policier en service est soumis à une stricte obligation de neutralité et ne doit manifester aucune conviction religieuse, politique ou philosophique.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le principe fondamental de neutralité du service public rappelé à l'article R. 434-11 du CSI."
  },
  {
    id: 450,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-9 CSI)",
    q: "VRAI OU FAUX : Un commerçant qui offre des viennoiseries chaque matin à une patrouille de police pour la remercier de sécuriser sa rue peut être accepté par les agents car c'est un geste d'amitié.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'article R. 434-9 du CSI (devoir de probité) interdit formellement d'accepter toute gratification ou avantage, direct ou indirect, pour des actes accomplis ou dans l'exercice des fonctions."
  },
  {
    id: 451,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-15 CSI)",
    q: "VRAI OU FAUX : Les policiers sont tenus au devoir de réserve et au secret professionnel, ce qui encadre strictement toute expression publique devant les médias.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article R. 434-15 du CSI encadre toute prise de parole publique par le respect du secret professionnel, du secret de l'enquête et du devoir de réserve."
  },
  {
    id: 452,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-18 CSI)",
    q: "VRAI OU FAUX : Selon l'article R. 434-18 du CSI, le policier n'emploie la force que lorsque c'est nécessaire et de façon proportionnée au but à atteindre.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Ce sont les deux conditions fondamentales de tout emploi de la force publique (nécessité et proportionnalité)."
  },
  {
    id: 453,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-21 CSI)",
    q: "VRAI OU FAUX : Une personne appréhendée et placée en garde à vue est sous la responsabilité et la protection de la police : les agents doivent veiller à son état de santé et la protéger de toute violence de tiers.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article R. 434-21 du CSI confère aux policiers la charge de la protection physique et de la dignité de toute personne retenue ou gardée à vue."
  },
  {
    id: 454,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-21 CSI)",
    q: "VRAI OU FAUX : Pour montrer l'efficacité d'une opération aux médias, les policiers peuvent exposer la personne menottée aux photographes de presse sur la voie publique.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'article R. 434-21 alinéa 3 interdit formellement d'exposer la personne privée de liberté à la curiosité du public ou des médias sans son accord exprès."
  },
  {
    id: 455,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-8 CSI)",
    q: "VRAI OU FAUX : Un policier convoqué par la justice ou une autorité de contrôle pour des faits survenus pendant ses vacances doit en informer sans délai son autorité hiérarchique.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article R. 434-8 II du CSI oblige tout policier à porter sans délai à la connaissance de sa hiérarchie tout fait, en service ou hors service, susceptible d'entraîner une convocation par une autorité judiciaire ou de contrôle."
  },
  {
    id: 456,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-10 CSI)",
    q: "VRAI OU FAUX : Le policier doit faire preuve de discernement dans l'exercice de ses fonctions.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article R. 434-10 du CSI érige le discernement en qualité déontologique essentielle du policier pour apprécier chaque situation avec mesure et justice."
  },
  {
    id: 457,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-16 CSI)",
    q: "VRAI OU FAUX : La palpation de sécurité doit être pratiquée obligatoirement sur chaque piéton contrôlé dans la rue, même sans aucun soupçon de danger.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : L'article R. 434-16 du CSI rappelle expressément que la palpation de sécurité NE REVÊT PAS UN CARACTÈRE SYSTÉMATIQUE : elle est réservée aux cas où elle est nécessaire à la garantie de la sécurité."
  },
  {
    id: 458,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-17 CSI)",
    q: "VRAI OU FAUX : Les menottes peuvent être appliquées à titre de punition sur un individu arrêté qui refuse de répondre aux questions.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Les menottes ne sont en aucun cas une sanction disciplinaire ! Elles sont exclusivement une mesure de contrainte de sûreté autorisée si la personne est jugée dangereuse pour autrui ou elle-même, ou susceptible de fuir."
  },
  {
    id: 459,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-20 CSI)",
    q: "VRAI OU FAUX : Sans se départir de son impartialité, le policier accorde une attention particulière aux victimes et veille à la qualité de leur accueil.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la prescription déontologique claire énoncée à l'article R. 434-20 du CSI."
  },
  {
    id: 460,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-4 CSI)",
    q: "VRAI OU FAUX : Si l'urgence opérationnelle impose à un commandant de donner un ordre direct à un gardien de la paix sans passer par le brigadier intermédiaire, l'échelon intermédiaire doit en être informé sans délai.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est la règle de transmission hiérarchique posée par l'article R. 434-4 du CSI."
  },
  {
    id: 461,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-6 CSI)",
    q: "VRAI OU FAUX : L'autorité de commandement doit veiller à donner des ordres précis assortis des explications nécessaires à leur bonne exécution.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : C'est le devoir de l'autorité de commandement fixé par l'article R. 434-6 du CSI."
  },
  {
    id: 462,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-7 CSI)",
    q: "VRAI OU FAUX : Le supérieur hiérarchique a l'obligation légale d'apporter aide et soutien à ses subordonnés et de veiller à leur sécurité.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article R. 434-7 du CSI oblige le chef à apporter aide et soutien à ses subordonnés et proscrit tout harcèlement ou abus d'autorité."
  },
  {
    id: 463,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-23 CSI)",
    q: "VRAI OU FAUX : Les policiers peuvent refuser l'accès de leurs locaux aux membres de l'Inspection Générale de la Police Nationale (IGPN) s'ils n'ont pas d'ordre de mission du préfet.",
    options: ["Vrai", "Faux"],
    correct: 1,
    exp: "POURQUOI C'EST FAUX : Selon l'article R. 434-23 du CSI, le policier facilite en TOUTE CIRCONSTANCE le déroulement des opérations de contrôle et d'inspection conduites par les organismes d'inspection générale (IGPN)."
  },
  {
    id: 464,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-13 CSI)",
    q: "VRAI OU FAUX : L'usage d'un véhicule de patrouille sérigraphié pour aller faire ses courses personnelles en fin de service est formellement interdit.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : L'article R. 434-13 du CSI interdit formellement d'utiliser les locaux, véhicules et matériels de service à des fins étrangères à l'exercice des missions."
  },
  {
    id: 465,
    module: "m7",
    ref: "Code de Déontologie (Art. R. 434-3 CSI)",
    q: "VRAI OU FAUX : Les règles déontologiques prévues aux articles R. 434-1 à R. 434-24 du CSI s'appliquent à tous les agents de la Police nationale et de la Gendarmerie nationale, quel que soit leur grade ou statut.",
    options: ["Vrai", "Faux"],
    correct: 0,
    exp: "POURQUOI C'EST VRAI : Le Code de déontologie s'applique à tous les fonctionnaires actifs, policiers adjoints, réservistes opérationnels et personnels de la gendarmerie."
  }
];

// Read existing examData.ts
const dataPath = 'src/data/examData.ts';
let content = fs.readFileSync(dataPath, 'utf8');

const marker = 'export const QUESTIONS: Question[] = ';
const idx = content.indexOf(marker);
if (idx === -1) {
  console.error('Marker not found');
  process.exit(1);
}

const before = content.substring(0, idx + marker.length);
const existingQuestions = eval(content.substring(idx + marker.length).trim().replace(/;$/, ''));

console.log('Existing questions count:', existingQuestions.length);
const combined = [...existingQuestions, ...q150];
console.log('Combined questions count:', combined.length);

fs.writeFileSync(dataPath, `${before}${JSON.stringify(combined, null, 2)};\n`);
console.log('src/data/examData.ts updated successfully with 465 questions!');
