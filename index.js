document.getElementById('toggleIcon').addEventListener('click', function() {
  var navBar = document.querySelector('.responsive-bar');
  if (navBar.classList.contains('show')) {
      navBar.classList.remove('show');
      navBar.classList.add('hide');
      setTimeout(function() {
          navBar.style.display = 'none';
          navBar.classList.remove('hide');
      }, 600); // Tiempo de la transición
  } else {
      navBar.style.display = 'block';
      setTimeout(function() {
          navBar.classList.add('show');
      }, 10); // Pequeño retraso para permitir que el display se aplique
  }
});
