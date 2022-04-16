import React, { useState } from 'react';
import { useGetMonthlyScoreBoard } from '../../api/hooks/useGetMonthlyScoreBoard';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import MemberCard from '../../components/common/MemberCard';
import { Background, CardElementWrapper, CardList } from './styled';
import {
  listAnimate,
  listItemAnimate,
} from '../../components/common/motions/variants';
import API from '../../../src/api/';
import DetailMemberCard from '../../components/common/DetailMemberCard';
import { userStateDataType } from '../../types';
import { useGetUserState } from '../../api/hooks/useGetUserState';
import OutsideClickHandler from '../../utils/OutSideClickHandler';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

const Home = ({ filter }: any): JSX.Element => {
  const { scoreboard } = useGetMonthlyScoreBoard(filter);

  const [selected, setSelected] = useState<string>('');
  const [userState, setUserState] = useState<userStateDataType>();
  const detailCardHandler = async (data: string) => {
    const res = await API.getUserState(data);
    setUserState(res.data.data);
    setSelected(data);
  };
  return (
    <LayoutGroup>
      {scoreboard && (
        <LayoutContainer>
          <ContainerInner>
            <AnimatePresence>
              {selected && (
                <Background
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <OutsideClickHandler outsideClick={() => setSelected('')}>
                    <DetailMemberCard
                      userState={userState}
                      username={selected}
                    />
                  </OutsideClickHandler>
                </Background>
              )}
            </AnimatePresence>
            <CardList variants={listAnimate} initial={'start'} animate={'end'}>
              {scoreboard.map((scoreboard) => (
                <CardElementWrapper
                  key={scoreboard.username}
                  variants={listItemAnimate}
                  onClick={() => detailCardHandler(scoreboard.username)}
                >
                  <MemberCard {...scoreboard} />
                </CardElementWrapper>
              ))}
            </CardList>
          </ContainerInner>
        </LayoutContainer>
      )}
    </LayoutGroup>
  );
};

export default Home;
