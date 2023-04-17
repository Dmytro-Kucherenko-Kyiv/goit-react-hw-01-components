import PropTypes from 'prop-types';
import { Description, DescriptionName, DescriptionText, Photo, ProfileContainer, Stats, StatsWrap } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
	return (
		<ProfileContainer>
			<Description>
				<Photo
					src={avatar}
					alt="User avatar"
					
				/>
				<DescriptionName>{username}</DescriptionName>
				<DescriptionText>@{tag}</DescriptionText>
				<DescriptionText>{location}</DescriptionText>
			</Description>

			<Stats>
				<StatsWrap>
					<span >Followers</span>
					<span ><b>{stats.followers}</b></span>
				</StatsWrap>
				<StatsWrap>
					<span >Views</span>
					<span ><b>{stats.views}</b></span>
				</StatsWrap>
				<StatsWrap>
					<span >Likes</span>
					<span ><b>{stats.likes}</b></span>
				</StatsWrap>
			</Stats>
		</ProfileContainer>
	)
};

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.shape({
    followers: PropTypes.number,
		views: PropTypes.number,
		likes: PropTypes.number
  }).isRequired
}