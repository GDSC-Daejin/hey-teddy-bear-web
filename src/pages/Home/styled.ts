import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardElementWrapper = styled(motion.div)`
  width: 20%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 35px;
  @media (max-width: 500px) {
    width: 50%;
  }
`;
export const CardList = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
`;
