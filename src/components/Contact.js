// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { FaClock, FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const InfoBlock = styled.div`
  flex: 1;
  min-width: 280px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 15px;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--accent-green);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InfoItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.1rem;

  a {
    color: var(--text-light);
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      color: var(--accent-green);
    }
  }
`;


const Contact = () => {
  const whatsappNumber = "5538998396137";
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Contato e Horários 📞</h2>
      <ContactWrapper>
        <InfoBlock>
          <InfoTitle><FaClock /> Horário de Funcionamento</InfoTitle>
          <InfoList>
            <li>Segunda a Sábado: <strong>05:30 às 20:00</strong></li>
            <li>Domingo: <strong>05:30 às 13:00</strong></li>
          </InfoList>
        </InfoBlock>
        <InfoBlock>
          <InfoTitle><FaPhone /> Fale Conosco</InfoTitle>
          <InfoList>
            <InfoItem>
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> (38) 99839-6137
              </a>
            </InfoItem>
            <InfoItem>
              <a href="tel:+5538997493499">
                <FaPhone /> (38) 99749-3499
              </a>
            </InfoItem>
             <InfoItem>
              <a href="https://www.instagram.com/padarialopes_souza/" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> @padarialopes_souza
              </a>
            </InfoItem>
          </InfoList>
        </InfoBlock>
      </ContactWrapper>
    </section>
  );
};

export default Contact;