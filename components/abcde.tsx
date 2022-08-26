import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiSwiggy, SiZomato } from "react-icons/si";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import { contactOutlets } from "../data";
import { device } from "../utils/breakpoints";

const contentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const ContactSectionHomePage = () => {
  const [isCopied, setIsCopied] = useState(false);

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
      className="parallexBg"
      // blur={10}
      bgImage="/images/bongGuy.png"
      bgImageAlt="cloud kitchen"
      strength={300}
    >
      <div className="innerWrapper">
        <motion.div
          className="contentWrapper"
          variants={contentVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
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
      </div>
    </Container>
  );
};

export default ContactSectionHomePage;

const Container = styled(Parallax)`
  .innerWrapper {
    background: rgba(0, 0, 0, 0.87);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    min-height: 100vh;

    @media ${device.lg} {
      padding: 8rem 0;
    }
  }

  .innerWrapper {
    background: rgba(0, 0, 0, 0.87);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    min-height: 100vh;

    @media ${device.lg} {
      padding: 8rem 0;
    }
  }

  .contentWrapper {
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
      background: rgba(7, 12, 14, 0.63);
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

const ContactCard = styled.div`
  background: rgba(7, 12, 14, 0.63);
  width: 100%;
  height: 100%;
  color: white;
  padding: 4rem 2rem;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  position: relative;
  z-index: 1;
  .edges {
    display: none;
  }
  @media ${device.lg} {
    .edges {
      display: block;
      position: absolute;
      width: 6rem;
      height: 0.2rem;
      background: var(--col-highlight);
    }

    .top-top {
      top: 0;
      right: 0;
    }
    .top-right {
      right: 0;
      top: 0;
      height: 6rem;
      width: 0.2rem;
    }
    .bottom-bottom {
      bottom: 0;
      left: 0;
    }
    .bottom-left {
      left: 0;
      bottom: 0;
      height: 6rem;
      width: 0.2rem;
    }
  }

  .message {
    text-align: center;
    font-size: 1.6rem;
    max-width: 80%;
    line-height: 150%;
    font-family: var(--font-body);
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media ${device.lg} {
      flex-direction: row;
    }

    hr {
      height: 2px;
      background: var(--col-highlight);
      border: none;

      @media ${device.lg} {
        height: auto;
        width: 2px;
      }

      &:last-of-type {
        display: none;
      }
    }

    .singleContact {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--font-highlight);
      .icon {
        font-size: 1.8rem;
      }
      .text {
        margin: 2rem 0 0.7rem;
        text-transform: capitalize;
        font-size: 1.1rem;
      }
      .info {
        color: var(--col-highlight);
        font-size: 1.3rem;
      }
    }
  }
`;
