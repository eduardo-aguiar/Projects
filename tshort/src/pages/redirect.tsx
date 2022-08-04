import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a
            href="
                    https://nextjs.org"
          >
            Next.js
          </a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>src/pages/redirect.tsx</code>
        </p>
        <div className={styles.grid}>
          <Image
            alt="Next.js"
            height={200}
            src="/images/nextjs.png"
            width={200}
          />
          <Image alt="React" height={200} src="/images/react.png" width={200} />
          <Image
            alt="TypeScript"
            height={200}
            src="/images/typescript.png"
            width={200}
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <a className={styles.footerLink} href="">
          <img alt="Next.js" height={32} src="/images/nextjs.png" width={32} />
        </a>
        <a className={styles.footerLink} href="">
          <img alt="React" height={32} src="/images/react.png" width={32} />
        </a>
        <a className={styles.footerLink} href="">
          <img
            alt="TypeScript"
            height={32}
            src="/images/typescript.png"
            width={32}
          />
        </a>
      </footer>
    </div>
  );
}
