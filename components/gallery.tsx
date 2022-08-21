import styled from "styled-components";
import { gallery } from "../data";
import { device } from "../utils/breakpoints";

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
      <div className="innerWrapper">
        {gallery.map((img, index) => (
          <div
            className="imageWrapper"
            onClick={() => handleClick(index)}
            key={img.id}
          >
            <img src={img.src} alt="" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Gallery;

const Container = styled.section`
  max-width: 85rem;
  margin: 0 auto;
  width: 100%;
  background: var(--col-highlight);
  padding: 5rem 0;
  .innerWrapper {
    margin: 0 auto;
    width: 90%;
    max-width: 80rem;
    display: grid;
    gap: 2rem;

    @media ${device.sm} {
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.md} {
      grid-template-columns: repeat(4, 1fr);
    }
    @media ${device.lg} {
      gap: 5rem;
    }
  }

  .imageWrapper {
    padding: 0.3rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0px 4px 15px rgb(0, 0, 0, 0.5);
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.6);
  }
`;
