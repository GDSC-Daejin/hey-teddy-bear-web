import React, { useEffect, useState } from 'react';
import { useGetScoreBoard } from '../../api/hooks/useGetScoreBoard';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import MemberCard from '../../components/common/MemberCard';
import { CardElementWrapper, CardListWrapper } from './styled';
import api from '../../api';
import { rowScoreBoardType } from '../../types';
import { AxiosResponse } from 'axios';

const Home = () => {
  const monthlyData = useGetScoreBoard({
    term: 'monthly',
    filter: 'to',
  });

  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          {monthlyData.data && (
            <CardListWrapper>
              {monthlyData.data.data.map((data, id) => (
                <CardElementWrapper key={id}>
                  <MemberCard data={data} />
                </CardElementWrapper>
              ))}
            </CardListWrapper>
          )}
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
