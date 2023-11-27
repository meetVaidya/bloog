import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                src="/p1.jpeg"
                                alt=""
                                fill
                                className={styles.avatar}
                            ></Image>
                        </div>
                        <div className={styles.usertextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}> - 27.11.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/p1.jpeg"
                        alt=""
                        fill
                        className={styles.image}
                    ></Image>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit excepturi repellendus alias earum
                            necessitatibus fuga aspernatur ipsum error, dicta
                            deserunt voluptate quas, velit sint veritatis?
                            Labore, laudantium? Laboriosam, aspernatur?
                            Doloribus?
                        </p>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit excepturi repellendus alias earum
                            necessitatibus fuga aspernatur ipsum error, dicta
                            deserunt voluptate quas, velit sint veritatis?
                            Labore, laudantium? Laboriosam, aspernatur?
                            Doloribus?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Impedit excepturi repellendus alias earum
                            necessitatibus fuga aspernatur ipsum error, dicta
                            deserunt voluptate quas, velit sint veritatis?
                            Labore, laudantium? Laboriosam, aspernatur?
                            Doloribus?
                        </p>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
