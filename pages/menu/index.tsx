import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import Gallery from "../../components/gallery";
import MenuDetails from "../../components/menuDetails";
import MenuHero from "../../components/menuHero";
import Slider from "../../components/slider";
import { gallery } from "../../data";
import { device } from "../../utils/breakpoints";

const Menu: NextPage = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <Container>
      <MenuHero />
      <MenuDetails />
      <Filler>
        <div className="decor"></div>
        <div className="message">
          <p className="header">!!! warning !!!</p>
          <p className="body">images below may cause serious craving</p>
        </div>
      </Filler>
      <Gallery
        setShowSlider={setShowSlider}
        setSelectedImage={setSelectedImage}
      />
      <AnimatePresence>
        {showSlider && (
          <Slider
            effect="fade"
            navigation={true}
            currentIndex={selectedImage}
            list={gallery}
            onClose={() => setShowSlider(false)}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  background: var(--col-dark);
  padding-bottom: 2rem;
`;

const Filler = styled.div`
  padding: 0 2%;
  .decor {
    width: 100%;
    max-width: 85rem;
    margin: 0 auto;
    height: 3rem;
    background: var(--col-highlight);
    border-radius: 1rem 1rem 0 0;
    display: none;

    @media ${device.lg} {
      display: block;
    }
  }
  .message {
    color: var(--col-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;
    gap: 1.5rem;

    .header {
      font-size: 3.2rem;
      font-family: var(--font-sans-3);
      letter-spacing: 0.21rem;
      text-transform: capitalize;
      text-shadow: 5px 6px 8px #000000;
    }
    .body {
      font-size: 1.3rem;
      font-family: var(--font-sans-1);
      font-style: italic;
      text-transform: uppercase;
      text-shadow: 4px 6px 10px #000000;
      text-align: center;
      line-height: 150%;
    }
  }
`;
