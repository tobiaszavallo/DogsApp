import styles from './paginado.module.css';

export const Paginado = ({ dogsPerPage, dogs, paginado, currentPage }) => {
    const pageNumbers = [];

    for ( let i=1; i <= Math.ceil( dogs/dogsPerPage ); i++ ) {
        pageNumbers.push(i);
    };


    return (
        <nav>
            <ul className={styles.pagination}>
                {
                    pageNumbers && pageNumbers.map( number => (
                        <li 
                        key={number} 
                        value={number} 
                        className={currentPage === number ? styles.currentPage : styles.pageItem}
                        onClick={ () => {
                        paginado(number)
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                            })   
                        }}
                        >
                            { number }
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}