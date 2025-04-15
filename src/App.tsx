import { SideBar } from './components';
import styles from './app.module.scss';

export const App = () => {
  return (
    <div className={styles.container}>
      <SideBar />
    </div>
  );
};

export default App;
