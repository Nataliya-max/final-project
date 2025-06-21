import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contáctanos</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="text" placeholder="Apellido" required />
        <input type="email" placeholder="E-mail" required />
        <input type="tel" placeholder="Teléfono" required />
        <textarea placeholder="Observaciones" rows="4" required></textarea>
        <button type="submit">Enviar</button>
      </form>

      <div className="social-icons">
        <a href="#"><i className="fab fa-instagram"><img src="instagram.png" width="40px" alt="logo"/></i></a>
        <a href="#"><i className="fab fa-facebook"><img src="facebook.png" width="40px" alt="logo"/></i></a>
        <a href="#"><i className="fab fa-twitter"><img src="logotipo-de-twitter.png" width="40px" alt="logo"/></i></a>
      </div>
    </div>
  );
}

export default Contact;

