import { FC } from "react";

import PageLayout from "@/layouts/PageLayout/PageLayout";
import styles from './home.module.scss';
import { robotoMono } from "@/fonts";

const HomePage: FC = () => {
  return (
    <PageLayout title="Yury Borets">
      <main className={`${styles["home-page"]} ${robotoMono.className}`}>
        <div className={`${styles["greeting"]}`}>
          <span className={`${styles["pre-name"]}`}>
            Hi, my name is
          </span>
          <h1 className={`${styles["name"]}`}>
            Yury Borets
          </h1>
          <span className={`${styles["post-name"]}`}>
            and I am a web developer
          </span>
        </div>
      </main>
    </PageLayout>
  )
}

export default HomePage;