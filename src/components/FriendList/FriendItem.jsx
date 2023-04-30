import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';
export default function FriendItem({ name, avatar, isOnline, id }) {
  return (
    <li className={css.item} key={id}>
      <span
        className={clsx(css.status, isOnline ? css.isOnline : css.isOfline)}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
