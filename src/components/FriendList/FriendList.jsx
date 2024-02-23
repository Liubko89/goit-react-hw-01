import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.friendListItem}>
            <div className={css.wrap}>
              <img className={css.image} src={avatar} alt={name} width="48" />
              <p className={css.name}>{name}</p>
              {isOnline ? (
                <p className={css.online}>Online</p>
              ) : (
                <p className={css.offline}>Offline</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
