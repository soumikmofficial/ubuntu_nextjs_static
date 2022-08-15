import { motion } from "framer-motion";
import styled from "styled-components";

const containerVariants = {
  visible: {
    height: "90vh",
    transition: {
      type: "tween",
    },
  },
  hidden: {
    height: 0,
    transition: {
      type: "tween",
    },
  },
};

const Menu: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="hidden"
    >
      Menu
    </Container>
  );
};

export default Menu;

const Container = styled(motion.div)`
  background: red;
  height: 90vh;
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  z-index: 100;
`;
