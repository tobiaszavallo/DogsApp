import { useNavigate } from 'react-router-dom'
import styles from './landingPage.module.css';

export const LandingPage = () => {
    
    const navigate = useNavigate();

    return(
        <div className={styles.box} onClick={() => navigate('/home')}>
            <div className={styles.title} >
            <h3>Welcome to:</h3>
            <h2>Henry Dog!</h2>
        </div>
            <p>Click anywhere to continue...</p>
        </div>
    )
}