import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { detailsClean } from '../../redux/actions';


import styles from './header.module.css';


const img = require('../../img/logo-dog.png');

export const HeaderAlt = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const details = useSelector((state) => state.dogDetail);

    let clean = (e) => {
        if (Object.entries(details).length) {
            dispatch( detailsClean() ); 
            navigate("/home");
        }
        navigate("/home");
    }

    return (
        <div className={styles.HeaderAltCont}>
            <div className={styles.cont}>
                <div className={styles.HeaderAlt}>
                    <div className={styles.HeaderAltContainerLogo}>
                        <img className={styles.HeaderAltLogoDog} src={img} alt="logo dog" onClick={clean} />
                    </div>
                    <div className={styles.HeaderAltContainerSecondLogo}>
                        <img className={styles.HeaderAltsecondLogoDog} src={img} alt="logo dog" onClick={clean} />                          
                    </div>
                </div>
            </div>
        </div>
    )
};