
import { useAnimation } from '../../hooks/useAnimation';

import {
  AcompañamientoCard,
  PromotionCard,
  TopRatedComponent,
  MenuItemPreview,
  Carousel
} from '../../components/homeComponents/';

import { ChangeTheme } from '../../helpers/changeTheme';
import { useTheme } from '../../hooks/useTheme';


export const HomeScreen = () => {
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
    setProps({e, justNow: true});
  })

  const promotion1 = '../assets/promotion1.jpg';
  const promotion2 = '../assets/promotion2.jpg';
  const promotion3 = '../assets/promotion3.jpg';

  const acompañamiento1 = '../assets/acompañamiento1.jpg';
  const acompañamiento2 = '../assets/acompañamiento2.jpg';
  const acompañamiento3 = '../assets/acompañamiento3.jpg';

  const topRated1 = '../assets/topRated1.jpg';
  const topRated2 = '../assets/topRated2.jpg';
  const topRated3 = '../assets/topRated3.jpg';


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
          <PromotionCard img={promotion1} item={'1'} />
          <PromotionCard img={promotion2} item={'2'} />
          <PromotionCard img={promotion3} item={'3'} />
        </div>

      </div>

      <hr style={styles.hr} />

      {/* Acompañamientos */}
      <div id='acompañamientosContainer' style={styles.container}>
        <h2 id='acompañamientosTitle' style={styles.title}>Acompaña tu pizza con...</h2>

        <div style={styles.cards}>
          <AcompañamientoCard img={acompañamiento1} item={'1'} />
          <AcompañamientoCard img={acompañamiento2} item={'2'} />
          <AcompañamientoCard img={acompañamiento3} item={'3'} />
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
          <TopRatedComponent img={topRated1} item={'1'} />
          <TopRatedComponent img={topRated2} item={'2'} />
          <TopRatedComponent img={topRated3} item={'3'} />
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
          <MenuItemPreview img={topRated1} item={'1'} />
          <MenuItemPreview img={topRated2} item={'2'} />
          <MenuItemPreview img={topRated3} item={'3'} />
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
