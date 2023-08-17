import type { TaskId, UserId } from './branded';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
  githubId: string;
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
  githubId: string;
};

export type MemberModel = {
  githubId: string;
  userName: string;
  realName: string;
  displayName: string;
  avatarUrl?: string;
  graduateYear: number;
  introduction?: string;
  products?: {
    title: string;
    description: string;
    url: string;
  }[];
  socialLinks?: string[];
  updateAt: number;
};

export type MemberList = {
  members: {
    githubId: string;
    userName: string;
    graduateYear: number;
  }[];
};
