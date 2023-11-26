import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Stories, Creative Ideas?</b> <br /> You found the right place
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </h1>
                    <p className={styles.postDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quasi voluptatibus magni aperiam veritatis?
                        Consectetur officia eius rerum tenetur labore. Eaque
                        deleniti repellendus enim maxime odit delectus eius
                        aspernatur saepe voluptates!
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
