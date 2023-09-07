import React, { useEffect, useState } from 'react';
import { activityHistory } from '../../data/activityHistory';
import styles from './ActivityHistory.module.css';

export const ActivityHistory = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const middle = Math.floor(activityHistory.length / 2);
  const activityHistories1 = activityHistory.slice(0, middle);
  const activityHistories2 = activityHistory.slice(middle, activityHistory.length);
  useEffect(() => {
    const changeIndex = () => setImageIndex(imageIndex + 1);
    const cancelId = setInterval(changeIndex, 5000);
    return () => clearInterval(cancelId);
  }, [imageIndex]);
  return (
    <div className={styles.container}>
      {[activityHistories1, activityHistories2].map((activityHistories, index) => (
        <div className={styles.wrap} key={index}>
          <div className={styles.image}>
            <img
              src={activityHistories[imageIndex % activityHistories.length].image}
              alt={`${activityHistories[imageIndex % activityHistories.length].title}の画像です`}
            />
            <h3>{activityHistories[imageIndex % activityHistories.length].title}</h3>
          </div>
          <div
            className={styles.descriptions}
            style={{ gridRow: `repeat(${activityHistories.length},1fr)` }}
          >
            {activityHistories.map((activity, i) => (
              <div key={i} className={styles.description}>
                <h3>{activity.month}月</h3>
                <p>{activity.description}</p>
                <div className={styles.right}>
                  <div className={styles.techsRow}>
                    <div>tech :</div>
                    <div className={styles.techs}>
                      {activity.techs.map((tech, j) => (
                        <div className={styles.marginLeft} key={j}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <div>course :</div>
                  <div className={styles.courses}>
                    {activity.courses.map((course, j) => (
                      <div key={j} className={styles.marginLeft}>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
