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
export type Activity = {
  title: string;
  description: string;
  image?: string;
  date: {
    year: number;
    month: number;
  };
};
