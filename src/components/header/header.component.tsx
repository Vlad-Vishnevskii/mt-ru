import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';

interface Props {
  scrollContainerRef: React.RefObject<Element | null>;
}

export const Header: React.FC<Props> = ({ scrollContainerRef }) => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowHeader(container.scrollTop <= 0);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  return (
    <header
      className={classNames(styles.header, {
        [styles.header_hide]: !showHeader,
      })}
    >
      <div className={styles.header_container}>
        <img src="./avatar.png" alt="Avatar" width={38} height={38} />
        <h3>Лента</h3>
      </div>
    </header>
  );
};
