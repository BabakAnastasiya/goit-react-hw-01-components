import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile(props) {
    const { username, tag, location, avatar, stats } = props;
    return <div className={s.profile}>
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className={s.avatar}
            />
            <p className={s.username}>{username}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.item}>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{stats.followers}</span>
            </li>
            <li className={s.item}>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{stats.views}</span>
            </li>
            <li className={s.item}>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    stats: PropTypes.objectOf(
        PropTypes.number
      ), 
}

export default Profile