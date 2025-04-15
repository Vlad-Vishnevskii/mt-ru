import styles from './post.module.scss';

type Props = {
  title: string;
  text: string;
  date: string;
  imgSrc: string;
};

export const Post: React.FC<Props> = ({ title, text, date, imgSrc }) => {
  return (
    <div className={styles.post}>
      <img src={imgSrc} alt="" />
      <h3 className={styles.post_title}>
        {title}
        <span className={styles.post_date}>{date}</span>
      </h3>
      <p className={styles.post_text}>{text}</p>
    </div>
  );
};
