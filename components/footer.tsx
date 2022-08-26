import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";
import { footerLinks } from "../data";
import { device } from "../utils/breakpoints";

interface IProps {
  setIsOrderModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<IProps> = ({ setIsOrderModalActive }) => {
  // todo: functions
  const handleOrder = () => {
    setIsOrderModalActive(true);
  };

  return (
    <Container id="footer">
      <Branding>
        <img src="/images/ubuntu-logo.png" alt="" />
        <p>
          Creating a <span>kindelicious</span> world by improving what we EAT!
        </p>
      </Branding>

      <div className="other">
        <Links>
          {footerLinks.map((link) =>
            link.title !== "order" ? (
              <Link href={link.href} key={link.id}>
                <a>{link.title}</a>
              </Link>
            ) : (
              <button onClick={handleOrder} key={link.id}>
                {link.title}
              </button>
            )
          )}
        </Links>
        <Contact>
          <small className="message"> Let&apos;s chat</small>
          <small className="email">ubuntucommunity3@gmail.com</small>
          <Socials>
            <a
              href="https://www.instagram.com/ubuntueat/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram fontSize={25} className="icons" />
            </a>
            <a
              href="https://www.facebook.com/ubuntueat/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook fontSize={22} className="icons" />
            </a>
            <GrMail
              fontSize={24}
              className="icons"
              onClick={() => window.open("mailto:  ubuntucommunity3@gmail.com")}
            />
          </Socials>
        </Contact>

        <div className="privacy-copyright">
          <small>
            <a
              href="https://www.privacypolicygenerator.info/live.php?token=ihEciBlcQfDQDuefdRS1snFotTfb7PDd"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </small>
          <small className="copyright">
            Ⓒ 2022 UbuntuEat. All rights reserved
          </small>
        </div>
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
    grid-template-columns: 2fr 3fr;
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
  .privacy-copyright {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    small {
      margin: 0 auto;
      color: gray;
      margin-top: 1rem;
      transition: all 0.2s esae;
      &:hover {
        color: white;
      }
      @media ${device.lg} {
        margin: 0;
      }
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

  a,
  button {
    text-transform: capitalize;
    cursor: pointer;
    border: none;
    background: none;
    color: white;
    text-align: left;
    transition: all 0.2s ease;
    &:hover {
      color: var(--col-primary);
    }
  }

  @media ${device.lg} {
    flex-direction: column;
    gap: 1.3rem;
    justify-content: start;
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
    transition: all 0.2s ease;
    &:hover {
      color: var(--col-primary);
    }
  }
`;
