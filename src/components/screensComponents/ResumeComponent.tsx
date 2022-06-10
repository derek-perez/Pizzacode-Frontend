import { useContext, useEffect, useState } from "react";

import { PagarCardsContext } from "../../context/PagarCardsContext";
import { CantidadContext, Producto, Productos } from "../../interfaces/interfaces";


interface Props {
    producto: Producto;
    cantidad: number;
}

export const ResumeComponent = ({ producto, cantidad }: Props) => {

    const { cantidadProductos } = useContext(PagarCardsContext);
    const [cantidadTotal, setCantidadTotal] = useState(cantidad || 0);

    useEffect(() => {
        cantidadProductos.map((prod: CantidadContext) => {
            if (prod.id === producto._id) {
                setCantidadTotal(prod.cantidad);
            }
        })
    }, [cantidadProductos]);


    return (
        <div style={styles.contentProducto}>
            <span style={styles.contentProductoNombre}>
                {producto.nombre}: <strong>{cantidadTotal}</strong>
            </span>
            <span style={styles.contentProductoPrecio}>${cantidadTotal * Number(producto.precio)}.00</span>
        </div>
    )
}


const styles = {
    contentProducto: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',

        marginBottom: '10px',
        paddingBottom: '10px',
        borderBottom: '2px solid rgb(145, 14, 14)',
    },
    contentProductoNombre: {
        fontSize: '19px'
    },
    contentProductoPrecio: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
}