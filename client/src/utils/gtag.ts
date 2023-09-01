import type { DocusaurusConfig } from '@docusaurus/types';

export const gaPageview = (url: string, siteConfig: DocusaurusConfig) => {
  window.gtag('config', siteConfig.customFields?.GA_ID as string, { page_path: url });
};

export const gaEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
