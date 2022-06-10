import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { CartContext } from '../../context/CartContext';

import { useAnimation } from '../../hooks/useAnimation';
import { ChangeTheme } from '../../helpers/changeTheme';

import 'animate.css';
import { PagarCardsContext } from '../../context/PagarCardsContext';


interface Props {
    animation?: string;
    productoID: string;
    nombre: string;
    imagen: string;
    descripcion: string;
    precio?: string;
    cuentaAtras?: string;
    fromCar?: boolean;
}

export const CardContent = ({ animation, productoID, nombre, imagen, descripcion, precio, cuentaAtras, fromCar }: Props) => {

    const { setStore } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0);

    const almacenado = JSON.parse(localStorage.getItem('productos') || '[]');

    useEffect(() => {
        almacenado !== [] && (
            almacenado.map((prod: any) => {
                prod.producto._id === productoID && setCantidad(1)
            })
        )
    }, [])

    ChangeTheme({
        id: [
            `card${productoID}`
        ], is: 'card'
    });
    ChangeTheme({
        id: [
            `titleCard${productoID}`,
            `precio${productoID}`
        ],
        is: 'title'
    });

    useAnimation({
        element: [`card${productoID}`],
        name: [animation ? animation : 'animate__fadeIn']
    });

    const handleClick = () => {
        if (cantidad < 1) {
            setStore(productoID);
            setCantidad(cantidad + 1);

            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div style={{margin: '10px 0'}} class="alert alert-success alert-dismissible animate__animated animate__fadeInLeft" role="alert">`,
                `   <div>Se ha agregado correctamente al carrito</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            document.getElementById('alertCarrito')?.append(wrapper);
            document.getElementById('alertCarrito')?.classList.remove('hidden');

            setTimeout(() => {
                wrapper.remove();
            }, 3000);
        }
    }


    return (
        <div
            id={`card${productoID}`}
            className='cardComponent'
            style={{
                ...styles.cardPromotion,
                opacity: fromCar ? 1 : 0
            }}
        >
            <img
                style={styles.cardPromotionImg}
                src={imagen}
                alt={nombre}
            />
            <div style={styles.cardPromotionInfo}>
                <p
                    id={`titleCard${productoID}`}
                    className='titleCard'
                    style={{
                        fontSize: '20px',
                        margin: '10px 0',
                        color: 'rgb(145, 14, 14)',
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                        padding: '0 20px'
                    }}
                >
                    {nombre}
                </p>
                <p
                    style={{
                        fontSize: '16px',
                        padding: '15px 15px 0 15px'
                    }}
                >
                    {descripcion}
                </p>
            </div>

            {
                (precio !== undefined) && (
                    <p
                        id={`precio${productoID}`}
                        style={styles.oferta}
                    >
                        ${precio}
                    </p>
                )
            }

            {
                (cuentaAtras !== '') && (
                    <p
                        style={styles.oferta}
                    >
                        {cuentaAtras}
                    </p>
                )
            }

            <div
                className='btn btn-danger btnCard'
                style={styles.containerLink}
                onClick={handleClick}
            >
                <button
                    style={styles.buttonCardPromotion}
                >
                    Agregar al carrito
                </button>
                <FontAwesomeIcon
                    icon={solid('arrow-right')}
                    style={styles.iconCardPromotion}
                />
            </div>
        </div>
    )
}

const styles = {
    cardPromotion: {
        width: '30%',
        minWidth: '300px',
        backgroundColor: '#fff',

        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        border: '1px solid rgba(0, 0, 0, 0.5)',
        borderTop: '15px solid rgba(145, 14, 14)',
        borderRadius: '10px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 30%)',

        margin: '20px',
        padding: '10px',

        color: 'black'
    },
    cardPromotionImg: {
        width: '90%',
        height: '165px',
        maxHeight: '185px',
        borderRadius: '5px',
        marginTop: '10px'
    },
    cardPromotionInfo: {
        textAlign: 'center' as 'center',
    },
    oferta: {
        fontSize: '16px',
        color: 'rgb(145, 14, 14)',
        marginBottom: '10px'
    },

    menuItemPreviewInfo: {
        textAlign: 'center' as 'center',
    },
    pizzasList: {
        padding: '0',
        margin: '0',
        fontSize: '16px',
        color: 'rgb(145, 14, 14)',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
    },

    containerLink: {
        width: '90%',

        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgb(145, 14, 14)',

        padding: '0 10px',
        margin: '15px 0',
        borderRadius: '5px',

        cursor: 'pointer',
    },
    buttonCardPromotion: {
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        color: 'white',

        borderRadius: '3px',
        border: '0px solid transparent',
        padding: '5px',
    },
    iconCardPromotion: {
        color: 'white',
        fontWeight: 'bold',
    }

}