import styles from './card.module.css';


const img = 'https://img.freepik.com/foto-gratis/lindo-perro-sonriente-gafas-sol_23-2148865714.jpg?w=740&t=st=1666734039~exp=1666734639~hmac=6e7b7ff8b6b37fe2ba91bc45fa7fae191c1b0926e250642d6f4efe766127674c';



export const Card = ({ imagen, nombre, grupo_raza, temperamentos, peso }) => {

    return (
        <div className={styles.mainDiv}>
            <h2>{ nombre }</h2>
            <img src={ imagen ? imagen : img } alt='Dog' />
            {
                peso.length > 1 ? <h4>{`Weight: ${peso}Kg`}</h4>
                : <h4>Weight value not available</h4>
            }

            <div className={styles.temperaments}>
                {
                    temperamentos.length > 0 ? temperamentos.map( (temp, idx) => (
                        <div className={styles.temp} key={idx}>{temp}</div>
                        ))
                     : <div className={styles.temp} >No temperaments received.</div>
                }
            </div>
        </div>
    )
}