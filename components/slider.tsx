import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { device } from "../utils/breakpoints";

const containerVariants = {
  hidden: {
    scale: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.2,
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
}

const Slider: React.FC<IProps> = ({ list, currentIndex, onClose }) => {
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
          loop
          modules={[Navigation, Pagination, EffectFade]}
          initialSlide={currentIndex}
          className="slider"
          effect={"fade"}
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
  z-index: 200;
  background: rgb(0, 0, 0, 0.8);

  .swiperWrapper {
    width: 100%;
    max-width: 50rem;
  }
`;

const CustomSwiper = styled(Swiper)`
  text-align: center;
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
      top: 1%;
      right: 17%;
      cursor: pointer;
      background: var(--col-highlight);
      padding: 0.3rem 0.6rem;
      border: none;
      border-radius: 10%;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    display: none;

    @media ${device.md} {
      display: block;
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
