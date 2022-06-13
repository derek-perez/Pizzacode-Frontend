import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faMapLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ChangeTheme } from "../../helpers/changeTheme";
import { DirectionsCard } from "./DirectionsCard"

import { Direccion } from "../../interfaces/interfaces";
import { UserContext } from "../../context/UserContext";
import pizzaApi from "../../api/pizzaApi";
import { AddNewThing } from "./AddNewThing";


export const DireccionesContent = () => {

  const [directions, setDirections] = useState([] as Direccion[]);
  const { user } = useContext(UserContext);

  ChangeTheme({
    id: ['direccionesContentTitle'], is: 'title'
  });

  useEffect(() => {
    getDirections();
  }, []);

  const getDirections = () => {
    user.direcciones && (
      user.direcciones.map(async (direccion: string) => {
        await pizzaApi.get('/direcciones/' + direccion)
          .then(res => {
            setDirections((prevState: Direccion[]) => [...prevState, res.data]);
          })
          .catch(console.log);
      })
    )
  }



  return (
    <div style={styles.content}>
      <h2 id='direccionesContentTitle' style={styles.title}><FontAwesomeIcon icon={faMapLocationDot} /> Las direcciones que has dado:</h2>
      <p style={{ marginBottom: '35px', padding: '0 20px' }}>(Aquí aparecerán las direcciones que en algún momento ha ingresado en alguna compra)</p>

      <div style={styles.contentItem}>
        {
          directions.length === 0 && (
            <div style={styles.noHay}>
              <span style={styles.noHayText}>
                No has añadido ninguna dirección
              </span>
              <button
                className="btn btn-danger"
                style={styles.noHayBtn}
              >
                <FontAwesomeIcon icon={faPlus} /> &nbsp;
                Añadir dirección
              </button>
            </div>
          )
        }
        {
          directions.length > 0 && (
            directions.map((direction: Direccion) => (
              <DirectionsCard key={direction._id} id={direction._id} index={'1'} />
            ))
          )
        }
      </div>

      {
        directions.length > 0 && (
          <AddNewThing algo='dirección' />
        )
      }

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