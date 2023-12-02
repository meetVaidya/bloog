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
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Embracing Authenticity: A Guide to Personal Style</h1>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit veniam accusantium temporibus ad cum, itaque nobis
                    voluptas beatae tenetur obcaecati ipsa, magnam ipsum ut
                    illum
                </p>
                <Link href="/" id={styles.readIt}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
