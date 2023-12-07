import Image from 'next/image';
import styles from './card2.module.css';
import Link from 'next/link';

const Card2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>26.11.2023</span>
                    <span> - </span>
                    <span className={styles.category}>FASHION</span>
                </div>
                <Link href="/">
                    <h1>Beyond the Runway: Decoding the Language of Fashion</h1>
                </Link>
                <p>
                    Fashion is more than just clothing; it&apos;s a language
                    that speaks volumes about culture, history, and
                    individuality. In this blog, we&apos;ll unravel the stories
                    behind iconic fashion pieces, explore the evolution of
                    trends, and discuss the influence of fashion on society.
                    From haute couture to street style, join us as we delve into
                    the fascinating world of fashion, where every stitch tells a
                    story.
                </p>
                <Link href="/" id={styles.readIt}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card2;
