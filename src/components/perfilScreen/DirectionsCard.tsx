import { useEffect, useState } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Direccion } from "../../interfaces/interfaces";
import { ChangeTheme } from "../../helpers/changeTheme"

import pizzaApi from "../../api/pizzaApi";


interface DireccionesContentProps {
    index: string,
    id: string
}

export const DirectionsCard = ({ index, id }: DireccionesContentProps) => {

    const [direction, setDirection] = useState({} as Direccion);

    ChangeTheme({
        id: [
            `titleDirection${index}`,
            `textItemCalle${index}`,
            `textItemNumero${index}`,
            `textItemColonia${index}`,
            `textItemCiudad${index}`,
            `textItemEstado${index}`,
            `textItemCP${index}`,
        ], is: 'title'
    });

    useEffect(() => {
        getDirection();
    }, []);

    const getDirection = async () => {
        await pizzaApi.get('/direcciones/' + id)
            .then(res => {
                setDirection(res.data)
            })
            .catch(console.log);
    }


    return (
        <>
            {
                direction && (
                    <div className='directionCard' style={styles.directionContainer}>
                        <span id={`titleDirection${index}`} style={styles.titleDirectionContainer}>Dirección #{index}: <FontAwesomeIcon icon={faHome} /></span>
                        <div style={styles.directionText}>
                            <span id={`textItemCalle${index}`} style={styles.strong}>Calle:</span> <span style={styles.normal}>{direction.calle}</span>
                        </div>
                        <div style={styles.directionText}>
                            <span id={`textItemNumero${index}`} style={styles.strong}>Número:</span> <span style={styles.normal}>{direction.numero}</span>
                        </div>
                        <div style={styles.directionText}>
                            <span id={`textItemColonia${index}`} style={styles.strong}>Colonia:</span> <span style={styles.normal}>{direction.colonia}</span>
                        </div>
                        <div style={styles.directionText}>
                            <span id={`textItemCiudad${index}`} style={styles.strong}>Ciudad:</span> <span style={styles.normal}>{direction.ciudad}</span>
                        </div>
                        <div style={styles.directionText}>
                            <span id={`textItemEstado${index}`} style={styles.strong}>Estado:</span> <span style={styles.normal}>{direction.ciudad}</span>
                        </div>
                        <div style={styles.directionText}>
                            <span id={`textItemCP${index}`} style={styles.strong}>Código postal:</span> <span style={styles.normal}>{direction.codigoPostal}</span>
                        </div>
                    </div>
                )
            }
        </>
    )
}


const styles = {
    directionContainer: {
        width: '47%',
        minWidth: '390px',
        margin: '15px 10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '3px 3px 7px rgba(0, 0, 0, 0.3)'
    },
    titleDirectionContainer: {
        borderBottom: '1px solid rgb(145, 14, 14)',
        padding: '5px 0 10px 0',
        width: '100%',
        textAlign: 'center' as 'center',
        fontSize: '20px',
        fontWeight: 'bold' as 'bold',
        color: 'rgb(145, 14, 14)'
    },
    directionText: {
        width: '100%',
        padding: '10px'
    },
    strong: {
        fontWeight: 'bold' as 'bold',
        fontSize: '18px',
        color: 'rgb(145, 14, 14)'
    },
    normal: {
        fontSize: '17px'
    },
}