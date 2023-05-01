import Link from 'next/link';
import { FC } from 'react';

import { robotoMono } from '@/fonts';
import PageLayout from '@/layouts/PageLayout/PageLayout';
import styles from './404.module.scss';

const NotFoundPage: FC = () => {
  return (
    <PageLayout title="Not found">
      <main className={`${styles["not-found-page"]}`}>
        <div className={`${styles["not-found-page__content"]} ${robotoMono.className}`}>
          <h1 className={`${styles["not-found-page__404"]}`}>
            404
          </h1>
          <p className={`${styles["not-found-page__message"]}`}>
            Page not found
          </p>
          <Link
            href="/"
            className={`${styles["not-found-page__go-home-link"]}`}
          >
            Go home?
          </Link>
        </div>
      </main>
    </PageLayout>
  )
}

export default NotFoundPage;