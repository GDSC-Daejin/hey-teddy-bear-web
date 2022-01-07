import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MemberCardWrapper = styled(motion.div)`
  background: #fcfcfc;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #f1f1f1;
  width: 200px;
  height: 250px;
  display: flex;
  justify-content: center;
  transition: 250ms;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.04);
  @media (max-width: ${(props) => props.theme.windowSize.tablet}) {
    width: 180px;
    height: 225px;
  }
`;
export const MemberCardInner = styled.div`
  display: flex;
  padding: 20px 40px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border-style: solid;
  border-width: 0;
`;
export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: #f2f2f2;

  @media (max-width: ${(props) => props.theme.windowSize.tablet}) {
    width: 60px;
    height: 60px;
  }
`;
export const MemberName = styled.div`
  font-size: 20px;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}) {
    font-size: 16px;
  }
`;
export const CardMargin = styled.div`
  height: 20px;
`;
export const MemberScore = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #a35d29;

  @media (max-width: ${(props) => props.theme.windowSize.tablet}) {
    font-size: 24px;
  }
`;
