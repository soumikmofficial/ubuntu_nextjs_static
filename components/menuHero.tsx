import styled from "styled-components";
import { MdOutlineMenuBook } from "react-icons/md";
import { device } from "../utils/breakpoints";

const MenuHero: React.FC = () => {
  return (
    <Container>
      <img src="images/menuHero.png" alt="foods and greens" />
      <div className="content">
        <p className="heading">
          &quot;Vegan Options Are Limited" Is Just A Myth!&quot;
        </p>
        <div className="reviews">
          <div>
            <a
              href="https://www.google.com/search?q=ubuntueat&oq=ubuntueat&aqs=chrome.0.69i59j46i175i199i512j5j5i44l2.5930j0j4&sourceid=chrome&ie=UTF-8#"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/google-review.png" alt="google review" />
            </a>
          </div>
          <div>
            <a
              href="https://www.zomato.com/kolkata/ubuntu-eat-new-alipore/order"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/zomato-review.png" alt="zomato review" />
            </a>
          </div>
        </div>
        <a
          href="/resources/ubuntu-kolkata-menu.pdf"
          target="_blank"
          rel="noreferrer"
          className="menu-btn"
        >
          <MdOutlineMenuBook className="menu-icon" />
          our menu
        </a>
      </div>
    </Container>
  );
};

export default MenuHero;
const Container = styled.header`
  position: relative;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    position: absolute;
    background: rgb(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .heading {
      color: white;
      font-family: var(--font-sans-3);
      font-size: 3rem;
      text-align: center;
      padding: 0 5%;
    }
    .reviews {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      width: 90%;
      margin-top: 5rem;
      margin-bottom: 3rem;

      @media ${device.md} {
        flex-direction: row;
        justify-content: center;
      }
      img {
        max-width: 350px;
        border-raidus: 0.3rem;
        display: block;
      }
    }

    .menu-btn {
      background: var(--col-highlight);
      padding: 0.4rem 0.7rem;
      border-radius: 0.4rem;
      font-family: var(--font-body);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      text-transform: capitalize;
      .menu-icon {
        font-size: 1.7rem;
      }
    }
  }
`;
