const eventos = [
    { id: 1, nombre: 'Navidad en Maipú' },
    { id: 2, nombre: 'Encendido del Árbol de Navidad' },
    { id: 3, nombre: 'Sociedad de Papel' },
  ];
  
  const eventosDiv = document.getElementById('eventos');
  
  // Crear elementos para los eventos
  eventos.forEach(evento => {
    const eventoDiv = document.createElement('div');
    eventoDiv.innerHTML = `
      <h3>${evento.nombre}</h3>
      <div class="estrellas" data-id="${evento.id}">
        ${[1, 2, 3, 4, 5].map(n => `<span data-value="${n}">⭐</span>`).join('')}
      </div>
      <p>Tu puntuación: <span id="score-${evento.id}">0</span></p>
    `;
    eventosDiv.appendChild(eventoDiv);
  });
  
  // Manejar la puntuación
  document.querySelectorAll('.estrellas').forEach(div => {
    div.addEventListener('click', function (e) {
      if (e.target.tagName === 'SPAN') {
        const id = this.getAttribute('data-id');
        const value = e.target.getAttribute('data-value');
        localStorage.setItem(`evento-${id}`, value);
        document.getElementById(`score-${id}`).textContent = value;
      }
    });
  });
  
  // Cargar puntuaciones guardadas
  eventos.forEach(evento => {
    const score = localStorage.getItem(`evento-${evento.id}`) || 0;
    document.getElementById(`score-${evento.id}`).textContent = score;
  });
  