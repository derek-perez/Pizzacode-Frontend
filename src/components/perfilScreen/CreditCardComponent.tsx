

export const CreditCardComponent = () => {

    const url = window.location.host;

    return (
        <div style={styles.card}>
            <div style={styles.topCard}>
                <p style={styles.titleCard}>Visa</p>
                <p style={styles.titleCard}>Banco de "no sé donde"</p>
            </div>

            <img
                src={url === 'chugus.github.io' ? './Pizzacode-Frontend/assets/chip-card.png' : '../../assets/chip-card.png'}
                style={styles.chipImg}
            />

            <p style={styles.cardNumber}>1234 &nbsp;&nbsp; 5678 &nbsp;&nbsp; 9012 &nbsp;&nbsp; 3456</p>
            <div style={styles.sectionCardNumbers}>
                <span style={{ margin: '5px 0' }}>1234</span>
                <span style={{ margin: '5px 0' }}>01/23</span>
            </div>
            <p>Derek Josué Pérez Téllez</p>
        </div>
    )
}


const styles = {
    card: {
        border: 'none',
        borderRadius: '5px',
        padding: '20px',
        margin: '20px',
        display: 'flex',
        width: '45%',
        minWidth: '400px',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between' as 'space-between',
        backgroundImage: 'url(../../assets/textura.png)',
        backgroundColor: 'rgba(145,14,14,0.9)',
        height: '260px',
        color: 'white',
        fontSize: '18px',
        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.5)'
    },
    titleCard: {
        fontSize: '20px',
        fontWeight: 'bold' as 'bold'
    },

    topCard: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'center' as 'center'
    },

    chipImg: {
        width: '65px',
        marginTop: '20px'
    },
    cardNumber: {
        width: '100%',
        letterSpacing: '2px',
        fontSize: '23px',
        marginBottom: '0'
    },
    sectionCardNumbers: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around' as 'space-around',
        alignItems: 'left' as 'left',
        fontSize: '17px'
    }
}