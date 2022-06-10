import { useEffect } from "react";
import { ContactoComponent } from "../../components/screensComponents/ContactoComponent"
import { ChangeTheme } from '../../helpers/changeTheme';


export const ContactoScreen = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  ChangeTheme({
    id: ['titleMaps', 'titleContacts'], is: 'title'
  });

  return (
    <div style={styles.container}>
      <h3 id='titleContacts' style={styles.title}>Puedes contactarnos o ver publicaciones de Pizzacode por los medios que te ofrecemos aquí</h3>


      <div style={styles.containerContacts}>
        <ContactoComponent direccion={true} />
        <ContactoComponent telefono={true} />
        <ContactoComponent email={true} />
        <ContactoComponent horario={true} />
        <ContactoComponent redes={true} />
        <ContactoComponent reservaciones={true} />
      </div>

      <div style={styles.mapContainer}>
        <h3 id='titleMaps' style={{ ...styles.title, margin: '25px 0' }}>Aquí puedes encontrar nuestros locales:</h3>
        <div className="bubble">
          <iframe
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: '0' }}
            src="https://www.google.com/maps/embed/v1/view?key=AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8&center=51.507351,-0.127758&zoom=17"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>

    </div>
  )
}


const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'rgb(145, 14, 14)',
    fontWeight: 'bold',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    marginTop: '45px',
    textAlign: 'center' as 'center',
    padding: '0 20px'
  },

  mapContainer: {
    width: '80%',
    borderTop: '1px solid rgb(145, 14, 14)',
    marginTop: '25px',
    marginBottom: '50px',
  },

  containerContacts: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row' as 'row',
    margin: '0 30px',
    padding: '50px',
    paddingBottom: '0',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'space-around',
  },

}