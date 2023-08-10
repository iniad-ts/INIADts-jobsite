import { useCallback, useEffect, useState } from 'react';
import type { ThemeInput } from 'react-activity-calendar';
import Calendar, { Skeleton } from 'react-activity-calendar';
import { apiClient } from 'src/utils/apiClient';

type GithubActivity = {
  total: Record<string, number>;
  contributions: Array<{
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }>;
};

export const GitHubActivity = ({ userId }: { userId: string }) => {
  const [data, setData] = useState<GithubActivity>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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

    apiClient.github_activity
      .$get({ query: { userId } })
      .then((res) => {
        if (res === null) {
          apiClient.github_activity
            .$post({ body: { userId } })
            .then(setData)
            .catch(() => setError(true));
          return;
        }
        setData(res);
      })
      .finally(() => setLoading(false));
  }, [userId]);

  useEffect(fetchData, [fetchData]);

  if (error) {
    return <div>error</div>;
  }

  if (loading || data === null || data === undefined) {
    return <Skeleton loading />;
  }

  return <Calendar data={data.contributions} theme={theme} labels={label} />;
};
