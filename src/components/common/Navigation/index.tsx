import React, { useEffect, useState } from 'react';

import {
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  SchoolName,
  SchoolNameUni,
  StyledImg,
  StyledLogo,
  StyledLogoWrapper,
} from './styled';
import GDSCLogo from '../../../img/GDSC-LOGO.svg';
import WideNavCategory from './WideNavCategory';
import { useLocation } from 'react-router';
import './Navigation.css';

const Navigation: React.FC = () => {
  const locaton = useLocation();
  const [routeStyle, setRoutStyle] = useState<string>('/');
  useEffect(() => {
    setRoutStyle(locaton.pathname);
  });
  return (
    <NavDesign className={'white'}>
      <NavInner>
        <NavTaskWrapper>
          <NavTask>
            <StyledLogoWrapper>
              <StyledLogo color={'#A35D29'}>teddybear </StyledLogo>
              <StyledLogo color={'#4e4e4e'}>dashboard </StyledLogo>
            </StyledLogoWrapper>
            <StyledLogoWrapper>
              <StyledImg src={GDSCLogo} alt="GDSC-Chapter-Logo" height={40} />
              <SchoolName>powered by GDSC DJU</SchoolName>
            </StyledLogoWrapper>
          </NavTask>
        </NavTaskWrapper>
        <WideNavCategory routeStyle={routeStyle} />
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
