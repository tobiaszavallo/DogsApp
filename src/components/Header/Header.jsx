import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { detailsClean } from '../../redux/actions';
import { FilterTemp } from '../Navbar/FilterTemp';
import { Navbar } from '../Navbar/Navbar';
import { SubNavbar } from '../Navbar/SubNavbar';

//components 
import { SearchBar } from '../SearchBar/SearchBar';


import styles from './header.module.css';


const img = require('../../img/logo-dog.png');

export const Header = ({ paginado, reload }) => {
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
        <div>
            <div className={styles.Header}>
                <div className={styles.ContainerLogo}>
                    <img className={styles.logoDog} src={img} alt="logo dog" onClick={clean} />
                </div>
                <div className={styles.containerSearchBar}>
                    <SearchBar paginado= {paginado}/>
                </div>
                <div className={styles.containerSecondLogo}>
                   {/*  <img className={styles.secondLogoDog} src={img} alt="logo dog" onClick={clean} />     */}                      
                </div>
            </div>
            <div className={styles.secondGroupNav}>
                < Navbar paginado= {paginado} reload={ reload } />
                < SubNavbar paginado= {paginado} reload={ reload } />
                < FilterTemp paginado= {paginado} />
            </div>
        </div>
    )
};