"use strict";

/* ==========================================
   DONNÉES
========================================== */

const joueurs = [

  {
    nom: "LeBron James",
    poste: "AI",
    age: 41,
    taille: 206,
    points: 25.7,
    rebonds: 7.3,
    assists: 8.1,
    image: "images/lebron.jpg"
  },

  {
    nom: "Luka Doncic",
    poste: "MJ",
    age: 27,
    taille: 201,
    points: 32.1,
    rebonds: 8.7,
    assists: 9.4,
    image: "images/doncic.jpg"
  },

  {
    nom: "Austin Reaves",
    poste: "AR",
    age: 28,
    taille: 196,
    points: 15.9,
    rebonds: 4.3,
    assists: 5.5,
    image: "images/reaves.jpg"
  },

  {
    nom: "Rui Hachimura",
    poste: "AF",
    age: 28,
    taille: 203,
    points: 13.6,
    rebonds: 4.9,
    assists: 1.2,
    image: "images/rui.jpg"
  },

  {
    nom: "Jaxson Hayes",
    poste: "P",
    age: 26,
    taille: 213,
    points: 7.8,
    rebonds: 5.1,
    assists: 0.9,
    image: "images/hayes.jpg"
  },

  {
    nom: "Dorian Finney-Smith",
    poste: "AI",
    age: 33,
    taille: 201,
    points: 10.4,
    rebonds: 4.8,
    assists: 2.1,
    image: "images/dfs.jpg"
  }

];

/* ==========================================
   RECHERCHE
========================================== */

function rechercherJoueurs(liste, terme) {

  if (!terme) {
    return liste;
  }

  terme = terme.toLowerCase();

  return liste.filter(joueur =>

    joueur.nom
      .toLowerCase()
      .includes(terme)

  );
}

/* ==========================================
   FILTRE STATS
========================================== */

function filtrerStats(liste, filtre) {

  switch (filtre) {

    case "points":
      return liste.filter(joueur =>
        joueur.points > 20
      );

    case "rebonds":
      return liste.filter(joueur =>
        joueur.rebonds > 8
      );

    case "assists":
      return liste.filter(joueur =>
        joueur.assists > 5
      );

    default:
      return liste;
  }
}

/* ==========================================
   FILTRE POSTE
========================================== */

function filtrerPoste(liste, poste) {

  if (poste === "all") {
    return liste;
  }

  return liste.filter(joueur =>
    joueur.poste === poste
  );
}

/* ==========================================
   TRI
========================================== */

function trierJoueurs(liste, tri) {

  const copie = [...liste];

  switch (tri) {

    case "poste":

      const ordrePostes = {
        MJ: 1,
        AR: 2,
        AI: 3,
        AF: 4,
        P: 5
      };

      return copie.sort((a, b) =>
        ordrePostes[a.poste] -
        ordrePostes[b.poste]
      );

    case "age":
      return copie.sort((a, b) =>
        a.age - b.age
      );

    case "taille":
      return copie.sort((a, b) =>
        b.taille - a.taille
      );

    case "points":
      return copie.sort((a, b) =>
        b.points - a.points
      );

    default:
      return copie.sort((a, b) =>
        a.nom.localeCompare(b.nom)
      );
  }
}

/* ==========================================
   CRÉER CARTE HTML
========================================== */

function creerCarteJoueur(joueur) {

  return `

<article class="player-card">

    <img
src="${joueur.image}"
alt="${joueur.nom}"
    >

    <div class="player-info">

    <h3>${joueur.nom}</h3>

<p class="player-meta">
    ${joueur.poste}
    ·
    ${joueur.age} ans
    ·
    ${joueur.taille} cm
</p>

<div class="stats">

          <span class="badge">
            ${joueur.points} PTS
          </span>

    <span class="badge">
            ${joueur.rebonds} REB
          </span>

    <span class="badge">
            ${joueur.assists} AST
          </span>

</div>

</div>

</article>

`;
}

/* ==========================================
   AFFICHAGE HTML
========================================== */

function afficherJoueurs(liste) {

  const container =
    document.querySelector("#joueurs-container");

  if (liste.length === 0) {

    container.innerHTML = `
<p class="empty-message">
    Aucun joueur trouvé.
</p>
`;

    return;
  }

  let html = "";

  liste.forEach(joueur => {

    html += creerCarteJoueur(joueur);

  });

  container.innerHTML = html;
}

/* ==========================================
   RAFRAÎCHIR
========================================== */

function rafraichir() {

  const recherche =
    document.querySelector("#recherche").value;

  const filtre =
    document.querySelector("#filtreStat").value;

  const poste =
    document.querySelector("#filtrePoste").value;

  const tri =
    document.querySelector("#tri").value;

  let resultat =
    rechercherJoueurs(
      joueurs,
      recherche
    );

  resultat =
    filtrerStats(
      resultat,
      filtre
    );

  resultat =
    filtrerPoste(
      resultat,
      poste
    );

  resultat =
    trierJoueurs(
      resultat,
      tri
    );

  afficherJoueurs(resultat);
}

/* ==========================================
   EVENTS
========================================== */

document
  .querySelector("#recherche")
  .addEventListener(
    "input",
    rafraichir
  );

document
  .querySelector("#filtreStat")
  .addEventListener(
    "change",
    rafraichir
  );

document
  .querySelector("#filtrePoste")
  .addEventListener(
    "change",
    rafraichir
  );

document
  .querySelector("#tri")
  .addEventListener(
    "change",
    rafraichir
  );

/* ==========================================
   INITIALISATION
========================================== */

rafraichir();


