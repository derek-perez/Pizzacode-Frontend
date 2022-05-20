import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeTheme } from "../../helpers/changeTheme"


export const DirectionsCard = ({index}: {index: string}) => {
    
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
    })

    return (
        <div className='directionCard' style={styles.directionContainer}>
            <span id={`titleDirection${index}`} style={styles.titleDirectionContainer}>Dirección #1: <FontAwesomeIcon icon={faHome} /></span>
            <div style={styles.directionText}>
                <span id={`textItemCalle${index}`} style={styles.strong}>Calle:</span> <span style={styles.normal}>Corregidor Miguel Domínguez</span>
            </div>
            <div style={styles.directionText}>
                <span id={`textItemNumero${index}`} style={styles.strong}>Número:</span> <span style={styles.normal}>112</span>
            </div>
            <div style={styles.directionText}>
                <span id={`textItemColonia${index}`} style={styles.strong}>Colonia:</span> <span style={styles.normal}>Fraccionamiento La Esperanza #2</span>
            </div>
            <div style={styles.directionText}>
                <span id={`textItemCiudad${index}`} style={styles.strong}>Ciudad:</span> <span style={styles.normal}>Dolores Hidalgo</span>
            </div>
            <div style={styles.directionText}>
                <span id={`textItemEstado${index}`} style={styles.strong}>Estado:</span> <span style={styles.normal}>Guanajuato</span>
            </div>
            <div style={styles.directionText}>
                <span id={`textItemCP${index}`} style={styles.strong}>Código postal:</span> <span style={styles.normal}>37800</span>
            </div>
        </div>
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