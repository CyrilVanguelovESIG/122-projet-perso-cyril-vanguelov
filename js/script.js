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
        points: 23.2,
        rebonds: 6.7,
        assists: 7.3,
        image: "images/lebron.jpg"
    },

    {
        nom: "Luka Doncic",
        poste: "MJ",
        age: 27,
        taille: 201,
        points: 33.5,
        rebonds: 7.7,
        assists: 8.3,
        image: "images/doncic.jpg"
    },

    {
        nom: "Austin Reaves",
        poste: "AR",
        age: 27,
        taille: 196,
        points: 20,
        rebonds: 4,
        assists: 5.8,
        image: "images/reaves.jpg"
    },

    {
        nom: "Rui Hachimura",
        poste: "AF",
        age: 28,
        taille: 203,
        points: 17.5,
        rebonds: 4,
        assists: 1.7,
        image: "images/rui.jpg"
    },

    {
        nom: "Jaxson Hayes",
        poste: "P",
        age: 25,
        taille: 213,
        points: 5.7,
        rebonds: 3.2,
        assists: 0.7,
        image: "images/hayes.jpg"
    },

    {
        nom: "Dorian Finney-Smith",
        poste: "AI",
        age: 33,
        taille: 201,
        points: 3.3,
        rebonds: 2.5,
        assists: 1,
        image: "images/dfs.jpg"
    },

    {
        nom: "Deandre Ayton",
        poste: "P",
        age: 27,
        taille: 213,
        points: 10,
        rebonds: 9.6,
        assists: 0.9,
        image: "images/ayton.jpg"
    },

    {
        nom: "Bronny James",
        poste: "AR",
        age: 21,
        taille: 188,
        points: 1.5,
        rebonds: 0.4,
        assists: 0.9,
        image: "images/bronny.jpg"
    },

    {
        nom: "Luke Kennard",
        poste: "AR",
        age: 29,
        taille: 196,
        points: 11.5,
        rebonds: 3.5,
        assists: 2.3,
        image: "images/kennard.jpg"
    },

    {
        nom: "Maxi Kleber",
        poste: "AF",
        age: 34,
        taille: 208,
        points: 0.3,
        rebonds: 0.7,
        assists: 1,
        image: "images/kleber.jpg"
    },

    {
        nom: "Dalton Knecht",
        poste: "AF",
        age: 25,
        taille: 198,
        points: 2,
        rebonds: 1.2,
        assists: 0.6,
        image: "images/knecht.jpg"
    },

    {
        nom: "Jake LaRavia",
        poste: "AF",
        age: 24,
        taille: 201,
        points: 3.3,
        rebonds: 2.1,
        assists: 0.8,
        image: "images/laravia.jpg"
    },

    {
        nom: "Chris Manon",
        poste: "MJ",
        age: 24,
        taille: 193,
        points: 0.8,
        rebonds: 1.1,
        assists: 0.3,
        image: "images/manon.jpg"
    },

    {
        nom: "Marcus Smart",
        poste: "MJ",
        age: 32,
        taille: 191,
        points: 12.9,
        rebonds: 3.5,
        assists: 5.1,
        image: "images/smart.jpg"
    },

    {
        nom: "Nick Smith Jr.",
        poste: "MJ",
        age: 22,
        taille: 188,
        points: 2.7,
        rebonds: 0.2,
        assists: 0.2,
        image: "images/nicksmith.jpg"
    },

    {
        nom: "Adou Thiero",
        poste: "AF",
        age: 22,
        taille: 203,
        points: 1.5,
        rebonds: 2,
        assists: 0.2,
        image: "images/thiero.jpg"
    },

    {
        nom: "Drew Timme",
        poste: "AF",
        age: 25,
        taille: 208,
        points: 3.4,
        rebonds: 1.2,
        assists: 0.9,
        image: "images/timme.jpg"
    },

    {
        nom: "Jarred Vanderbilt",
        poste: "AF",
        age: 27,
        taille: 203,
        points: 2.9,
        rebonds: 3.4,
        assists: 0.3,
        image: "images/vanderbilt.jpg"
    },

    {
        nom: "J.J. Redick",
        poste: "C",
        age: 41,
        image: "image/Redick.jpg"
    },

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


