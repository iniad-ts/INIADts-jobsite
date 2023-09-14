import React from 'react';
import { activities } from '../../data/activity';
import styles from './Activity.module.css';

export const Activity = () => {
  return (
    <div className={styles.container}>
      {activities.map((activity, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.date}>
            {activity.date.month !== activities[i - 1]?.date.month && (
              <>
                <i>{activity.date.year}/</i>
                <i>{`00${activity.date.month}`.slice(-2)}</i>
              </>
            )}
          </div>
          <div className={styles.content}>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            {activity.image !== undefined && (
              <div className={styles.image}>
                <img src={activity.image} alt={activity.title} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
