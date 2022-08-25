import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import styled from "styled-components";

const aboutVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    height: "fit-content",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imgVariants = {
  visible: {
    scale: 1,
    filter: "grayscale(0.5)",
    transition: {
      duration: 1,
    },
  },
  hidden: { filter: "grayscale(1)" },
};

interface IProps {
  person: {
    src: string;
    name: string;
    title: string;
    about: string;
    id: number;
  };
}

const SinglePerson: React.FC<IProps> = ({ person }) => {
  const [isAbout, setIsAbout] = useState(false);

  const handleClick = () => {
    setIsAbout((prev) => !prev);
  };

  return (
    <Container>
      <motion.img src={person.src} alt={person.name} variants={imgVariants} />
      <h4 className="name">{person.name}</h4>
      <p className="title">{person.title}</p>
      <button onClick={handleClick}>
        {isAbout ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
      </button>
      <AnimatePresence>
        {isAbout && (
          <motion.p
            className="about"
            variants={aboutVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {person.about}
          </motion.p>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default SinglePerson;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  max-width: 16rem;
  width: 100%;
  img {
    width: 80%;
    max-width: 23rem;
    border-radius: 50%;
  }
  .name {
    margin-top: 1rem;
    font-family: var(--font-sans-3);
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  .title {
    font-family: var(--font-sans-1);
    font-size: 1.1rem;
  }

  button {
    background: none;
    border: none;
    text-decoration: underline;
    font-size: 2rem;
    cursor: pointer;
  }

  .about {
    font-family: var(--font-body);
    text-align: center;
    line-height: 150%;
  }
`;
