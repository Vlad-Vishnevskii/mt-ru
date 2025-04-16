import { useRef, useEffect, useState } from 'react';
import { SideBar, Header, Post } from './components';
import { PostType } from './types';
import styles from './app.module.scss';

export const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<PostType[] | []>([]);
  const [postImages, setPostImages] = useState<string[]>([]);

  const fetchPosts = async () => {
    try {
      const postsResponse = await fetch('/api/posts');
      const postsData = await postsResponse.json();
      setPosts(postsData);

      const images = await Promise.all(
        postsData.map(async () => {
          try {
            const res = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await res.json();
            return data[0]?.url ?? './thumb.png';
          } catch {
            return './thumb.png';
          }
        }),
      );

      setPostImages(images);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.app}>
      <SideBar />
      <div ref={scrollContainerRef} className={styles.app_container}>
        <Header scrollContainerRef={scrollContainerRef} />
        {!!postImages.length && (
          <ul className={styles.app_postList}>
            {posts.map((item, index) => (
              <li key={item.id}>
                <Post imgSrc={postImages[index]} {...item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
