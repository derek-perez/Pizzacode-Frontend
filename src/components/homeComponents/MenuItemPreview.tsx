import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import 'animate.css';
import { useAnimation } from '../../hooks/useAnimation';
import { ChangeTheme } from '../../helpers/changeTheme';


interface Props {
    img: string;
    item: string;
}

export const MenuItemPreview = ({ img, item }: Props) => {

    ChangeTheme({
        id: [`menuItemCard${item}`],
        is: 'card'
    });

    useAnimation({
        element: [`menuItemCard${item}`],
        name: ['animate__bounceInLeft']
    });


    return (
        <div id={`menuItemCard${item}`} style={styles.menuItemPreview}>
            <img style={styles.menuItemPreviewImg} src={img} />
            <div style={styles.menuItemPreviewInfo}>
                <p
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

            <div style={styles.containerLink}>
                <button
                    style={styles.buttonMenuItemPreview}
                    onClick={() => console.log('Botón')}
                >
                    Ir a comprar
                </button>

                <FontAwesomeIcon
                    icon={solid('arrow-right')}
                    style={styles.iconMenuItemPreview}
                />
            </div>
        </div>
    )
}

const styles = {
    menuItemPreview: {
        alignItems: 'center',
        border: '1px solid rgba(0, 0, 0, 0.5)',
        borderRadius: '5px',
        borderTop: '15px solid rgba(145, 14, 14)',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 30%)',
        color: 'black',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        padding: '10px',
        width: '30%',
        opacity: 0,
        minWidth: '300px',
        margin: '20px',
        backgroundColor: '#fff',
    },
    menuItemPreviewImg: {
        width: '90%',
        maxHeight: '200px',
        borderRadius: '5px',
        marginTop: '10px'
    },
    menuItemPreviewInfo: {
        textAlign: 'center' as 'center',
    },
    pizzasList: {
        padding: '0',
        margin: '0',
        fontSize: '18px',
        color: 'rgb(145, 14, 14)',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
    },
    containerLink: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: '0 10px',
        alignItems: 'center',
        cursor: 'pointer',
        marginTop: '5px',
        alignSelf: 'bottom'
    },
    buttonMenuItemPreview: {
        borderRadius: '3px',
        backgroundColor: 'transparent',
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        fontSize: '20px',
        border: '0px solid transparent',
        padding: '5px',
    },
    iconMenuItemPreview: {
        color: 'rgb(145, 14, 14)',
        fontWeight: 'bold',
        fontSize: '20px',
    }

}