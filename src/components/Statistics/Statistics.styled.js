import styled from "styled-components";

export const StatisticsContainer = styled.section`
	box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
	background-color: ${props => props.theme.colors.white};
`

export const Title = styled.h2`
	margin: 0px;
	font-size: 18px;
	font-weight: 500;
	text-align: center;
	color: ${props => props.theme.colors.grey};
`

export const StatList = styled.ul`
	list-style: none;
  display: flex;
	margin: 10px;
	padding: 0;
`

export const StatWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	padding: 10px 20px;
	border: 1px solid ${props => props.theme.colors.grey};
`
export const Label = styled.p`
	margin: 0px;
	font-size: 14px;
	color: ${props => props.theme.colors.white};
`

export const Percentage = styled.p`
	margin: 0px;
	font-size: 18px;
	font-weight: 600;
	color: ${props => props.theme.colors.white};
`