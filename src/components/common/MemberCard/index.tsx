import React from 'react';
import {
  CardMargin,
  MemberCardInner,
  MemberCardWrapper,
  MemberName,
  MemberScore,
  ProfileImage,
} from './styled';

export type Iprops = {
  data: {
    username: string;
    name: string;
    avatar: string;
    memberType: string;
    score: number;
  };
};

const MemberCard = (props: Iprops) => {
  return (
    <>
      <MemberCardWrapper
        whileHover={{
          borderColor: 'transparent',
          background: 'white',
          boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.06)',
        }}
      >
        <MemberCardInner>
          <ProfileImage src={props.data.avatar} />
          <CardMargin />
          <MemberName>{props.data.name}</MemberName>
          <CardMargin />
          <MemberScore>{props.data.score}</MemberScore>
        </MemberCardInner>
      </MemberCardWrapper>
    </>
  );
};

export default MemberCard;
