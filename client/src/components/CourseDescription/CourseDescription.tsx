import React from 'react';
import styles from './CourseDescription.module.css';

export const CourseDescription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.course}>
        <div className={styles.courseImage} />
        <div className={styles.courseInfo}>
          <h3>Standardコース</h3>
          <p>スタンダードコースでは、大学の授業で扱うpythonの理解を深めています。</p>
        </div>
      </div>
      <div className={styles.course}>
        <div className={styles.courseImage} />
        <div className={styles.courseInfo}>
          <h3>Stoicコース</h3>
          <p>
            ストイックコースでは、大学の授業で扱うpythonの他に、Typescriptの理解も深めています。
          </p>
        </div>
      </div>
      <div className={styles.course}>
        <div className={styles.courseImage} />
        <div className={styles.courseInfo}>
          <h3>Solfaコース</h3>
          <p>Solfaでは、基本的に1日500行をノルマにTypescriptを書いています。</p>
        </div>
      </div>
    </div>
  );
};
