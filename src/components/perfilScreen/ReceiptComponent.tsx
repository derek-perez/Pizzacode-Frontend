import { useEffect, useState } from "react";
import pizzaApi from "../../api/pizzaApi";

import { ChangeTheme } from "../../helpers/changeTheme";

import { Pago } from '../../interfaces/interfaces';


export const ReceiptComponent = ({ index }: { index: string }) => {

    const [pago, setPago] = useState({} as Pago);
    const [productos, setProductos] = useState([]);

    const theme = localStorage.getItem('themeApp');

    ChangeTheme({
        id: [
            `receipt${index}`,
        ], is: 'div'
    });

    ChangeTheme({
        id: [
            `precioTotal${index}`,
        ], is: 'title'
    });

    useEffect(() => {
        getDirection();
    }, []);

    const getDirection = async () => {
        await pizzaApi.get('/pagos/' + index)
            .then(res => {
                setPago(res.data);

                const productosToMap = eval(`[${res.data.productos[0]}]`);
                setProductos(productosToMap);
            })
            .catch(console.log);
    }

    const deste = Math.random() * (1 - 0.1) + 0.1;

    // const date = new Date();
    // const fecha = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();


    return (
        <div id={`receipt${index}`} style={styles.receipt}>
            <div style={styles.receiptHeader}>
                <h3 style={styles.receiptTitle}>Pago de cuota</h3>
                <p style={styles.receiptDate}>{pago.fecha}</p>
            </div>

            <div style={styles.receiptBody}>
                {
                    productos.map((productoMap: any, i: number) => (
                        <div key={deste * Math.random() * (i + 1)} style={styles.itemBody}>
                            <p style={styles.itemProduct}>
                                Producto: {productoMap.cantidad} {productoMap.producto}
                            </p>
                            <p
                                style={{
                                    ...styles.itemTotal,
                                    color: theme === 'dark' ? '#fff' : 'rgb(145, 14, 14)'
                                }}
                            >
                                ${productoMap.total}
                            </p>
                        </div>
                    ))
                }

                <div style={{
                    ...styles.itemBody,
                    marginTop: '35px',
                    borderTop: '1px solid rgb(145, 14, 14)',
                    paddingTop: '10px'
                }}>
                    <p style={styles.itemProduct}>Total:</p>
                    <p id={`precioTotal${index}`} style={styles.itemTotal}>${pago.total}.00</p>
                </div>
            </div>

        </div>
    )
}


const styles = {
    receipt: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        margin: '15px',
        padding: '20px',
        border: '2px solid rgb(145, 14, 14)',
        borderRadius: '5px',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
        minWidth: '390px'
    },
    receiptHeader: {
        borderBottom: '1px solid rgb(145, 14, 14)',
        width: '100%',
        marginBottom: '25px',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'center' as 'center'
    },
    receiptTitle: {},
    receiptDate: {},

    receiptBody: {
        width: '100%'
    },
    itemBody: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'center' as 'center',
        width: '100%',
        padding: '5px'
    },
    itemProduct: {
        margin: '0'
    },
    itemTotal: {
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        margin: '0'
    }
}