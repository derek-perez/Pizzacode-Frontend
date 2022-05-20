import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeTheme } from '../../helpers/changeTheme';


interface Props {
    direccion?: boolean;
    telefono?: boolean;
    email?: boolean;
    horario?: boolean;
    redes?: boolean;
    reservaciones?: boolean;
}


export const ContactoComponent = ({ direccion, telefono, email, horario, redes, reservaciones }: Props) => {

    ChangeTheme({
        id: [
            'titleDirection',
            'titleTelephone',
            'titleEmail',
            'titleTime',
            'titleSocialMedia',
            'titleRP',
            'labelName',
            'labelEmail',
            'labelTextarea',
        ], is: 'title'
    });

    ChangeTheme({
        id: [
            'nameInput',
            'emailInput',
            'messageInput',
        ], is: 'input'
    })


    if (direccion) {
        return (
            <div style={styles.containerContact}>
                <h3 id='titleDirection' style={styles.titleContainer}>Dirección</h3>

                <p style={styles.textContainer}>
                    <strong>Dirección:</strong> Av. Paseo de la Castellana, Nº 1,
                    <br />
                    <strong>Ciudad:</strong> Madrid, España
                </p>
            </div>
        )
    } else if (telefono) {
        return (
            <div style={styles.containerContact}>
                <h3 id='titleTelephone' style={styles.titleContainer}>Teléfono</h3>

                <p style={styles.textContainer}>
                    <strong>Número:</strong> +52 123 456 7890
                    <br />
                    <strong>Número:</strong> +52 098 765 4321
                </p>
            </div>
        )
    } else if (email) {
        return (
            <div style={styles.containerContact}>
                <h3 id='titleEmail' style={styles.titleContainer}>Correo electrónico</h3>

                <p style={styles.textContainer}>
                    <strong>Email: </strong>
                    <a href='#'> example@email.com</a>
                </p>
            </div>
        )
    } else if (horario) {
        return (
            <div style={styles.containerContact}>
                <h3 id='titleTime' style={styles.titleContainer}>Horario</h3>

                <p style={styles.textContainer}>
                    <strong>Horario:</strong> Lunes a Viernes de 9:00 a 18:00
                </p>
            </div>
        )
    } else if (redes) {
        return (
            <div style={styles.containerContact}>
                <h3 id='titleSocialMedia' style={styles.titleContainer}>Redes Sociales</h3>

                <p style={styles.textContainer}>
                    <FontAwesomeIcon style={{ color: 'blue' }} icon={faFacebook} /> : &nbsp;
                    <a href='#'>Pizzacode</a>
                </p>

                <p style={styles.textContainer}>
                    <FontAwesomeIcon style={{ color: '#00c4ff' }} icon={faTwitter} /> : &nbsp;
                    <a href='#'>@pizzacode</a>
                </p>

                <p style={styles.textContainer}>
                    <FontAwesomeIcon style={styles.gradientInstagram} icon={faInstagram} /> : &nbsp;
                    <a href='#'>@pizzacode</a>
                </p>
            </div>
        )
    } else if (reservaciones) {
        return (
            <div style={styles.containerContact}>
                <h3 id='titleRP' style={styles.titleContainer}>Reservaciones/Preguntas</h3>

                <form style={styles.formContainer}>

                    <div style={styles.divForm}>

                        <div style={styles.divInput}>

                            <div style={styles.dividersForm}>
                                <label id='labelName' style={styles.labelForm} htmlFor='name'>Nombre:</label>
                                &nbsp;
                                &nbsp;
                                <input style={styles.inputForm} type='text' id='nameInput' />
                            </div>

                            <div style={styles.dividersForm}>
                                <label id='labelEmail' style={styles.labelForm} htmlFor='email'>Correo electrónico:</label>
                                &nbsp;
                                &nbsp;
                                <input style={styles.inputForm} type='email' id='emailInput' />
                            </div>

                        </div>

                        <label id='labelTextarea' style={styles.labelForm} htmlFor='message'>Mensaje:</label>
                        <textarea style={styles.textarea} id='messageInput' />
                    </div>

                    <button style={styles.buttonSubmit} type='submit'>Enviar</button>

                </form>
            </div>
        )
    }

    return (null)

}


const styles = {
    containerContact: {
        minWidth: '300px',
        width: '45%',
        borderTop: '1px solid rgb(145, 14, 14)',
        padding: '10px',
        margin: '15px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center'
    },
    titleContainer: {
        fontWeight: 'bold',
        color: 'rgb(145, 14, 14)',
        margin: '15px 0'
    },
    textContainer: {
        fontSize: '18px',
        textAlign: 'center' as 'center',
    },
    gradientInstagram: {
        color: '#e400ff',
    },
    formContainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px'
    },
    divForm: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '10px'
    },
    divInput: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '10px',
        flexWrap: 'wrap' as 'wrap'
    },
    dividersForm: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: '10px',
        flexWrap: 'wrap' as 'wrap'
    },
    labelForm: {
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
    },
    inputForm: {
        border: 'none',
        borderBottom: '1px solid rgb(145, 14, 14)',
        marginBottom: '10px',
        outline: 'none',
        resize: 'none' as 'none'
    },
    textarea: {
        border: '1px solid rgb(145, 14, 14)',
        marginBottom: '10px',
        outline: 'none',
        resize: 'none' as 'none',
        height: '100px',
        width: '100%',
        borderRadius: '5px',
        padding: '10px'
    },
    buttonSubmit: {
        backgroundColor: '#0d6efd',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        fontSize: '16px',
        color: 'white',
        fontWeight: 'bold',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)',
    }
}