import { useDispatch } from 'react-redux'
import { orderByWeight } from '../../redux/actions'


import styles from './navbar.module.css'

export const SubNavbar = ({ paginado, reload }) => {
    const dispatch = useDispatch()


    let handleOrderByWeight = (e) => {
        e.preventDefault();
        dispatch( orderByWeight(e.target.value) );
        reload(e.target.value);
        paginado(1);
    }
        
    return (
        <div className={styles.sort}>
                <label htmlFor="filter" className={styles.labelSort} >Order:</label>
                <select className={styles.SubNavbar__Select} name='peso' id='weight' onChange={e => handleOrderByWeight(e)}>
                    <optgroup label="By Weight">
                            <option key="AllWeight" value= 'AllWeight'>All</option>
                            <option value="ascendent">Ascendent</option>
                            <option value="descendent">Descendent</option>
                    </optgroup>
                </select>
        </div>
    )
}