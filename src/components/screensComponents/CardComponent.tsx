import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { ChangeTheme } from '../../helpers/changeTheme';
import { useAnimation } from '../../hooks/useAnimation';
import { Producto } from '../../interfaces/interfaces';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';

import 'animate.css';


interface Props {
    inlineStyles?: object;
    productoID: string;
    nombre: string;
    imagen: string;
    descripcion: string;
    precio: string | undefined;
    fromMenu?: boolean;
    fromSearch?: boolean;
    fromCarShopping?: boolean;
}


export const CardComponent = ({ inlineStyles, productoID, nombre, imagen, descripcion, precio, fromMenu, fromSearch, fromCarShopping }: Props) => {

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
            `cardComponent${productoID}`,
        ], is: 'card'
    });

    ChangeTheme({
        id: [
            `titleCardComponent${productoID}`,
            `priceCardComponent${productoID}`
        ], is: 'title'
    });

    useAnimation({
        element: [
            `cardComponent${productoID}`
        ], 
        name: ['animate__backInDown'],
        staticElement: fromSearch ? true : false
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
            id={`cardComponent${productoID}`}
            className='cardComponent'
            style={{
                ...styles.cardComponent,
                ...inlineStyles,
                opacity: fromCarShopping ? 1 : 0,
            }}
        >
            <img
                style={styles.cardComponentImg}
                src={imagen}
            />
            <div style={styles.cardComponentInfo}>
                <p
                    id={`titleCardComponent${productoID}`}
                    style={{
                        fontSize: '25px',
                        color: 'rgb(145, 14, 14)',
                        margin: '10px 0 20px 0',
                        padding: '0 10px',
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    {nombre}
                </p>

                {
                    (fromMenu) && (
                        <p
                            style={{
                                fontSize: '15px',
                                padding: '0 15px'
                            }}
                        >
                            {descripcion}
                        </p>
                    )
                }
            </div>

            <div style={{ textAlign: 'center' }}>
                {
                    (fromMenu) && (
                        <p
                            id={`priceCardComponent${productoID}`}
                            style={{
                                fontSize: '20px',
                                marginTop: '5px',
                                color: 'rgb(145, 14, 14)',
                                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            ${precio}
                        </p>
                    )
                }
            </div>

            <div
                className='btnCard'
                style={styles.containerLink}
                onClick={handleClick}
            >
                <button style={styles.buttonCardComponent}>
                    Agregar al carrito
                </button>
                <FontAwesomeIcon
                    icon={solid('arrow-right')}
                    style={styles.iconCardComponent}
                />
            </div>
        </div>
    )
}

const styles = {
    cardComponent: {
        minWidth: '350px',
        width: '30%',
        backgroundColor: 'white',

        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        border: '1px solid rgba(0, 0, 0, 0.5)',
        borderTop: '15px solid rgba(145, 14, 14)',
        borderRadius: '10px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 90%)',

        margin: '0 25px',
        marginBottom: '25px',
        padding: '10px',
        color: 'black'
    },
    cardComponentImg: {
        width: '90%',
        maxHeight: '200px',
        borderRadius: '5px',
        marginTop: '10px'
    },
    cardComponentInfo: {
        textAlign: 'center' as 'center',
    },

    addProduct: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px',
        border: '1px solid rgba(145, 14, 14, 0.5)',
        borderRadius: '5px',
    },
    buttonAddProduct: {
        border: '1px solid rgba(145, 14, 14, 0.5)',
        padding: '5px',
        cursor: 'pointer',
        fontSize: '18px'
    },
    numberCuantity: {
        border: '1px solid rgba(145, 14, 14, 0.5)',
        padding: '5px',
        fontSize: '18px'
    },

    containerLink: {
        width: '90%',

        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgb(145, 14, 14)',

        padding: '5px 10px',
        margin: '15px 0',
        borderRadius: '5px',

        cursor: 'pointer',
    },
    buttonCardComponent: {
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        color: 'white',

        borderRadius: '3px',
        border: '0px solid transparent',
        padding: '5px',
    },
    iconCardComponent: {
        color: 'white',
        fontWeight: 'bold',
    }

}