/* import PropTypes from 'prop-types'; */
import { Label, Percentage, StatisticsContainer, StatList, StatWrap } from './Statistics.styled';

export const Statistics = ({ stats }) => {
	return (
		<StatisticsContainer>
{/*   		<h2 class="title">Upload stats</h2> */}

			<StatList>
				{stats.map(({ id, label, percentage }) => {
					return (
						<li key={id} class="item">
							<StatWrap>
								<Label>{label}</Label>
								<Percentage>{percentage}%</Percentage>
							</StatWrap>
						</li>)
				})}
  </StatList>
</StatisticsContainer>
	)
}