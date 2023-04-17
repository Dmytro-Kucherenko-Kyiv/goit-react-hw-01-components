import PropTypes from 'prop-types';
import { THead, Table, Tr } from './Transaction.styled';
/* import { ListFriend } from './FriendList.styled'; */

export const TransactionHistory = ({items}) => {
	return (
		<Table>
			<THead>
				<Tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</Tr>
			</THead>
		
			{items.map(({ id, type, amount, currency }) => {
				return (
					<tbody key={id}>
						<Tr>
							<td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
							<td>{amount}</td>
							<td>{currency}</td>
						</Tr>
					</tbody>
				)
			})}
		</Table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};