import React from 'react';
import { Carousel } from '../../Carousel/Carousel';
import styles from './Popup.module.css';
import type { Props } from './ProductCard';

const Popup = ({ imageUrlList, title, subtitle, descriptionText, Urls, onclick }: Props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.batsu} onClick={onclick} />
        <Carousel imageUrlList={imageUrlList} />
        <div className={styles.popupContent}>
          <div className={styles.popupHeader}>
            <h1>{title}</h1>
            {subtitle !== null && <h2>{subtitle}</h2>}
          </div>
          <div className={styles.popupBody}>
            <div className={styles.popupText}>
              {descriptionText?.map((text, index) => (
                <div key={index}>
                  <h2>{text.heading}</h2>
                  {text !== null && <p>{text.text}</p>}
                </div>
              ))}
            </div>
            <div className={styles.popupText}>
              <h2>外部リンク</h2>
              {Urls?.map((url, index) => (
                <a key={index} href={url.url}>
                  <p>{url.title}</p>
                </a>
              ))}
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
