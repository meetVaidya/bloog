import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card1 from '../card/card1/Card1';
import Card2 from '../card/card2/Card2';
import Card3 from '../card/card3/Card3';

const CardList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
        </div>
    );
};

export default CardList;
