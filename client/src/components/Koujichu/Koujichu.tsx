import styles from './Koujichu.module.css';

export const Koujichu = () => (
  <div className={styles.background}>
    <p className={styles.text}>⚠このサイトは工事中です⚠</p>
    <p className={styles.contact}>
      何かありましたら、<a href="https://twitter.com/mst_mkt_">@mst_mkt_</a>
      (代表Twitter)までお問い合わせください
    </p>
  </div>
);
