import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, EffectFlip } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { motion } from "framer-motion";
import { device } from "../utils/breakpoints";

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

interface IImage {
  src: string;
  id: number;
  name: string;
}

interface IProps {
  list: IImage[];
  currentIndex: number;
  onClose: () => void;
  navigation: boolean;
  effect:
    | "slide"
    | "fade"
    | "cube"
    | "coverflow"
    | "flip"
    | "creative"
    | "cards"
    | undefined;
}

const Slider: React.FC<IProps> = ({
  list,
  currentIndex,
  onClose,
  navigation,
  effect,
}) => {
  return (
    <Container>
      <motion.div
        className="swiperWrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <CustomSwiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={navigation}
          pagination={{ clickable: true }}
          loop
          modules={[Navigation, Pagination, EffectFade, EffectFlip]}
          initialSlide={currentIndex}
          className="slider"
          effect={effect}
        >
          {list.map((img) => (
            <SwiperSlide className="slide" key={img.id}>
              <img src={img.src} alt="" className="image" key={img.id} />
              <button onClick={() => onClose()}>close</button>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </motion.div>
    </Container>
  );
};

export default Slider;

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.95);
  z-index: 1000;

  .swiperWrapper {
    width: 100%;
    max-width: 50rem;
  }
`;

const CustomSwiper = styled(Swiper)`
  text-align: center;
  overflow: auto;
  width: 100%;
  .slide {
    position: relative;
    img {
      width: 90%;

      @media ${device.md} {
        width: 70%;
      }
    }
    button {
      color: white;
      position: absolute;
      top: 2%;
      right: 8%;
      cursor: pointer;
      background: var(--col-highlight);
      padding: 0.3rem 0.6rem;
      border: none;
      border-radius: 10%;

      @media ${device.md} {
        right: 16%;
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    display: none;
    bottom: 0;

    @media ${device.md} {
      display: flex;
    }
    &::after {
      font-size: 1.3rem;
    }
  }

  .swiper-pagination-bullet {
    background: white;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: var(--col-highlight);
  }
`;
