import styles from './RowNumber.module.css';

export const RowNumber = (props: { array: string[] }) => {
  const { array } = props;
  return (
    <div className={styles.container}>
      {array.map((b, c) => (
        <div key={`${c}`}>{b}</div>
      ))}{' '}
    </div>
  );
};
