import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile(props) {
    const { url, username, tag, location, followers, views, likes } = props;
    return <div className={s.profile}>
        <div className="description">
            <img
                src={url}
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
                <span className={s.quantity}>{followers}</span>
            </li>
            <li className={s.item}>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{views}</span>
            </li>
            <li className={s.item}>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
}

Profile.propTypes = {
    url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    followers: PropTypes.number.isRequired, 
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired
}

export default Profile