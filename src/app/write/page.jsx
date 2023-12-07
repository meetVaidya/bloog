'use client';

import React from 'react';
import styles from './writePage.module.css';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const WritePage = () => {
    const [value, setValue] = React.useState('');
    return (
        <div className={styles.container}>
            <Navbar />
            <input type="text" placeholder="Title" className={styles.input} />
            <div className={styles.editor}>
                {/* <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story"
                /> */}
            </div>
            <button className={styles.publish}>Publish</button>
            <Footer />
        </div>
    );
};

export default WritePage;
