//import { Link } from 'react-router-dom';
import { useSidebar } from './sidebar.hooks';
import styles from './sidebar.module.scss';

export const SideBar = () => {
  const { navigationItems } = useSidebar();
  return (
    <div className={styles.sidebar}>
      <a href="">
        <img src="./logo.png" alt="MT.RU"></img>
      </a>
      <ul>
        {navigationItems.map(item => (
          <li key={item.id}>
            {item.icon}
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
