import type { ReactElement } from 'react';

export type Product = {
  title: string;
  description: string;
  image: string;
};

export type MemberSummary = {
  userName: string;
  displayName: string;
  graduateYear: number;
  avatarUrl?: string;
};

export type Member = MemberSummary & {
  introduction?: string;
  socialLinks?: string[];
  products?: Product[];
};

export type Corse = 'standard' | 'stoic' | 'solufa';

export type ActivityHistory = {
  month: number;
  title: string;
  description: string;
  image: string;
  creator?: string;
  tech: ReactElement[];
  course: Corse[];
};
