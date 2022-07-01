import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 40vw;
  margin: 0 auto;
  padding-top: 8%;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 10vw;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-top: 12%;
  font-weight: 500;
  font-size: 2.5vw;
`;

export const TotalInfo = styled.p`
  margin-top: 4%;
  color: grey;
  font-size: 2vw;
`;

export const UserStats = styled.ul`
  display: flex;
  margin-top: 12%;
  background-color: #e7ebf0;
  border-radius: 0 0 5px 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 3);
  padding: 5%;
  border-top: 1px solid lightgrey;
  border-bottom: none;

  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;

export const Label = styled.span`
  color: grey;
  font-size: 1.7vw;
`;

export const Quantity = styled.span`
  font-weight: 500;
  font-size: 1.9vw;
  line-height: 1.8;
`;
