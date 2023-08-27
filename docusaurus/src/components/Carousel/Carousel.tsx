import type { Product } from '@site/src/types/type';
import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.css';

export const Carousel = ({ products }: { products: Product[] }): JSX.Element => {
  const [productSize, setProductSize] = useState<number>(0);
  const [carouselSize, setCarouselSize] = useState<number>(0);

  const scroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = e.target as HTMLDivElement;
    activateDot(target.scrollLeft);
  };

  const setSize = () => {
    const product = document.getElementsByClassName(styles.carouselItem)[0] as HTMLDivElement;
    const carousel = document.getElementsByClassName(styles.carousel)[0] as HTMLDivElement;
    setProductSize(product.clientWidth);
    setCarouselSize(carousel.clientWidth);
  };

  const activateDot = (scrollLeft: number) => {
    const dots = document.getElementsByClassName(styles.dot);
    const vmin = Math.min(window.innerHeight, window.innerWidth) / 100;

    Array.from(dots).forEach((dot, i) => {
      const isActive = [
        scrollLeft - productSize * 0.4 < (productSize + vmin * 2) * i,
        scrollLeft + carouselSize + productSize * 0.4 > productSize * (i + 1) + vmin * 2 * i,
      ].every(Boolean);

      if (isActive) {
        dot.classList.add(styles.dotActive);
      } else {
        dot.classList.remove(styles.dotActive);
      }
    });
  };

  const scrollTo = (to: 'left' | 'right') => {
    const carousel = document.getElementsByClassName(styles.carousel)[0] as HTMLDivElement;
    if (to === 'left') {
      const isLeft = carousel.scrollLeft < 10;
      carousel.scrollLeft += isLeft ? carousel.scrollWidth : -productSize;
    } else {
      const isRight = carousel.scrollLeft + carouselSize > carousel.scrollWidth - 10;
      carousel.scrollLeft += isRight ? -carousel.scrollWidth : productSize;
    }
  };

  useEffect(() => {
    activateDot(0);
    setSize();
    window.addEventListener('resize', setSize);
    return () => {
      window.removeEventListener('resize', setSize);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.carousel} onScroll={scroll}>
        <ul className={styles.carouselList}>
          {products.map((product, i) => (
            <li key={i} className={styles.carouselItem}>
              <div className={styles.carouselImage}>
                <img src={product.image} alt={`${product.title}'s image`} />
              </div>
              <div className={styles.carouselText}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.dots}>
        {products.map((_, i) => (
          <div className={styles.dot} key={i} />
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.left} ${styles.button}`} onClick={() => scrollTo('left')}>
          ←
        </button>
        <button className={`${styles.right} ${styles.button}`} onClick={() => scrollTo('right')}>
          →
        </button>
      </div>
    </div>
  );
};
