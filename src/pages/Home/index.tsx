import React, { useEffect, useState } from 'react';
import { useGetScoreBoard } from '../../api/hooks/useGetScoreBoard';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import MemberCard from '../../components/common/MemberCard';
import { CardElementWrapper, CardListWrapper } from './styled';
import api from '../../api';
import { rowScoreBoardType } from '../../types';
import { AxiosResponse } from 'axios';

const Home = () => {
  const [data, setData] = useState<rowScoreBoardType>();
  const getScore = async () => {
    const scoreBoard: AxiosResponse<rowScoreBoardType> =
      await api.getScoreBoard({
        term: 'monthly',
        filter: 'to',
      });
    setData(scoreBoard.data);
  };
  useEffect(() => {
    getScore();
  }, []);

  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <CardListWrapper>
            {data?.data.map((data, id) => (
              <CardElementWrapper key={id}>
                <MemberCard data={data} />
              </CardElementWrapper>
            ))}
          </CardListWrapper>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
