import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { AiFillCloseCircle, AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiSwiggy, SiZomato } from "react-icons/si";
import styled from "styled-components";
import { device } from "../utils/breakpoints";

interface IProps {
  setIsOrderModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderModal: React.FC<IProps> = ({ setIsOrderModalActive }) => {
  // todo: functions
  const handleClose = () => {
    setIsOrderModalActive(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("+919330823020");
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  // todo: return
  return (
    <Container>
      <motion.div
        className="contentWrapper"
        variants={contentVariants}
        animate="visible"
        initial="hidden"
        exit="hidden"
      >
        <div className="close-btn" onClick={handleClose}>
          <AiFillCloseCircle className="icon" />
        </div>
        <div className="title">
          <p>order directly from us and get attractive discounts!</p>
          <small>
            ***We are always one call or message away. Reach us out via
            Whatsapp, Instagram, or call .
          </small>
        </div>
        <div className="order">
          <div className="direct">
            <div className="top">
              <Link href="https://api.whatsapp.com/send/?phone=%2B919330823020&text&app_absent=0">
                <a className="iconWrapper">
                  <IoLogoWhatsapp className="icon" />
                </a>
              </Link>

              <div className="iconWrapper">
                <Link href="https://www.instagram.com/ubuntueat/">
                  <a>
                    <AiFillInstagram className="icon" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="phone">
              <div className="iconWrapper">
                <BsFillTelephoneOutboundFill
                  className="icon"
                  onClick={handleCopy}
                />
              </div>
              <p>+919330823020</p>
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
            <Link href="https://www.zomato.com/kolkata/ubuntu-eat-new-alipore/order">
              <a>
                <SiZomato className="icon" />
              </a>
            </Link>
            <Link href="https://www.swiggy.com/restaurants/ubuntu-eat-new-alipore-kolkata-241028">
              <a>
                <SiSwiggy className="icon swiggy" />
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
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

  .contentWrapper {
    height: 100%;
    width: 100%;
    background: var(--col-dark);
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 50rem;

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

        .icon {
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
          background: var(--col-dark);
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
          background: var(--col-dark);
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
        }
        & .swiggy {
          font-size: 2.2rem;
        }
      }
    }
  }
`;
