// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  padding: 20px;
  background-color: #1e3a27;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterBar>
      <p>&copy; {currentYear} Padaria Lopes e Souza. Todos os direitos reservados.</p>
    </FooterBar>
  );
};

export default Footer;