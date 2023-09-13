import type { Activity } from '../types/type';

export const activities: Activity[] = [
  {
    title: 'first commit',
    description: '新入生に向けてGit講習を行った。',
    date: {
      year: 23,
      month: 4,
    },
  },
  {
    title: '深夜2時までオセロ講習',
    description: 'ReactやCSSを学び始めた。',
    image: 'img/activity_reversi.png',
    date: {
      year: 23,
      month: 4,
    },
  },
  {
    title: '累計8時間のマインスイーパー講習',
    description: 'WSL2の導入と、Reactへの更なる理解を深めた。',
    image: 'img/activity_minesweeper.png',
    date: {
      year: 23,
      month: 5,
    },
  },
  {
    title: '死闘の末、テトリスを制作',
    description: 'ReactHooksを詳しく学んだ。',
    date: {
      year: 23,
      month: 5,
    },
  },
  {
    title: 'バックエンド講習',
    description: 'FrourioやPrismaを用いてバックエンドの知識を深めた。',
    date: {
      year: 23,
      month: 7,
    },
  },
  {
    title: '学祭へ向けたゲーム制作',
    description: '本格的なチーム開発の経験を積んだ。',
    date: {
      year: 23,
      month: 8,
    },
  },
];
