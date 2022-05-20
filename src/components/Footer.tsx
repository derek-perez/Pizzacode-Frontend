import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGear, faMessage } from '@fortawesome/free-solid-svg-icons';
import { ModalTheme } from './ModalTheme';



export const Footer = () => {

  const [modal, setModal] = useState(false);

  return (
    <div id='footer' style={styles.container}>

      <div id='apperanceFooter' style={styles.apperance}>
        <div style={styles.apperanceText}>
          <span>Configuración de la apariencia:</span>
        </div>
        <button 
          style={styles.apperanceButton}
          id='apperanceButton'
          onClick={() => {
            setModal(true);
          }}
        >
          <FontAwesomeIcon icon={faGear} />
          &nbsp;
          Escoje el tema de la aplicacion
        </button>
      </div>

      <div id='footerContent' style={styles.content}>
        <div id='footerSection1' className='footerSection' style={styles.sectionContainer}>
          <h4 style={styles.containerTitle}>Pizzacode</h4>

          <img style={styles.logo} src='../assets/pizza-logo-dark.png' />

          <p>Derek Pérez | Copyright &copy;2022</p>
        </div>

        <div className='footerSection' style={styles.sectionContainer}>
          <h4 style={styles.containerTitle}>¡Contáctanos!</h4>

          <ul style={styles.listContact}>
            <li style={styles.listItem}>
              <FontAwesomeIcon style={styles.iconListItem} icon={faMessage} /> +52 123 456 7890
            </li>

            <li style={styles.listItem}>
              <FontAwesomeIcon style={styles.iconListItem} icon={faTwitter} /> @pizzacode
            </li>

            <li style={styles.listItem}>
              <FontAwesomeIcon style={styles.iconListItem} icon={faInstagram} /> @pizzacode
            </li>

            <li style={styles.listItem}>
              <FontAwesomeIcon style={styles.iconListItem} icon={faFacebook} /> Pizzacode
            </li>
          </ul>

        </div>

        <div className='footerSection' style={styles.sectionContainer}>
          <h4 style={styles.containerTitle}>Quejas y sugerencias</h4>

          <div style={styles.quejasContainer}>

            <input
              style={styles.inputQuejasContainer}
              type='text'
              name='asunto'
              placeholder="Queja/Sugerencia"
            />
            <textarea
              name='mensaje'
              style={styles.textareaQuejasContainer}
              placeholder='Escribe aquí tu mensaje'
            ></textarea>

          </div>
        </div>
      </div>

      {/* Modal de tema */}
      {
        (modal) && (
          <ModalTheme opened setOpened={(o) => setModal(false)} />
        )
      }

    </div>
  )
}



const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(145, 14, 14)',
    color: 'white',
    padding: '20px 0',
    borderTop: '20px solid rgba(0, 0, 0, 0.5)',
    boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.5)',
  },

  apperance: {
    borderBottom: '1px solid rgb(255, 255, 255)',
    width: '100%',
    Bottom: '25px',
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px 15px 20px',
    marginBottom: '25px',
  },
  apperanceText: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  apperanceButton: {
    backgroundColor: 'rgb(0, 99, 244)',
    border: 'none',
    padding: '10px',
    color: 'white',
    borderRadius: '5px',
    fontSize: '18px',
  },

  content: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    width: '100%'
  },

  sectionContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0 20px'
  },
  logo: {
    width: '175px'
  },
  containerTitle: {
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '10px',
    letterSpacing: '2px'
  },
  listContact: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px',
    fontSize: '18px'
  },
  iconListItem: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '10px'
  },
  quejasContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px',
    height: '100%'
  },
  inputQuejasContainer: {
    width: '100%',
    border: 'none',
    marginBottom: '10px',
    backgroundColor: 'transparent',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    borderBottom: '1px solid white'
  },
  textareaQuejasContainer: {
    width: '100%',
    height: '150px',
    border: '1px solid white',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: 'transparent',
    fontSize: '18px',
    color: 'white',
    resize: 'none' as 'none'
  }
}