import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendsList';
import { TransactionHistory } from './TransactionHistory';
import { Container } from './Container';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export function getStatsCount() {
  const quantity = Object.keys(data).length;
  return quantity;
}
