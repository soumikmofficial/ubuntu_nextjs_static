import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { homeImages, summaryIcons } from "../data";
import { device } from "../utils/breakpoints";
import Slider from "./slider";

const summaryVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const aboutVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const imagesComtaomerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {},
};
const imageVariants = {
  visible: {
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  hidden: {
    scale: 0,
  },
};

const AboutSection = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // todo: functions
  const openSlider = (index: number) => {
    setSelectedImage(index);
    setShowSlider(true);
  };
  return (
    <Container>
      <Summary
        className="about"
        variants={summaryVariants}
        whileInView="visible"
        initial="hidden"
      >
        {summaryIcons.map((icon) => (
          <div className="singleInfo" key={icon.id}>
            {icon.icon}
            <p>{icon.message}</p>
          </div>
        ))}
      </Summary>

      <div className="main">
        <Details>
          <motion.div
            className="about"
            variants={aboutVariants}
            whileInView="visible"
            initial="hidden"
          >
            <h1 className="header">
              WE SERVE INDIAN, BENGALI, MUGHLAI, CONTINENTAL, ORIENTAL,
              LEBANESE, DESERTS, AND MORE...
            </h1>
            <div className="details">
              <p>
                Someone once challenged us that vegan food cannot look, smell,
                taste like non-vegan food.
              </p>
              <br />
              <p>
                Our CEO (Chief Eating Officer) Shreya accepted the challenge.
                Here what you are going to experience is a combination of
                innovation and creativity of a foodie who doesn’t want to
                compromise on taste buds.
              </p>
              <br />
              <p>
                We serve alternatives of Chicken, Mutton, Seafood, and Dairy
                through our vast menu.
              </p>
            </div>
            <Link href="/menu">
              <a className="menu-link">
                full menu <BsArrowRightCircleFill />
              </a>
            </Link>
          </motion.div>
          <ImagesContainer
            variants={imagesComtaomerVariants}
            whileInView="visible"
            initial="hidden"
          >
            {homeImages.map((img, i) => (
              <div key={img.id}>
                <motion.img
                  src={img.src}
                  alt="food"
                  className="image"
                  variants={imageVariants}
                  onClick={() => openSlider(i)}
                />
              </div>
            ))}
          </ImagesContainer>
        </Details>
        <AnimatePresence>
          {showSlider && (
            <Slider
              currentIndex={selectedImage}
              list={homeImages}
              onClose={() => setShowSlider(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  .main {
    display: flex;
  }
`;

const Summary = styled(motion.div)`
  color: var(--col-accent);
  background: var(--col-primary);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  gap: 2rem;
  margin: 2rem 0;

  @media ${device.lg} {
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  .singleInfo {
    text-align: center;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;

    @media ${device.lg} {
      flex-direction: row;

      p {
        font-size: 1.3rem;
      }
    }

    p {
      font-family: var(--font-highlight);
      text-transform: capitalize;
      font-weight: 500;
    }

    .icon {
      font-size: 1.6rem;

      @media ${device.lg} {
        font-size: 2rem;
      }
    }
  }
`;

const Details = styled.div`
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  padding: var(--padding-x-base);
  gap: 5rem;

  @media ${device.lg} {
    flex-direction: row;
    padding: var(--padding-x-lg);
  }
  @media ${device.xl} {
    padding: var(--padding-x-xl);
  }

  .about {
    flex: 0.5;
    margin: 0 auto;
    text-align: center;
    @media ${device.lg} {
      text-align: left;
    }

    .header {
      font-family: var(--font-highlight);
      font-size: 1.8rem;
      line-height: 127%;
    }

    .details {
      margin-top: 2rem;
      color: var(--col-accent);
      font-size: 1.25rem;
      font-family: var(--font-body);
    }

    .menu-link {
      margin-top: 3rem;
      font-family: var(--font-highlight);
      text-transform: capitalize;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
      align-items: center;
      text-decoration: underline;
    }
  }
`;

const ImagesContainer = styled(motion.div)`
  flex: 0.5;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  div {
    overflow: hidden;
  }

  .image {
    min-width: 8rem;
    display: block;
    margin: 0 auto;
    max-width: 10rem;
    width: 100%;
    cursor: pointer;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;

    transition: all 0.3s ease;
    &:hover {
      scale: 1.3;
    }
  }
`;
