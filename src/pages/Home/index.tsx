import React from 'react';
import { useGetScoreBoard } from '../../api/hooks/useGetScoreBoard';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import MemberCard from '../../components/common/MemberCard';
import { CardElementWrapper, CardList } from './styled';
import {
  listAnimate,
  listItemAnimate,
} from '../../components/common/motions/variants';

const Home = () => {
  const monthlyData = useGetScoreBoard({
    term: 'monthly',
    filter: 'to',
  });

  return (
    <>
      {monthlyData.data && (
        <LayoutContainer>
          <ContainerInner>
            <CardList variants={listAnimate} initial={'start'} animate={'end'}>
              {monthlyData.data.data.map((data, id) => (
                <CardElementWrapper key={id} variants={listItemAnimate}>
                  <MemberCard data={data} />
                </CardElementWrapper>
              ))}
            </CardList>
          </ContainerInner>
        </LayoutContainer>
      )}
    </>
  );
};

export default Home;
