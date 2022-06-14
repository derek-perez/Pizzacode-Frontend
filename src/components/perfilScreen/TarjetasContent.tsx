import { useContext, useEffect, useState } from "react";

import { faCreditCard, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ChangeTheme } from "../../helpers/changeTheme";
import { CreditCardComponent } from "./CreditCardComponent"
import pizzaApi from "../../api/pizzaApi";

import { Card } from "../../interfaces/interfaces";
import { UserContext } from "../../context/UserContext";
import { AddNewThing } from "./AddNewThing";
import { ModalAddNew } from "./ModalAddNew";


export const TarjetasContent = () => {

  const [tarjetas, setTarjetas] = useState([] as Card[]);
  const [opened, setOpened] = useState(false);
  const { user } = useContext(UserContext);

  
  ChangeTheme({
    id: ['tarjetasContentTitle'], is: 'title'
  });

  useEffect(() => {
    getDirections();
  }, []);

  const getDirections = async () => {
    user.cards && (
      user.cards.map(async (card: string) => {
        await pizzaApi.get('/tarjetas/' + card)
          .then(res => {
            setTarjetas((prevState: Card[]) => [...prevState, res.data])
          })
          .catch(console.log);
      })
    )
  }


  return (
    <div style={styles.container}>
      <h2 id='tarjetasContentTitle' style={styles.title}><FontAwesomeIcon icon={faCreditCard} /> Tus tarjetas:</h2>
      <p style={{ padding: '0 20px' }}>(Estos son los métodos de pago o tarjetas que has usado o proporcionado en alguna de tus compras)</p>

      <div style={styles.content}>
        {
          tarjetas.length === 0 && (
            <div style={styles.noHay}>
              <span style={styles.noHayText}>
                No has añadido ninguna tarjeta
              </span>
              <button
                onClick={() => setOpened(true)}
                className="btn btn-danger"
                style={styles.noHayBtn}
              >
                <FontAwesomeIcon icon={faPlus} /> &nbsp;
                Añadir tarjeta
              </button>
            </div>
          )
        }
        {
          tarjetas.length > 0 && (
            tarjetas.map((tarjeta: Card, i) => (
              <CreditCardComponent key={tarjeta._id} tarjetaContent={tarjeta} index={i} />
            ))
          )
        }
      </div>

      {
        opened && (
          <ModalAddNew whatIS='tarjeta' opened={opened} setOpened={setOpened} />
        )
      }

      {
        tarjetas.length > 0 && (
          <AddNewThing algo='tarjeta' />
        )
      }

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