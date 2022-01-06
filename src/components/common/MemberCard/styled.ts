import styled from 'styled-components';

export const MemberCardWrapper = styled.div`
  background: white;
  border-radius: 20px;
  border-style: solid;
  border-width: 0px;
  border-color: #f2f2f2;
  width: 200px;
  height: 250px;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    width: 130px;
    height: 200px;
  }
`;
export const MemberCardInner = styled.div`
  display: flex;
  padding: 20px 40px;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 20px;
  border-style: solid;
  border-width: 0px;
`;
export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
export const MemberName = styled.div`
  font-size: 20px;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  background: white;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
export const CardMargin = styled.div`
  height: 20px;
`;
export const MemberScore = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #a35d29;
  background: white;
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;
