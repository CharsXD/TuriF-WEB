document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (localStorage.getItem(username) === password) {
      alert('Inicio de sesión exitoso.');
      window.location.href = 'index.html';
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  });
  