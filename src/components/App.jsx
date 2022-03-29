import Profile from './social-profile/Profile'
import profile from '../data/user.json'
import Statistic from './statistic/Statistics'
import data from '../data/data.json'
import FriendList from './friendlist/FriendList'
import friends from '../data/friends.json'
import TransactionHistory from './transaction-history/TransactionHistory'
import transactions from '../data//transactions.json'


export const App = () => {
  return (
    <div>
      <Profile avatar={profile.avatar}
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        stats={profile.stats}
      />

        <div>
          <Statistic title="Upload stats" stats={data} />
          </div>

        <div>
        <FriendList friends={friends} />,
        </div>

        <div>
        <TransactionHistory items={transactions} />;
        </div>
    </div>
  );
};
