import type { TaskId, UserId } from './branded';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
};

export type TaskModel = {
  id: TaskId;
  label: string;
  done: boolean;
  created: number;
};

export type GitHubActivityModel = {
  total: Record<string, number>;
  contributions: {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }[];
  userId: string;
};

// 仮
export type MemberModel = {
  githubId: string;
  realName: string;
  displayName: string;
  avatarURL?: string;
  graduateYear: number;
  introduction?: string;
  products?: {
    title: string;
    description: string;
    URL: string;
  }[];
  links?: string[];
};
