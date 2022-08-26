import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OrderCard from "./orderCard";

interface IProps {
  setIsOrderModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderModal: React.FC<IProps> = ({ setIsOrderModalActive }) => {
  const [isCopied, setIsCopied] = useState(false);
  // todo: functions
  const handleClose = () => {
    setIsOrderModalActive(false);
  };

  const handleCopy = () => {
    if (isCopied) return;
    navigator.clipboard.writeText("+919330823020");
    setIsCopied(true);
  };

  // todo: useEffects
  useEffect(() => {
    isCopied &&
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
  }, [isCopied]);

  // todo: return
  return (
    <Container>
      <OrderCard
        bgColor="var(--col-dark)"
        isCloseBtn={true}
        setIsOrderModalActive={setIsOrderModalActive}
      />
    </Container>
  );
};

export default OrderModal;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
