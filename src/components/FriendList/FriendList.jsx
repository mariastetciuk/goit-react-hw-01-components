import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(item => (
        <FriendItem
          key={item.id}
          name={item.name}
          avatar={item.avatar}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
