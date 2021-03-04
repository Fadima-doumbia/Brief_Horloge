// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Stocker l'heure , minute , seconde  dans des varaiables

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// Déplacer les aiguilles 
function demarrerLaMontre() {
    let date = new Date();
    console.log(date);
    let hr = date.getHours();
    console.log(hr);
    let min = date.getMinutes();
    console.log(min);
    let sec = date.getSeconds();
    console.log(sec);

  
    AIGUILLEHR.style.transform = 
    `rotate(${hr * (360/12) + min * 12 / 60}deg)`;
    AIGUILLEHR.style.transition = "ease out"

    AIGUILLEMIN.style.transform = 
    `rotate(${min*360/60 + sec*6/60}deg)`;
    AIGUILLEMIN.style.transition = "ease out"

    AIGUILLESEC.style.transform = 
    `rotate(${sec*6}deg)`;
    AIGUILLESEC.style.transition = "ease out"
}
window.setInterval(demarrerLaMontre, 1000);

    // `rotate(${sec*360/60}deg)`;

    // AIGUILLEHR.style.transform = 
    // ` rotate(${hr/10}deg)`;
    // AIGUILLEMIN.style.transform = 
    // `rotate(${min/2}deg)`;
    // AIGUILLESEC.style.transform = 
    // `rotate(${sec*6}deg)`;
// Exercuter la fonction chaque second
// demarrerLaMontre();
// var interval = setInterval(demarrerLaMontre, 1000);
