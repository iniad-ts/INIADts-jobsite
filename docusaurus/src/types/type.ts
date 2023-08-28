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
