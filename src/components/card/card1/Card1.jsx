import Image from 'next/image';
import styles from './card1.module.css';
import Link from 'next/link';

const Card1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>26.11.2023</span>
                    <span> - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Embracing Authenticity: A Guide to Personal Style</h1>
                </Link>
                <p>
                    In a world of ever-changing trends, finding and embracing
                    your authentic style is a journey of self-expression. In
                    this blog, we&apos;ll explore the art of curating a wardrobe
                    that reflects your personality, the significance of fashion
                    as a form of self-identity, and tips on how to stay true to
                    your style in a fast-paced fashion landscape. Join us as we
                    dive into the world of style and discover the power of
                    authenticity in every outfit.
                </p>
                <Link href="/" id={styles.readIt}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card1;
