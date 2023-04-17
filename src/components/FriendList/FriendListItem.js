import PropTypes from 'prop-types';
import { FriendAvatar, FriendItem, FriendName, FriendStatus } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
				return (
					<FriendItem>
						<FriendStatus style={{ background: isOnline ? 'green' : 'red' }}>{isOnline}</FriendStatus>
						<FriendAvatar src={avatar} alt={name} width="48" />
						<FriendName>{name}</FriendName>
					</FriendItem>
				)
			}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};