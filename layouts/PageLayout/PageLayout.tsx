import Head from "next/head";
import { FC } from "react";

import { IPageLayoutProps } from "./models";

const PageLayout: FC<IPageLayoutProps> = ({ title = "Yury Borets", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}

export default PageLayout