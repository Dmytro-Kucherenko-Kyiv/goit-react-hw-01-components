import PropTypes from 'prop-types';
import { Label, Percentage, StatisticsContainer, StatList, StatWrap, Title } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
	return (
		<StatisticsContainer>
			{title && <Title key={title}>{title.toUpperCase()}</Title>}
			<StatList>
				{stats.map(({ id, label, percentage }) => {
					return (
						<li key={id}  style={{backgroundColor: getRandomHexColor()}}>
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

Statistics.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired
}