var myArray = ['Pierre', 'Feuille', 'Ciseaux']; // créer un tableau, qui contient les mêmes choix que ceux pour l'utilisateur, pour le choix de la machine
var myBtn = document.getElementById('btnGo');
var score = document.getElementById('affiche');
var ratioV = document.getElementById('pourcentage');
var bgColor = document.querySelectorAll("body, select, input");
var countLost = 0; // compteur victoire ordinateur
var countWin = 0; // compteur victoire user


var goClick = function() { // fonction appelée seulement par le clic de btnGo
    var choiceComputer = myArray[Math.floor(Math.random() * myArray.length)]; // choix ordinateur sélection au hasard dans le myArray
    var entreeUser = document.getElementById('menuChoix').value; // choix submit par l'utilisateur via le menu déroulant
    console.log(choiceComputer)
    console.log(entreeUser);

    //Couleurs pour la défaite, la victoire et l'égalité
    var bgColorRed = function() {
      for (var item = 0; item < bgColor.length; item++) {
        bgColor[item].style.backgroundColor = '#cb3e3e'; // parcours le tableau de querySelectorAll
        console.log(item);
      }
    }

    var bgColorGreen = function() {
      for (var item = 0; item < bgColor.length; item++) {
        bgColor[item].style.backgroundColor = '#30962b';
        console.log(item);
      }
    }

    var bgColorNeutral = function() {
      for (var item = 0; item < bgColor.length; item++) {
        bgColor[item].style.backgroundColor = '#999d9b';
        console.log(item);
      }
    }

  if (entreeUser === choiceComputer) { // égalité
    bgColorNeutral();
    alert("Egalité : l'ordinateur a aussi choisi " + choiceComputer);
  } else if (entreeUser === 'Ciseaux' && choiceComputer === 'Pierre') {
    bgColorRed();
    countLost++;
    alert(choiceComputer + " gagne, +1 pour l'ordinateur !"); // l'ordinateur gagne
  } else if (entreeUser === 'Feuille' && choiceComputer === 'Ciseaux') {
    bgColorRed();
    countLost++;
    alert(choiceComputer + " gagne, +1 pour l'ordinateur !"); // l'ordinateur gagne
  } else if (entreeUser === 'Pierre' && choiceComputer === 'Feuille') {
    bgColorRed();
    countLost++;
    alert(choiceComputer + " gagne, +1 pour l'ordinateur !"); // l'ordinateur gagne
  } else if (choiceComputer === 'Ciseaux' && entreeUser === 'Pierre') {
    bgColorGreen();
    countWin++;
    alert(entreeUser + " gagne, +1 pour toi !"); // l'utilisateur gagne
  } else if (choiceComputer === 'Feuille' && entreeUser === 'Ciseaux') {
    bgColorGreen();
    countWin++;
    alert(entreeUser + " gagne, +1 pour toi !"); // l'utilisateur gagne
  } else if (choiceComputer === 'Pierre' && entreeUser === 'Feuille') {
    bgColorGreen();
    countWin++;
    alert(entreeUser + " gagne, +1 pour toi !"); // l'utilisateur gagne
  }
  score.innerHTML = "Ton score : " + countWin + "<br/>Ordinateur : " + countLost; // score total - points
  ratioV.innerHTML = (100*(countWin/10)) + "% de victoires"; // affiche pourcentage de victoires
}

myBtn.addEventListener('click', goClick); // fonction appelée par l'évènement clic
