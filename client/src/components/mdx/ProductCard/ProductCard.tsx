import React from 'react';
import Popup from './Popup';
import styles from './ProductCard.module.css';

export interface Props {
  imageUrlList?: string[];

  thumbnailUrl?: string;
  title?: string;
  subtitle?: string;
  descriptionText?: { heading: string; text?: string }[];

  Urls?: { title: string; url: string }[];
  onclick: () => void;
}

const Card = ({ thumbnailUrl, title, onclick }: Props) => {
  return (
    <div className={styles.gridItem} onClick={onclick}>
      <img className={styles.cardImg} src={thumbnailUrl} />
      <div className={styles.cardContent}>
        <h1 className={styles.cardHeader}>{title}</h1>
      </div>
    </div>
  );
};

const CardGrid = ({ cards }: { cards: Props[] }) => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupProps, setPopupProps] = React.useState<Props | null>(null);

  const handleCardClick = (card: Props) => {
    setPopupProps(card);
    setIsPopupOpen(true);
  };
  return (
    <div className={styles.grid}>
      {isPopupOpen && <Popup {...popupProps} onclick={() => setIsPopupOpen(false)} />}
      {cards.map((card, index) => (
        <>
          <Card key={index} {...card} onclick={() => handleCardClick(card)} />
        </>
      ))}
    </div>
  );
};

export default CardGrid;
