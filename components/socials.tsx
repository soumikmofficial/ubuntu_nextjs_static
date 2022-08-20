import { motion } from "framer-motion";
import styled from "styled-components";
import { socials } from "../data";
import { device } from "../utils/breakpoints";

const socialsVariants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  hidden: {},
};

const linkVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

interface IProps {
  color: string;
}

const Socials: React.FC<IProps> = ({ color }) => {
  return (
    <Container
      variants={socialsVariants}
      whileInView="visible"
      initial="hidden"
      color={color}
    >
      {socials.map((social) =>
        social.type === "link" ? (
          <motion.a
            key={social.id}
            variants={linkVariants}
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            {social.icon}
          </motion.a>
        ) : (
          <motion.div variants={linkVariants} key={social.id}>
            {social.icon}
          </motion.div>
        )
      )}
    </Container>
  );
};

export default Socials;

interface IContainerProps {
  color: string;
}
const Container = styled(motion.div)<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2rem;

  color: ${(props) =>
    props.color !== "" ? props.color : "var(--col-secondary"};
  @media ${device.lg} {
    position: absolute;
    left: -40%;
    top: 50%;
    transform: rotate(90deg) translateX(-40%);
  }

  .icon {
    display: block;
    cursor: pointer;
    opacity: 0.9;

    @media ${device.lg} {
      transform: rotate(-90deg);
    }
  }
`;
