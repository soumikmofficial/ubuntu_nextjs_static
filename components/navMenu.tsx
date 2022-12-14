import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";
import { menuMainLinks, menuSubLinks } from "../data";
import { device } from "../utils/breakpoints";

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

interface IProps {
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOrderModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu: React.FC<IProps> = ({
  setIsMenuActive,
  setIsOrderModalActive,
}) => {
  const handleNavigation = () => {
    setIsMenuActive(false);
  };

  const handleOrder = () => {
    setIsOrderModalActive(true);
    setIsMenuActive(false);
  };

  // todo: return
  return (
    <Container
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="hidden"
    >
      <MainLinks>
        {menuMainLinks.map((link) => (
          <Link href={link.href} key={link.id}>
            <a onClick={handleNavigation}>{link.title}</a>
          </Link>
        ))}
        <button onClick={handleOrder}>order</button>
      </MainLinks>
      <div className="bottom">
        <SubLinks>
          {menuSubLinks.map((link) => (
            <Link href={link.href} key={link.id}>
              <a onClick={handleNavigation}>{link.title}</a>
            </Link>
          ))}
        </SubLinks>

        <Socials onClick={handleNavigation}>
          <a
            href="https://www.instagram.com/ubuntueat/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram fontSize={25} className="icons" />
          </a>
          <a
            href="https://www.facebook.com/ubuntueat/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook fontSize={22} className="icons" />
          </a>
          <GrMail
            fontSize={24}
            className="icons"
            onClick={() => window.open("mailto:  ubuntucommunity3@gmail.com")}
          />
        </Socials>
      </div>
    </Container>
  );
};

export default NavMenu;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: white;
  height: 85vh;
  position: fixed;
  top: 15vh;
  left: 0;
  width: 100vw;
  z-index: 100;
  padding: var(--padding-x-base);
  text-align: center;
  padding-bottom: 2.5rem;

  @media ${device.lg} {
    text-align: left;
    padding: var(--padding-x-lg);
  }
  @media ${device.xl} {
    padding: var(--padding-x-xl);
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    flex-grow: 1;
  }
`;

const MainLinks = styled.section`
  display: flex;
  gap: 2.2rem;
  flex-direction: column;
  font-family: var(--font-highlight);
  margin-bottom: 3.5rem;
  margin-top: 2.5rem;
  @media ${device.lg} {
    margin-top: 3.5rem;
  }

  a,
  button {
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 0.8rem;
    border: none;
    color: var(--col-secondary);
    width: fit-content;
    background: none;
    cursor: pointer;
    margin: 0 auto;
    @media ${device.lg} {
      font-size: 2.2rem;
      margin: 0;
    }
    @media ${device.xl} {
      font-size: 2.5rem;
    }
  }
`;

const SubLinks = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  font-family: var(--font-sans-2);
  justify-content: center;
  gap: 1rem;
  font-weight: 600;
  max-width: 500px;
  margin: 0 auto;
  @media ${device.lg} {
    justify-content: start;
    width: 55%;
    margin: 0;
  }
  @media ${device.xl} {
    justify-content: start;
    width: 45%;
  }

  a {
    text-transform: capitalize;
    font-size: 1rem;
    letter-spacing: 0.2rem;
  }
`;

const Socials = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: flex-end;
  color: #4b4747;

  @media ${device.lg} {
    position: relative;
  }

  .icons {
    cursor: pointer;
  }
`;
