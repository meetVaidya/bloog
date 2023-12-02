import React from 'react';
import styles from './homePage.module.css';
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Featured />
            <CategoryList />
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
