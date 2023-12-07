import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>26.11.2023</span>
                    <span> - </span>
                    <span className={styles.category}>CODING</span>
                </div>
                <Link href="/">
                    <h1>
                        Coding Alchemy: Deciphering the Magic of Programming
                    </h1>
                </Link>
                <p>
                    In the realm of ones and zeros lies the art of coding—a
                    language that empowers us to create, innovate, and bring
                    ideas to life. In this blog, we&apos;ll demystify the world
                    of programming, explore the beauty of elegant code, and
                    discuss the role of coding in shaping the digital landscape.
                    Whether you&apos;re a seasoned developer or a coding
                    enthusiast, join us on a journey through the lines of code
                    that power our interconnected world.
                </p>
                <Link href="/" id={styles.readIt}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
