import Profile from './social-profile/Profile'
import profile from './social-profile/user.json'
import Statistic from './statistic/Statistics'
import data from './statistic/data.json'
import FriendList from './friendlist/FriendList'
import friends from './friendlist/friends.json'
import TransactionHistory from './transaction-history/TransactionHistory'
import transactions from './transaction-history/transactions.json'


export const App = () => {
  return (
    <div>
      <Profile url={profile.avatar}
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes} />

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
