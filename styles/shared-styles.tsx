import styled from "styled-components";
import { device } from "../utils/breakpoints";

export const OrderBtn = styled.button`
  display: none;
  padding: 0.5rem 2rem;
  color: white;
  margin-left: auto;
  background: var(--col-accent);
  border-radius: 0.3rem;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  font-weight: bold;

  @media ${device.lg} {
    display: block;
  }
`;
