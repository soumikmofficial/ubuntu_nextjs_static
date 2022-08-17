import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../context/appContext";
import Navbar from "../components/navbar";
import { useState } from "react";
import Menu from "../components/menu";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <AppProvider>
      <Navbar setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />

      <Body>
        <AnimatePresence>{isMenuActive && <Menu />}</AnimatePresence>
        <Component {...pageProps} />
      </Body>
      <Footer />
    </AppProvider>
  );
}

export default MyApp;

const Body = styled.main`
  width: 100vw;
  height: 100%;
`;
