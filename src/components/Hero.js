// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = styled.section`
  background: var(--background-gradient);
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 30px;
  max-width: 600px;
`;

const Hero = () => {
  const whatsappNumber = "5538998396137";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido.`;

  return (
    <HeroSection>
      <Title>Padaria Lopes e Souza</Title>
      <Subtitle>O sabor da tradição, feito com carinho para você!</Subtitle>
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="cta-button">
        <FaWhatsapp size={22} /> Peça pelo WhatsApp
      </a>
    </HeroSection>
  );
};

export default Hero;