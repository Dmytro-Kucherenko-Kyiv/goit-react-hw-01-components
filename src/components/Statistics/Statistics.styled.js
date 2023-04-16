import styled from "styled-components";

export const StatisticsContainer = styled.section`
	
`

export const StatList = styled.ul`
	list-style: none;
  display: flex;
	margin: 15px;
`
export const StatWrap = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 10px 20px;
	border: 1px solid ${props => props.theme.colors.grey};
`
export const Label = styled.p`
	margin: 0px;
	font-size: 14px;
`

export const Percentage = styled.p`
	margin: 0px;
	font-size: 18px;
`