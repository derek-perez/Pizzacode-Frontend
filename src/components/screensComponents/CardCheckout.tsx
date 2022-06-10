import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, useContext, useEffect, useState } from "react";

import pizzaApi from "../../api/pizzaApi";
import { PagarCardsContext } from "../../context/PagarCardsContext";

import { CantidadContext, Producto, Productos } from "../../interfaces/interfaces";


interface Props {
    inlineStyles?: object;
    productoID: string;
    cantidad?: number;
    fromCart?: boolean;
}

export const CardCheckout = ({ inlineStyles, productoID, cantidad, fromCart }: Props) => {

    const { update, productos, setProductos, setPrecioTotalCarrito, setSumaOResta, setCantidadProductos } = useContext(PagarCardsContext);
    const [producto, setProducto] = useState({} as Producto);

    const [cantidadProducto, setCantidadProducto] = useState(cantidad || 1);
    const [precioTotal, setPrecioTotal] = useState(0);


    const obtenerProducto = async () => {
        const { data: { producto: productoModify } } = await pizzaApi.get(`/productos/${productoID}`);

        setPrecioTotal(cantidad === undefined ? Number(productoModify.precio) : Number(cantidad * Number(productoModify.precio)))
        setProducto(productoModify);
    }

    useEffect(() => {
        obtenerProducto();

        if (productos.length > 0) {
            localStorage.setItem('productos', JSON.stringify(productos));
        }

    }, []);


    const addToContext = () => {
        if (fromCart && update !== 2) {
            setProductos((prevState: Producto[]) =>
                [
                    ...prevState,
                    {
                        index: prevState.length + 1,
                        producto,
                        cantidad: cantidadProducto
                    }
                ]
            )
        }
    }

    const deleteProduct = () => {
        productos.filter(async (prod: any) => {
            if (prod.producto._id === productoID) {
                await productos.splice(productos.indexOf(prod), 1);
                await setProductos((prevState: Productos[]) => prevState.filter(p => p.producto._id !== productoID));
                
                localStorage.setItem('productos', JSON.stringify(productos));
            }
        })
    }


    const handleRestProduct = () => {
        setCantidadProducto(cantidadProducto - 1);
        setCantidadProductos((prevState: CantidadContext[]) => [...prevState, {id: productoID, cantidad: cantidadProducto - 1}]);
        
        setPrecioTotal(precioTotal - Number(producto.precio));
        setSumaOResta('resta');
        
        productos.filter((producto: Productos) => {
            if (producto.producto._id === productoID) {
                producto.cantidad = cantidadProducto - 1;

                setPrecioTotalCarrito((prevState: number) => prevState - Number(producto.producto.precio))
                localStorage.setItem('productos', JSON.stringify(productos));
                
                return setProductos(productos);
            };
        });
    }

    const handleAddProduct = () => {
        setCantidadProducto(cantidadProducto + 1);
        setCantidadProductos((prevState: CantidadContext[]) => [...prevState, {id: productoID, cantidad: cantidadProducto + 1}]);

        setPrecioTotal(Number(producto.precio) * (cantidadProducto + 1));
        setSumaOResta('suma');

        productos.filter((producto: Productos) => {
            if (producto.producto._id === productoID) {
                producto.cantidad = cantidadProducto + 1;

                setPrecioTotalCarrito((prevState: number) => prevState + Number(producto.producto.precio))
                localStorage.setItem('productos', JSON.stringify(productos));

                return setProductos(productos);
            };
        });
    }



    return (
        <>
            {
                producto && (
                    <div
                        id={`cardCheckout${productoID}`}
                        onLoad={addToContext}
                        style={{
                            ...styles.cardProduct,
                            ...(inlineStyles) ? inlineStyles : ''
                        }}
                    >
                        <FontAwesomeIcon
                            onClick={deleteProduct}
                            className="deleteItem"
                            style={styles.icon}
                            icon={faClose}
                        />

                        <div style={styles.cardImgTitle}>
                            <img
                                src={producto.imagen}
                                style={styles.imgProduct}
                            />
                            <h3 style={styles.infoTitle}>{producto.nombre}</h3>
                        </div>
                        <div className='cardProductInfo' style={styles.cardProductInfo}>
                            <p style={styles.infoProductDesc}>{producto.descripcion}</p>
                            <div style={styles.addProduct}>
                                <button
                                    id={`btnSubstract${productoID}`}
                                    style={styles.buttonAddProduct}
                                    onClick={handleRestProduct}
                                    disabled={cantidadProducto === 1 ? true : false}
                                >
                                    -
                                </button>
                                <span
                                    style={styles.numberCuantity}
                                >
                                    {cantidadProducto}
                                </span>
                                <button
                                    id={`btnAdd${productoID}`}
                                    style={styles.buttonAddProduct}
                                    onClick={handleAddProduct}
                                >
                                    +
                                </button>
                            </div>

                            <strong>${precioTotal}</strong>
                        </div>
                    </div>
                )
            }
        </>
    )
}


const styles = {
    cardProduct: {
        width: '45%',
        minWidth: '472px',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'flex-start' as 'flex-start',
        borderTop: '1px solid rgb(145, 14, 14)',
        padding: '20px',
        margin: '10px 0',
        border: '2px solid rgb(145, 14, 14)',
        borderRadius: 10,
        boxShadow: '3px 3px 8px rgb(0 0 0 / 50%)',
    },

    icon: {
        position: 'relative' as 'relative',
        color: 'inherit',
        top: '-10px',
        right: '-100%',
        cursor: 'pointer',
    },

    cardImgTitle: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%'
    },
    infoTitle: {
        fontWeight: '600',
        fontSize: '1.2em',
        marginTop: '10px'
    },
    imgProduct: {
        maxWidth: '175px',
        maxHeight: '175px',
        borderRadius: '5px'
    },
    cardProductInfo: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        alignItems: 'flex-end' as 'flex-end',
        width: '100%',
        margin: '0 5px 0 15px'
    },
    infoProductDesc: {
        fontSize: '16px',
    },
    quantityInfoProduct: {
        fontSize: '16px'
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
        background: 'transparent',
        color: 'inherit',
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
}