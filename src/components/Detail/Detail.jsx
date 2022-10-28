import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsClean, getDetails } from '../../redux/actions';

//components
import { HeaderAlt } from '../Header/HeaderAlt';

import styles from './detail.module.css';


const img = 'https://img.freepik.com/foto-gratis/lindo-perro-sonriente-gafas-sol_23-2148865714.jpg?w=740&t=st=1666734039~exp=1666734639~hmac=6e7b7ff8b6b37fe2ba91bc45fa7fae191c1b0926e250642d6f4efe766127674c';


export const Detail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const details = useSelector((state) => state.dogDetail);
    const { id } = useParams();


    useEffect ( () => {
        dispatch( getDetails(id) )
    }, [ dispatch, id ]);
    
    const onBack = (e) => {
        if (Object.entries(details).length) {
            dispatch( detailsClean() ); 
            navigate("/home");
        }
        navigate("/home");
    }

    return (
        <div className={styles.Detail}>
                <HeaderAlt />
                <div className={styles.contain__Details}>
                    <div className={styles.subcontain}>
                        {
                            Object.entries(details).length > 0 ? 
                            <div className={styles.DetailGrid}>
                                <div className={styles.leftDiv}>
                                    <h1>{details[0].nombre}</h1>
                                    <img src={details[0].imagen ? details[0].imagen : img } alt='img' />
                                </div>

                                <div className={styles.rightDiv}>
                                    <div className={styles.subContainRight}>
                                        <div className={styles.DivWeight}>
                                            <h3>Weight:</h3>
                                            <span>{details[0].peso}</span>
                                        </div>
                                        <div className={styles.DivHeight}>
                                            <h3>Height:</h3>
                                            <span>{details[0].altura}</span>
                                        </div>
                                    </div>
                                    <div className={styles.DivLifeExpectancy}>
                                        <h3>Life expectancy:</h3>
                                        <span>{details[0].años_de_vida}</span>
                                    </div>
                                    <div className={styles.DivTemperaments}>
                                        <h3>Temperaments:</h3>
                                        <div className={styles.grid__temps}>
                                            {
                                                details[0].temperamento.replace(/ /g, "").split(',').map( temp => (
                                                    <div key={temp} className={styles.temp__temp}>{temp}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div> : <p>Loading...</p>
                        }
                        <div className={styles.contain__button}>
                            <button className={styles.buttonBack} onClick={onBack}>Back</button>
                        </div>
                    </div>
                </div>
        </div>
    )
};