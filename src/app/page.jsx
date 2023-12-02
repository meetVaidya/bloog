import styles from './homepage.module.css';
import LandingPage from './landingPage/LandingPage';

export default function Home() {
    return (
        <div className={styles.container}>
            <LandingPage />
        </div>
    );
}
