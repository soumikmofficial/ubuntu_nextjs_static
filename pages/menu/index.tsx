import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import Gallery from "../../components/gallery";
import MenuHero from "../../components/menuHero";
import Slider from "../../components/slider";
import { gallery } from "../../data";

const Menu: NextPage = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <Container>
      <MenuHero />
      <Gallery
        setShowSlider={setShowSlider}
        setSelectedImage={setSelectedImage}
      />
      <AnimatePresence>
        {showSlider && (
          <Slider
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
`;
