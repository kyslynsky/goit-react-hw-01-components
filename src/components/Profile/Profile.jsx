import { PropTypes } from 'prop-types';
import {
  ProfileContainer,
  ProfileImg,
  UserInfo,
  UserStats,
  StatsItem,
  UserName,
  TotalInfo,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <UserInfo>
        <ProfileImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <TotalInfo>@{tag}</TotalInfo>
        <TotalInfo>{location}</TotalInfo>
      </UserInfo>

      <UserStats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </UserStats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
