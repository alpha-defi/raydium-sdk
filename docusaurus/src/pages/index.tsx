import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SearchBar from "@theme-original/SearchBar";

/**
 * Blob generated using https://www.magicpattern.design/tools/blob-generator
 */
export const BlobSVG = () => <svg className={styles.blob} width="500" height="500" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="linearGradientId" gradientTransform="rotate(30 0.5 0.5)">
      <stop offset="0%" stop-color="#00DBDE" />
      <stop offset="100%" stop-color="#fc00ff" />
    </linearGradient>
    <clipPath id="shape">
      <path fill="currentColor" d="M889,619Q828,738,738,847Q648,956,501.5,950.5Q355,945,263,842Q171,739,98.5,619.5Q26,500,75.5,363.5Q125,227,236.5,130Q348,33,491.5,59Q635,85,734,171.5Q833,258,891.5,379Q950,500,889,619Z"></path>
    </clipPath>
  </defs>
  <g clip-path="url(#shape)">
    <path fill="url(#linearGradientId)" d="M889,619Q828,738,738,847Q648,956,501.5,950.5Q355,945,263,842Q171,739,98.5,619.5Q26,500,75.5,363.5Q125,227,236.5,130Q348,33,491.5,59Q635,85,734,171.5Q833,258,891.5,379Q950,500,889,619Z" />
  </g>
</svg>;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <SearchBar/>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.main}>
        <BlobSVG />
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
