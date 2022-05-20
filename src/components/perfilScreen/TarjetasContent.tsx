import { faCreditCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeTheme } from "../../helpers/changeTheme";
import { CreditCardComponent } from "./CreditCardComponent"


export const TarjetasContent = () => {

  ChangeTheme({
    id: ['tarjetasContentTitle'], is: 'title'
  });

  return (
    <div style={styles.container}>
      <h2 id='tarjetasContentTitle' style={styles.title}><FontAwesomeIcon icon={faCreditCard} /> Tus tarjetas:</h2>
      <p style={{ padding: '0 20px' }}>(Estos son los métodos de pago o tarjetas que has usado o proporcionado en alguna de tus compras)</p>

      <div style={styles.content}>
        <CreditCardComponent />
        <CreditCardComponent />
        <CreditCardComponent />
        <CreditCardComponent />
      </div>

    </div>
  )
}



const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    marginBottom: '50px'
  },
  title: {
    color: 'rgb(145, 14, 14)',
    margin: '35px 0 10px 0'
  },

  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
    flexWrap: 'wrap' as 'wrap'
  }
}