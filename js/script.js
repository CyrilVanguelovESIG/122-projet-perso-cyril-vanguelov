"use strict";

/* ==========================================
   DONNÉES (tableau d'objets)
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
        taille: 0,
        points: 0,
        rebonds: 0,
        assists: 0,
        image: "images/redick.jpg"
    },

];

/* ==========================================
   RECHERCHE — manipulation de tableau
========================================== */

function rechercherJoueurs(liste, terme) {

    if (!terme) return liste;

    const termeLower = terme.toLowerCase();

    // .filter() — manipulation de tableau
    return liste.filter(joueur =>
        joueur.nom.toLowerCase().includes(termeLower)
    );
}

/* ==========================================
   FILTRE STATS — .filter()
========================================== */

function filtrerStats(liste, filtre) {

    switch (filtre) {

        case "points":
            // .filter() — manipulation de tableau
            return liste.filter(joueur => joueur.points > 20);

        case "rebonds":
            return liste.filter(joueur => joueur.rebonds > 8);

        case "assists":
            return liste.filter(joueur => joueur.assists > 5);

        default:
            return liste;
    }
}

/* ==========================================
   FILTRE POSTE — .filter()
========================================== */

function filtrerPoste(liste, poste) {

    if (poste === "all") return liste;

    // .filter() — manipulation de tableau
    return liste.filter(joueur => joueur.poste === poste);
}

/* ==========================================
   TRI — .sort()
========================================== */

function trierJoueurs(liste, tri) {

    // On travaille sur une copie (pas de mutation)
    const copie = [...liste];

    const ordrePostes = { MJ: 1, AR: 2, AI: 3, AF: 4, P: 5, C: 6 };

    switch (tri) {

        case "poste":
            // .sort() — manipulation de tableau
            return copie.sort((a, b) =>
                (ordrePostes[a.poste] ?? 99) - (ordrePostes[b.poste] ?? 99)
            );

        case "age":
            return copie.sort((a, b) => a.age - b.age);

        case "taille":
            return copie.sort((a, b) => b.taille - a.taille);

        case "points":
            return copie.sort((a, b) => b.points - a.points);

        default:
            return copie.sort((a, b) => a.nom.localeCompare(b.nom));
    }
}

/* ==========================================
   CRÉER CARTE — createElement (rendu DOM)
========================================== */

function creerCarteJoueur(joueur) {

    // createElement — rendu DOM
    const article = document.createElement("article");
    article.className = "player-card";

    // Image
    const img = document.createElement("img");
    img.src = joueur.image;
    img.alt = joueur.nom; // attribut alt sur l'image
    article.appendChild(img);

    // Div info
    const info = document.createElement("div");
    info.className = "player-info";

    // Nom
    const h3 = document.createElement("h3");
    h3.textContent = joueur.nom;
    info.appendChild(h3);

    // Meta (poste · age · taille)
    const meta = document.createElement("p");
    meta.className = "player-meta";

    if (joueur.poste === "C") {
        meta.textContent = `${joueur.poste} · ${joueur.age} ans`;
    } else {
        meta.textContent = `${joueur.poste} · ${joueur.age} ans · ${joueur.taille} cm`;
    }
    info.appendChild(meta);

    // Stats (badges)
    if (joueur.poste !== "C") {

        const statsDiv = document.createElement("div");
        statsDiv.className = "stats";

        const statsData = [
            { label: "PTS", val: joueur.points },
            { label: "REB", val: joueur.rebonds },
            { label: "AST", val: joueur.assists }
        ];

        statsData.forEach(({ label, val }) => {
            const badge = document.createElement("span");
            badge.className = "badge";
            badge.textContent = `${val} ${label}`;
            statsDiv.appendChild(badge);
        });

        info.appendChild(statsDiv);
    }

    // Bouton suppression
    const btnSuppr = document.createElement("button");
    btnSuppr.className = "btn-supprimer";
    btnSuppr.textContent = "🗑 Supprimer";

    // addEventListener — interactions
    btnSuppr.addEventListener("click", () => {
        supprimerJoueur(joueur.nom);
    });

    info.appendChild(btnSuppr);

    article.appendChild(info);

    return article;
}

/* ==========================================
   AFFICHAGE — innerHTML + createElement
========================================== */

function afficherJoueurs(liste) {

    const container = document.querySelector("#joueurs-container");

    // Vider le conteneur
    container.innerHTML = "";

    if (liste.length === 0) {

        // innerHTML pour le message vide
        container.innerHTML = `
            <p class="empty-message">Aucun joueur trouvé.</p>
        `;
        return;
    }

    // createElement pour chaque carte — rendu DOM
    liste.forEach(joueur => {
        const carte = creerCarteJoueur(joueur);
        container.appendChild(carte);
    });
}

