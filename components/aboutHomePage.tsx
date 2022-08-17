import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { homeImages, summaryIcons } from "../data";
import { device } from "../utils/breakpoints";

const AboutSection = () => {
  return (
    <Container>
      <Summary>
        {summaryIcons.map((icon) => (
          <div className="singleInfo" key={icon.id}>
            {icon.icon}
            <p>{icon.message}</p>
          </div>
        ))}
      </Summary>

      <div className="main">
        <Details>
          <div className="about">
            <h1 className="header">
              WE SERVE INDIAN, BENGALI, MUGHLAI, CONTINENTAL, ORIENTAL,
              LEBANESE, DESERTS, AND MORE...
            </h1>
            <div className="details">
              <p>
                Someone once challenged us that vegan food cannot look, smell,
                taste like non-vegan food.
              </p>
              <br />
              <p>
                Our CEO (Chief Eating Officer) Shreya accepted the challenge.
                Here what you are going to experience is a combination of
                innovation and creativity of a foodie who doesn’t want to
                compromise on taste buds.
              </p>
              <br />
              <p>
                We serve alternatives of Chicken, Mutton, Seafood, and Dairy
                through our vast menu.
              </p>
            </div>
            <Link href="/menu">
              <a className="menu-link">
                full menu <BsArrowRightCircleFill />
              </a>
            </Link>
          </div>
          <ImagesContainer>
            {homeImages.map((img) => (
              <img src={img.src} alt="" className="image" key={img.id} />
            ))}
          </ImagesContainer>
        </Details>
      </div>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;

  .main {
    display: flex;
  }
`;

const Summary = styled.div`
  color: var(--col-accent);
  background: var(--col-primary);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  gap: 2rem;
  margin: 2rem 0;

  @media ${device.lg} {
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  .singleInfo {
    text-align: center;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;

    @media ${device.lg} {
      flex-direction: row;

      p {
        font-size: 1.3rem;
      }
    }

    p {
      font-family: var(--font-highlight);
      text-transform: capitalize;
    }

    .icon {
      font-size: 1.6rem;

      @media ${device.lg} {
        font-size: 2rem;
      }
    }
  }
`;

const Details = styled.div`
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  padding: var(--padding-x-base);
  gap: 5rem;

  @media ${device.lg} {
    flex-direction: row;
    padding: var(--padding-x-lg);
  }
  @media ${device.xl} {
    padding: var(--padding-x-xl);
  }

  .about {
    flex: 0.5;
    margin: 0 auto;
    text-align: center;
    @media ${device.lg} {
      text-align: left;
    }

    .header {
      font-family: var(--font-highlight);
      font-size: 1.8rem;
      line-height: 127%;
    }

    .details {
      margin-top: 2rem;
      color: var(--col-accent);
      font-size: 1.25rem;
      font-family: var(--font-body);
    }

    .menu-link {
      margin-top: 3rem;
      font-family: var(--font-highlight);
      text-transform: capitalize;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
      align-items: center;
      text-decoration: underline;
    }
  }
`;

const ImagesContainer = styled.div`
    flex: .5;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .image {
    width: 100%;

    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px;
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-radius: .5rem;
    // overflow: hidden;
  }
`;
