document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (localStorage.getItem(username)) {
      alert('El usuario ya existe. Intente con otro nombre.');
    } else {
      localStorage.setItem(username, password);
      alert('Usuario registrado exitosamente.');
      window.location.href = 'login.html';
    }
  });
  