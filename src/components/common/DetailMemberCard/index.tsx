import React, { useState } from 'react';
import { userStateDataType } from '../../../types';
import { useGetUserState } from '../../../api/hooks/useGetUserState';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import {
  CardMargin,
  MemberName,
  MemberScore,
  ProfileImage,
} from '../MemberCard/styled';

export const DetailMemberCardInner = styled(motion.div)`
  display: flex;
  padding: 20px 30px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border-style: solid;
  border-width: 0;
`;
export const DetailMemberCardWrapper = styled(motion.div)`
  background: #fcfcfc;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #f1f1f1;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.04);
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;
const Score = styled(motion.div)`
  font-size: 16px;
  font-weight: bold;
  color: #a35d29;
`;
const ScoreNameWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ScoreSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MemberBlock = styled(motion.div)`
  padding: 5px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const MemberBlockName = styled(motion.div)`
  font-size: 20px;
  color: black;
  width: 200px;
`;
const MemberBlockScore = styled(motion.div)`
  font-size: 20px;
  font-weight: bold;
  color: #a35d29;
  width: 30px;
  text-align: center;
`;
const ScoreSelectWrapper = styled(motion.div)`
  margin: 20px 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;
const ScoreSelect = styled(motion.div)<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2px;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
  ${({ selected }) =>
    selected &&
    css`
      border-bottom: 3px solid #a35d29;
    `}
`;

interface memberCardProps {
  userState: userStateDataType | undefined;
  username: string;
}

const DetailMemberCard: React.FC<memberCardProps> = ({
  userState,
  username,
}) => {
  const [given, setGiven] = useState<boolean>(true);

  return (
    <div>
      <DetailMemberCardWrapper layoutId={`memberCard-${username}`}>
        {userState && (
          <DetailMemberCardInner>
            <ProfileWrapper>
              <ProfileImage
                src={userState.user.avatar}
                layoutId={`memberCard-avatar-${username}`}
              />
              <CardMargin />
              <ScoreNameWrapper>
                <MemberName layoutId={`memberCard-name-${username}`}>
                  {userState.user.name}
                </MemberName>
                <Score>보낸 곰돌이: {userState.user.given}</Score>
                <Score>받은 곰돌이: {userState.user.received}</Score>
              </ScoreNameWrapper>
            </ProfileWrapper>
            <ScoreSelectWrapper>
              <ScoreSelect
                selected={given === true}
                onClick={() => {
                  setGiven(true);
                }}
              >
                내가 준 사람
              </ScoreSelect>
              <ScoreSelect
                selected={given === false}
                onClick={() => {
                  setGiven(false);
                }}
              >
                나에게 준 사람
              </ScoreSelect>
            </ScoreSelectWrapper>
            {given ? (
              <ScoreSection>
                {userState.given.map((data) => (
                  <MemberBlock key={`memberBlock-${data.username}`}>
                    <MemberBlockName> {data.name}</MemberBlockName>
                    <MemberBlockScore>{data.scoreinc}</MemberBlockScore>
                  </MemberBlock>
                ))}
              </ScoreSection>
            ) : (
              <ScoreSection>
                {userState.received.map((data) => (
                  <MemberBlock key={`memberBlock-${data.username}`}>
                    <MemberBlockName> {data.name}</MemberBlockName>
                    <MemberBlockScore>{data.scoreinc}</MemberBlockScore>
                  </MemberBlock>
                ))}
              </ScoreSection>
            )}
          </DetailMemberCardInner>
        )}
      </DetailMemberCardWrapper>
    </div>
  );
};

export default DetailMemberCard;
