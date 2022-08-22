import styled from "styled-components";
import { menuCategories } from "../data";
import { device } from "../utils/breakpoints";

const MenuDetails: React.FC = () => {
  return (
    <Container>
      {menuCategories.map((category) => (
        <SingleCategory key={category.id}>
          <h3 className="title">{category.title}</h3>
          <p className="about">{category.about}</p>
          <div className="images">
            <div className="frame">
              <img src={category.images[0].src} alt="food" />
            </div>
          </div>
        </SingleCategory>
      ))}
    </Container>
  );
};

export default MenuDetails;

const Container = styled.section`
  width: 100%;
  display: grid;
  flex-direction: column;
  @media ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 5%;
  }
`;

const SingleCategory = styled.div`
  color: var(--col-primary);
  display: flex;
  flex-direction: column;

  text-align: center;
  padding: 3rem 1rem;

  &:nth-of-type(3) {
    background: var(--col-highlight);

    .images .frame {
      background: var(--col-dark);
    }
  }

  @media ${device.lg} {
    &:nth-of-type(2) {
      background: var(--col-highlight);
      .images .frame {
        background: var(--col-dark);
      }
    }
    &:nth-of-type(3) {
      background: var(--col-dark);
      .images .frame {
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
  .images {
    width: 60%;
    aspect-ratio: 1/1;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .frame {
      width: 80%;
      border-radius: 100%;
      overflow: hidden;
      padding: 0.8rem;
      background: var(--col-highlight);
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.25);
      img {
        border-radius: 100%;
        width: 100%;
      }
    }
  }
`;
