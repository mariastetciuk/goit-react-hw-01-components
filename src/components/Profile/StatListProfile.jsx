import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function StatListProfile({ stats }) {
  const itemsStats = [];
  for (const key in stats) {
    itemsStats.push(
      <li key={key}>
        <span className={css.label}>{key}</span>
        <span className={css.quantity}>{stats[key]}</span>
      </li>
    );
  }
  return itemsStats;
}

StatListProfile.protoTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
