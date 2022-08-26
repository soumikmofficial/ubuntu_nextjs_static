import styled from "styled-components";
import { Autoplay, EffectFade, EffectFlip } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { menuCategories } from "../data";
import { device } from "../utils/breakpoints";
import { motion } from "framer-motion";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const categoryVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const MenuDetails: React.FC = () => {
  return (
    <Container
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      {menuCategories.map((category) => (
        <SingleCategory key={category.id} variants={categoryVariants}>
          <h3 className="title">{category.title}</h3>
          <p className="about">{category.about}</p>
          <Swiper
            className="swiper"
            spaceBetween={50}
            slidesPerView={1}
            loop
            modules={[EffectFade, EffectFlip, Autoplay]}
            initialSlide={1}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {category.images.map((img) => (
              <SwiperSlide className="slide" key={img.id}>
                <img src={img.src} alt="" className="image" key={img.id} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <hr /> */}
        </SingleCategory>
      ))}
    </Container>
  );
};

export default MenuDetails;

const Container = styled(motion.section)`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 2%;
  display: grid;
  @media ${device.md} {
    padding: 0 7%;
  }
  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 5%;
  }
`;

const SingleCategory = styled(motion.div)`
position: relative;
  color: var(--col-primary);
  display: flex;
  flex-direction: column;
  max-width: 85rem;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  border-radius: .8rem .8rem 0 0;



  text-align: center;
  padding: 3rem 1rem;

  &:nth-of-type(3) {
    background: var(--col-highlight);

    .swiper {
      background: var(--col-dark);
    }
  }

  @media ${device.lg} {
    &:nth-of-type(2) {
      background: var(--col-highlight);
      .swiper {
        background: var(--col-dark);
      }
    }
    &:nth-of-type(3) {
      background: var(--col-dark);
      .swiper {
        background: var(--col-highlight);
      }
    }
  }

  .title {
    font-family: var(--font-cursive);
    font-weight: normal;
    text-shadow: 0px 4px 4px #000000;
  }
  .about {
    margin: 2rem 0 3rem;
    font-family: var(--font-body);
    line-height: 140%;
    flex-grow: 1;
  }


  .swiper {
    width: 50%;
    max-width: 16rem;
    aspect-ratio: 1/1;
    background: var(--col-highlight);
    padding: .6rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
      box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.25);

    img {
      width: 100%;
      border-radius: 100%;
      height: 100%;
      object-fit: cover;

    }
  }

    
  }
`;
