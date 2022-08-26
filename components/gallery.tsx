import { motion } from "framer-motion";
import styled from "styled-components";
import { gallery } from "../data";
import { device } from "../utils/breakpoints";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

interface IProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<number>>;
  setShowSlider: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gallery: React.FC<IProps> = ({ setSelectedImage, setShowSlider }) => {
  const handleClick = (index: number) => {
    setSelectedImage(index);
    setShowSlider(true);
  };
  return (
    <Container>
      <motion.div
        variants={parentVariants}
        className="innerWrapper"
        initial="hidden"
        whileInView="visible"
      >
        {gallery.map((img, index) => (
          <motion.div
            variants={imageVariants}
            className="imageWrapper"
            onClick={() => handleClick(index)}
            key={img.id}
          >
            <img src={img.src} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default Gallery;

const Container = styled.section`
  max-width: 85rem;
  margin: 0 auto;
  width: 95%;
  background: var(--col-highlight);
  padding: 3.5rem 0;
  max-width: 85rem;
  @media ${device.md} {
   width: 86%;%;
  }

  border-radius: 0 0 1rem 1rem;
  .innerWrapper {
    margin: 0 auto;
    width: 90%;
    max-width: 80rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media ${device.sm} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.md} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.lg} {
      gap: 5rem;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .imageWrapper {
    padding: 0.3rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0px 4px 15px rgb(0, 0, 0, 0.5);
    cursor: pointer;
    overflow: hidden;
  }

  img {
    display: block;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease;
    &:hover {
      scale: 1.3;
    }
  }
`;
