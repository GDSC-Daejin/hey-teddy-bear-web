import React from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { CardElementWrapper, CardList } from '../Home/styled';
import MemberCard from '../../components/common/MemberCard';
import { useGetScoreBoard } from '../../api/hooks/useGetScoreBoard';
import {
  listAnimate,
  listItemAnimate,
} from '../../components/common/motions/variants';

const Weekly = () => {
  const weeklyData = useGetScoreBoard({
    term: 'weekly',
    filter: 'to',
  });
  return (
    <>
      {weeklyData.data && (
        <LayoutContainer>
          <ContainerInner>
            <CardList variants={listAnimate} initial={'start'} animate={'end'}>
              {weeklyData.data.data.map((data, id) => (
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

export default Weekly;
