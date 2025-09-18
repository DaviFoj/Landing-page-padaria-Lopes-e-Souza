import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

// --- ATENÇÃO: Corrigi os nomes dos arquivos para corresponder aos originais que você enviou ---
import imgBolinhoCenoura from '../assets/vitrine/bolinho_de_cenoura.png';
import imgBolo from '../assets/vitrine/bolo.png';
import imgBoloChocolate from '../assets/vitrine/bolo_chocolate.png';
import imgBoloFofo from '../assets/vitrine/BoloAniversarioFofo.png';
import imgBoloVermelho from '../assets/vitrine/BoloAniversarioVermelho.png';
import imgCookies from '../assets/vitrine/cookies.png';
import imgPaes from '../assets/vitrine/pães.png';
import imgPizza from '../assets/vitrine/pizza.png';
import imgPudim from '../assets/vitrine/pudim.png';


const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 40px;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .overlay-text {
    color: var(--text-light);
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const Gallery = () => {
  // --- Lista de itens atualizada com as variáveis corretas ---
  const galleryItems = [
    { src: imgBolinhoCenoura, alt: "Bolinhos de Cenoura com Granulado", title: "Bolinho de Cenoura" },
    { src: imgBolo, alt: "Bolo com Fatias e Logo da Padaria", title: "Bolo Especial" },
    { src: imgBoloChocolate, alt: "Bolo de Brigadeiro com Granulado", title: "Bolo Brigadeiro" },
    { src: imgBoloFofo, alt: "Bolo Chá Revelação", title: "Bolo Chá Revelação" },
    { src: imgBoloVermelho, alt: "Bolo Degradê Vermelho e Preto", title: "Bolo Moderno" },
    { src: imgCookies, alt: "Biscoitos de Chocolate e M&M's", title: "Biscoitos Caseiros" },
    { src: imgPaes, alt: "Pães de Queijo Frescos", title: "Pães Fresquinhos" },
    { src: imgPizza, alt: "Pizza Variada", title: "Pizza do Dia" },
    { src: imgPudim, alt: "Pudim na Vitrine", title: "Pudim Cremoso" },
  ];

  return (
    <section className="section" id="gallery">
      <h2 className="section-title">Nossas Delícias em Imagens <FaHeart /></h2>
      <GalleryGrid>
        {galleryItems.map((item, index) => (
          <GalleryItem key={index}>
            <img src={item.src} alt={item.alt} />
            <div className="overlay">
              <span className="overlay-text">{item.title}</span>
            </div>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </section>
  );
};

export default Gallery;