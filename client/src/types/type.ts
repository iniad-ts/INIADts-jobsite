import type { ReactElement } from 'react';

export type Product = {
  title: string;
  description: string;
  image?: string;
};
export type Member = {
  userName: string;
  displayName: string;
  graduateYear: number;
  avatarUrl?: string;
  introduction?: string;
  socialLinks?: string[];
  products?: Product[];
  skills?: string[];
  findy?: number;
};

export type Corse = 'standard' | 'stoic' | 'solufa';

export type ActivityHistory = {
  month: number;
  title: string;
  description: string;
  image: string;
  creator?: string;
  techs: ReactElement[];
  courses: Corse[];
};
