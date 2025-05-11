"use strict"

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
// Función para validar los campos
const validateForm = (name, email, message) => {
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/
return name !== '' && emailRegex.test(email) && message !== '';
};

contactForm.addEventListener('submit', handleSubmit);
})