var myArray = ['Pierre', 'Feuille', 'Ciseaux']; // créer un tableau, qui contient les mêmes choix que ceux pour l'utilisateur, pour le choix de la machine
var myBtn = document.getElementById('btnGo');
var score = document.getElementById('affiche');
var ratioV = document.getElementById('pourcentage');
var countLost = 0; // compteur victoire ordinateur
var countWin = 0; // compteur victoire user


var goClick = function() { // fonction appelée seulement par le clic de btnGo
    var choiceComputer = myArray[Math.floor(Math.random() * myArray.length)]; // choix ordinateur sélection au hasard dans le myArray
    var entreeUser = document.getElementById('menuChoix').value; // choix submit par l'utilisateur via le menu déroulant
    console.log(choiceComputer)
    console.log(entreeUser);

  if (entreeUser === choiceComputer) { // égalité
    alert("Egalité : l'ordinateur a aussi choisi " + choiceComputer);
  } else if (entreeUser === 'Ciseaux' && choiceComputer === 'Pierre') {
    countLost++;
    alert(choiceComputer + " gagne, +1 pour l'ordinateur !"); // l'ordinateur gagne
  } else if (entreeUser === 'Feuille' && choiceComputer === 'Ciseaux') {
    countLost++;
    alert(choiceComputer + " gagne, +1 pour l'ordinateur !"); // l'ordinateur gagne
  } else if (entreeUser === 'Pierre' && choiceComputer === 'Feuille') {
    countLost++;
    alert(choiceComputer + " gagne, +1 pour l'ordinateur !"); // l'ordinateur gagne
  } else if (choiceComputer === 'Ciseaux' && entreeUser === 'Pierre') {
    countWin++;
    alert(entreeUser + " gagne, +1 pour toi !"); // l'utilisateur gagne
  } else if (choiceComputer === 'Feuille' && entreeUser === 'Ciseaux') {
    countWin++;
    alert(entreeUser + " gagne, +1 pour toi !"); // l'utilisateur gagne
  } else if (choiceComputer === 'Pierre' && entreeUser === 'Feuille') {
    countWin++;
    alert(entreeUser + " gagne, +1 pour toi !"); // l'utilisateur gagne
  }
  score.innerHTML = "Ton score : " + countWin + "<br/>Ordinateur : " + countLost; // score total - points
  ratioV.innerHTML = (100*(countWin/10)) + "% de victoires"; // affiche pourcentage de victoires
}

myBtn.addEventListener('click', goClick); // fonction appelée par l'évènement clic
