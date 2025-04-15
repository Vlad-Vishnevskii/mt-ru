import { useRef, useEffect, useState } from 'react';
import { SideBar, Header, Post } from './components';
import { PostType } from './types';
import styles from './app.module.scss';

export const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<PostType[] | []>([]);
  const [postImage, setPostImage] = useState('');

  const fetchData = async () => {
    try {
      const postsResponse = await fetch('/api/posts');
      const postsData = await postsResponse.json();
      setPosts(postsData);

      const catResponse = await fetch('https://api.thecatapi.com/v1/images/search');
      const catData = await catResponse.json();
      const catUrl = catData[0]?.url ?? './thumb.png';
      setPostImage(catUrl);
    } catch (error) {
      console.error('Error fetching data:', error);
      setPostImage('./thumb.png');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <SideBar />
      <div ref={scrollContainerRef} className={styles.app_container}>
        <Header scrollContainerRef={scrollContainerRef} />
        {postImage && (
          <ul className={styles.app_postList}>
            {posts.map(item => (
              <li key={item.id}>
                <Post imgSrc={postImage} {...item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
