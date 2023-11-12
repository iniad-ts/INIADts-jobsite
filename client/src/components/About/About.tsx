import styles from './About.module.css';

export const About = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src="img/about_office.jpg" />
        </div>
        <div className={styles.text}>
          <p>
            INIAD.tsは、INIAD(東洋大学情報連携学部)公認サークルです。
            TypeScriptを用いた幅広い分野のアプリケーション開発を行っています。
            学外のオフィスを活動拠点として毎日活動しています。
          </p>
        </div>
      </div>
      <div>
        <div className={styles.image}>
          <img src="img/about_coding.jpg" />
        </div>
        <div className={styles.text}>
          <p>サークルの講習ではTypeScript/React(Next.js)の基礎を学ぶことができます。</p>
        </div>
      </div>
    </div>
  );
};
