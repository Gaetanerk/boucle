// 1
// let response = prompt("donne moi un chiffre compris entre 0 et 5");

// while (response < 0 || response > 5) {
//   response = prompt("La valeur doit être comprise entre 0 et 5 ! ");
// }

// document.querySelector("#result").textContent =
//   "Merci, rappel de votre chiffre : " + response;

// 2
// parseInt = Force valeur numérique
// let response = parseInt(prompt("Donne moi un nombre et t'auras ses 10 suivants"));
// console.log(response)
// for (let i = 1; i <= 10; i++) {
//   let result = response + i;
//   document.querySelector("#result").innerHTML += "Voici votre chiffre et sa suite : " + result + "</br>";
// }

// 3
// let chiffre = parseInt(
//   prompt("Donne moi un nombre et t'auras sa table de multiplication")
// );
// const result = document.querySelector("#result");
// let i = 1;
// while (i <= 10) {
//   result.innerHTML += chiffre + " x " + i + " = " + chiffre * i + "<br/>";
//   i++;
// }
// ======================================== Autre méthode
// let chiffre = parseInt(
//   prompt("Donne moi un nombre et t'auras sa table de multiplication")
// );
// const result = document.querySelector("#result");
// for (let i = 1; i <= 10; i++) {
//   result.innerHTML += chiffre + " x " + i + " = " + chiffre * i + "<br/>";
// }

// 4
let prix = 1;
let total = 0;
let b10 = 0;
let b5 = 0;

while (prix !== 0) {
  prix = parseInt(
    prompt(
      "Donne moi le prix de l'article et termine par 0 après le dernier article"
    )
  );
  total = total + prix;
}

const montant = parseInt(
  prompt("Vous nous devez : " + total + " €" + " Donnez moi le montant versé")
);
let reste = montant - total;

while (reste >= 10) {
  b10++;
  reste -= 10;
}

if (reste >= 5 && reste <= 10) {
  b5++;
  reste -= 5;
}

document.querySelector("#result").innerHTML =
  "Je vous rend : " +
  "</br>" +
  b10 +
  " billets de 10€" +
  "</br>" +
  " Je vous rend : " +
  "</br>" +
  b5 +
  " billet de 5€" +
  "</br>" +
  " et je vous rend : " +
  "</br>" +
  reste +
  " pieces de 1€";
