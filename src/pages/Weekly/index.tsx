import React, { useEffect, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { Background, CardElementWrapper, CardList } from '../Home/styled';
import MemberCard from '../../components/common/MemberCard';
import { useGetWeeklyScoreBoard } from '../../api/hooks/useGetWeeklyScoreBoard';
import {
  listAnimate,
  listItemAnimate,
} from '../../components/common/motions/variants';
import { AnimatePresence } from 'framer-motion';
import OutsideClickHandler from '../../utils/OutSideClickHandler';
import DetailMemberCard from '../../components/common/DetailMemberCard';
import { userStateDataType } from '../../types';
import API from '../../api';

const Weekly = ({ filter }: any) => {
  const { scoreboard } = useGetWeeklyScoreBoard(filter);
  const [selected, setSelected] = useState<string>('');
  const [userState, setUserState] = useState<userStateDataType>();
  const detailCardHandler = async (data: string) => {
    const res = await API.getUserState(data);
    setUserState(res.data.data);
    setSelected(data);
  };
  return (
    <>
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
    </>
  );
};

export default Weekly;
