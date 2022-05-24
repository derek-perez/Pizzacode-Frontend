import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import 'animate.css';
import { ChangeTheme } from '../../helpers/changeTheme';


interface Props {
    inlineStyles?: Object;
    shoppingCart?: boolean;
    fromMenu?: boolean;
    index?: string;
}


export const CardComponent = ({ inlineStyles = {}, shoppingCart, fromMenu, index }: Props) => {

    ChangeTheme({
        id: [
            `cardComponent${index}`,
        ], is: 'card'
    });

    ChangeTheme({
        id: [
            `titleCardComponent${index}`,
            `priceCardComponent${index}`
        ], is: 'title'
    });

    const url = window.location.host; 


    return (
        <div
            id={`cardComponent${index}`}
            className={shoppingCart ? 'cartItem' : 'cardComponent'}
            style={{
                ...styles.cardComponent,
                ...inlineStyles
            }}
        >
            <img
                style={styles.cardComponentImg}
                src={url === 'chugus.github.io' ? './Pizzacode-Frontend/assets/topRated2.jpg' : '../../assets/topRated2.jpg'}
            />
            <div style={styles.cardComponentInfo}>
                <p
                    id={`titleCardComponent${index}`}
                    style={{
                        fontSize: '25px',
                        marginTop: '5px',
                        color: 'rgb(145, 14, 14)',
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    Pizza hawaiana
                </p>

                {
                    (fromMenu) && (
                        <p
                            style={{
                                fontSize: '15px',
                                padding: '0 15px'
                            }}
                        >
                            Una pizza hecho con una base de queso y una salsa de tomate, con una combinación de ingredientes que te harán sentir como en casa.
                            Y una base de jamón y piña
                        </p>
                    )
                }
            </div>

            <div style={{ textAlign: 'center' }}>
                {
                    (shoppingCart) && (
                        <div style={styles.addProduct}>
                            <span style={styles.buttonAddProduct}>-</span>
                            <span style={styles.numberCuantity}>1</span>
                            <span style={styles.buttonAddProduct}>+</span>
                        </div>
                    )
                }

                {
                    (fromMenu) && (
                        <p
                            id={`priceCardComponent${index}`}
                            style={{
                                fontSize: '20px',
                                marginTop: '5px',
                                color: 'rgb(145, 14, 14)',
                                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            $200
                        </p>
                    )
                }
            </div>

            {
                (fromMenu) && (
                    <div style={styles.containerLink}>
                        <button
                            style={styles.buttonCardComponent}
                            onClick={() => console.log('Botón')}
                        >
                            Agregar al carrito
                        </button>
                        <FontAwesomeIcon
                            icon={solid('arrow-right')}
                            style={styles.iconCardComponent}
                        />
                    </div>
                )
            }
        </div>
    )
}

const styles = {
    cardComponent: {
        minWidth: '350px',
        backgroundColor: 'white',

        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        border: '1px solid rgba(0, 0, 0, 0.5)',
        borderTop: '15px solid rgba(145, 14, 14)',
        borderRadius: '10px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 90%)',

        marginRight: '25px',
        marginBottom: '25px',
        padding: '10px',

        color: 'black',
    },
    cardComponentImg: {
        width: '90%',
        maxHeight: '200px',
        borderRadius: '5px',
        marginTop: '10px'
    },
    cardComponentInfo: {
        textAlign: 'center' as 'center',
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

    containerLink: {
        width: '90%',

        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgb(145, 14, 14)',

        padding: '5px 10px',
        margin: '15px 0',
        borderRadius: '5px',

        cursor: 'pointer',
    },
    buttonCardComponent: {
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        color: 'white',

        borderRadius: '3px',
        border: '0px solid transparent',
        padding: '5px',
    },
    iconCardComponent: {
        color: 'white',
        fontWeight: 'bold',
    }

}