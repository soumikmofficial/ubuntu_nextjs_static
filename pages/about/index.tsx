import type { NextPage } from "next";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { Parallax } from "react-parallax";
import TeamSection from "../../components/TeamSection";

const About: NextPage = () => {
  return (
    <Container>
      <Banner>
        <div className="banner-content">
          <h1 className="header">
            the <span>ubuntu</span> story
          </h1>
          <img src="/images/team.png" alt="" className="teamImage" />
        </div>
        <div className="bg2"></div>
      </Banner>
      <Article>
        <p className="ubuntu">
          <span className="firstLetter">U</span>buntu which translates to{" "}
          <span>“I am because we are”</span> is aiming to create a{" "}
          <span>Kindelicious</span> World through their new cloud kitchen and
          cafe model which is easy to set up and is affordable to the masses.
          Plant based food which is culturally appropriate to India is at the
          heart of the model.
        </p>
        <Video>
          <div className="container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lQAEvno0cSA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Video>
      </Article>

      <Article2>
        <h2>OUR MISSION: WORLD PROBLEM</h2>
        <p>
          Malnutrition for humans but not for the animals which are being
          slaughtered to feed humans.
        </p>
        <br />
        <p>
          Rising pandemics and zoonotic diseases caused by an increase in
          consumption of animal protein.
        </p>
        <br />
        <p>
          Wasteful and destructive global food system leading to grave food
          insecurity.
        </p>
        <br />
        <p>
          Wasteful and destructive global food system leading to grave food
          insecurity.
        </p>
        <br />
        <p>
          Dietary choices are one of the biggest contributors to climate change
          and innovators are desperately needed.
        </p>
      </Article2>
      <ParallaxSection
        className="parallexBg"
        // blur={10}
        bgImage="/images/solution.png"
        bgImageAlt="cloud kitchen"
        strength={300}
      >
        <div className="innerWrapper">
          <h3>ubuntu solution</h3>
          <p>
            Cloud KITCHEN AND CAFE MODEL WHICH IS EASILY SCALABLE SERVING
            CULTURALLY APPROPRIATE PLANT BASED FOOD MAKING ADOPTION EASY
          </p>
        </div>
      </ParallaxSection>
      <TeamSection />
    </Container>
  );
};

export default About;

const Container = styled.div`
  position: relative;
`;

const Banner = styled.div`
  .banner-content {
    padding-top: 13rem;
    text-align: center;
    width: 100%;
    background: var(--col-primary);

    .header {
      text-transform: capitalize;
      font-family: var(--font-banner);
      font-size: 2.5rem;
      font-weight: normal;
      text-align: center;
      width: 85%;
      margin: 0 auto;

      @media ${device.md} {
        font-size: 3rem;
      }
      span {
        color: var(--col-accent);
      }
    }
    .teamImage {
      width: 85%;
      max-width: 40rem;
      transform: translateY(4rem);
    }
  }

  .bg2 {
    height: 4rem;
  }
`;

const Article = styled.div`
margin-top: 3rem;


  .ubuntu {
    font-family: var(--font-body-2);
    line-height: 168%;
    width: 85%;
    margin: 0 auto;
    max-width: 40rem;
    font-size: 1.2rem;
    max-width: 35rem;

      @media ${device.xl} {
        max-width: 40rem;
      }
    
    .firstLetter {
  color: var(--col-accent);
  float: left;
  font-size: 4.5rem;
  line-height: 60px;
  padding-top: 4px;
  padding-right: .2rem;
  padding-left: 3px;
}

    


  }
    span {
      font-weight: bold;
    }
  }
`;

const Video = styled.div`
  width: 85%;
  max-width: 55rem;

  margin: 4rem auto;
  .container {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;

    iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
`;

const Article2 = styled.article`
  width: 85%;
  max-width: 40rem;
  margin: 0 auto;
  h2 {
    text-align: center;
    font-size: 2rem;
    color: var(--col-accent);
    font-family: var(--font-banner);
    font-weight: normal;
    margin-bottom: 1.8rem;

    @media ${device.md} {
      text-align: left;
    }
  }
  p {
    font-family: var(--font-body-2);
    line-height: 168%;
    margin: 0 auto;
    font-size: 1.2rem;

    &::first-letter {
      font-weight: bold;
    }
  }
`;

const ParallaxSection = styled(Parallax)`
  margin-top: 5rem;
  .innerWrapper {
    background: rgba(78, 43, 31, 0.64);
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 5%;
    align-items: center;
    justify-content: center;
    min-height: 70vh;

    h3 {
      color: var(--col-primary);
      font-family: var(--font-banner);
      text-transform: capitalize;
      font-weight: normal;
      font-size: 2.5rem;
      @media ${device.md} {
        font-size: 3.5rem;
      }
    }
    p {
      color: white;
      text-align: center;
      font-size: 1.6rem;
      font-family: var(--font-highlight);
      line-height: 140%;
      text-transform: uppercase;
      max-width: 65rem;

      @media ${device.md} {
        font-size: 2.4rem;
      }
    }
  }
`;
