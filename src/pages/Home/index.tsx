import React from 'react';
import { useGetMonthlyScoreBoard } from '../../api/hooks/useGetScoreBoard';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import MemberCard from '../../components/common/MemberCard';
import { CardElementWrapper, CardList } from './styled';
import {
  listAnimate,
  listItemAnimate,
} from '../../components/common/motions/variants';

const Home = ({ filter }: any): JSX.Element => {
  const monthlyData = useGetMonthlyScoreBoard(filter);

  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <CardList variants={listAnimate} initial={'start'} animate={'end'}>
            {monthlyData.data?.data.map((data, id) => (
              <CardElementWrapper key={id} variants={listItemAnimate}>
                <MemberCard data={data} />
              </CardElementWrapper>
            ))}
          </CardList>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
