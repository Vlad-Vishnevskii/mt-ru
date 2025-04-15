import styles from './post.module.scss';

export const Post = () => {
  return (
    <div className={styles.post}>
      <img src="https://cdn2.thecatapi.com/images/e7v.jpg" alt="" />
      <h3 className={styles.post_title}>
        Морские котики и львы: новые связи в мире морских млекопитающих
        <span className={styles.post_date}>30.02.2024</span>
      </h3>
      <p className={styles.post_text}>
        Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые
        модификации, например, юмористические вставки или слова, которые даже отдалённо не
        напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
        какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem
        Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный
        объём.
      </p>
    </div>
  );
};
