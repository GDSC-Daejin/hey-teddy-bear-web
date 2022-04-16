import React, { useEffect, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { CardElementWrapper, CardList } from '../Home/styled';
import MemberCard from '../../components/common/MemberCard';
import { useGetWeeklyScoreBoard } from '../../api/hooks/useGetWeeklyScoreBoard';
import {
  listAnimate,
  listItemAnimate,
} from '../../components/common/motions/variants';

const Weekly = ({ filter }: any) => {
  const { data } = useGetWeeklyScoreBoard(filter);

  return (
    <>
      {data && (
        <LayoutContainer>
          <ContainerInner>
            <CardList variants={listAnimate} initial={'start'} animate={'end'}>
              {data.map((data, id) => (
                <CardElementWrapper key={id} variants={listItemAnimate}>
                  <MemberCard {...data} />
                </CardElementWrapper>
              ))}
            </CardList>
          </ContainerInner>
        </LayoutContainer>
      )}
    </>
  );
};

export default Weekly;
