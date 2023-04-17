import styled from "styled-components";

export const Table = styled.table`
	width: 400px;
  background: ${props => props.theme.colors.white};
  border-radius: 7px;
  color: ${props => props.theme.colors.black};
  overflow: hidden;
  margin: 5px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  border-collapse: collapse;
  text-align: center;
`

export const THead = styled.thead`
	background-color: ${props => props.theme.colors.aqua};
	text-transform: uppercase;
	color: ${props => props.theme.colors.white};
	font-size: 18px;
	font-weight: 500;
`

export const Tr = styled.tr`
	font-size: 18px;
	font-weight: 500;
  border: 1px solid ${props => props.theme.colors.grey};

  & td {
    font-weight: lighter;
    border: 1px solid ${props => props.theme.colors.grey};
  }

  &:hover {
    background: ${props => props.theme.colors.accent};
  }
`