/* ==========================================
   TOAST — FEEDBACK UTILISATEUR
========================================== */

let toastTimer = null;

function afficherToast(message, type = "success") {

    // Créer le toast s'il n'existe pas encore
    let toast = document.querySelector("#toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    // Annuler le timer précédent si le toast est déjà visible
    if (toastTimer) {
        clearTimeout(toastTimer);
    }

    // Mise à jour contenu et type
    toast.textContent = message;
    toast.className = `toast-${type} toast-visible`;

    // Disparition automatique après 3s
    toastTimer = setTimeout(() => {
        toast.classList.remove("toast-visible");
        toastTimer = null;
    }, 3000);
}

/* ==========================================
   SUPPRESSION — .splice()
========================================== */

function supprimerJoueur(nom) {

    // Trouver l'index du joueur
    const index = joueurs.findIndex(j => j.nom === nom);

    if (index !== -1) {
        const nomJoueur = joueurs[index].nom;
        // .splice() — manipulation de tableau
        joueurs.splice(index, 1);
        rafraichir();
        afficherToast(`🗑 ${nomJoueur} supprimé du roster.`, "error");
    }
}

/* ==========================================
   AJOUT VIA FORMULAIRE
========================================== */

function ajouterJoueur() {

    const erreur = document.querySelector("#form-error");

    // Récupérer les valeurs
    const nom     = document.querySelector("#input-nom").value.trim();
    const poste   = document.querySelector("#input-poste").value;
    const age     = parseInt(document.querySelector("#input-age").value);
    const taille  = parseInt(document.querySelector("#input-taille").value);
    const points  = parseFloat(document.querySelector("#input-points").value) || 0;
    const rebonds = parseFloat(document.querySelector("#input-rebonds").value) || 0;
    const assists = parseFloat(document.querySelector("#input-assists").value) || 0;
    const image   = document.querySelector("#input-image").value.trim() || "images/placeholder.jpg";

    // Validation simple
    if (!nom || !poste || isNaN(age) || isNaN(taille)) {
        erreur.textContent = "⚠ Veuillez remplir les champs obligatoires (Nom, Poste, Âge, Taille).";
        return;
    }

    erreur.textContent = "";

    // Créer le nouvel objet joueur
    const nouveauJoueur = {
        nom,
        poste,
        age,
        taille,
        points,
        rebonds,
        assists,
        image
    };

    // Ajouter au tableau
    joueurs.push(nouveauJoueur);

    // Réinitialiser le formulaire
    document.querySelector("#input-nom").value    = "";
    document.querySelector("#input-poste").value  = "";
    document.querySelector("#input-age").value    = "";
    document.querySelector("#input-taille").value = "";
    document.querySelector("#input-points").value = "";
    document.querySelector("#input-rebonds").value= "";
    document.querySelector("#input-assists").value= "";
    document.querySelector("#input-image").value  = "";

    // Rafraîchir l'affichage
    rafraichir();
    afficherToast(`✅ ${nom} ajouté au roster !`, "success");
}

/* ==========================================
   RAFRAÎCHIR
========================================== */

function rafraichir() {

    const recherche = document.querySelector("#recherche").value;
    const filtre    = document.querySelector("#filtreStat").value;
    const poste     = document.querySelector("#filtrePoste").value;
    const tri       = document.querySelector("#tri").value;

    let resultat = rechercherJoueurs(joueurs, recherche);    // .filter()
    resultat = filtrerStats(resultat, filtre);           // .filter()
    resultat = filtrerPoste(resultat, poste);            // .filter()
    resultat = trierJoueurs(resultat, tri);              // .sort()

    afficherJoueurs(resultat);
}

/* ==========================================
   EVENTS — addEventListener
========================================== */

// Recherche en temps réel
document.querySelector("#recherche")
    .addEventListener("input", rafraichir);

// Filtres
document.querySelector("#filtreStat")
    .addEventListener("change", rafraichir);

document.querySelector("#filtrePoste")
    .addEventListener("change", rafraichir);

// Tri
document.querySelector("#tri")
    .addEventListener("change", rafraichir);

// Ajout via formulaire
document.querySelector("#btn-ajouter")
    .addEventListener("click", ajouterJoueur);

/* ==========================================
   INITIALISATION
========================================== */

rafraichir();


