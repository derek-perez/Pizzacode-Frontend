

export const CardCheckout = ({ inlineStyles }: { inlineStyles?: object }) => {

    return (
        <div style={{
            ...styles.cardProduct,
            ...(inlineStyles) ? inlineStyles: ''
        }}>
            <div style={styles.cardImgTitle}>
                <img src='../../assets/topRated2.jpg' style={styles.imgProduct} />
                <h3 style={styles.infoTitle}>Pizza hawaiana</h3>
            </div>
            <div className='cardProductInfo' style={styles.cardProductInfo}>
                <p style={styles.infoProductDesc}>
                    Una pizza hecho con una base de queso y una salsa de tomate, con una combinación de ingredientes que te harán sentir como en casa.
                    Y una base de jamón y piña
                </p>
                <div style={styles.addProduct}>
                    <span style={styles.buttonAddProduct}>-</span>
                    <span style={styles.numberCuantity}>1</span>
                    <span style={styles.buttonAddProduct}>+</span>
                </div>
                <strong>$150.00</strong>
            </div>
        </div>
    )
}


const styles = {
    cardProduct: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'flex-start' as 'flex-start',
        width: '100%',
        borderTop: '1px solid rgb(145, 14, 14)',
        padding: '20px',
        margin: '10px 0'
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
        borderRadius: '5px'
    },
    cardProductInfo: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        alignItems: 'flex-end' as 'flex-end',
        width: '100%',
        padding: '0 10px'
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