import { useNavigate } from "react-router-dom";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CardCheckout } from "../components/CardCheckout";
import { ChangeTheme } from "../helpers/changeTheme";


export const PagarScreen = () => {

    const navigate = useNavigate();

    ChangeTheme({
        id: [
            'titlePagar',
            'iconGoBack',
        ], is: 'title'
    })


    return (
        <div style={styles.container}>
            <i 
                style={styles.returnIcon}
                onClick={() => {
                    navigate('/carrito');
                }}
            >
                <FontAwesomeIcon id='iconGoBack' icon={faArrowLeft} />
            </i>
            <h1 id='titlePagar' style={styles.title}>Verificar compra:</h1>

            <div id='payDivsContent' style={styles.content}>
                <div className='divsPay' style={styles.contentLeft}>
                    <CardCheckout />
                    <CardCheckout />
                    <CardCheckout />
                </div>

                <div className='divsPay' style={styles.contentRight}>
                    
                </div>
            </div>
        </div>
    )
}


const styles = {
    container: {
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '50px'
    },
    returnIcon: {
        position: 'absolute' as 'absolute',
        top: '140px',
        left: '35px',
        zIndex: 10000,
        fontSize: '25px',
        color: 'rgb(145, 14, 14)',
        cursor: 'pointer'
    },
    title: {
        color: 'rgb(145, 14, 14)',
        marginTop: '35px',
        marginBottom: '50px',
        fontWeight: 'bold',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'
    },

    content: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        width: '100%',
        padding: '0 15px'
    },

    contentLeft: {
        width: '55%'
    },

    contentRight: {
        width: '40%',
        border: '1px solid black',
        height: '500px'
    },
};