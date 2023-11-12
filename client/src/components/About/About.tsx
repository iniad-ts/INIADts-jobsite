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
            TypeScriptを用いたWebアプリケーション開発を行っています。
            学外のオフィスで毎日活動しています。
          </p>
        </div>
      </div>
      <div>
        <div className={styles.image}>
          <img src="img/about_coding.jpg" />
        </div>
        <div className={styles.text}>
          <p>
            普段はTypeScriptとReactを用いて開発を行っています。
            フロントエンドはNext.js、バックエンドはfrourioを主に使用しています。
          </p>
        </div>
      </div>
    </div>
  );
};
