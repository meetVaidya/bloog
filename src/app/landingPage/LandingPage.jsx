'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './landingPage.module.css';
import ThemeToggle from '@/components/themeToggle/ThemeToggle';
import { useEffect } from 'react';
import Footer from '@/components/footer/Footer';
// import { Button } from '@nextui-org/button';

const LandingPage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src =
            'https://unpkg.com/@splinetool/viewer@0.9.516/build/spline-viewer.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

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
                        href="mailto:meet.djsce@gmail.com?subject=Hello&body=I%20hope%20this%20email%20finds%20you%20well."
                        className={styles.link}
                        style={{ marginRight: 5 }}
                    >
                        Contact
                    </Link>
                    <Link href="/about" className={styles.link}>
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
            <div className={styles.downContainer}>
                <spline-viewer
                    className={styles.spline}
                    loading-anim-type="none"
                    url="https://prod.spline.design/49KhbD77j7zw6Isn/scene.splinecode"
                ></spline-viewer>
                <p>
                    Unleash your passion, share your stories, and connect with a
                    community that craves the unique perspective only you can
                    provide. Embrace the endless possibilities that await in
                    this digital frontier, where innovation and expression
                    intertwine. Join us on a journey where the traditional meets
                    the extraordinary, and your words become the bridge between
                    inspiration and transformation.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;
