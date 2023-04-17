import styled from "styled-components";

export const FriendItem = styled.li`
	display: flex;
	flex-direction: row;
	gap: 10px;
	border-radius: 5px;
	box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);

`

export const FriendStatus = styled.span`
	width: 12px;
  height: 12px;
  border-radius: 50%;
	margin: 1rem;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`

export const FriendAvatar = styled.img`
	border-radius: 5px;
`

export const FriendName = styled.p`
	margin: auto;
	font-size: 25px;
	font-weight: 600;
	color: ${props => props.theme.colors.black};
`