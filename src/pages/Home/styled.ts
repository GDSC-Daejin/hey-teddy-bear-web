import styled from 'styled-components';

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CardElementWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 35px;
  @media (max-width: 500px) {
    width: 50%;
  }
`;
