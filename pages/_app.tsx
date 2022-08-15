import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../context/appContext";
import Navbar from "../components/navbar";
import { useState } from "react";
import Menu from "../components/menu";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <AppProvider>
      <Navbar setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />

      <Body>
        <AnimatePresence>{isMenuActive && <Menu />}</AnimatePresence>
        <Component {...pageProps} />
      </Body>
    </AppProvider>
  );
}

export default MyApp;

const Body = styled.main`
  height: 90vh;
  width: 100vw;
  overflow: scroll;
`;
