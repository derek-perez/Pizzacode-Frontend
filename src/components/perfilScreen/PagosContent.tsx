import { useContext, useEffect, useState } from "react";

import { faPlus, faReceipt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ChangeTheme } from "../../helpers/changeTheme";
import { ReceiptComponent } from "./ReceiptComponent"
import pizzaApi from "../../api/pizzaApi";

import { Pago } from "../../interfaces/interfaces";
import { UserContext } from "../../context/UserContext";


export const PagosContent = () => {

  const [pagos, setPagos] = useState([] as Pago[]);
  const { user } = useContext(UserContext);

  ChangeTheme({
    id: ['pagosContentTitle'], is: 'title'
  });

  useEffect(() => {
    getDirections();
  }, []);

  const getDirections = async () => {
    user.pagos && (
      user.pagos.map(async (pago: string) => {
        await pizzaApi.get('/pagos/' + pago)
          .then(res => {
            setPagos((prevState: Pago[]) => [...prevState, res.data])
          })
          .catch(console.log);
      })
    )
  }


  return (
    <div style={styles.container}>
      <h2 id='pagosContentTitle' style={styles.title}><FontAwesomeIcon icon={faReceipt} /> Tus compras:</h2>
      <p style={{ padding: '0 20px' }}>(Estos son "recibos" de las compras que haz realizado)</p>

      <div style={styles.content}>
        {
          pagos.length === 0 && (
            <div style={styles.noHay}>
              <span style={styles.noHayText}>
                No has realizado ninguna compra
              </span>
              <button
                className="btn btn-danger"
                style={styles.noHayBtn}
              >
                <FontAwesomeIcon icon={faPlus} /> &nbsp;
                Añadir compra
              </button>
            </div>
          )
        }
        {
          pagos.length > 0 && (
            pagos.map((pagoContent: Pago) => (
              <ReceiptComponent key={pagoContent._id} index={pagoContent._id} />
            ))
          )
        }
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
  },

  noHay: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    padding: '20px',
    border: '2px solid rgb(145, 14, 14)',
    borderRadius: '5px',
    boxShadow: 'inset 0px 0px 10px #111'
  },
  noHayText: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  noHayBtn: { marginTop: '20px' }

}