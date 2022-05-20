import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import 'animate.css';
import { useAnimation } from '../../hooks/useAnimation';
import { ChangeTheme } from '../../helpers/changeTheme';


interface Props {
    img: string;
    item: string;
}

export const AcompañamientoCard = ({ img, item }: Props) => {

    ChangeTheme({
        id: [`acompañamientoCard${item}`],
        is: 'card'
    });

    useAnimation({
        element: [`acompañamientoCard${item}`],
        name: ['animate__bounceInRight']
    });


    return (
        <div id={`acompañamientoCard${item}`} style={styles.cardPromotion}>
            <img style={styles.cardPromotionImg} src={img} />
            <div style={styles.cardPromotionInfo}>
                <p
                    className='titleCard'
                    style={{
                        fontSize: '25px',
                        marginTop: '5px',
                        color: 'rgb(145, 14, 14)',
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    Unas papas a la francesa
                </p>
                <p
                    style={{
                        fontSize: '18px',
                        padding: '0 15px'
                    }}
                >
                    ¡250g de papas a la francesa con la opción de agregar 50g con solo $25!
                </p>
            </div>

            <div style={styles.containerLink}>
                <button
                    style={styles.buttonCardPromotion}
                    onClick={() => console.log('Botón')}
                >
                    Agregar al carrito
                </button>
                <FontAwesomeIcon
                    icon={solid('arrow-right')}
                    style={styles.iconCardPromotion}
                />
            </div>
        </div>
    )
}

const styles = {
    cardPromotion: {
        alignItems: 'center',
        border: '1px solid rgba(0, 0, 0, 0.5)',
        borderRadius: '5px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 30%)',
        color: 'black',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        padding: '10px',
        width: '30%',
        borderTop: '15px solid rgba(145, 14, 14)',
        opacity: 0,
        minWidth: '300px',
        margin: '20px',
        backgroundColor: '#fff',
    },
    cardPromotionImg: {
        width: '90%',
        maxHeight: '200px',
        borderRadius: '5px',
        marginTop: '10px'
    },
    cardPromotionInfo: {
        textAlign: 'center' as 'center',
    },
    containerLink: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: '0 10px',
        alignItems: 'center',
        cursor: 'pointer',
        marginTop: '5px'
    },
    buttonCardPromotion: {
        borderRadius: '3px',
        backgroundColor: 'transparent',
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        fontSize: '20px',
        border: '0px solid transparent',
        padding: '5px',
    },
    iconCardPromotion: {
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        fontSize: '20px',
    }

}