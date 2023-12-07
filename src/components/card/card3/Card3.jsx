import Image from 'next/image';
import styles from './card3.module.css';
import Link from 'next/link';

const Card3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>26.11.2023</span>
                    <span> - </span>
                    <span className={styles.category}>TRAVEL</span>
                </div>
                <Link href="/">
                    <h1>
                        Wanderlust Chronicles: Unveiling the Magic of Travel
                    </h1>
                </Link>
                <p>
                    Embark on a virtual journey with our travel blog as we
                    explore breathtaking destinations, uncover hidden gems, and
                    share firsthand travel experiences. From the bustling
                    streets of Tokyo to the serene landscapes of Patagonia, join
                    us in discovering the beauty of diverse cultures, the thrill
                    of adventure, and the transformative power of travel. Pack
                    your bags and let&apos;s wander together into the enchanting
                    world that awaits beyond our doorstep.
                </p>
                <Link href="/" id={styles.readIt}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card3;
