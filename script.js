// Selección del formulario
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // No recarga la página

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    alert('Por favor, completa todos los campos.');
    return;
  }
  alert(`¡Bienvenido, ${email}!`);


});
