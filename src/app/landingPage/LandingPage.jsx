import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './landingPage.module.css';
import ThemeToggle from '@/components/themeToggle/ThemeToggle';
// import { Button } from '@nextui-org/button';

const LandingPage = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Carbon</title>
            <link rel="icon" href="public/codesandbox-logo.svg" />
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image
                        src="codesandbox-logo.svg"
                        alt=""
                        width={30}
                        height={30}
                    />
                    <Link href="/homePage">Carbon</Link>
                </div>
                <div className={styles.links}>
                    <ThemeToggle />
                    <Link
                        href="#"
                        className={styles.link}
                        style={{ marginRight: 5 }}
                    >
                        Contact
                    </Link>
                    <Link href="#" className={styles.link}>
                        About
                    </Link>
                    <div className={`${styles.minButton} ${styles.login}`}>
                        <Link href="/homePage">Login</Link>
                    </div>
                    <div className={`${styles.minButton} ${styles.register}`}>
                        <Link href="/login">Register</Link>
                    </div>
                </div>
            </div>
            <div className={styles.catchy}>
                <Image
                    src="/cvbox.org.notion-avatar-1701093445964.png"
                    alt=""
                    className="mainImage"
                    width={500}
                    height={500}
                />
                <span className={styles.heroText}>
                    <span className={styles.comic}>Stories</span>, <br />
                    <span className={styles.creative}>Creative Ideas? </span>
                    <br />
                    You found the right place
                </span>
            </div>
            <div className={styles.secondMajor}>
                <span className={styles.secondHero}>
                    Step in the new age of blogging
                </span>
            </div>
        </>
    );
};

export default LandingPage;
