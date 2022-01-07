import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledFilterUl = styled(motion.ul)`
  display: flex;
  padding-left: 0;
  justify-content: flex-start;
  align-items: center;
`;
export const StyledFilterLi = styled(motion.li)`
  background: transparent;
  cursor: pointer;
  height: 24px;
  padding: 11px 20px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  font-size: 14px;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    margin: 0 2px;
  }
`;

export const StyledFilterLabel = styled(motion.div)`
  z-index: 1;
  background: transparent;
  color: #cecece;
`;
