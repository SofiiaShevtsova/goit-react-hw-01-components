import PropTypes from 'prop-types';
import styles from './friendList.module.css'

export const FriendList = props => {
  const { friends } = props;
  return (
    <ul className={styles.friend_list}>{friends.map(elem => FriendListItem(elem))}</ul>
  );
};

const FriendListItem = elem => {
  const { isOnline, avatar, name, id } = elem;
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline? styles.status_on: styles.status_of}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
