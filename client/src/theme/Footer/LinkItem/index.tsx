import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type { Props } from '@theme/Footer/LinkItem';
import IconExternalLink from '@theme/Icon/ExternalLink';
import React from 'react';
import styles from '../index.module.css';

const LinkItem = ({ item }: Props) => {
  const { to, href, label, prependBaseUrlToHref } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      className={styles.link}
      {...(href !== undefined
        ? {
            href: prependBaseUrlToHref !== undefined ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
    >
      {label}
      {href !== undefined && !isInternalUrl(href) && <IconExternalLink />}
    </Link>
  );
};

export default LinkItem;
