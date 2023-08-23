// Card.js
import React from 'react';
import styles from './Card.module.css';

export interface Props {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
}

const Card = ({ imageUrl, altText, title, description, githubUrl, websiteUrl }: Props) => {
  return (
    <div className={styles.grid__item}>
      <a href={websiteUrl}>
        <img className={styles.card__img} src={imageUrl} alt={altText} />
      </a>
      <div className={styles.card__content}>
        <a href={websiteUrl}>
          <h1 className={styles.card__header}>{title}</h1>
        </a>
        <p className={styles.card__text}>{description}</p>
        {githubUrl !== null && (
          <a className={styles.card__btn} href={githubUrl}>
            Github
          </a>
        )}
      </div>
    </div>
  );
};

const CardGrid = ({ cards }: { cards: Props[] }) => {
  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
