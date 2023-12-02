import React from 'react';
import styles from './menuPosts.module.css';
import Link from 'next/link';
import Image from 'next/image';

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        ></Image>
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h3 className={styles.postTitle}>
                        Wanderlust Chronicles: Embarking on Epic Journeys,
                        Unveiling Hidden Gems, and Embracing the Art of Travel
                    </h3>
                    <div className={styles.details}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 26.11.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        ></Image>
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>
                        Culture
                    </span>
                    <h3 className={styles.postTitle}>
                        Cultural Canvas: Unveiling the Rich Tapestry of
                        Traditions, Art, and Stories from Around the World
                    </h3>
                    <div className={styles.details}>
                        <span className={styles.username}>Audie Britten</span>
                        <span className={styles.date}> - 2023-08-10</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        ></Image>
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>
                        Food
                    </span>
                    <h3 className={styles.postTitle}>
                        Savor Spectrum: Culinary Adventures from Around the
                        Globe
                    </h3>
                    <div className={styles.details}>
                        <span className={styles.username}>Illa Hermosillo</span>
                        <span className={styles.date}> - 2023-06-22</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        ></Image>
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.coding}`}>
                        Coding
                    </span>
                    <h3 className={styles.postTitle}>
                        CodeCraft: Navigating the Digital Realm with Creative
                        Programming
                    </h3>
                    <div className={styles.details}>
                        <span className={styles.username}>Chong Batlis</span>
                        <span className={styles.date}> - 2023-12-13</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MenuPosts;
