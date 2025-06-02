"use strict"


// script.js

// Este script maneja el formulario de contacto, validando los campos y enviando los datos al servidor.
document.addEventListener('DOMContentLoaded', () => {
const contactForm = document.getElementById('contactForm');

const handleSubmit = (event) => {
event.preventDefault();

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
if (validateForm(name, email, message)) {
console.log('Enviando los datos:');
console.log({ name, email, message });
contactForm.reset();
alert('Gracias por tu mensaje, nos pondremos en contacto pronto.');
} else {
alert('Por favor, completa todos los campos correctamente.');
}
};

const validateForm = (name, email, message) => {
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/
return name !== '' && emailRegex.test(email) && message !== '';
};

contactForm.addEventListener('submit', handleSubmit);
})

// conectar a json-server

// ...existing code...

// Mostrar consolas desde consolas.json
async function mostrarConsolas() {
  const container = document.getElementById('consolas-container');
  if (!container) return;

  try {
    const response = await fetch('./json/consolas.json');
    const consolas = await response.json();

    container.innerHTML = consolas.map(consola => `
      <div class="col-md-3 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${consola.nombre}</h5>
            <p class="card-text">${consola.descripcion}</p>
            <p class="card-text fw-bold text-success">$${consola.precio.toLocaleString('es-CO')}</p>
          </div>
        </div>
      </div>
    `).join('');
  } catch (error) {
    container.innerHTML = '<p>Error al cargar las consolas.</p>';
  }
}

document.addEventListener('DOMContentLoaded', mostrarConsolas);

// ...existing code...
