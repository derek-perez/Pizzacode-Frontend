import { ChangeTheme } from "../../helpers/changeTheme"


export const ReceiptComponent = ({index}: {index: string}) => {
    
    ChangeTheme({
        id: [
            `receipt${index}`,
        ], is: 'div'
    });

    ChangeTheme({
        id: [
            `precio1${index}`,
            `precio${index}`,
            `precioTotal${index}`,
        ], is: 'title'
    })

    return (
        <div id={`receipt${index}`} style={styles.receipt}>
            <div style={styles.receiptHeader}>
                <h3 style={styles.receiptTitle}>Pago de cuota</h3>
                <p style={styles.receiptDate}>12/12/2020</p>
            </div>

            <div style={styles.receiptBody}>
                <div style={styles.itemBody}>
                    <p style={styles.itemProduct}>Producto: 2 Pizza hawaiana</p>
                    <p id={`precio1${index}`} style={styles.itemTotal}>$300.00</p>
                </div>
                <div style={styles.itemBody}>
                    <p style={styles.itemProduct}>Producto: 2 Pizza pepperonni</p>
                    <p id={`precio${index}`} style={styles.itemTotal}>$300.00</p>
                </div>

                <div style={{
                    ...styles.itemBody,
                    marginTop: '35px',
                    borderTop: '1px solid rgb(145, 14, 14)',
                    paddingTop: '10px'
                }}>
                    <p style={styles.itemProduct}>Total:</p>
                    <p id={`precioTotal${index}`} style={styles.itemTotal}>$600.00</p>
                </div>
            </div>

        </div>
    )
}


const styles = {
    receipt: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        margin: '15px',
        padding: '20px',
        border: '1px solid rgb(0, 0, 0, 30%)',
        borderRadius: '5px',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
        minWidth: '390px'
    },
    receiptHeader: {
        borderBottom: '1px solid rgb(145, 14, 14)',
        width: '100%',
        marginBottom: '25px',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'center' as 'center'
    },
    receiptTitle: {},
    receiptDate: {},

    receiptBody: {
        width: '100%'
    },
    itemBody: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        alignItems: 'center' as 'center',
        width: '100%',
        padding: '5px'
    },
    itemProduct: {
        margin: '0'
    },
    itemTotal: {
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        margin: '0'
    }
}