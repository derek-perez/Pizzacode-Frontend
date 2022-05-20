import { useState } from "react";

import { ContentItemText } from "./ContentItemText";
import { faCity, faEarthAmerica, faEnvelope, faMapLocationDot, faPhone, faStreetView, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeTheme } from "../../helpers/changeTheme";


export const PerfilContent = () => {

    ChangeTheme({
        id: ['perfilContentTitle'], is: 'title'
    });

    const [cP, setCP] = useState(true);
    const [cM, setCM] = useState(true);
    const [name, setName] = useState(true);
    const [email, setEmail] = useState(true);
    const [state, setState] = useState(true);
    const [telephone, setTelephone] = useState(true);
    const [direction, setDirection] = useState(true);
    const [lastName, setLastName] = useState(true);
    const [buttonsContainer, setButtonsContainer] = useState(false);


    return (
        <div style={styles.content}>
            <h2 id='perfilContentTitle' style={styles.title}><FontAwesomeIcon icon={faUser} /> La información de tu perfil:</h2>
            <p style={{ marginBottom: '35px' }}>(Doble click para editar)</p>

            <div style={styles.contentItem}>
                <ContentItemText
                    icon={faUser}
                    boolean={name}
                    contentValue={'Nombre(s)'}
                    nameInput={'name'}
                    setBoolean={setName}
                    setButtonsContainer={setButtonsContainer} 
                />
                <ContentItemText
                    icon={faUser}
                    boolean={lastName} 
                    contentValue={'Apellido(s)'}
                    nameInput={'lastName'}
                    setBoolean={setLastName}
                    setButtonsContainer={setButtonsContainer} 
                />
                <ContentItemText
                    icon={faEnvelope}
                    boolean={email} 
                    contentValue={'Correo electrónico'}
                    nameInput={'email'}
                    setBoolean={setEmail}
                    setButtonsContainer={setButtonsContainer} 
                />
                <ContentItemText
                    icon={faPhone}
                    boolean={telephone} 
                    contentValue={'+12 3456 7890'}
                    nameInput={'telephone'}
                    setBoolean={setTelephone}
                    setButtonsContainer={setButtonsContainer} 
                />
                <ContentItemText
                    icon={faMapLocationDot}
                    boolean={direction} 
                    contentValue={'Dirección'}
                    nameInput={'direction'}
                    setBoolean={setDirection}
                    setButtonsContainer={setButtonsContainer} 
                />
                <ContentItemText
                    icon={faCity}
                    boolean={cM} 
                    contentValue={'Ciudad/Municipio'}
                    nameInput={'cM'}
                    setBoolean={setCM}
                    setButtonsContainer={setButtonsContainer} 
                />
                <ContentItemText
                    icon={faEarthAmerica}
                    boolean={state} 
                    contentValue={'Estado'}
                    nameInput={'state'}
                    setBoolean={setState}
                    setButtonsContainer={setButtonsContainer} 
                />
                <ContentItemText
                    icon={faStreetView}
                    boolean={cP} 
                    contentValue={'Código postal'} 
                    nameInput={'cP'}
                    setBoolean={setCP}
                    setButtonsContainer={setButtonsContainer} 
                />
            </div>

            {
                (buttonsContainer) && (
                    <div style={styles.buttonsContainer}>
                        <button className="btn btn-outline-success" style={styles.button}>Guardar</button>
                        <button className="btn btn-outline-danger" style={styles.button} onClick={() => window.location.reload()}>Restablecer</button>
                    </div>
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
        flexWrap: 'wrap' as 'wrap',
        justifyContent: 'space-evenly' as 'space-evenly'
    },
    contentItemText: {
        minWidth: '40%',
        borderTop: '1px solid rgb(145, 14, 14)',
        borderBottom: '1px solid rgb(145, 14, 14)',
        marginBottom: '20px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center' as 'center'
    },
    contentItemTextMain: {
        fontSize: '18px',
        fontWeight: 'bold' as 'bold'
    },
    contentItemTextInfo: {
        fontSize: '18px',
        marginLeft: '10px'
    },
    input: {
        marginLeft: '10px',
        outline: 'none',
        border: '1px solid rgb(145, 14, 14)',
        padding: '5px',
        borderRadius: '5px',
    },

    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly' as 'space-evenly',
        marginTop: '20px'
    },
    button: {
        fontSize: '18px', 
        margin: '0 15px'
    }

}