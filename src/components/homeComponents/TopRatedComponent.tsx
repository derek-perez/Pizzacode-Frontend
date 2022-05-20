import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import 'animate.css';
import { useAnimation } from '../../hooks/useAnimation';
import { ChangeTheme } from '../../helpers/changeTheme';


interface Props {
    img: string;
    item: string;
}

export const TopRatedComponent = ({ img, item }: Props) => {

    ChangeTheme({
        id: [`topRated${item}`],
        is: 'card'
    });

    useAnimation({
        element: [`topRated${item}`],
        name: ['animate__bounceInLeft']
    });


    return (
        <div id={`topRated${item}`} style={styles.cardTopRated}>
            <img style={styles.cardTopRatedImg} src={img} />
            <div style={styles.cardTopRatedInfo}>
                <p
                    className='titleCard'
                    style={{
                        fontSize: '25px',
                        marginTop: '5px',
                        color: 'rgb(145, 14, 14)',
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    Pizza hawaiana
                </p>
                <p
                    style={{
                        fontSize: '18px',
                        padding: '0 15px'
                    }}
                >
                    Esta pizza tiene piña, jamón, tocico y algo más...
                </p>
            </div>

            <div style={styles.containerLink}>
                <button
                    style={styles.buttonCardTopRated}
                    onClick={() => console.log('Botón')}
                >
                    Agregar al carrito
                </button>
                <FontAwesomeIcon
                    icon={solid('arrow-right')}
                    style={styles.iconCardTopRated}
                />
            </div>
        </div>
    )
}

const styles = {
    cardTopRated: {
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
    cardTopRatedImg: {
        width: '90%',
        maxHeight: '200px',
        borderRadius: '5px',
        marginTop: '10px'
    },
    cardTopRatedInfo: {
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
    buttonCardTopRated: {
        borderRadius: '3px',
        backgroundColor: 'transparent',
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        fontSize: '20px',
        border: '0px solid transparent',
        padding: '5px',
    },
    iconCardTopRated: {
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        fontSize: '20px',
    }

}