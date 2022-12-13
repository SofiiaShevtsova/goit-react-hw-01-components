import PropTypes from 'prop-types';
import styles from './profile.module.css'

export const ProfileCard = props => {
  const { avatar, username, tag, location, stats } = props;
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stats_item}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={styles.stats_item}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={styles.stats_item}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
