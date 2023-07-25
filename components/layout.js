import Navbar from './navbar';
import styles from '../styles/navbar.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar />
            { children }
        </div>
    );
}