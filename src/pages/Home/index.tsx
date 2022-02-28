import React from 'react';
import { useGetMonthlyScoreBoard } from '../../api/hooks/useGetMonthlyScoreBoard';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import MemberCard from '../../components/common/MemberCard';
import { CardElementWrapper, CardList } from './styled';
import {
  listAnimate,
  listItemAnimate,
} from '../../components/common/motions/variants';
import API from '../../../src/api/';

const Home = ({ filter }: any): JSX.Element => {
  const { data } = useGetMonthlyScoreBoard(filter);
  return (
    <>
      {data && (
        <LayoutContainer>
          <ContainerInner>
            <CardList variants={listAnimate} initial={'start'} animate={'end'}>
              {data.map((data, id) => (
                <CardElementWrapper
                  key={id}
                  variants={listItemAnimate}
                  onClick={() => {
                    API.getUserState(data.username);
                  }}
                >
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
