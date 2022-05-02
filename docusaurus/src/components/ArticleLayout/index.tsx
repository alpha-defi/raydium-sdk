import React from 'react';
import Layout from '@theme/Layout';
import styles from './articlelayout.module.scss';

export default function ArticleLayout({ children, title, description }) {
  return (
    <Layout title={title} description={description}>
      <div className={`${styles.container} container container--fluid margin-vert--xl`}>
        {children}
      </div>
    </Layout>
  );
}