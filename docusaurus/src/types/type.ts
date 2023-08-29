export type product = {
  title: string;
  description: string;
  image: string;
};

export type membersummary = {
  userName: string;
  displayName: string;
  graduateYear: number;
  avatarUrl?: string;
};

export type member = membersummary & {
  introduction?: string;
  socialLinks?: string[];
  products?: product[];
};
