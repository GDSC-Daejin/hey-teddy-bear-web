import React, { useEffect, useState } from 'react';

import {
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  SchoolName,
  StyledImg,
  StyledLogo,
  StyledLogoWrapper,
} from './styled';
import GDSCLogo from '../../../img/GDSC-LOGO.svg';
import { useLocation } from 'react-router';
import './Navigation.css';
import NavigationCategory from './NavigationCategory';

const Navigation: React.FC = () => {
  const locaton = useLocation();
  const routeData = [
    { label: 'Monthly', route: '/' },
    { label: 'Weekly', route: '/weekly' },
  ];
  const [route, setRoute] = useState<string>('/');
  useEffect(() => {
    setRoute(locaton.pathname);
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
        <NavigationCategory
          routeData={routeData}
          setSelect={setRoute}
          select={route}
        />
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
