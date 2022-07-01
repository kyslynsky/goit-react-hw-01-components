import styled from 'styled-components';

export const Friends = styled.ul`
  margin: 40px auto 0;
  width: 40vw;
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  width: 30vw;
  margin: 0 auto;
  padding: 2% 5%;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  &:not(:last-child) {
    margin-bottom: 3%;
  }
`;

export const OnlineChip = styled.span`
  width: 1em;
  height: 1em;
  margin-right: 6%;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'tomato')};
`;

export const FriendImg = styled.img`
  width: 7vw;
  margin-right: 6%;
`;

export const FriendName = styled.p`
  font-weight: 500;
  margin-right: 7%;
  font-size: 2vw;
`;
