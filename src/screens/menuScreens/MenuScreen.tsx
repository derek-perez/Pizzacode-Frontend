import { useEffect, useState } from "react";
import { ChangeTheme } from "../../helpers/changeTheme";

import { Producto } from '../../interfaces/interfaces';
import { ItemMenu } from "../../components/screensComponents/ItemMenu";
import pizzaApi from "../../api/pizzaApi";


interface MenuProps {
  _id: string;
  nombre: string;
  titulo: string;
  productos: string[];
}

export const MenuScreen = () => {

  const [categorias, setCategorias] = useState([] as MenuProps[]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const themeChange = localStorage.getItem('themeApp');

  ChangeTheme({
    id: [
      'pizzasLinkContainer',
      'acompañamientosLinkContainer',
      'postresLinkContainer',
    ], is: 'littleMenuItem'
  });


  const changeActive = (e: string) => {
    // Elementos
    const pizzasLinkContainer = document.getElementById('pizzasLinkContainer') as HTMLElement;
    const acompañamientosLinkContainer = document.getElementById('acompañamientosLinkContainer') as HTMLElement;
    const postresLinkContainer = document.getElementById('postresLinkContainer') as HTMLElement;

    const menuPizzas = document.getElementById('menuPizzas');
    const menuAcompañamientos = document.getElementById('menuAcompañamientos');
    const menuPostres = document.getElementById('menuPostres');

    if (themeChange === 'dark') {
      if (e === 'pizzasLinkContainer') {
        acompañamientosLinkContainer.classList.replace('darkModeLittleMenuItemActive', 'darkModeLittleMenuItem');
        postresLinkContainer.classList.replace('darkModeLittleMenuItemActive', 'darkModeLittleMenuItem');

        pizzasLinkContainer.classList.replace('darkModeLittleMenuItem', 'darkModeLittleMenuItemActive');

        menuPizzas?.classList.remove('hidden');
        menuAcompañamientos?.classList.add('hidden');
        menuPostres?.classList.add('hidden');

      } else if (e === 'acompañamientosLinkContainer') {
        postresLinkContainer.classList.replace('darkModeLittleMenuItemActive', 'darkModeLittleMenuItem');
        pizzasLinkContainer.classList.replace('darkModeLittleMenuItemActive', 'darkModeLittleMenuItem');

        acompañamientosLinkContainer.classList.replace('darkModeLittleMenuItem', 'darkModeLittleMenuItemActive');

        menuPizzas?.classList.add('hidden');
        menuAcompañamientos?.classList.remove('hidden');
        menuPostres?.classList.add('hidden');

      } else if (e === 'postresLinkContainer') {
        pizzasLinkContainer.classList.replace('darkModeLittleMenuItemActive', 'darkModeLittleMenuItem');
        acompañamientosLinkContainer.classList.replace('darkModeLittleMenuItemActive', 'darkModeLittleMenuItem');

        postresLinkContainer.classList.replace('darkModeLittleMenuItem', 'darkModeLittleMenuItemActive');

        menuPizzas?.classList.add('hidden');
        menuAcompañamientos?.classList.add('hidden');
        menuPostres?.classList.remove('hidden');
      }

    }

    if (themeChange === 'clear') {
      if (e === 'pizzasLinkContainer') {
        acompañamientosLinkContainer.classList.replace('clearModeLittleMenuItemActive', 'clearModeLittleMenuItem');
        postresLinkContainer.classList.replace('clearModeLittleMenuItemActive', 'clearModeLittleMenuItem');

        pizzasLinkContainer.classList.replace('clearModeLittleMenuItem', 'clearModeLittleMenuItemActive');

        menuPizzas?.classList.remove('hidden');
        menuAcompañamientos?.classList.add('hidden');
        menuPostres?.classList.add('hidden');

      } else if (e === 'acompañamientosLinkContainer') {
        postresLinkContainer.classList.replace('clearModeLittleMenuItemActive', 'clearModeLittleMenuItem');
        pizzasLinkContainer.classList.replace('clearModeLittleMenuItemActive', 'clearModeLittleMenuItem');

        acompañamientosLinkContainer.classList.replace('clearModeLittleMenuItem', 'clearModeLittleMenuItemActive');

        menuPizzas?.classList.add('hidden');
        menuAcompañamientos?.classList.remove('hidden');
        menuPostres?.classList.add('hidden');

      } else if (e === 'postresLinkContainer') {
        pizzasLinkContainer.classList.replace('clearModeLittleMenuItemActive', 'clearModeLittleMenuItem');
        acompañamientosLinkContainer.classList.replace('clearModeLittleMenuItemActive', 'clearModeLittleMenuItem');

        postresLinkContainer.classList.replace('clearModeLittleMenuItem', 'clearModeLittleMenuItemActive');

        menuPizzas?.classList.add('hidden');
        menuAcompañamientos?.classList.add('hidden');
        menuPostres?.classList.remove('hidden');

      }
    }

  }


  const obtenerCategorias = async () => {
    const { data: { categorias } } = await pizzaApi.get('/categorias');
    return setCategorias(categorias);
  }

  obtenerCategorias();

  return (
    <div style={styles.container}>
      <div style={styles.imgContainer}>
        <div id='introMenu' style={styles.introContainer}>
          <img
            src='https://chugus.github.io/Pizzacode-Frontend/assets/pizza-logo-dark.png'
            style={styles.imgImgMain}
          />
          <p style={styles.textImgMain}>Mira lo que tenemos para ofrecerte:</p>
        </div>
      </div>

      <div id='menuContent' style={styles.contentContainer}>
        <div
          id='itemsLinkMenu'
          style={{ width: '25%', borderRight: '3px solid rgb(145, 14, 14)' }}
        >
          <p
            id='pizzasLinkContainer'
            className={themeChange === 'dark' ? "darkModeLittleMenuItemActive" : "clearModeLittleMenuItemActive"}
            onClick={() => changeActive('pizzasLinkContainer')}
            style={styles.linkMenu}
            >
            Pizzas
          </p>
          <p
            id='acompañamientosLinkContainer'
            className={themeChange === 'dark' ? "darkModeLittleMenuItem" : "clearModeLittleMenuItem"}
            onClick={() => changeActive('acompañamientosLinkContainer')}
            style={styles.linkMenu}
            >
            Acompañamientos
          </p>
          <p
            id='postresLinkContainer'
            className={themeChange === 'dark' ? "darkModeLittleMenuItem" : "clearModeLittleMenuItem"}
            onClick={() => changeActive('postresLinkContainer')}
            style={styles.linkMenu}
          >
            Postres
          </p>
        </div>

        <div id='contentMenuItem' style={{ width: '75% ' }}>
          <div style={styles.menuContainer}>
            {
              categorias.map(categoria => (
                <ItemMenu key={categoria._id} nombre={categoria.nombre} titulo={categoria.titulo} producto={categoria.productos} />
              ))
            }
          </div>
        </div>

      </div>

    </div>
  )
}


const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  imgContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    borderBottom: '15px solid rgb(145, 14, 14)',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.7)',
    minHeight: '550px',
    maxHeight: '550px',
    background: 'url(./Pizzacode-Frontend/assets/menuImg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '0px',
    margin: '0px',
  },
  introContainer: {
    position: 'absolute' as 'absolute',
    top: '35%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    width: '80%'
  },
  imgImgMain: {
    width: '175px',
  },
  textImgMain: {
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center' as 'center',
    textShadow: '2px 2px 3px #000'
  },

  contentContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },

  linkMenu: {
    width: '100%',
    display: 'block',

    padding: '25px',
    fontSize: '20px',
    textDecoration: 'none',

    marginBottom: 0,
    borderBottom: '3px solid rgb(145, 14, 14)',
    cursor: 'pointer',
  },

  // Menu container
  menuContainer: {
    width: '100%',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'rgb(145, 14, 14)',
    textAlign: 'center' as 'center',
    marginTop: '20px',
    letterSpacing: '1px',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
  },
  itemMenuContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '30px',
    marginBottom: '60px',
    padding: '20px',
  }

}