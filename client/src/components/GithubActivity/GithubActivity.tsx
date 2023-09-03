import { s3Client } from '@site/src/utils/apiClient';
import type { GitHubActivityModel } from 'commonTypesWithClient/models';
import React, { useCallback, useEffect, useState } from 'react';
import type { ThemeInput } from 'react-activity-calendar';
import ActivityCalendar, { Skeleton } from 'react-activity-calendar';

const GithubActivity = ({ userName }: { userName: string }) => {
  const [activity, setActivity] = useState<GitHubActivityModel>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const theme: ThemeInput = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  const label = {
    totalCount: `{{count}} contributions in the last year`,
  };

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(false);
    s3Client
      ._userName(userName)
      .activity_json.$get()
      .then(async (res) => {
        if (res !== null) {
          setActivity(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [userName]);

  useEffect(fetchData, [fetchData]);

  if (error) {
    return <div>error</div>;
  }

  if (loading || activity === null || activity === undefined) {
    return <Skeleton loading />;
  }

  return (
    <ActivityCalendar
      data={activity.contributions}
      theme={theme}
      labels={label}
      colorScheme="light"
    />
  );
};

export default GithubActivity;
