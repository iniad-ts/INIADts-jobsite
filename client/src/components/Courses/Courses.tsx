import React from 'react';
import styles from './Courses.module.css';

export const Courses = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.image}>
            <img src="img/course_standard.jpg" alt="standard" />
          </div>
          <div className={styles.description}>
            <h3>STANDARD</h3>
            <p>スタンダードコースでは、大学の授業で扱うpythonの理解を深めています。</p>
            <p className={styles.skills}>
              {['Python', 'html', 'CSS'].map((item) => {
                return <span key={item}>#{item}</span>;
              })}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.image}>
            <img src="img/course_stoic.jpg" alt="stoic" />
          </div>
          <div className={styles.description}>
            <h3>STOIC</h3>
            <p>ストイックコースでは、TypeScriptを用いてアプリケーション開発をしています。</p>
            <p className={styles.skills}>
              {['TypeScript', 'React', 'frourio'].map((item) => {
                return <span key={item}>#{item}</span>;
              })}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.image}>
            <img src="img/course_sparta.jpg" alt="spart" />
          </div>
          <div className={styles.description}>
            <h3>SPARTA</h3>
            <p>
              スパルタコースは、基本的な内容はストイックと同じですが、平均で1日数百行のコード書いています。
            </p>
            <p className={styles.skills}>
              {['TypeScript', 'React', 'frourio'].map((item) => {
                return <span key={item}>#{item}</span>;
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
