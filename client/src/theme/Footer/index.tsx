import { isMultiColumnFooterLinks, useThemeConfig } from '@docusaurus/theme-common';
import MultiColumnLinks from './MultiColumnLinks';
import SimpleLinks from './SimpleLinks';
import styles from './index.module.css';

const Footer = () => {
  const { footer } = useThemeConfig();
  if (footer === undefined) return null;

  const { copyright, links } = footer;

  const isMultiColumn = isMultiColumnFooterLinks(links);

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.links}>
          {isMultiColumn ? <MultiColumnLinks columns={links} /> : <SimpleLinks links={links} />}
        </div>
        <div className={styles.copyright}>{copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
