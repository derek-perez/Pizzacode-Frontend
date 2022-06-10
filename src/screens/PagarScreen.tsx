import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PagarCardsContext } from "../context/PagarCardsContext";
import { ChangeTheme } from "../helpers/changeTheme";

import { CardCheckout } from "../components/screensComponents/CardCheckout";
import { Productos } from "../interfaces/interfaces";
import { ResumeComponent } from "../components/screensComponents/ResumeComponent";


export const PagarScreen = () => {

    const { productos, clicked, setUpdate, setSumaOResta, precioTotalCarrito, setPrecioTotalCarrito } = useContext(PagarCardsContext)
    const navigate = useNavigate();

    useEffect(() => {
        productos.length <= 0 && (
            navigate('/carrito')
        )

        setPrecioTotalCarrito(0)

        if (productos.length === 1) {
            setPrecioTotalCarrito(productos[0].cantidad * Number(productos[0].producto.precio))
        } else if (productos.length > 1) {
            productos.map((prod: Productos) => {
                return setPrecioTotalCarrito((prevState: number) => prevState + (prod.cantidad * Number(prod.producto.precio)))
            })
        }

    }, [productos])



    ChangeTheme({
        id: [
            'titlePagar',
            'iconGoBack',
            'resumenTitle'
        ], is: 'title'
    });


    return (
        <div style={styles.container}>
            <i
                id='returnIcon'
                style={styles.returnIcon}
                onClick={() => {
                    setUpdate(2);
                    setSumaOResta('nothing');
                    navigate('/carrito');
                }}
            >
                <FontAwesomeIcon id='iconGoBack' icon={faArrowLeft} />
            </i>
            <h1 id='titlePagar' style={styles.title}>Verificar compra:</h1>

            <div id='payDivsContent' style={styles.content}>
                <div id='productosDiv' className='divsPay' style={styles.contentLeft}>
                    {
                        productos && (
                            productos.map((producto: Productos) => (
                                <CardCheckout
                                    key={producto.producto._id}
                                    productoID={producto.producto._id}
                                    cantidad={producto.cantidad}
                                />
                            ))
                        )
                    }
                </div>

                <div className='divsPay' style={styles.contentRight}>
                    <h2 id='resumenTitle' style={styles.resumenTitle}>Resúmen de compra:</h2>

                    <div style={styles.products}>
                        {
                            productos && (
                                productos.map((producto: Productos) => (
                                    <ResumeComponent
                                        key={producto.producto._id}
                                        producto={producto.producto}
                                        cantidad={producto.cantidad}
                                    />
                                ))
                            )
                        }
                    </div>

                    <div style={styles.totalContainer}>
                        <p style={styles.totalTitle}>Total:</p>
                        <p style={styles.totalContent}>${precioTotalCarrito}.00</p>
                    </div>

                    <button className="btn btn-danger" style={styles.button}>
                        Seguir con el proceso <FontAwesomeIcon icon={faArrowRight} />
                    </button>

                </div>

            </div>
        </div>
    )
}


const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'center',

        marginBottom: '50px'
    },
    returnIcon: {
        position: 'absolute' as 'absolute',
        top: '135px',
        left: '35px',
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
        padding: '15px 25px'
    },

    contentLeft: {
        width: '55%'
    },

    contentRight: {
        width: '40%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',

        borderTop: '3px solid rgb(145, 14, 14)'
    },

    resumenTitle: {
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
        margin: '40px 0'
    },

    products: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        marginBottom: '20px'
    },

    totalContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        margin: '10px 0'
    },
    totalTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
    },
    totalContent: {
        fontSize: '20px',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
    },

    button: {
        backgroundColor: 'rgb(145, 14, 14)',
        margin: '25px 0'
    }

};