import { motion } from "framer-motion";
import styled from "styled-components";
import { team } from "../data";

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
          <SinglePerson>
            <motion.img
              src={person.src}
              alt={person.name}
              variants={imgVariants}
            />
            <h4 className="name">{person.name}</h4>
            <p className="title">{person.title}</p>
            <button>more...</button>
          </SinglePerson>
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
    width: 80%;
    max-width: 1280px;
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const SinglePerson = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  max-width: 13rem;
  width: 100%;
  img {
    width: 100%;
    max-width: 23rem;
    border-radius: 50%;
  }
  .name {
    margin-top: 1rem;
    font-family: var(--font-sans-3);
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  .title {
    font-family: var(--font-sans-1);
    font-size: 1.1rem;
  }

  button {
    background: none;
    border: none;
    text-decoration: underline;
  }
`;
