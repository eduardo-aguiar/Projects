import { FC } from 'react';

import styles from './sass.module.scss';
import cn from 'classnames';

import Image from 'next/image';

const Layout = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.sideBar}>Sidebar</div>

      <div className={styles.mainSection}>Main Blog Area</div>
    </div>
  );
};

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.logoBox}>
        <Image
          src="/img/logo-white.png"
          height={'85px'}
          width={'150px'}
          className={styles.logo}
        />
      </span>
      <div className={styles.headingBox}>
        <h1 className={styles.headingContainer}>
          <span className={styles.headingTitle}>Indoors</span>
          <span className={styles.headingText}>Is where code happens!</span>
          <a href="" className={cn(styles.btn, styles.btnWhite)}>
            Discover us
          </a>
        </h1>
      </div>
    </div>
  );
};

const Sass: FC = () => {
  return <Header />;
};

export default Sass;
