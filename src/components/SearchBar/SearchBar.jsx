import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogsByName, getDogs } from '../../redux/actions';
import styles from './searchBar.module.css';


export const SearchBar = ({ paginado }) => {
    
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    
    const handleInputChange = (e) => {
        e.preventDefault();
        setInput( () => (e.target.value) )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( getDogsByName(input) );
        paginado(1);
    } 

    let handleClickRefresh = (e) => {
        e.preventDefault();
        setInput('');
        dispatch( getDogs() );
        paginado(1);
    }

    return (
        <div className={styles.containSearchBar}>
            <button className={styles.SearchBarButtonRefresh} onClick={(e) => handleClickRefresh(e)}>Refresh</button>
            <form onSubmit={handleSubmit} className={styles.searchBar}>
                <input 
                className={styles.inputText} 
                type='text' 
                name='search'
                onChange={ handleInputChange } 
                value={input}  
                placeholder="Search by breeds name..." />
                <input type='submit' value="Search" className={styles.submit} />
            </form>
        </div> 
    )
}