import { Link, useNavigate, } from 'react-router-dom'

import { faAddressBook, faCartShopping, faChevronRight, faClipboardList, faHome, faMoon, faSearch, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useForm } from '../hooks/useForm';


export const MenuResponsive = () => {

    const navigate = useNavigate();
    const { formData, onChange } = useForm({
        searchInput: ''
    });

    const { searchInput }: any = formData;

    const handlerChange = (e: any) => {
        e.preventDefault();
        onChange(e);

        const buscarInput = document.getElementById('buscarInputResponsive');

        if (buscarInput) {
            buscarInput.addEventListener('keyup', (e) => {
                let search = e.target as HTMLInputElement;

                if (e.key === 'Enter') {
                    navigate('/buscar/' + search.value);
                }
            })
        }

    }

    const ocultarMenu = () => {
        const menu = document.getElementById('menuResponsive');

        window.scrollTo(0, 0);

        if (menu) {
            menu.style.display = 'none';
        }
    }

    const ocultarConBoton = () => {
        const menu = document.getElementById('menuResponsive');

        if (menu) {
            menu.classList.remove('animate__fadeIn');
            menu.classList.add('animate__fadeOut');

            setTimeout(() => {
                menu.style.display = 'none';
            }, 250);
        }
    }


    return (
        <div id='menuResponsive' style={styles.container}>
            <div style={styles.menu}>
                <h2 style={styles.title}>Menú</h2>
                <i
                    id='menuClose'
                    onClick={ocultarConBoton}
                >
                    <FontAwesomeIcon icon={faTimes} style={styles.icon} />
                </i>

                <div className='searchDivResponsive' style={styles.itemSearch}>
                    <input id='buscarInputResponsive' type='text' placeholder='Buscar producto' onChange={handlerChange} name='searchInput' style={styles.inputSearch} />
                    <Link to={`/buscar/${searchInput}`}>
                        <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
                    </Link>
                </div>

                <ul style={styles.list}>
                    <Link onClick={ocultarMenu} to='/menu' style={styles.navItem}>
                        <span>
                            <FontAwesomeIcon icon={faClipboardList} />
                            &nbsp; Menú
                        </span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                    <Link onClick={ocultarMenu} to='/contacto' style={styles.navItem}>
                        <span>
                            <FontAwesomeIcon icon={faAddressBook} />
                            &nbsp; Contacto
                        </span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                    <Link title='Tu carrito' onClick={ocultarMenu} to='/carrito' style={styles.navItem}>
                        <span>
                            <FontAwesomeIcon icon={faCartShopping} />
                            &nbsp; Tu carrito
                        </span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                    <Link title='Tu cuenta' onClick={ocultarMenu} to='/cuenta/perfil' style={styles.navItem}>
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                            &nbsp; Tu cuenta
                        </span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </ul>

            </div>
        </div>
    )
}


const styles = {
    container: {
        position: 'fixed' as 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0 0 0 / 50%)',
        display: 'none'
    },
    menu: {
        position: 'absolute' as 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        backgroundColor: 'rgb(145, 14, 14)',
        width: '400px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column' as 'column',
        padding: '30px',
        boxShadow: '0 0 10px 3px rgb(0 0 0 / 75%)'
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        padding: '1rem',
        borderBottom: '1px solid white',
        width: '100%'
    },
    icon: {
        color: 'white',
        fontSize: '35px',
        cursor: 'pointer',
        position: 'absolute' as 'absolute',
        top: '45px',
        right: '45px'
    },

    itemSearch: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '0.5rem',
        textDecoration: 'none',
        textShadow: '2px 2px 3px rgba(0, 0, 0, 75%)',
        border: '1px solid white',
        borderRadius: '10px',
        width: '100%',
        margin: '15px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputSearch: {
        border: 'none',
        background: 'transparent',
        color: 'white',
        outline: 'none',
        marginRight: '10px',
        width: '100%'
    },

    list: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        padding: '1rem',
    },
    navItem: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '1rem',
        textDecoration: 'none',
        borderTop: '1px solid white',
        width: '100%',
        textAlign: 'center' as 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

}