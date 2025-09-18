// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
// Importe o novo ícone de mapa AQUI
import { FaClock, FaPhone, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 50px; /* Espaço entre os blocos de info e o mapa */
`;

const InfoBlock = styled.div`
  flex: 1;
  min-width: 280px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 15px;
  text-align: left;
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

// Novo container para o mapa e endereço
const LocationWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  margin-top: 40px;
`;

const MapFrame = styled.iframe`
  border: 0;
  border-radius: 10px;
  width: 100%;
  height: 400px;
  margin-top: 20px;
`;

const AddressText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
`;

const Contact = () => {
  const whatsappNumber = "5538998396137";
  const whatsappURL = `https://wa.me/${whatsappNumber}`;
  const addressQuery = "Av. Coração de Jesus, 1294 - São Geraldo, Montes Claros - MG";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURI(addressQuery)}`;

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
      <LocationWrapper>
        <InfoTitle>
          <FaMapMarkerAlt /> Onde Estamos
        </InfoTitle>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
          <AddressText>
            📍 Av. Coração de Jesus, 1294 - São Geraldo, Montes Claros - MG
          </AddressText>
        </a>
        <MapFrame 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.023240958189!2d-43.84379982485011!3d-16.677598684083753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754ac0a75f1b263%3A0x6b774d6c64639e76!2sAv.%20Cora%C3%A7%C3%A3o%20de%20Jesus%2C%201294%20-%20S%C3%A3o%20Geraldo%2C%20Montes%20Claros%20-%20MG%2C%2039403-122!5e0!3m2!1spt-BR!2sbr!4v1726684592019!5m2!1spt-BR!2sbr"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </MapFrame>
      </LocationWrapper>
    </section>
  );
};

export default Contact;