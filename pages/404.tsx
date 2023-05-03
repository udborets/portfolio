import Link from 'next/link';
import { FC } from 'react';

import { robotoMono } from '@/fonts';
import PageLayout from '@/layouts/PageLayout/PageLayout';
import styles from './not-found.module.scss';

const NotFoundPage: FC = () => {
  return (
    <PageLayout title="Not found">
      <main className={`${styles["not-found-page"]} ${robotoMono.className}`}>
        <div className={`${styles["content"]}`}>
          <h1 className={`${styles["error-code"]}`}>
            404
          </h1>
          <p className={`${styles["message"]}`}>
            Page not found
          </p>
          <Link
            href="/"
            className={`${styles["go-home-link"]}`}
          >
            Go home?
          </Link>
        </div>
      </main>
    </PageLayout>
  )
}

export default NotFoundPage;