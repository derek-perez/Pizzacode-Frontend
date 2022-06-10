import { createContext, useEffect, useState } from "react";
import { CantidadContext, Productos } from "../interfaces/interfaces";


{
    /*
        En este context, se almacenan los productos que se van a comprar.
        Y se manejan los cambios de estos productos.
        como el precio total del carrito, la suma o resta de productos,
        la cantidad de estos.
        Y el update, lo uso para no duplicar productso en el carrito a la hora de cargar alguna pagina.
    */
}

export const PagarCardsContext = createContext({} as any);

export const PagarCardsContextProvider = ({ children }: any) => {
    const [productos, setProductos] = useState([] as Productos[]);
    const [precioTotalCarrito, setPrecioTotalCarrito] = useState(0);
    const [sumaOResta, setSumaOResta] = useState('nothing');
    const [update, setUpdate] = useState(0);
    const [cantidadProductos, setCantidadProductos] = useState([] as CantidadContext[]);
    const [clicked, setClicked] = useState(0);

    // Actualizar carrito en caso de que haya articulos almacenados
    useEffect(() => {
        const productosAlmacenados = localStorage.getItem('productos');

        if (productosAlmacenados !== null || undefined) {
            const parseado = JSON.parse(productosAlmacenados!);
            setProductos(parseado);
        }
    }, []);



    return (
        <PagarCardsContext.Provider
            value={{
                productos,
                update,
                precioTotalCarrito,
                sumaOResta,
                cantidadProductos,
                clicked,

                setProductos,
                setUpdate,
                setPrecioTotalCarrito,
                setSumaOResta,
                setCantidadProductos,
                setClicked,
            }}
        >
            {children}
        </PagarCardsContext.Provider>
    )
};