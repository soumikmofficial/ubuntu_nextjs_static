import { Parallax } from "react-parallax";
import styled from "styled-components";
import { device } from "../utils/breakpoints";
import OrderCard from "./orderCard";

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
        <OrderCard bgColor="rgba(7, 12, 14, 0.63)" isCloseBtn={false} />
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
