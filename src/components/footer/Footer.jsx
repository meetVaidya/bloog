import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src="/codesandbox-logo.svg"
                        alt="Carbon Logo"
                        width={50}
                        height={50}
                    />
                    <h1 className={styles.logoText}>Carbon</h1>
                </div>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Enim necessitatibus similique aspernatur obcaecati
                    veritatis. Aperiam cum porro sequi, totam minima
                    consequuntur, aspernatur deleniti vero repellendus dorales.
                </p>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/homePage">Homepage</Link>
                    <Link href="/homePage">Blog</Link>
                    <Link href="/about">About</Link>
                    <Link href="mailto:meet.djsce@gmail.com?subject=Hello&body=I%20hope%20this%20email%20finds%20you%20well.">
                        Contact
                    </Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/homePage">Style</Link>
                    <Link href="/homePage">Fashion</Link>
                    <Link href="/homePage">Coding</Link>
                    <Link href="/homePage">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/homePage">Facebook</Link>
                    <Link href="/homePage">Instagram</Link>
                    <Link href="/homePage">Tiktok</Link>
                    <Link href="/homePage">Youtube</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
