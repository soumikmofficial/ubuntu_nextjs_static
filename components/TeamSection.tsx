import { motion } from "framer-motion";
import styled from "styled-components";
import { team } from "../data";
import SinglePerson from "./singlePerson";

const personVariants = {
  visible: {
    transition: {
      staggerChildren: 0.7,
    },
  },
  hidden: {},
};

const imgVariants = {
  visible: {
    scale: 1,
    filter: "grayscale(0.5)",
    transition: {
      duration: 1,
    },
  },
  hidden: { filter: "grayscale(1)" },
};

const TeamSection: React.FC = () => {
  return (
    <Container>
      <h2>the team</h2>
      <motion.div
        className="person"
        variants={personVariants}
        initial="hidden"
        whileInView="visible"
      >
        {team.map((person) => (
          <SinglePerson person={person} key={person.id} />
        ))}
      </motion.div>
    </Container>
  );
};

export default TeamSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9rem 0;

  h2 {
    font-weight: normal;
    text-transform: capitalize;
    font-family: var(--font-banner);
    font-size: 3rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  .person {
    width: 90%;
    max-width: 1280px;
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
