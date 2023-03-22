import Link from 'next/link';
import React from 'react';

import avatarStyles from "@/styles/avatar.module.scss";

const RotatingAvatar = () => {
  return (
    <div className={"rotatingAvatar " + avatarStyles.container}>
      <div className={avatarStyles.box}>
        <div className={avatarStyles["spin-container"]}>
          <div className={avatarStyles.shape}>
            <div className={avatarStyles.bd}>
              <Link className={avatarStyles.blur} href="/about"></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RotatingAvatar