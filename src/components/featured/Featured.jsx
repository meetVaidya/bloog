import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Featured Post</b>
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/p1.jpeg"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className="styles.postTitle">
                        Cultivating Unity: Exploring the Rich Tapestry of Global
                        Culture
                    </h1>
                    <p className={styles.postDescription}>
                        In a world that is increasingly interconnected, the
                        celebration and understanding of diverse cultures have
                        become more important than ever. Culture, the invisible
                        thread that weaves through the fabric of humanity,
                        encompasses a myriad of customs, traditions, and
                        expressions that define who we are. Join us on a journey
                        as we delve into the heart of global culture, exploring
                        the rich tapestry that makes our world a vibrant and
                        harmonious mosaic.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
