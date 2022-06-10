import { useEffect, useState } from "react";
import pizzaApi from "../../api/pizzaApi";
import { Producto } from "../../interfaces/interfaces";
import { ChangeTheme } from "../../helpers/changeTheme";
import { CardContent } from "../homeComponents/CardContent";


interface Props {
    nombre: string;
    titulo: string;
    productosID: string[];
}

export const ItemAddProduct = ({ nombre, titulo, productosID }: Props) => {

    const [productos, setProductos] = useState([] as Producto[]);

    const obtenerProducto = () => {
        productosID.map(async id => {
            const { data: { producto: productoModify } } = await pizzaApi.get(`/productos/${id}`);

            return setProductos(prod => [...prod, productoModify]);
        })
    }

    useEffect(() => {
        obtenerProducto();
    }, [])

    ChangeTheme({
        id: [
            `title${nombre}`
        ], is: 'title'
    });

    if (nombre === 'Postres') {
        let nada;
        const element = document.getElementById(`menuPostres`) as HTMLElement;

        if (element) {
            element.style.borderBottom = 'none';
            element.style.paddingBottom = '0';
            element.style.boxShadow = 'none';
        }
    }


    return (
        <div
            id={`menu${nombre}`}
            style={{
                width: '100%',
                borderBottom: '5px solid rgb(145, 14, 14)',
                paddingTop: '25px',
                boxShadow: '0 0 5px rgb(0, 0, 0)',
            }}
        >
            <h4 id={`title${nombre}`} style={styles.title}>{titulo}</h4>

            <div id={`container${nombre}`} className='containerMenuItems menuItemContainerRed' style={styles.itemMenuContainer}>
                {
                    productos !== [] && (
                        productos.map(producto => (
                            <CardContent
                                key={producto._id}
                                productoID={producto._id}
                                descripcion={producto.descripcion}
                                imagen={producto.imagen}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                cuentaAtras={producto.cuentaAtras}
                                fromCar
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}


const styles = {
    title: {
        textAlign: 'center' as 'center',
        fontWeight: 'bold',
        fontSize: '25px',
        marginTop: '20px',
        padding: '0 20px',
        letterSpacing: '1px',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    },
    itemMenuContainer: {
        width: '100%',
        display: 'flex',
        marginTop: '30px',
        marginBottom: '60px',
        padding: '20px 0',
        overflowX: 'auto' as 'auto',
    }
}