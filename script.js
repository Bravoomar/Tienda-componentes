//selecciond de formulario
const loginForm = document.getElementById('loginForm');

// Evento al enviar
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // no recarga la pagina

 valores
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Validación simple 
  if(email === "" || password === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    alert(`¡Bienvenido, ${email}!`);
    // agregar redirección o lógica de login

  }
});


