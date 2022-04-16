import React, { useState } from 'react';
import {
  rowScoreBoardType,
  scoreBoardType,
  userDataType,
  userStateDataType,
} from '../../../types';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import {
  Background,
  CardElementWrapper,
  CardList,
} from '../../../pages/Home/styled';
import OutsideClickHandler from '../../../utils/OutSideClickHandler';
import DetailMemberCard from '../DetailMemberCard';
import { listAnimate, listItemAnimate } from '../motions/variants';
import MemberCard from '../MemberCard';
import API from '../../../api';

const Dashboard: React.FC<{ scoreboard: userDataType[] | undefined }> = ({
  scoreboard,
}) => {
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

export default Dashboard;
