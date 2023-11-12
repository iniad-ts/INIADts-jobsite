import type { Props } from '@theme/Footer/Links/MultiColumn';
import LinkItem from '../LinkItem';
import styles from '../index.module.css';

const MultiColumnLinks = ({ columns }: Props) => {
  return (
    <div className={styles.columns}>
      {columns.map((column, i) => (
        <div key={i} className={styles.column}>
          <div className={styles.title}>{column.title}</div>
          <ul className={styles.linkList}>
            {column.items.map((link, j) => (
              <LinkItem key={j} item={link} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MultiColumnLinks;
