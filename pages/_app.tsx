import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../context/appContext";
import Navbar from "../components/navbar";
import { useState } from "react";
import NavMenu from "../components/navMenu";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/footer";
import OrderModal from "../components/orderModal";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isOrderModalActive, setIsOrderModalActive] = useState(false);
  return (
    <AppProvider>
      <Body isMenuActive={isMenuActive}>
        <Navbar
          setIsMenuActive={setIsMenuActive}
          isMenuActive={isMenuActive}
          setIsOrderModalActive={setIsOrderModalActive}
        />
        <AnimatePresence>
          {isMenuActive && (
            <NavMenu
              setIsMenuActive={setIsMenuActive}
              setIsOrderModalActive={setIsOrderModalActive}
            />
          )}
          {isOrderModalActive && (
            <OrderModal setIsOrderModalActive={setIsOrderModalActive} />
          )}
        </AnimatePresence>
        <Component
          {...pageProps}
          setIsMenuActive={setIsMenuActive}
          setIsOrderModalActive={setIsOrderModalActive}
        />
        <Footer />
      </Body>
    </AppProvider>
  );
}

export default MyApp;

interface IStyledProps {
  isMenuActive: boolean;
}

const Body = styled.main<IStyledProps>`
  width: 100vw;
  height: auto;
  overflow: ${(props) => (props.isMenuActive ? "hidden" : "none")};
`;
