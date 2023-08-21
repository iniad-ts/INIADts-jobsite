import type { MemberModel } from 'commonTypesWithClient/models';
import Input from '../Input/Input';
import styles from './Products.module.css';

type Props = {
  member: MemberModel;
  setMember: React.Dispatch<React.SetStateAction<MemberModel>>;
};

export const Products = ({ member, setMember }: Props) => {
  const changeProduct = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = e.target;
    setMember((prev) => ({
      ...prev,
      products: prev.products?.map((product, j) =>
        i === j ? { ...product, [name]: value } : product
      ),
    }));
  };

  const addProduct = () => {
    setMember((prev) => ({
      ...prev,
      products: [...(prev.products ?? []), { title: '', description: '', url: '' }],
    }));
  };

  const removeProduct = (i: number) => {
    setMember((prev) => ({
      ...prev,
      products: prev.products?.filter((_, j) => i !== j),
    }));
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>
        <span>プロダクト</span>
        <button onClick={addProduct} className={styles.button}>
          Add
        </button>
      </p>
      {member.products?.map((product, i) => (
        <div key={`product-${i}`} className={styles.item}>
          <span className={styles.sort}>三</span>
          <details className={styles.details}>
            <summary className={styles.title}>
              <span className={styles.accordion} />
              <span className={styles['title-text']}>
                {product.title === '' ? 'No Title' : product.title}
              </span>
              <button onClick={() => removeProduct(i)} className={styles.remove} />
            </summary>
            <Input
              label="タイトル"
              name="title"
              value={product.title}
              onChange={(e) => changeProduct(e, i)}
              placeholder="ex: Gradius"
            />
            <Input
              label="説明"
              name="description"
              value={product.description}
              onChange={(e) => changeProduct(e, i)}
              placeholder="ex: シューティングゲーム"
            />
            <Input
              label="URL"
              name="url"
              value={product.url}
              onChange={(e) => changeProduct(e, i)}
              placeholder="ex: https://example.com"
            />
          </details>
          <button onClick={() => removeProduct(i)} className={styles.remove} />
        </div>
      ))}
    </div>
  );
};
