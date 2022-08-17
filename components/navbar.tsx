import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { navBtns } from "../data";
import styled from "styled-components";
import { device } from "../utils/breakpoints";
import { useAppContext } from "../context/appContext";
import { motion } from "framer-motion";
import { OrderBtn } from "../styles/shared-styles";
import { useEffect, useState } from "react";

const variants = {
  visible: {
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
  hidden: { scale: 0 },
};

interface IProps {
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuActive: boolean;
}

const Navbar: React.FC<IProps> = ({ setIsMenuActive, isMenuActive }) => {
  const [isBg, setIsBg] = useState(false);
  let lastOffset = 0;
  const [isVisible, setIsVisible] = useState(true);
  const handleScroll = () => {
    window.pageYOffset < window.innerHeight && setIsBg(false);
    window.pageYOffset > window.innerHeight && setIsBg(true);

    window.pageYOffset < lastOffset && setIsVisible(true);
    window.pageYOffset > lastOffset && setIsVisible(false);
    lastOffset = window.scrollY;
  };
  // todo: useEffects
  // ? change navbar color on scroll;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { isHomePage } = useAppContext();

  // todo: functions
  // const handleClick = (page: string) => {
  //   setCurrentPage(page);
  // };

  const handleMenuToggle = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <Container isBg={isBg} isVisible={isVisible} isHomePage={isHomePage}>
      {/* inner wrapper */}
      <div className="innerWrapper">
        {/* menu icon */}
        <div onClick={handleMenuToggle} className="menu-icon">
          {isMenuActive && (
            <motion.div variants={variants} animate="visible" initial="hidden">
              <AiOutlineClose fontSize={20} className="icon" id="closeIcon" />
            </motion.div>
          )}

          {!isMenuActive && (
            <motion.div variants={variants} animate="visible" initial="hidden">
              <CgMenuLeft fontSize={20} className="icon" />
            </motion.div>
          )}
        </div>

        {/* nav links */}
        <NavLinks>
          {navBtns.map((btn) => (
            <Page
              key={btn.id}
              // isActive={currentPage === btn.title}
              // onClick={() => handleClick(btn.title)}
            >
              <Link href={`${btn.href}`}>
                <a> {btn.title}</a>
              </Link>
              <div className="pageMarker"></div>
            </Page>
          ))}
        </NavLinks>

        {/* brand logo */}
        <Link href="/">
          <a>
            <img src="/images/ubuntu-logo.png" alt="logo" />
          </a>
        </Link>

        <OrderBtn>order now</OrderBtn>
      </div>
    </Container>
  );
};

export default Navbar;

interface IStyledContainerProps {
  isBg: boolean;
  isVisible: boolean;
  isHomePage: boolean;
}

const Container = styled.nav<IStyledContainerProps>`
  position: fixed;
  width: 100%;
  background: ${(props) => (props.isBg ? "var(--col-secondary)" : "none")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  height: 15vh;
  padding: 0 2.5rem;
  font-family: var(--font-sans-2);
  text-transform: capitalize;
  z-index: 1000;
  transition: all 0.3s ease;
  color: ${(props) =>
    props.isHomePage && !props.isBg ? "var(--col-secondary)" : "white"};

  .innerWrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media ${device.sm} {
    padding: 0 5rem;
  }
  @media ${device.lg} {
    padding: 0 10rem;
  }
  @media ${device.xl} {
    padding: 0 13rem;
  }

  .menu-icon {
    cursor: pointer;
    color: white;

    .icon {
      font-size: 2rem;
    }
  }

  img {
    position: absolute;
    width: 6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const NavLinks = styled.div`
  display: none;
  height: 100%;
  font-weight: 600;

  @media ${device.lg} {
    display: flex;

    margin-left: 1rem;
  }
  @media ${device.xl} {
    margin-left: 4rem;
  }
`;

interface PageProps {
  isActive?: boolean;
}

const Page = styled.div<PageProps>`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;

  ${(p) =>
    p.isActive &&
    `
  &:after {
    position: absolute;
    content: "";
    background: var(--col-accent);
    top: 0;
    width: 100%;
    height: 85%;
    z-index: -1;
  }`}

  a {
    padding: 0 1.5rem;
    color: ${(p) => p.isActive && "white"};
  }
`;
