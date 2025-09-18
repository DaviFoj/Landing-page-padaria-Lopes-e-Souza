// src/components/Products.js
import React from 'react';
import styled from 'styled-components';
import { GiBread, GiCookie, GiCroissant, GiCakeSlice } from 'react-icons/gi';

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ProductCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  margin-top: 15px;
  color: var(--accent-green);
`;

const Products = () => {
  return (
    <section className="section" id="products">
      <h2 className="section-title">Nossos Produtos 🥖</h2>
      <ProductsGrid>
        <ProductCard>
          <GiBread size={60} />
          <ProductName>Pães</ProductName>
        </ProductCard>
        <ProductCard>
          <GiCookie size={60} />
          <ProductName>Biscoitos</ProductName>
        </ProductCard>
        <ProductCard>
          <GiCroissant size={60} />
          <ProductName>Salgados</ProductName>
        </ProductCard>
        <ProductCard>
          <GiCakeSlice size={60} />
          <ProductName>Confeitaria</ProductName>
        </ProductCard>
      </ProductsGrid>
    </section>
  );
};

export default Products;