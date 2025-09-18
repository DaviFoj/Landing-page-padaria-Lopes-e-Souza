// src/components/Header.js
import React from 'react';
import logo from '../assets/logo.jpg';
import styled from 'styled-components';

const HeaderNav = styled.header`
  padding: 20px;
  background: var(--background-gradient);
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
`;

const Logo = styled.img`
  height: 80px;
  border-radius: 15px;
`;

const Header = () => {
  return (
    <HeaderNav>
      <Logo src={logo} alt="Logo Padaria Lopes e Souza" />
    </HeaderNav>
  );
};

// Você precisa instalar styled-components: npm install styled-components
export default Header;