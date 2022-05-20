import { faReceipt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeTheme } from "../../helpers/changeTheme";
import { ReceiptComponent } from "./ReceiptComponent"


export const PagosContent = () => {
  
  ChangeTheme({
    id: ['pagosContentTitle'], is: 'title'
  });

  return (
    <div style={styles.container}>
      <h2 id='pagosContentTitle' style={styles.title}><FontAwesomeIcon icon={faReceipt} /> Tus pagos:</h2>

      <div style={styles.content}>
        <ReceiptComponent index={'1'} />
        <ReceiptComponent index={'2'} />
        <ReceiptComponent index={'3'} />
        <ReceiptComponent index={'4'} />
        <ReceiptComponent index={'5'} />
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
    flexWrap: 'wrap' as 'wrap',
    marginTop: '10px'
  }

}