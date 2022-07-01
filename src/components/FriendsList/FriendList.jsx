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
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <OnlineChip isOnline={friend.isOnline}></OnlineChip>
          <FriendImg src={friend.avatar} alt="User avatar" />
          <FriendName>{friend.name}</FriendName>
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
