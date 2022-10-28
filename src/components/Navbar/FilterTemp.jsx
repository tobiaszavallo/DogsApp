import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByTemps, getTemperaments } from '../../redux/actions';
import styles from './navbar.module.css'


export const FilterTemp = ({ paginado }) => {
    const dispatch = useDispatch();

    const allTemperaments = useSelector ( (state) => state.temperaments );

    useEffect(() => {
        dispatch( getTemperaments() )
    }, [ dispatch ])


    const handleFilterByTemps = (e) => {
        dispatch( filterByTemps(e.target.value) );
        paginado(1);
    }

  return (
    <div className={styles.sort}>
                <label htmlFor="filter" className={styles.labelSort} >Filter:</label>
                <select className={styles.filter__Select} name='temps' id='temps' onChange={e => handleFilterByTemps(e)}>
                    <optgroup label="By Temps">
                        <option key="AllTemperaments" value='AllTemperaments'>All</option>
                        {                           
                            allTemperaments && allTemperaments.map(temperament => {
                                return (
                                    <option key={temperament} value= {temperament}>{temperament}</option>
                                )
                            })
                        }     
                    </optgroup>
                </select>
        </div>
  )
}
