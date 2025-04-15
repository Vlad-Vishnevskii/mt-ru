import { useRef } from 'react';
import { SideBar, Header, Post } from './components';
import styles from './app.module.scss';

export const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.app}>
      <SideBar />
      <div ref={scrollContainerRef} className={styles.app_container}>
        <Header scrollContainerRef={scrollContainerRef} />
        <ul className={styles.app_postList}>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
