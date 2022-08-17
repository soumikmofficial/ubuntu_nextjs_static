import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import { contactOutlets } from "../data";
import { device } from "../utils/breakpoints";

const ContactSectionHomePage = () => {
  return (
    <Container
      className="parallexBg"
      // blur={10}
      bgImage="/images/bongGuy.png"
      bgImageAlt="cloud kitchen"
      strength={300}
    >
      <div className="innerWrapper">
        <ContactCard>
          <p className="message">
            We have excitement waiting for you when you order directly from us
          </p>
          <div className="contacts">
            {contactOutlets.map((contact) => (
              <div key={contact.id}>
                <div className="singleContact">
                  {contact.icon}
                  <p className="text">{contact.message}</p>
                  <p className="info">{contact.info}</p>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="edges top-top"></div>
          <div className="edges top-right"></div>
          <div className="edges bottom-left"></div>
          <div className="edges bottom-bottom"></div>
        </ContactCard>
      </div>
    </Container>
  );
};

export default ContactSectionHomePage;

const Container = styled(Parallax)`
  .innerWrapper {
    background: rgba(0, 0, 0, 0.87);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    min-height: 100vh;

    @media ${device.lg} {
      padding: 8rem 0;
    }
  }
`;

const ContactCard = styled.div`
  background: rgba(7, 12, 14, 0.63);
  width: 100%;
  height: 100%;
  color: white;
  padding: 4rem 2rem;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  position: relative;
  z-index: 1;
  .edges {
    display: none;
  }
  @media ${device.lg} {
    .edges {
      display: block;
      position: absolute;
      width: 6rem;
      height: 0.2rem;
      background: var(--col-highlight);
    }

    .top-top {
      top: 0;
      right: 0;
    }
    .top-right {
      right: 0;
      top: 0;
      height: 6rem;
      width: 0.2rem;
    }
    .bottom-bottom {
      bottom: 0;
      left: 0;
    }
    .bottom-left {
      left: 0;
      bottom: 0;
      height: 6rem;
      width: 0.2rem;
    }
  }

  .message {
    text-align: center;
    font-size: 1.6rem;
    max-width: 80%;
    line-height: 150%;
    font-family: var(--font-body);
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media ${device.lg} {
      flex-direction: row;
    }

    hr {
      height: 2px;
      background: var(--col-highlight);
      border: none;

      @media ${device.lg} {
        height: auto;
        width: 2px;
      }

      &:last-of-type {
        display: none;
      }
    }

    .singleContact {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--font-highlight);
      .icon {
        font-size: 1.8rem;
      }
      .text {
        margin: 2rem 0 0.7rem;
        text-transform: capitalize;
        font-size: 1.1rem;
      }
      .info {
        color: var(--col-highlight);
        font-size: 1.3rem;
      }
    }
  }
`;
