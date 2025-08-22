import React from "react";
import { FaFacebook, FaTiktok, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../assets/style/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Nos Contacts</h1>
        <p className="contact-subtitle">Vous pouvez nous joindre facilement via :</p>

        <div className="contact-grid">
          <a href="mailto:aboudoualifao@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>Email</span>
            <p>aboudoualifao@gmail.com</p>
          </a>

          <a href="https://wa.me/2290168778998" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <span>WhatsApp</span>
            <p>+229 01 68 77 89 98</p>
          </a>

          <a href="https://www.facebook.com/ABOUDOUALIFaoziath" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaFacebook className="contact-icon" />
            <span>Facebook</span>
            <p>ABOUDOU ALI Faoziath</p>
          </a>

          <a href="https://www.tiktok.com/@ABOUDOUALIFaoziath" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaTiktok className="contact-icon" />
            <span>TikTok</span>
            <p>@ABOUDOUALIFaoziath</p>
          </a>

          <a href="https://www.linkedin.com/in/ABOUDOUALIFaoziath" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
            <p>ABOUDOU ALI Faoziath</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
