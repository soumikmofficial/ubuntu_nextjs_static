import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { navBtns } from "../data";
import styled from "styled-components";
import { device } from "../utils/breakpoints";
import { useAppContext } from "../context/appContext";
import { AnimatePresence, motion } from "framer-motion";

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
  const { currentPage, setCurrentPage } = useAppContext();
  // todo: functions
  const handleClick = (page: string) => {
    setCurrentPage(page);
  };

  const handleMenuToggle = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <Container>
      {/* inner wrapper */}
      <div className="innerWrapper">
        {/* menu icon */}
        <div onClick={handleMenuToggle} className="menu-icon">
          {isMenuActive && (
            <motion.div variants={variants} animate="visible" initial="hidden">
              <GrClose fontSize={20} />
            </motion.div>
          )}

          {!isMenuActive && (
            <motion.div variants={variants} animate="visible" initial="hidden">
              <CgMenuLeft fontSize={20} />
            </motion.div>
          )}
        </div>

        {/* nav links */}
        <NavLinks>
          {navBtns.map((btn) => (
            <Page
              key={btn.id}
              isActive={currentPage === btn.title}
              onClick={() => handleClick(btn.title)}
            >
              <Link href="">
                <a> {btn.title}</a>
              </Link>
              <div className="pageMarker"></div>
            </Page>
          ))}
        </NavLinks>

        {/* brand logo */}
        <img src="/images/ubuntu-logo.png" alt="" />

        {/* order button */}

        <button>order now</button>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  background: var(--col-primary);
  height: 10vh;
  padding: 0 2.5rem;
  font-family: var(--font-sans-1);
  text-transform: capitalize;

  .innerWrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 3rem;
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
  }

  img {
    position: absolute;
    width: 4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  button {
    display: none;
    padding: 0.5rem 2rem;
    color: white;
    margin-left: auto;
    background: var(--col-accent);
    border-radius: 0.3rem;
    text-transform: capitalize;
    cursor: pointer;

    @media ${device.lg} {
      display: block;
    }
  }
`;

const NavLinks = styled.div`
  display: none;
  gap: 1.2rem;
  height: 100%;

  @media ${device.lg} {
    display: flex;

    margin-left: 1rem;
  }
  @media ${device.xl} {
    margin-left: 4rem;
  }
`;

interface PageProps {
  isActive: boolean;
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
    padding: 0 0.5rem;
    color: ${(p) => p.isActive && "white"};
  }
`;
