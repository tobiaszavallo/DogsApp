import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


//components
import { Card } from '../Card/Card';
import { Paginado } from '../Paginado/Paginado';
import { Header } from '../Header/Header';

import styles from './home.module.css';
import { getDogs } from '../../redux/actions';


export const Home = () => {
    
    const dispatch = useDispatch();

    const dogs = useSelector ( (state) => state.dogs );
    
    const [ render, setRender ] = useState(''); 
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ dogsPerPage, setDogPerPage ] = useState(8); 
    const indexOfLastDog = currentPage * dogsPerPage; 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage; 
    
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog); 

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect (() => {
        if ( dogs.length === 0 ) {
            dispatch( getDogs() )
        }
    },[dispatch, dogs]);


    return (
        <div>
            <div className={styles.fullHeader}>
                <div className={styles.fullNavbar}>
                    <Header paginado={ paginado } reload={ setRender }/>
                </div>
            </div>
            <div>
                <div className={styles.Home__containCard}>
                    {   
                        currentDogs.length > 0 && currentDogs.map(dog => {
                            return (
                                <div key={dog.id}>
                                    <Link className={styles.CardStylesText} to={`/home/${dog.id}`}>
                                        <Card imagen={dog.imagen} nombre={dog.nombre} grupo_raza={dog.grupo_raza} 
                                        temperamentos={ dog.temperamento.split(',') } peso={dog.peso} />
                                    </Link>
                                </div>
                            )    
                        })
                    }
                </div>
                <Paginado 
                dogsPerPage= {dogsPerPage} 
                dogs= {dogs.length}
                paginado= {paginado}
                currentPage= {currentPage}
                />
                {
                    !dogs && <div className={styles.DivMensajeBusquedaVacia}><h2>Lo sentimos, no hemos encontrado ese dog!</h2></div> 
                }  
            </div>
        </div>
    )
}



