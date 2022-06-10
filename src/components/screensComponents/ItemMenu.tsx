import { useEffect, useState } from "react";
import pizzaApi from "../../api/pizzaApi";
import { Producto } from "../../interfaces/interfaces";
import { ChangeTheme } from "../../helpers/changeTheme";
import { CardComponent } from "./CardComponent";

interface Props {
    nombre: string;
    titulo: string;
    producto: string[];
}

export const ItemMenu = ({ nombre, titulo, producto }: Props) => {

    const [productosMap, setProductosMap] = useState([] as Producto[]);

    ChangeTheme({
        id: [
            `title${nombre}`
        ], is: 'title'
    });

    useEffect(() => {
        if (nombre === 'Pizzas') {
            document.getElementById('menuPizzas')?.classList.remove('hidden');
        }
    }, []);

    useEffect(() => {
        producto.map(async p => {
            if (p) {
                const { data: { producto } } = await pizzaApi.get(`/productos/${p}`);

                productosMap.filter(prod => {
                    if (prod && producto) {
                        return (prod._id === producto._id)
                            ? productosMap.splice(productosMap.indexOf(prod), 1)
                            : undefined;
                    }
                });

                productosMap.push(producto);
            }
        })
    }, [])



    return (
        <div
            id={`menu${nombre}`}
            className='hidden'
        >
            <h4 id={`title${nombre}`} style={styles.title}>{titulo}</h4>

            <div id={`container${nombre}`} className='containerMenuItems' style={styles.itemMenuContainer}>
                {
                    productosMap.map(p => (
                        (p) && (
                            <>
                                <CardComponent
                                    key={p._id}
                                    productoID={p._id}
                                    nombre={p.nombre}
                                    imagen={p.imagen}
                                    descripcion={p.descripcion}
                                    precio={p.precio}
                                    fromMenu={true}
                                />
                            </>
                        )
                    ))
                }
            </div>
        </div>
    )
}


const styles = {
    title: {
        textAlign: 'center' as 'center',
        fontWeight: 'bold',
        fontSize: '30px',
        marginTop: '20px',
        padding: '0 10px',
        letterSpacing: '1px',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
    },
    itemMenuContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap' as 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '30px',
        marginBottom: '60px',
        padding: '20px 0',
    }
}