import styles from './MemberCount.module.css';

export const MemberCount = () => {
  return (
    <div className={styles.container}>
      アクティブメンバー数
      <span>
        <span>15人</span> / 51人
      </span>
    </div>
  );
};
