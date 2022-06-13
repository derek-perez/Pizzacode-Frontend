import { useEffect, useState } from "react";
import pizzaApi from "../../api/pizzaApi";

import { Card } from "../../interfaces/interfaces";



export const CreditCardComponent = ({ tarjetaContent }: {tarjetaContent: Card}) => {

    const [tarjeta, setTarjeta] = useState(tarjetaContent);

    const url = window.location.host;

    useEffect(() => {
        getTarjeta();
    }, []);

    const getTarjeta = async () => {
        await pizzaApi.get('/tarjetas/' + tarjeta._id)
            .then(res => {
                setTarjeta(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            });
    }

    const numberCard1 = tarjeta.numero.substring(0, 4);
    const numberCard2 = tarjeta.numero.substring(4, 8);
    const numberCard3 = tarjeta.numero.substring(8, 12);
    const numberCard4 = tarjeta.numero.substring(12, 16);


    return (
        <div className="cardContent" style={styles.card}>
            <div style={styles.topCard}>
                <p style={styles.titleCard}>Tarjeta de crédito</p>
            </div>

            <img
                src='https://chugus.github.io/Pizzacode-Frontend/assets/chip-card.png'
                style={styles.chipImg}
            />

            <p className="numberCard" style={styles.cardNumber}>{numberCard1}&nbsp;&nbsp;&nbsp;&nbsp;{numberCard2}&nbsp;&nbsp;&nbsp;&nbsp;{numberCard3}&nbsp;&nbsp;&nbsp;&nbsp;{numberCard4}</p>
            <div style={styles.sectionCardNumbers}>
                <span style={{ margin: '5px 0' }}>{tarjeta.cvv}</span>
                <span style={{ margin: '5px 0' }}>{tarjeta.fechaExpiracion}</span>
            </div>
            <p style={{marginBottom: '0'}}>{tarjeta.nombre}</p>
        </div>
    )
}


const styles = {
    card: {
        width: '45%',
        minWidth: '400px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between' as 'space-between',
        backgroundColor: 'rgba(145,14,14,0.9)',
        border: 'none',
        borderRadius: '5px',
        padding: '20px',
        margin: '20px',
        color: 'white',
        fontSize: '18px',
        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.5)'
    },
    titleCard: {
        fontSize: '20px',
        fontWeight: 'bold' as 'bold'
    },

    topCard: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'center' as 'center'
    },

    chipImg: {
        width: '65px',
        marginTop: '20px'
    },
    cardNumber: {
        width: '100%',
        letterSpacing: '2px',
        fontSize: '23px',
        textAlign: 'justify' as 'justify',
        marginBottom: '0'
    },
    sectionCardNumbers: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around' as 'space-around',
        alignItems: 'left' as 'left',
        fontSize: '17px'
    }
}