import { ThemeContext, ThemeContextProvider } from '@/context/ThemeContext';
import styles from './homepage.module.css';
import LandingPage from './landingPage/LandingPage';

export default function Home() {
    return (
        <ThemeContextProvider>
            <ThemeContext>
                <div className={styles.container}>
                    <LandingPage />
                </div>
            </ThemeContext>
        </ThemeContextProvider>
    );
}
