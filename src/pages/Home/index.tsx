import React from 'react';
import { useGetScoreBoard } from '../../api/hooks/useGetScoreBoard';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Home = () => {
  const scoreBoard = useGetScoreBoard();
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          {scoreBoard.data && (
            <div>
              {scoreBoard.data.data.map((data, id) => (
                <div key={id}>
                  <img src={data.avatar} />
                  <div>{data.score}</div>
                  <div>{data.name}</div>
                </div>
              ))}
            </div>
          )}
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Home;
