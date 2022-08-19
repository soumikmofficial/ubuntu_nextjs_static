import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { device } from "../utils/breakpoints";
import AboutSection from "../components/aboutHomePage";
import ContactSectionHomePage from "../components/contactSectionHomePage";
import { motion } from "framer-motion";
import { socials } from "../data";

const socialsVariants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  hidden: {},
};

const linkVariants = {
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

const buttonVariants = {
  tapped: {
    color: "white",
    background: "gray",
    scale: 0.9,
  },
};

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Ubuntu Vegan Cafe</title>
        <meta name="description" content="Ubuntueat home page" />
        <meta
          name="keywords"
          content="vegan, food, kolkata, restaurants, bengali, indian, plant-based, cruelty-free, drink, about, team, tasty, healthy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Hero>
          <img src="/images/heroMain.png" alt="" />
          <Content>
            <div className="banner">
              <div className="title">
                <p>
                  Plant-Based Cafe <span>&</span>
                </p>

                <p>Cloud Kitchen</p>
              </div>
              <p className="subtitle">
                Creating a <span>Kindelicious</span> world by improving what we
                EAT!🌱
              </p>
              <Socials
                variants={socialsVariants}
                whileInView="visible"
                initial="hidden"
              >
                {socials.map((social) =>
                  social.type === "link" ? (
                    <motion.a
                      key={social.id}
                      variants={linkVariants}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.icon}
                    </motion.a>
                  ) : (
                    <motion.div variants={linkVariants} key={social.id}>
                      {social.icon}
                    </motion.div>
                  )
                )}
              </Socials>
            </div>
            <OrderBtn variants={buttonVariants} whileTap="tapped">
              Order Now
            </OrderBtn>
          </Content>
        </Hero>
      </header>

      <AboutSection />

      <ContactSectionHomePage />
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const Hero = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:after {
    background: linear-gradient(
      180deg,
      #dec59c 32.29%,
      rgba(222, 197, 156, 0) 100%
    );

    position: absolute;
    content: "";
    top: 0;
    left: 0;
    color: white;

    width: 100%;
    height: 100%;

    @media ${device.lg} {
      background: linear-gradient(
        89.49deg,
        #dec59c 14.85%,
        rgba(222, 197, 156, 0) 62.35%
      );
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  padding: var(--padding-x-base);
  padding-top: 15vh;
  padding-bottom: 12vh;

  @media ${device.lg} {
    align-items: flex-start;
    justify-content: center;
  }

  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 3rem;
    position: relative;

    @media ${device.lg} {
      align-items: flex-start;
      // justify-content: center;
      margin: 0 11rem;
      margin-top: 3rem;
    }

    @media ${device.xl} {
      margin: 0 13rem;
      margin-top: 3rem;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-sans-3);
    font-size: 2.5rem;

    span {
      display: block;
      text-align: center;
      @media ${device.lg} {
        display: inline;
      }
    }

    @media ${device.lg} {
      font-size: 3.2rem;
      align-items: flex-start;
    }
  }

  .subtitle {
    text-align: center;
    font-size: 1.2rem;
    font-family: var(--font-subtitle);
    font-weight: bold;
    max-width: 350px;
    line-height: 150%;

    @media ${device.lg} {
      text-align: left;
      font-style: normal;
      font-size: 1.3rem;
    }

    span {
      color: #b3594c;
    }
  }
`;

const Socials = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2rem;

  color: var(--col-secondary);
  @media ${device.lg} {
    position: absolute;
    left: -40%;
    top: 50%;
    transform: rotate(90deg) translateX(-40%);
  }

  .icon {
    display: block;
    cursor: pointer;
    opacity: 0.9;

    @media ${device.lg} {
      transform: rotate(-90deg);
    }
  }
`;

const OrderBtn = styled(motion.button)`
  padding: 0.7rem 2rem;
  color: white;
  background: var(--col-accent);
  border-radius: 0.3rem;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  font-size: 1.3rem;

  @media ${device.lg} {
    display: none;
  }
`;
