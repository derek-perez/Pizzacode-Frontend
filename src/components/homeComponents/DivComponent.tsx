import { ChangeTheme } from "../../helpers/changeTheme";
import { useAnimation } from "../../hooks/useAnimation";
import { ItemContent } from "./ItemContent"


export const DivComponent = ({ categoria }: any) => {

    ChangeTheme({
        id: [
            `${categoria.nombre}Container`
        ], is: 'div'
    });
    ChangeTheme({
        id: [
            `${categoria.nombre}Title`
        ], is: 'title'
    });

    // Animaciones
    useAnimation({
        element: [
            `${categoria.nombre}Title`
        ],
        name: ['animate__flipInY']
    });

    return (
        <div
            key={categoria._id}
            id={`${categoria.nombre}Container`}
            style={styles.container}
        >
            <h2 id={`${categoria.nombre}Title`} style={styles.title}>{categoria.titulo}</h2>

            <div style={styles.cards}>
                {
                    (categoria.productos) && (
                        categoria.productos.map((producto: any) => (
                            <ItemContent key={producto} productoID={producto} />
                        ))
                    )
                }
            </div>
        </div>

    )
}


const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: '30px 50px 0 50px',
        marginTop: '50px'
    },
    title: {
        letterSpacing: '1px',
        fontWeight: 'bold',
        color: 'rgb(145, 14, 14)',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
        marginBottom: '30px',
        opacity: 0,
        textAlign: 'center' as 'center'
    },
    cards: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap' as 'wrap',
        justifyContent: 'space-around',
        margin: '0 auto',
        paddingBottom: '50px',
        borderBottom: '3px solid rgb(145, 14, 14)',
    }
}