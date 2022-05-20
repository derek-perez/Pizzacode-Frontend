
interface Props {
    imgCarousel: string;
    active?: string;
}


export const ItemCarousel = ({ imgCarousel, active }: Props) => {
    return (
        <div
            className={`carousel-item ${active ? 'active' : ''}`}
            style={{
                ...styles.itemCarousel,
                maxHeight: '550px'
            }}
        >

            <img
                style={styles.imgCarousel}
                src={imgCarousel}
                className="d-block w-100"
                alt="Imágen del carrusel"
            />

            <div className='textItemCarousel' style={styles.containerInfo}>
                <h2 className='titleItemCarousel' style={styles.welcome}>¡Bienvenido a Pizzacode!</h2>
                <h2 className='subtitleItemCarousel' style={styles.titleCarousel}>
                    ¡Ven y prueba lo que tenemos para ofrecerte!
                </h2>
                <p className='paragraphItemCarousel' style={styles.spanCarousel}>
                    Nuestro principal objetivo es darte el mejor servicio.
                </p>
            </div>
        </div>
    )
}


const styles = {
    itemCarousel: {
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    imgCarousel: {
        opacity: 0.25,
        maxHeight: '100%',
        overflow: 'hidden',
    },
    containerInfo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute' as 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    welcome: {
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
        marginBottom: '30px',
        textAlign: 'center' as 'center',
        textTransform: 'uppercase' as 'uppercase',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
    },
    titleCarousel: {
        color: 'white',
        fontWeight: 'bold',
        textShadow: '2px 2px 5px rgb(0, 0, 0, 0.8)',
        fontSize: '30px',
        textAlign: 'center' as 'center',
    },
    spanCarousel: {
        color: 'white',
        fontSize: '25px',
        textAlign: 'center' as 'center',
        zIndex: 100,
        textShadow: '2px 2px 5px rgb(0, 0, 0, 0.8)'
    }
}