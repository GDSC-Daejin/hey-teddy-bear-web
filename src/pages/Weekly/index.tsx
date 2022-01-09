import React from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { CardElementWrapper, CardList } from '../Home/styled';
import MemberCard from '../../components/common/MemberCard';
import { useGetWeeklyScoreBoard } from '../../api/hooks/useGetScoreBoard';
import {
  listAnimate,
  listItemAnimate,
} from '../../components/common/motions/variants';

const Weekly = ({ filter }: any) => {
  const weeklyData = useGetWeeklyScoreBoard(filter);
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <CardList variants={listAnimate} initial={'start'} animate={'end'}>
            {weeklyData.data?.data.map((data, id) => (
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

export default Weekly;
