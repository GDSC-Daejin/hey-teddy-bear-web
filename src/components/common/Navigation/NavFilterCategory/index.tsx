import { motion } from 'framer-motion';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import './NavfilterCategory.css';
import { StyledFilterLabel, StyledFilterLi, StyledFilterUl } from './styled';

type Props = {
  filterData: { label: string; route: string }[];
  setFilter: (setSelect: string) => void;
  filter: string;
};
const NavFilterCategory = ({ filterData, filter, setFilter }: Props) => {
  return (
    <>
      <nav>
        <StyledFilterUl>
          {filterData.map((item, id) => (
            <>
              <StyledFilterLi
                key={item.label}
                className={item.route === filter ? 'selectedFilter' : ''}
                onClick={() => {
                  setFilter(item.route);
                }}
              >
                <StyledFilterLabel
                  className={item.route === filter ? 'selectedFilter' : ''}
                >
                  {item.label}
                </StyledFilterLabel>
                {item.route === filter ? (
                  <motion.div
                    className="underlineFilter"
                    layoutId="underlineFilter"
                  />
                ) : null}
              </StyledFilterLi>
            </>
          ))}
        </StyledFilterUl>
      </nav>
    </>
  );
};

export default NavFilterCategory;
