import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBars, faCartShopping, faClipboardList, faHome, faMoon, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";


import { useForm } from "../hooks/useForm";
import { MenuResponsive } from "./MenuResponsive";

import 'animate.css';


export const Navbar = () => {

  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  const { formData, onChange } = useForm({
    searchInput: ''
  });

  const { searchInput }: any = formData;


  window.addEventListener('scroll', () => {

    const scrollPositiondCheck = document.body.getBoundingClientRect().top;
    const navBar = document.getElementById('navBar');

    if (!navBar) return;


    if (scrollPositiondCheck > scrollPosition) {
      // '↑'
      navBar.style.position = 'sticky';
      setScrollPosition(scrollPositiondCheck);

    } else {
      // '↓'      
      navBar.style.position = 'relative';
      setScrollPosition(scrollPositiondCheck);

    }

  });

  const handlerChange = (e: any) => {
    e.preventDefault();
    onChange(e);

    const buscarInput = document.getElementById('buscarInput');

    if (buscarInput) {
      buscarInput.addEventListener('keyup', (e) => {
        let search = e.target as HTMLInputElement;

        if (e.key === 'Enter') {
          navigate('/buscar/' + search.value);
        }
      })
    }

  }



  return (
    <nav id='navBar' style={styles.navbar}>
      <div>
        <Link to='/'>
          <img src='../assets/pizza-logo-dark.png' alt='Ir a inicio' style={styles.logo} />
        </Link>
      </div>

      <div className='searchDiv' style={styles.itemSearch}>
        <input id='buscarInput' type='text' placeholder='Buscar producto' onChange={handlerChange} name='searchInput' style={styles.inputSearch} />
        <Link to={`/buscar/${searchInput}`}>
          <FontAwesomeIcon icon={faSearch} style={{ ...styles.icon, marginRight: 0, outline: 'none' }} />
        </Link>
      </div>

      <div style={{ display: 'flex' }} className='linksDiv' >
        <Link to='/' style={{...styles.navItem, paddingLeft: 0}}>
          <FontAwesomeIcon icon={faHome} />
          <span>Inicio</span>
        </Link>
        <Link to='/menu' style={styles.navItem}>
          <FontAwesomeIcon icon={faClipboardList} />
          <span>Menú</span>
        </Link>
        <Link to='/contacto' style={styles.navItem}>
          <FontAwesomeIcon icon={faAddressBook} />
          <span>Contacto</span>
        </Link>
        <Link to='/carrito' style={styles.navItem}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>Carrito</span>
        </Link>
        <Link to='/cuenta/perfil' style={styles.navItem}>
          <FontAwesomeIcon icon={faUser} />
          <span>Cuenta</span>
        </Link>
      </div>

      <span
        className="menuOpen"
        onClick={() => {
          const menu = document.getElementById('menuResponsive');

          if (menu) {
            menu.classList.add('animate__animated');
            menu.classList.remove('animate__fadeOut');
            menu.classList.add('animate__fadeIn');
            menu.classList.add('animate__faster');
            menu.style.display = 'block';
          }
        }}
      >
        <FontAwesomeIcon
          icon={faBars}
          style={{
            ...styles.icon,
            cursor: 'pointer',
            fontSize: '35px',
          }}
        />
      </span>

      <MenuResponsive />

    </nav>
  )
}


const styles = {
  navbar: {
    alignItems: 'center',
    backgroundColor: 'rgb(145, 14, 14)',
    borderBottom: '1px solid transparent',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 75%)',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '35px',
    paddingRight: '35px',
    zIndex: 999,
    position: 'sticky' as 'sticky',
    top: 0,
    left: 0
  },
  logo: {
    width: '100px',
  },
  navItem: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    paddingLeft: '30px',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    cursor: 'pointer',
  },
  itemSearch: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '1rem',
    textDecoration: 'none',
    textShadow: '2px 2px 3px rgba(0, 0, 0, 75%)',
    border: '1px solid white',
    borderRadius: '10px'
  },
  inputSearch: {
    border: 'none',
    background: 'transparent',
    color: 'white',
    outline: 'none',
    marginRight: '10px',
  },

  label: {
    width: '80px',
    height: '40px',
    backgroundColor: 'white',
    borderRadius: '50px',
    border: '1px solid white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: '10px'
  },

  icon: {
    textShadow: '2px 2px 3px rgba(0, 0, 0, 75%)',
    marginRight: '1rem',
    color: 'white'
  }
}