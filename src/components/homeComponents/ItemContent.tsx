import { useEffect, useState } from "react"
import pizzaApi from "../../api/pizzaApi";
import { Producto } from "../../interfaces/interfaces";
import { CardContent } from "./CardContent";


export const ItemContent = ({ productoID }: { productoID: string }) => {
    const [producto, setProducto] = useState({} as Producto);

    const obtenerProducto = async () => {
        const { data: { producto: productoModify } } = await pizzaApi.get(`/productos/${productoID}`);

        return setProducto(productoModify);
    }

    useEffect(() => {
        obtenerProducto();
    }, [])

    return (
        <>
            {
                (producto) && (
                    <CardContent
                        key={producto._id}
                        animation='animate__backInUp'
                        productoID={producto._id}
                        nombre={producto.nombre}
                        imagen={producto.imagen}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                        cuentaAtras={producto.cuentaAtras}
                    />
                )
            }
        </>
    )
}
