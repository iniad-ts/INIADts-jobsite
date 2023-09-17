import React from 'react';
import { IconGithub } from '../../icons/IconGitHub';
import styles from './ProductCard.module.css';

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
    <div className={styles.gridItem}>
      <a href={websiteUrl}>
        <img className={styles.cardImg} src={imageUrl} alt={altText} />
      </a>
      <div className={styles.cardContent}>
        <a href={websiteUrl}>
          <h1 className={styles.cardHeader}>{title}</h1>
        </a>
        <p className={styles.cardText}>{description}</p>
        {githubUrl !== null && (
          <div>
            <a className={styles.cardBtn} href={githubUrl}>
              <IconGithub />
              <span>Github</span>
            </a>
          </div>
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
