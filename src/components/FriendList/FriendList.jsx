export const FriendList = props => {
  const { friends } = props;
  return (
    <ul className="friend-list">{friends.map(elem => FriendListItem(elem))}</ul>
  );
};

const FriendListItem = elem => {
  const { isOnline, avatar, name, id } = elem;
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
