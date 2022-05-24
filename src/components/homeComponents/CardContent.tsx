import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { useAnimation } from '../../hooks/useAnimation';
import { ChangeTheme } from '../../helpers/changeTheme';

import 'animate.css';


interface Props {
    whatIs: string;
    item: string;
}

export const CardContent = ({ whatIs, item }: Props) => {

    const [description, setDescription] = useState('');

    useEffect(() => {

        if (whatIs === 'promotion') {
            setDescription('¡2 pizzas grandes de hasta 2 ingredientes por $299!');
        } else if (whatIs === 'acompañamiento') {
            setDescription('¡250g de papas a la francesa con la opción de agregar 50g con solo $25!');
        } else if (whatIs === 'topRated') {
            setDescription('Esta pizzas está hecha con ingredientes de calidad y con una preparación de calidad. ¿Quiéres saber los ingredientes?');
        }

    }, [])


    ChangeTheme({
        id: [`card${item}`],
        is: 'card'
    });

    ChangeTheme({
        id: [
            `titleCard${item}`,
            `titleMenuItem${item}`
        ],
        is: 'title'
    });

    useAnimation({
        element: [`card${item}`],
        name: ['animate__fadeIn']
    });


    return (
        <div id={`card${item}`} style={styles.cardPromotion}>
            <img style={styles.cardPromotionImg} src='../assets/topRated2.jpg' />
            {
                (whatIs !== 'menuItemPreview') && (
                    <div style={styles.cardPromotionInfo}>
                        <p
                            id={`titleCard${item}`}
                            className='titleCard'
                            style={{
                                fontSize: '25px',
                                marginTop: '5px',
                                color: 'rgb(145, 14, 14)',
                                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            2 Pizzas grandes
                        </p>
                        <p
                            style={{
                                fontSize: '16px',
                                padding: '0 15px'
                            }}
                        >
                            {description}
                        </p>
                    </div>
                )
            }

            {
                (whatIs === 'promotion') && (
                    <p
                        id={`oferta${item}`}
                        style={styles.oferta}
                    >
                        05:15:15
                    </p>
                )
            }

            {
                (whatIs === 'menuItemPreview') && (
                    <div style={styles.menuItemPreviewInfo}>
                        <p
                            id={`titleMenuItem${item}`}
                            className='titleCard'
                            style={{
                                fontSize: '25px',
                                marginTop: '5px',
                                color: 'rgb(145, 14, 14)',
                                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            Pizzas
                        </p>
                        <ul style={styles.pizzasList}>
                            <li>Hawaiana</li>
                            <li>Pepperoni</li>
                            <li>Mexicana</li>
                            <li>Italiana</li>
                            <li>4 quesos</li>
                            <li>Vegetariana</li>
                        </ul>
                    </div>
                )
            }

            <div style={styles.containerLink}>
                <button
                    style={styles.buttonCardPromotion}
                >
                    Aprovechar oferta
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
        width: '30%',
        minWidth: '300px',
        backgroundColor: '#fff',

        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        border: '1px solid rgba(0, 0, 0, 0.5)',
        borderTop: '15px solid rgba(145, 14, 14)',
        borderRadius: '10px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 30%)',
        
        margin: '20px',
        padding: '10px',
        
        color: 'black',
        opacity: 0,
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
    oferta: {
        fontSize: '18px',
        color: 'rgb(145, 14, 14)',
        marginBottom: '0'
    },

    menuItemPreviewInfo: {
        textAlign: 'center' as 'center',
    },
    pizzasList: {
        padding: '0',
        margin: '0',
        fontSize: '16px',
        color: 'rgb(145, 14, 14)',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
    },

    containerLink: {
        width: '90%',

        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgb(145, 14, 14)',
        
        padding: '0 10px',
        margin: '15px 0',
        borderRadius: '5px',
        
        cursor: 'pointer',
    },
    buttonCardPromotion: {
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        color: 'white',
        
        borderRadius: '3px',
        border: '0px solid transparent',
        padding: '5px',
    },
    iconCardPromotion: {
        color: 'white',
        fontWeight: 'bold',
    }

}