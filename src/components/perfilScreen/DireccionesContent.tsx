import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeTheme } from "../../helpers/changeTheme";
import { DirectionsCard } from "./DirectionsCard"


export const DireccionesContent = () => {

  ChangeTheme({
    id: ['direccionesContentTitle'], is: 'title'
  });

  return (
    <div style={styles.content}>
      <h2 id='direccionesContentTitle' style={styles.title}><FontAwesomeIcon icon={faMapLocationDot} /> Las direcciones que has dado:</h2>
      <p style={{ marginBottom: '35px', padding: '0 20px' }}>(Aquí aparecerán las direcciones que en algún momento ha ingresado en alguna compra)</p>

      <div style={styles.contentItem}>
        <DirectionsCard index={'1'} />
        <DirectionsCard index={'2'} />
        <DirectionsCard index={'3'} />
      </div>

    </div>
  )
}


const styles = {
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    marginBottom: '50px'
  },
  title: {
    color: 'rgb(145, 14, 14)',
    margin: '35px 0 10px 0',
    padding: '0 20px'
  },

  contentItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center' as 'center',
    flexWrap: 'wrap' as 'wrap',
    marginBottom: '35px'
  }
}