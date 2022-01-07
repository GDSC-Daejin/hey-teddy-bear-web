import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardElementWrapper = styled(motion.div)`
  width: 20%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 35px;

  @media (max-width: 1200px) {
    width: 25%;
  }

  @media (max-width: 1024px) {
    width: 33.3%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;
export const CardList = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
`;
