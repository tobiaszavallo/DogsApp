import { Link } from 'react-router-dom';
import styles from './notFound.module.css';

const img = 'https://img.freepik.com/foto-gratis/lindo-perro-sonriente-gafas-sol_23-2148865714.jpg?w=740&t=st=1666734039~exp=1666734639~hmac=6e7b7ff8b6b37fe2ba91bc45fa7fae191c1b0926e250642d6f4efe766127674c';

export const NotFound = () => {
    return(
        <div className={styles.NotFound}>
            <img src={img} alt="img"/>
            <Link to='/home'>
                <button className={styles.buttonVolver}>Home</button>
            </Link>
        </div>
    )
}
