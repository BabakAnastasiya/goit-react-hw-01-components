import PropTypes from 'prop-types';
import s from './FriendList.module.css'

function FriendList ({friends}){
    return <ul className={s.friendList}>
    {friends.map (friend=>{
        return (<li key={friend.id} className={s.item}>
                  {friend.isOnline === true && <span className={s.status_true}>{friend.isOnline}</span>}
                  {friend.isOnline === false && <span className={s.status_false}>{friend.isOnline}</span>}
        <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={s.name}>{friend.name}</p>
      </li>)})}
  </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline : PropTypes.bool.isRequired,
        })
    )
}

export default FriendList;