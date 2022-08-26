import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiSwiggy, SiZomato } from "react-icons/si";
import styled from "styled-components";
import { device } from "../utils/breakpoints";

const contentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

interface IProps {
  bgColor: string;
  isCloseBtn: boolean;
  setIsOrderModalActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderCard: React.FC<IProps> = ({
  bgColor,
  isCloseBtn,
  setIsOrderModalActive,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  // todo: functions
  const handleClose = () => {
    setIsOrderModalActive && setIsOrderModalActive(false);
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

  return (
    <Container
      bgColor={bgColor}
      variants={contentVariants}
      animate="visible"
      initial="hidden"
      exit="hidden"
    >
      {isCloseBtn && (
        <div className="close-btn" onClick={handleClose}>
          <AiFillCloseCircle className="icon" />
        </div>
      )}
      <div className="title">
        <p>order directly from us and get attractive discounts!</p>
        <small>
          ***We are always one call or message away. Reach us out via Whatsapp,
          Instagram, or call .
        </small>
      </div>
      <div className="order">
        <div className="direct">
          <div className="top">
            <motion.a
              href="https://api.whatsapp.com/send/?phone=%2B919330823020&text&app_absent=0"
              className="iconWrapper"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.9, opacity: 0.3 }}
            >
              <IoLogoWhatsapp className="icon" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/ubuntueat/"
              className="iconWrapper"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.9, opacity: 0.3 }}
            >
              <AiFillInstagram className="icon" />
            </motion.a>
          </div>

          <div className="phone">
            <motion.a
              href="tel:9330823020"
              className="iconWrapper"
              whileTap={{ scale: 0.8, opacity: 0.3 }}
            >
              <BsFillTelephoneOutboundFill
                className="icon"
                onClick={handleCopy}
              />
            </motion.a>
            {isCopied ? (
              <p className="copied">number copied to clipboard</p>
            ) : (
              <p className="number">+919330823020</p>
            )}
          </div>
        </div>
        <div className="divider-mobile">
          <hr />
          <p>or</p>
        </div>
        <div className="divider-pc">
          <p>or</p>
        </div>

        <div className="indirect">
          <a
            href="https://www.zomato.com/kolkata/ubuntu-eat-new-alipore/order"
            target="_blank"
            rel="noreferrer"
          >
            <SiZomato className="icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/restaurants/ubuntu-eat-new-alipore-kolkata-241028"
          >
            <SiSwiggy className="icon swiggy" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default OrderCard;

interface IContainerProps {
  bgColor: string;
}

const Container = styled(motion.div)<IContainerProps>`
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  background: ${(props) => props.bgColor};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 45rem;
  box-shadow: 2px 4px 10px #000000;

  @media ${device.md} {
    height: auto;
    gap: 2rem;
  }

  .close-btn {
    color: white;
    margin-left: auto;
    cursor: pointer;
    .icon {
      font-size: 1.5rem;
    }
  }

  .title {
    text-align: center;
    p {
      color: var(--col-primary);
      text-transform: capitalize;
      font-family: var(--font-sans-3);
      line-height: 167%;
      text-shadow: 2px 6px 6px #000000;
      font-size: 1.6rem;
    }
    small {
      color: gray;
      display: block;
      margin-top: 1rem;
      line-height: 150%;
      font-family: var(--font-body);
      font-style: italic;
    }
  }

  .order {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;

    @media ${device.md} {
      flex-direction: row;
      justify-content: center;
      margin-top: 1rem;
    }
    .iconWrapper {
      display: block;
      padding: 0.8rem;
      border-radius: 100%;
      box-shadow: 1px 3px 3px #000000;
      opacity: 0.9;
      transition: all 0.5s ease;
      &:hover {
        background: var(--col-dark);
        box-shadow: 2px 5px 5px #000000;
        opacity: 1;
        .icon {
          color: var(--col-primary);
        }
      }

      .icon {
        transition: all 0.5s ease;
        color: white;
        font-size: 2.2rem;
        cursor: pointer;
      }
    }

    .direct {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      width: 100%;
      max-width: 15rem;
      align-items: center;

      .top {
        display: flex;
        justify-content: space-between;
        gap: 4rem;
      }

      .phone {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .icon {
          font-size: 1.8rem;
        }

        p {
          color: var(--col-highlight);
          font-family: var(--font-sans-1);
          text-transform: capitalize;
        }

        .copied {
          font-weight: bold;
        }
      }
    }

    .divider-mobile {
      position: relative;
      width: 70%;
      padding: 1rem 0;

      @media ${device.md} {
        display: none;
      }
      hr {
        background: var(--col-highlight);
        border: none;
        height: 1px;
      }
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${(props) => props.bgColor};
        color: white;
        padding: 0 2rem;
      }
    }

    .divider-pc {
      position: relative;
      background: var(--col-highlight);
      align-self: stretch;
      width: 1px;
      display: none;
      @media ${device.md} {
        display: block;
      }
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem 0;
        background: ${(props) => props.bgColor};

        color: white;
      }
    }

    .indirect {
      width: 100%;
      max-width: 15rem;
      display: flex;
      align-items: center;
      color: white;
      justify-content: center;
      gap: 4rem;

      @media ${device.md} {
        flex-direction: column;
      }
      .icon {
        font-size: 4rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          color: var(--col-primary);
        }
      }
      & .swiggy {
        font-size: 2.2rem;
      }
    }
  }
`;
