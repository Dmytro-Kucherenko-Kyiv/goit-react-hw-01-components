import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
	border-radius: 5px;
	text-align: center;
	overflow: hidden;
  margin: 1rem;
  width: 18rem;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const Description = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    margin: 0 0 0.6rem 0;
  }
`;

export const Photo = styled.img`
	width: 200px;
	heigth: 300px;
	border-radius: 50%;
	border: 1px solid ${props => props.theme.colors.black};
	margin: 2rem 4rem;

  &:hover {
    background: ${props => props.theme.colors.accent};
  }
`;

export const DescriptionName = styled.p`
	color: ${props => props.theme.colors.black};
	font-size: 1.25rem;
  font-weight: 500;

	&:hover {
		color: ${props => props.theme.colors.accent};
	}
`;

export const DescriptionText = styled.p`
	color: ${props => props.theme.colors.grey};
	font-size: 1.15rem;

	&:hover{
		text-shadow: 2px 2px 4px ${props => props.theme.colors.accent};
	}
`;

export const Stats = styled.ul`
	list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: ${props => props.theme.colors.light_grey};
  margin: 1rem 0 0 0;
`;

export const StatsWrap = styled.li`
	font-size: 1.25rem;
	display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.grey};

  :not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.grey};
  }

  & span:not(:last-child) {
    margin-bottom: 0.3rem;
  }

	& b {
    color: ${props => props.theme.colors.black};
  }
`;