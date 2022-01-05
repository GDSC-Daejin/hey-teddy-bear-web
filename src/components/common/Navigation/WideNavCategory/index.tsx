import React from 'react';
import { NavTask, NavTaskWrapper, StyledLink, WideNavigation } from '../styled';
import { useNavigate } from 'react-router-dom';

const WideNavCategory = ({ routeStyle }: any) => {
  const navigate = useNavigate();
  return (
    <>
      <WideNavigation>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink
              onClick={() => {
                navigate('/');
              }}
              className={routeStyle == '/' ? 'active' : 'unActive'}
            >
              Monthly
            </StyledLink>
          </NavTask>
          <NavTask>
            <StyledLink
              onClick={() => {
                navigate('/weekly');
              }}
              className={routeStyle == '/weekly' ? 'active' : 'unActive'}
            >
              Weekly
            </StyledLink>
          </NavTask>
        </NavTaskWrapper>
      </WideNavigation>
    </>
  );
};

export default WideNavCategory;
