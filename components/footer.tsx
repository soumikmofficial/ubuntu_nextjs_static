import Link from "next/link";
import styled from "styled-components";
import { footerLinks } from "../data";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { device } from "../utils/breakpoints";

const Footer: React.FC = () => {
  return (
    <Container>
      <Branding>
        <img src="/images/ubuntu-logo.png" alt="" />
        <p>
          Creating a <span>kindelicious</span> world by improving what we EAT!
        </p>
      </Branding>

      <div className="other">
        <Links>
          {footerLinks.map((link) => (
            <Link href={link.href}>
              <a>{link.title}</a>
            </Link>
          ))}
        </Links>
        <Contact>
          <small className="message">Let's chat</small>
          <small className="email">ubuntucommunity3@gmail.com</small>
          <Socials>
            <a href="https://www.instagram.com/ubuntueat/" target="_blank">
              <AiFillInstagram fontSize={25} className="icons" />
            </a>
            <a href="https://www.facebook.com/ubuntueat/" target="_blank">
              <BsFacebook fontSize={22} className="icons" />
            </a>
            <GrMail
              fontSize={24}
              className="icons"
              onClick={() => window.open("mailto:  ubuntucommunity3@gmail.com")}
            />
          </Socials>
        </Contact>

        <small className="copyright">Ⓒ 2022 Ubuntu. All rights reserved</small>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background: var(--col-gray);
  color: white;
  padding: 4rem 2rem;
  font-family: var(--font-subtitle);
  display: grid;
  gap: 3rem;

  @media ${device.lg} {
    grid-template-columns: 1fr 1fr;
    padding: var(--padding-x-lg);
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  @media ${device.xl} {
    padding: var(--padding-x-xl);
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .other {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media ${device.lg} {
      flex-direction: row;
      justify-content: space-around;
    }
  }

  .copyright {
    margin: 0 auto;
    color: gray;
    margin-top: 1rem;
    @media ${device.lg} {
      margin: 0;
    }
  }
`;

const Branding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    max-width: 20rem;
  }

  @media ${device.lg} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
  img {
    width: 6rem;
  }
  p {
    font-family: var(--font-subtitle);
    line-height: 187%;

    span {
      color: var(--col-primary);
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    text-transform: capitalize;
  }

  @media ${device.lg} {
    flex-direction: column;
    gap: 1.3rem;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media ${device.lg} {
    align-items: flex-start;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  .icons {
    cursor: pointer;
    scale: 0.8;
  }
`;
