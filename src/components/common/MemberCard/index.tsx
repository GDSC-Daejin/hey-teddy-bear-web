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
      <MemberCardWrapper>
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
