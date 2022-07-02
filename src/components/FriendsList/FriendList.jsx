import { PropTypes } from 'prop-types';
import {
  Friends,
  FriendCard,
  OnlineChip,
  FriendImg,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendCard key={id}>
          <OnlineChip isOnline={isOnline}></OnlineChip>
          <FriendImg src={avatar} alt="User avatar" />
          <FriendName>{name}</FriendName>
        </FriendCard>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
