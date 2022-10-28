import { useDispatch } from 'react-redux'
import { orderByName } from '../../redux/actions'


import styles from './navbar.module.css'

export const Navbar = ({ paginado, reload }) => {
    const dispatch = useDispatch()


    let handleOrderName = (e) => {
        e.preventDefault();
        dispatch( orderByName(e.target.value) );
        reload(e.target.value);
        paginado(1);
    }
        
    return (
        <div className={styles.subNav}>
            <div className={styles.filters} >
                <div className={styles.sort}>
                    <label htmlFor="filter" className={styles.labelSort} >Order:</label>
                    <select className={styles.Navbar__Select} name='nombres' id='alphabetical' onChange={e => handleOrderName(e)} >
                        <optgroup label="By name:">
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </optgroup>
                    </select>
                </div>
            </div>
        </div>

    )
}