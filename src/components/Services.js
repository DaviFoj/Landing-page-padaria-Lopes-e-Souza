// src/components/Services.js
import React from 'react';
import styled from 'styled-components';
import { FaCalendarCheck } from 'react-icons/fa';

const ServiceContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const ServiceText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const Services = () => {
    const whatsappNumber = "5538998396137";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer uma encomenda.`;

  return (
    <section className="section" id="services">
      <h2 className="section-title">Faça sua Encomenda 🎂</h2>
      <ServiceContent>
        <ServiceText>
          Deixe seu evento ainda mais especial! Aceitamos encomendas de bolos, tortas, salgados, biscoitos e pães. Tudo fresquinho e com a qualidade que você já conhece.
        </ServiceText>
        <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="cta-button">
          <FaCalendarCheck size={20} /> Encomendar Agora
        </a>
      </ServiceContent>
    </section>
  );
};

export default Services;