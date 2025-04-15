//import { Link } from 'react-router-dom';
import { useSidebar } from './sidebar.hooks';
import { InfoIcon } from '../../icons';
import styles from './sidebar.module.scss';

export const SideBar = () => {
  const { navigationItems } = useSidebar();
  return (
    <div className={styles.sidebar}>
      <a href="">
        <img src="./logo.png" alt="MT.RU"></img>
      </a>
      <ul className={styles.sidebar_list}>
        {navigationItems.map(item => (
          <li className={styles.sidebar_link} key={item.id}>
            {item.icon}
            {item.title}
          </li>
        ))}
      </ul>
      <div className={styles.sidebar_info}>
        <InfoIcon />
        <span>О компании...</span>
      </div>
    </div>
  );
};
