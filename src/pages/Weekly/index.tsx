import React, { useEffect, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { CardElementWrapper, CardListWrapper } from '../Home/styled';
import MemberCard from '../../components/common/MemberCard';
import { useGetScoreBoard } from '../../api/hooks/useGetScoreBoard';
import { rowScoreBoardType } from '../../types';
import { AxiosResponse } from 'axios';
import api from '../../api';

const Weekly = () => {
  const weeklyData = useGetScoreBoard({
    term: 'weekly',
    filter: 'to',
  });
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          {weeklyData.data && (
            <CardListWrapper>
              {weeklyData.data.data.map((data, id) => (
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

export default Weekly;
