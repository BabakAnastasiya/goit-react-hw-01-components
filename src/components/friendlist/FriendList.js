import PropTypes from 'prop-types';

function FriendList ({friends}){
    return <ul className="friend-list">
    {friends.map (friend=>{
        return (<li key={friend.id} className="item">
        <span className="status">{friend.isOnline}</span>
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
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