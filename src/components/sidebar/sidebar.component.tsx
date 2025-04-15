//import { Link } from 'react-router-dom';
import { useSidebar } from './sidebar.hooks';
import { InfoIcon } from '../../icons';
import styles from './sidebar.module.scss';

export const SideBar = () => {
  const { navigationItems } = useSidebar();
  return (
    <div className={styles.sidebar}>
      <a className={styles.sidebar_logo} href="">
        <img src="./logo.png" alt="MT.RU"></img>
      </a>
      <ul className={styles.sidebar_list}>
        {navigationItems.map(item => (
          <li className={styles.sidebar_link} key={item.id}>
            <div className={styles.sidebar_icon}>{item.icon}</div>
            <div className={styles.sidebar_item}>{item.title}</div>
            {!!item.notifiCount && (
              <div className={styles.sidebar_notifiCount}>{item.notifiCount}</div>
            )}
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
