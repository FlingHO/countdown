// Définir la date cible (1er juillet)
var targetDate = new Date('July 10, 2023 12:00:00').getTime();

// Mettre à jour le compte à rebours chaque seconde
var countdown = setInterval(function() {
  // Obtenir la date et l'heure actuelles
  var now = new Date().getTime();

  // Calculer la différence entre la date cible et la date actuelle
  var difference = targetDate - now;

  // Calculer les jours, les heures, les minutes et les secondes restantes
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Afficher les valeurs dans les éléments correspondants
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  // Vérifier si le compte à rebours est terminé
  if (difference < 0) {
    clearInterval(countdown);
    document.getElementById('timer').innerHTML = 'youhouuu !';
  }
}, 1000);
