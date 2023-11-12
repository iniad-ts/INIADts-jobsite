import { useMemo } from 'react';
import { activities } from '../../data/activity';
import styles from './Activity.module.css';

export const Activity = () => {
  const sortedActivity = useMemo(() => {
    const years = activities.map((activity) => activity.date.year);
    const setYears = Array.from(new Set(years)).sort((a, b) => a - b);

    const activityInYears = setYears.map((year) => {
      const activityInYear = activities.filter((activity) => activity.date.year === year);
      const months = activityInYear.map((activity) => activity.date.month);
      const setMonths = Array.from(new Set(months)).sort((a, b) => a - b);

      return {
        year,
        months: setMonths.map((month) => ({
          month,
          // eslint-disable-next-line max-nested-callbacks
          activities: activityInYear.filter((activity) => activity.date.month === month),
        })),
      };
    });

    return activityInYears;
  }, []);

  return (
    <div className={styles.container}>
      {sortedActivity.map((year) =>
        year.months.map((month) => (
          <div key={month.month} className={styles.item}>
            <div className={styles.date}>
              <i>{year.year}/</i>
              <i>{`00${month.month}`.slice(-2)}</i>
            </div>
            <div className={styles.content}>
              {month.activities.map((activity, i) => (
                <div key={i}>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  {activity.image !== undefined && (
                    <div className={styles.image}>
                      <img src={activity.image} alt={activity.title} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
