import styles from './SideBar.module.css';

export const SideBar = (props: { array: string[] }) => {
  const { array } = props;
  return (
    <div className={styles.container}>
      {array.map((x, y) => (
        <div key={`${y}`}>{x}</div>
      ))}
    </div>
  );
};
