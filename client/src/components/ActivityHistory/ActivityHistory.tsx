import React from 'react';
import { activityHistory } from '../../data/activityHistory';
import styles from './ActivityHistory.module.css';

export const ActivityHistory = () => {
  const middle = Math.floor(activityHistory.length / 2);
  const activityHistory1 = activityHistory.slice(0, middle);
  const activityHistory2 = activityHistory.slice(middle, activityHistory.length);
  const image1Index = Math.floor(Date.now() / 2000) % activityHistory1.length;
  return (
    <div className={styles.container}>
      <div className={styles.image1}>
        <img src={activityHistory1[image1Index].image} />
      </div>
      <div
        className={styles.descriptions1}
        style={{ gridRow: `repeat(${activityHistory1.length},1fr)` }}
      >
        {activityHistory1.map((activity, i) => (
          <div key={i} className={styles.description} style={{}}>
            <h3>{activity.month}月</h3>
            <p>{activity.description}</p>
            <div className={styles.right}>
              <div>tech :</div>
              {activity.tech.map((one, j) => (
                <div className={styles.marginLeft} key={j}>
                  {one}
                </div>
              ))}
            </div>
            <div className={styles.right}>
              <div>course :</div>
              {activity.course.map((one, j) => (
                <div key={j}>{one}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.image2}>
        <img src={activityHistory2[image1Index].image} />
      </div>
      <div
        className={styles.descriptions2}
        style={{ gridRow: `repeat(${activityHistory1.length},1fr)` }}
      >
        {activityHistory2.map((activity, i) => (
          <div key={i} className={styles.description}>
            <h3>{activity.month}月</h3>
            <p>{activity.description}</p>
            <div className={styles.right}>
              <div>tech :</div>
              {activity.tech.map((one, j) => (
                <div className={styles.marginLeft} key={j}>
                  {one}
                </div>
              ))}
            </div>
            <div className={styles.right}>
              <div>course :</div>
              {activity.course.map((one, j) => (
                <div className={styles.marginLeft} key={j}>
                  {one}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
