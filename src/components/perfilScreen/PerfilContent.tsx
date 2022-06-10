import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

import { ContentItemText } from "./ContentItemText";

import { ChangeTheme } from "../../helpers/changeTheme";
import { UserContext } from "../../context/UserContext";
import pizzaApi from "../../api/pizzaApi";



export const PerfilContent = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const userLS = localStorage.getItem('user');

    useEffect(() => {
        window.scrollTo(0, 0);

        if (userLS === null || undefined || '') {
            navigate('/join/login')
        }
    }, []);

    ChangeTheme({
        id: ['perfilContentTitle'], is: 'title'
    });

    const [name, setName] = useState(true);
    const [email, setEmail] = useState(true);
    const [telephone, setTelephone] = useState(true);

    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [telephoneText, setTelephoneText] = useState('');

    const [buttonsContainer, setButtonsContainer] = useState(false);


    return (
        <div style={styles.content}>
            <h2 id='perfilContentTitle' style={styles.title}><FontAwesomeIcon icon={faUser} /> La información de tu perfil:</h2>
            <p style={{ marginBottom: '35px' }}>(Doble click para editar)</p>

            <div style={styles.contentItem}>
                <ContentItemText
                    icon={faUser}
                    boolean={name}
                    contentValue={user.nombre}
                    nameInput={'Nombre'}
                    setText={setNameText}
                    setBoolean={setName}
                    setButtonsContainer={setButtonsContainer}
                />
                <ContentItemText
                    icon={faEnvelope}
                    boolean={email}
                    contentValue={user.correo}
                    nameInput={'Correo electrónico'}
                    setText={setEmailText}
                    setBoolean={setEmail}
                    setButtonsContainer={setButtonsContainer}
                />
                <ContentItemText
                    icon={faPhone}
                    boolean={telephone}
                    contentValue={user.telefono}
                    nameInput={'Teléfono'}
                    setText={setTelephoneText}
                    setBoolean={setTelephone}
                    setButtonsContainer={setButtonsContainer}
                />
            </div>

            {
                (buttonsContainer) && (
                    <div style={styles.buttonsContainer}>
                        <button
                            className="btn btn-outline-success"
                            style={styles.button}
                            onClick={() => {
                                const token = localStorage.getItem('token');

                                pizzaApi.put('/usuarios/' + user._id, {
                                    nombre: nameText !== '' ? nameText : user.nombre,
                                    correo: emailText !== '' ? emailText : user.correo,
                                    telefono: telephoneText !== '' ? telephoneText : user.telefono
                                }, { headers: { 'x-token': `${token?.split('"')[1]}` } })
                                    .then(res => {
                                        res.status === 200 && window.location.reload();
                                    })
                                    .catch(err => console.log(err.response.data))
                            }}
                        >
                            Guardar
                        </button>
                        <button
                            className="btn btn-outline-danger"
                            style={styles.button}
                            onClick={() => window.location.reload()}
                        >
                            Restablecer
                        </button>
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
        flexDirection: 'column' as 'column',
        alignItems: 'center',
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