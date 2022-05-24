import { useEffect } from 'react';

import { useAnimation } from '../hooks/useAnimation';

import { Carousel } from '../components/homeComponents/Carousel';

import { ChangeTheme } from '../helpers/changeTheme';
import { useTheme } from '../hooks/useTheme';
import { CardContent } from '../components/homeComponents/CardContent';


export const HomeScreen = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // Tema
  ChangeTheme({
    id: [
      'home',
      'promotionsContainer',
      'acompañamientosContainer',
      'ratestContainer',
      'menuPreviewContainer',
    ], is: 'div'
  });
  ChangeTheme({
    id: [
      'promotionsTitle',
      'acompañamientosTitle',
      'topRatedTitle',
      'previewMenu',
    ], is: 'title'
  });

  // Animaciones
  useAnimation({
    element: [
      'promotionsTitle',
      'acompañamientosTitle',
      'topRatedTitle',
      'previewMenu',
      'infoMenu'
    ],
    name: ['animate__flipInY']
  });

  useAnimation({
    element: [
      'buttonMore1',
      'buttonMore2',
    ],
    name: ['animate__fadeIn']
  });

  const { setProps } = useTheme();

  window.addEventListener('DOMContentLoad', (e) => {
    setProps({ e, justNow: true });
  });


  return (

    <div id='home'>

      {/* Carrusel */}
      <Carousel />

      {/* Promociones */}
      <div
        id='promotionsContainer'
        style={{
          ...styles.container,
          marginTop: '30px'
        }}
      >
        <h2 id='promotionsTitle' style={styles.title}>Promociones</h2>

        <div style={styles.cards}>
          <CardContent whatIs='promotion' item={'1'} />
          <CardContent whatIs='promotion' item={'2'} />
          <CardContent whatIs='promotion' item={'3'} />
        </div>

      </div>

      <hr style={styles.hr} />

      {/* Acompañamientos */}
      <div id='acompañamientosContainer' style={styles.container}>
        <h2 id='acompañamientosTitle' style={styles.title}>Acompaña tu pizza con...</h2>

        <div style={styles.cards}>
          <CardContent whatIs='acompañamiento' item={'4'} />
          <CardContent whatIs='acompañamiento' item={'5'} />
          <CardContent whatIs='acompañamiento' item={'6'} />
        </div>

        <div style={styles.buttonMore}>
          <button id='buttonMore1' style={styles.button}>Ver más</button>
        </div>

      </div>

      <hr style={styles.hr} />

      {/* Pizzas mejor valoradas */}
      <div id='ratestContainer' style={styles.container}>
        <h2 id='topRatedTitle' style={styles.title}>Pizzas mejores valoradas:</h2>

        <div style={styles.cards}>
          <CardContent whatIs='topRated' item='7' />
          <CardContent whatIs='topRated' item='8' />
          <CardContent whatIs='topRated' item='9' />
        </div>

        <div style={styles.buttonMore}>
          <button id='buttonMore2' style={styles.button}>Ver más</button>
        </div>

      </div>

      <hr style={styles.hr} />

      <div id='menuPreviewContainer' style={styles.container}>
        <h2 id='previewMenu' style={styles.title}>
          ¿Quiéres ver que más tenemos para ti y tu paladar?...
        </h2>

        <h4
          id='infoMenu'
          style={{
            marginTop: '15px',
            textAlign: 'center',
            marginBottom: '35px',
            opacity: 0
          }}
        >
          En nuestro menú, podrás ver nuestras pizzas, acompañamientos para ellas
          y hasta uno que otro postre que de seguro te gustarán...
        </h4>

        <div style={styles.cards}>
          <CardContent whatIs='menuItemPreview' item='10' />
          <CardContent whatIs='menuItemPreview' item='11' />
          <CardContent whatIs='menuItemPreview' item='12' />
        </div>

      </div>

    </div>
  )
}


const styles = {
  hr: {
    height: '2px',
    color: 'rgb(145, 14, 14)',
    opacity: 1,
    margin: '0 30px 30px 30px',
    boxShadow: '0px 0px 5px rgba(145, 14, 14, 0.5)'
  },

  // Estilos para las tarjetas y sus contenedores 
  container: {
    position: 'relative' as 'relative',
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px 50px 0 50px',
    marginBottom: '100px',
  },
  title: {
    letterSpacing: '1px',
    fontWeight: 'bold',
    color: 'rgb(145, 14, 14)',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    marginBottom: '30px',
    opacity: 0,
    textAlign: 'center' as 'center'
  },
  cards: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-around',
    width: '100%',
    margin: '0 auto',
    flexWrap: 'wrap' as 'wrap',
  },
  buttonMore: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  },
  button: {
    backgroundColor: 'rgb(145, 14, 14)',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    cursor: 'pointer',
    opacity: 0
  }

}
