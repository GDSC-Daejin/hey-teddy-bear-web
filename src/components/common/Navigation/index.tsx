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
import NavigationCategory from './NavRouteCategory';
import NavRouteCategory from './NavRouteCategory';
import NavFilterCategory from './NavFilterCategory';

type Iprops = {
  setFilter: (filter: string) => void;
  filter: string;
};

const Navigation = ({ setFilter, filter }: Iprops) => {
  const locaton = useLocation();
  const routeData = [
    { label: 'Monthly', route: '/' },
    { label: 'Weekly', route: '/weekly' },
  ];
  const filterData = [
    { label: 'To', route: 'to' },
    { label: 'From', route: 'from' },
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
        <NavTaskWrapper>
          <NavFilterCategory
            filterData={filterData}
            setFilter={setFilter}
            filter={filter}
          />
          <NavRouteCategory
            routeData={routeData}
            setSelect={setRoute}
            select={route}
          />
        </NavTaskWrapper>
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
