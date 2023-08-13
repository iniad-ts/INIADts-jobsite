import type { GitHubActivityModel } from 'commonTypesWithClient/models';
import { useCallback, useEffect, useState } from 'react';
import type { ThemeInput } from 'react-activity-calendar';
import Calendar, { Skeleton } from 'react-activity-calendar';
import { apiClientS3 } from 'src/utils/apiClient';

export const GitHubActivity = ({ userId }: { userId: string }) => {
  const [data, setData] = useState<GitHubActivityModel>();
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
    if (data?.userId === userId) return;

    setLoading(true);
    setError(false);

    apiClientS3.members
      ._memberId(userId)
      .githubActivity_json.$get()
      .then(async (res) => {
        if (res !== null) {
          setData(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [userId, data]);

  useEffect(fetchData, [fetchData]);

  if (error) {
    return <div>error</div>;
  }

  if (loading || data === null || data === undefined) {
    return <Skeleton loading />;
  }

  return <Calendar data={data.contributions} theme={theme} labels={label} />;
};
